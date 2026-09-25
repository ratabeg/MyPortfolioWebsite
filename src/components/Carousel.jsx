import { Children, useId, useRef, useState } from 'react';
import style from './Carousel.module.css';

export default function Carousel({ children }) {
  const items = Children.toArray(children);
  const [selected, setSelected] = useState(0);
  const active = Math.min(selected, Math.max(0, items.length - 1));
  const trackId = useId();
  const touch = useRef(null);
  const move = (step) => setSelected((active + step + items.length) % items.length);

  if (!items.length) return null;

  return (
    <div
      className={style.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input, textarea, select, [contenteditable]')) return;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          move(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
    >
      <div
        className={style.viewport}
        id={trackId}
        onTouchStart={(event) => {
          const point = event.touches[0];
          touch.current = event.touches.length === 1 ? { x: point.clientX, y: point.clientY } : null;
        }}
        onTouchCancel={() => { touch.current = null; }}
        onTouchEnd={(event) => {
          if (!touch.current) return;
          const point = event.changedTouches[0];
          const dx = point.clientX - touch.current.x;
          const dy = point.clientY - touch.current.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
          touch.current = null;
        }}
      >
        <div className={style.track} style={{ transform: `translateX(-${active * 100}%)` }}>
          {items.map((child, index) => (
            <div
              key={child.key ?? index}
              className={style.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
              aria-hidden={index !== active}
              inert={index !== active}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {items.length > 1 && (
        <div className={style.controls}>
          <button type="button" className={style.arrow} aria-label="Previous project" aria-controls={trackId} onClick={() => move(-1)}>←</button>
          <div className={style.dots} aria-label="Choose a project">
            {items.map((child, index) => (
              <button
                key={child.key ?? index}
                type="button"
                className={style.dot}
                aria-label={`Show project ${index + 1}: ${child.props.title ?? 'Project'}`}
                aria-current={index === active ? 'true' : undefined}
                aria-controls={trackId}
                onClick={() => setSelected(index)}
              ><span /></button>
            ))}
          </div>
          <button type="button" className={style.arrow} aria-label="Next project" aria-controls={trackId} onClick={() => move(1)}>→</button>
        </div>
      )}
      <p className={style.status} aria-live="polite" aria-atomic="true">
        {active + 1} / {items.length} · {items[active].props.title ?? 'Project'}
      </p>
    </div>
  );
}
