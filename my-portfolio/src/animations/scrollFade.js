import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollFadeUp = (target, options = {}) => {
  gsap.from(target, {
    y: options.y || 80,
    opacity: 0,
    duration: options.duration || 1,
    ease: options.ease || "power3.out",
    stagger: options.stagger || 0.15,
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      once: true,
    },
  });
};
