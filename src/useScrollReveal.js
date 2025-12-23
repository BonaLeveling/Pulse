import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal(
  containerRef,
  {
    y = 50,
    opacity = 0,
    duration = 1,
    ease = "power2.out",
    start = "top 80%",
  } = {}
) {
  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children);

    const ctx = gsap.context(() => {
      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            y,
            opacity,
          },
          {
            y: 0,
            opacity: 1,
            duration,
            ease,
            scrollTrigger: {
              trigger: item,
              start,
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, y, opacity, duration, ease, start]);
}
