import { useEffect, useRef, useState } from 'react';
import styles from './ClickEffects.module.css';

export default function ClickEffects() {
  const [bursts, setBursts] = useState([]);
  const nextId = useRef(0);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const clear = () => setBursts([]);
    const onClick = (event) => {
      if (motion.matches || event.button !== 0) return;
      const target = event.target instanceof Element ? event.target : null;
      if (!target || target.closest('input, textarea, select, [contenteditable], :disabled, [aria-disabled="true"]')) return;

      let x = event.clientX;
      let y = event.clientY;
      // Keyboard activation has no pointer position: celebrate at the control.
      if (event.detail === 0) {
        const control = target.closest('a, button, [role="button"]');
        if (!control) return;
        const rect = control.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }

      const burst = { id: nextId.current++, x, y };
      setBursts((current) => [...current.slice(-7), burst]);
    };

    document.addEventListener('click', onClick, true);
    motion.addEventListener('change', clear);
    return () => {
      document.removeEventListener('click', onClick, true);
      motion.removeEventListener('change', clear);
    };
  }, []);

  return (
    <div className={styles.layer} aria-hidden="true">
      {bursts.map(({ id, x, y }) => (
        <span
          key={id}
          className={styles.burst}
          style={{ left: x, top: y }}
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget) {
              setBursts((current) => current.filter((burst) => burst.id !== id));
            }
          }}
        >
          <span className={styles.ring} />
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className={styles.spark} style={{ '--angle': `${index * 60}deg` }} />
          ))}
        </span>
      ))}
    </div>
  );
}
