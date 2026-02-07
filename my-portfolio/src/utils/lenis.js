import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initLenis = () => {
    const lenis = new Lenis({
        duration: 1.5,          // smoothness
        easing: (t) => 1 - Math.pow(1 - t, 3)
        ,
        smoothWheel: true,
        smoothTouch: false,
    });

    // Sync Lenis with GSAP
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 5000);
    });

    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return lenis;
};
