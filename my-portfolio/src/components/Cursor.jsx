import { useEffect, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    document.querySelectorAll("[data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", () => setText(el.dataset.cursor));
      el.addEventListener("mouseleave", () => setText(""));
    });

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
    });
  }, []);

  return (
    <div className="cursor fixed top-0 left-0 z-[9999] pointer-events-none">
      <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-xs">
        {text}
      </div>
    </div>
  );
};

export default Cursor;
