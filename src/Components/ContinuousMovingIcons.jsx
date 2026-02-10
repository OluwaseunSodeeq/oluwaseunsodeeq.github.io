import { useEffect, useRef } from "react";
import { skillsets } from "./Skillsets";

export default function ContinuousMovingIcons() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let start = null;
    let x = 0;
    const speed = 40; // px per second
    const width = track.scrollWidth / 2;

    const animate = (time) => {
      if (!start) start = time;
      const delta = (time - start) / 1000;

      x = -(delta * speed) % width;
      track.style.transform = `translateX(${x}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="overflow-hidden w-full bg-text-color-two py-3 text-blue-text lg:text-xl">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {[...skillsets, ...skillsets].map((each, i) => (
          <span
            key={`${each.skill}-${i}`}
            className="inline-block flex-shrink-0 px-6"
          >
            {each.skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// import { useEffect, useRef } from "react";
// import { skillsets } from "./Skillsets";

// export default function ContuinuousMovingIcons() {
//   const marqueeRef = useRef(null);
//   const doubleSkilssets = [...skillsets, ...skillsets];

//   useEffect(() => {
//     const marquee = marqueeRef.current;
//     let offset = 0;

//     const scroll = () => {
//       if (marquee) {
//         offset -= 1;
//         marquee.style.transform = `translateX(${offset}px)`;
//         const totalWidth = marquee.scrollWidth / 2;
//         if (Math.abs(offset) >= totalWidth) {
//           offset = 0;
//         }
//       }
//       requestAnimationFrame(scroll);
//     };
//     scroll();
//   }, []);

//   return (
//     <div
//       ref={marqueeRef}
//       className="flex items-center gap-4 md:gap-8 lg:gap-16 whitespace-nowrap will-change-transform mt-6 text-btn-text-color bg-text-color-two"
//     >
//       {doubleSkilssets.map((each, i) => (
//         <div
//           key={i}
//           className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex justify-center items-center"
//         >
//           <span key={i} className="mx-4 inline-block">
//             {each.skill}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }
