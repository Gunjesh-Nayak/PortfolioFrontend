import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section, footer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({ behavior: "auto" });
};


  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-[4px] sm:py-4 flex justify-between items-center border-b border-gray-500">
        {/* Logo */}
        <div
          onClick={() => handleScroll("home")}
          className="text-white text-4xl font-semibold tracking-wide gradient-text cursor-pointer poppins-regular"
        >
          &lt;Gunjesh/&gt;
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-xl text-gray-200">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative group cursor-pointer"
            >
              <span
                className={`transition ${
                  active === item.id ? "text-white" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>

              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-purple-600 transition-all duration-300
  ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Magnetic>
          <button
            onClick={() => handleScroll("contact")}
            className="hidden md:block px-5 py-2 text-lg rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition"
          >
            Let's Talk
          </button>
        </Magnetic>
      </div>
    </motion.nav>
  );
};

export default Navbar;
