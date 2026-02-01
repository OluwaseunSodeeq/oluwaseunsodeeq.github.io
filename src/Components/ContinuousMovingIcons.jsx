import { useEffect, useRef } from "react";
import { skillsets } from "./Skillsets";

export default function ContuinuousMovingIcons() {
  const marqueeRef = useRef(null);
  const doubleSkilssets = [...skillsets, ...skillsets];

  useEffect(() => {
    const marquee = marqueeRef.current;
    let offset = 0;

    const scroll = () => {
      if (marquee) {
        offset -= 1;
        marquee.style.transform = `translateX(${offset}px)`;
        const totalWidth = marquee.scrollWidth / 2;
        if (Math.abs(offset) >= totalWidth) {
          offset = 0;
        }
      }
      requestAnimationFrame(scroll);
    };
    scroll();
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="flex items-center gap-4 md:gap-8 lg:gap-16 whitespace-nowrap will-change-transform mt-6 text-btn-text-color bg-text-color-two"
    >
      {doubleSkilssets.map((each, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex justify-center items-center"
        >
          <span key={i} className="mx-4 inline-block">
            {each.skill}
          </span>
        </div>
      ))}
    </div>
  );
}
