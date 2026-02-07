import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      gsap.from(".footer-item", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // slow ambient glow movement
      gsap.to(".footer-glow", {
        x: 120,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="
        relative px-6 md:px-20 py-28
        bg-gradient-to-b from-black via-[#0b0615] to-black
        border-t border-white/10
        overflow-hidden poppins-regular
      "
    >
      {/* ambient glow */}
      <div
        className="
          footer-glow absolute -top-40 left-1/4
          w-[400px] h-[400px]
          bg-violet-600/25 blur-[160px]
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto space-y-20">
        {/* TOP BRAND BLOCK */}
        <div className="footer-item flex flex-col md:flex-row gap-16 justify-between">
          {/* LEFT */}
          <div className="space-y-4 max-w-md">
            <h3 className="text-4xl font-semibold tracking-wide">
              Gunjesh<span className="text-violet-500">.</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-xl">
              I enjoy building modern, interactive web experiences that combine
              clean design, smooth animations, and solid engineering.
            </p>

            {/* availability */}
            <div
              className="inline-flex items-center gap-2
                            px-4 py-2 rounded-full
                            bg-white/5 border border-white/10
                            text-sm text-gray-300"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>
          </div>

          {/* RIGHT – SOCIALS */}
          <div className="space-y-6">
            <p className="text-sm text-gray-500">Connect with me</p>

            <div className="flex flex-col gap-4">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  href: "mailto:gunjeshnayak@gmail.com",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/gunjesh-nayak",
                },
                {
                  Icon: Github,
                  label: "GitHub",
                  href: "https://github.com/Gunjesh-Nayak",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/gunjesh_nyk",
                },
                {
                  Icon: Facebook,
                  label: "Facebook",
                  href: "https://www.facebook.com/yourusername",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      group flex items-center gap-4
      text-gray-300
      transition-all duration-300
      hover:text-white hover:translate-x-1
    "
                >
                  <span
                    className="
        w-11 h-11 rounded-xl
        flex items-center justify-center
        bg-white/5 border border-white/10
        transition-all duration-300
        group-hover:bg-violet-600/20
        group-hover:border-violet-500/40
        group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]
      "
                  >
                    <Icon size={26} />
                  </span>

                  <span className="tracking-wide">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="footer-item grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "3+", label: "Projects Built" },
            { value: "5+", label: "Technologies" },
            { value: "1+", label: "Years Learning" },
            { value: "∞", label: "Curiosity" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-2xl p-6 text-center
                bg-white/5 border border-white/10
                hover:border-violet-500/40
                hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
                transition
              "
            >
              <p className="text-3xl font-bold text-violet-400">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* FINAL LINE */}
        <div className="footer-item text-center text-gray-500 text-lg flex items-center justify-center gap-2">
          <Sparkles size={20} className="text-violet-400" />
          Crafted with passion & curiosity
        </div>

        {/* COPYRIGHT */}
        <p className="footer-item text-center text-md text-gray-500 mt-0">
          © {new Date().getFullYear()} Gunjesh Nayak. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
