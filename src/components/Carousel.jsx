import { useState } from "react";
import style from "./Carousel.module.css";

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);

  const items = Array.isArray(children) ? children : [children];

  const moveLeft = () => {
    setActive((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const getLevel = (index) => {
    const len = items.length;//lenfth of the projects cards array

    let diff = index - active;

    // wrap forward/backward into shortest path
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;

    return diff;
  };

  return (
    <div className={style.Careasell_Container}>
      <button onClick={moveLeft}>←</button>

      <div className={style.carousel_track}>
        {items.map((child, index) => {
          const level = getLevel(index);

          return (
            <div
              key={index}
              className={`${style.item} ${style["level" + level]}`}
            >
              {child}
            </div>
          );
        })}
      </div>

      <button onClick={moveRight}>→</button>
    </div>
  );
};

export default Carousel;
