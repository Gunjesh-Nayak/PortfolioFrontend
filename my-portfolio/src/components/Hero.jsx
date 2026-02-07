import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown, Instagram } from "lucide-react";

const Hero = () => {
  const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gunjesh-nayak",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/Gunjesh-Nayak",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/gunjesh_nyk",
    label: "Instagram",
  },
];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
                 bg-black text-white overflow-hidden px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent_70%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2
                        rounded-full bg-white/10 border border-white/10
                        text-sm text-gray-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          Available for opportunities
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 poppins-regular">
          Hi, I'm {" "}
          <span className="bg-gradient-to-r from-violet-400 to-purple-600
                           bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.8)]">
            Gunjesh Nayak
          </span>
        </h1>
          <p className="text-white/80 text-lg md:text-xl poppins-regular">Computer Science Enthusiast</p>
{/* someone deeply passionate about technology, software development, and computing principles, often going beyond basic usage to explore, tweak, and understand the "ins and outs" of systems */}
        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Passionate about building beautiful web experiences with{" "}
          <span className="text-violet-400">React</span>,{" "}
          <span className="text-violet-400">JavaScript</span>, and modern
          technologies. Also skilled in{" "}
          <span className="text-violet-400">C</span>,{" "}
          <span className="text-violet-400">C++</span>, and{" "}
          <span className="text-violet-400">Python</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-violet-600
                       text-white font-medium flex items-center gap-2
                       hover:bg-violet-700 transition
                       shadow-[0_10px_40px_rgba(139,92,246,0.5)]"
          >
            View My Work
            <ArrowDown size={18} />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-white text-black
                       font-medium hover:bg-gray-200 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-16">
  {socials.map(({ icon: Icon, href, label }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-12 h-12 rounded-full
        bg-white/10 backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        text-gray-300
        hover:text-white
        hover:bg-violet-500/30
        hover:scale-110
        transition-all duration-300
      "
    >
      <Icon size={22} />
    </a>
  ))}
</div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-violet-400">3+</p>
            <p className="text-gray-400 text-sm mt-1">
              Projects Completed
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-violet-400">5+</p>
            <p className="text-gray-400 text-sm mt-1">
              Technologies
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-violet-400">1+</p>
            <p className="text-gray-400 text-sm mt-1">
              Years Learning
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                      flex flex-col items-center gap-2 text-gray-400">
        <div className="w-5 h-9 rounded-full border border-white/40
                        flex justify-center">
          <span className="w-1 h-2 bg-purple-500 rounded-full mt-2 animate-bounce"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
