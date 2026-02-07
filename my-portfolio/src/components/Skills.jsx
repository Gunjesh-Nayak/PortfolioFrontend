import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Skills = () => {
  const skillsRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.from(".skills-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".skills-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".skill-group",
          {
            y: 50,
            opacity: 0,
            duration: 0.9,
            stagger: 0.25,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    { scope: skillsRef }
  );

  const SkillPill = ({ name, color }) => (
    <motion.span
      whileHover={{
        y: -6,
        rotate: -1,
        boxShadow: "0 15px 50px rgba(139,92,246,0.35)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`px-6 py-3 rounded-xl text-sm font-medium cursor-default
                  ${color} mt-1
                  shadow-[0_6px_24px_rgba(0,0,0,0.45)]`}
    >
      {name}
    </motion.span>
  );

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="px-6 md:px-20 py-40 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="skills-header text-4xl md:text-5xl font-bold">
            My <span className="text-violet-400">Skills</span>
          </h2>
          <p className="skills-subtitle mt-4 text-gray-400 text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* PROGRAMMING LANGUAGES */}
        <div className="skill-group mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            <SkillPill name="C" color="bg-blue-600" />
            <SkillPill name="C++" color="bg-blue-700" />
            <SkillPill name="Python" color="bg-yellow-500 text-black" />
            <SkillPill name="JavaScript" color="bg-yellow-400 text-black" />
          </div>
        </div>

        {/* FRONTEND */}
        <div className="skill-group mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Frontend Development
          </h3>
          <div className="flex flex-wrap gap-4">
            <SkillPill name="React" color="bg-cyan-500 text-black" />
            <SkillPill name="HTML5" color="bg-orange-500" />
            <SkillPill name="CSS3" color="bg-blue-500" />
            <SkillPill name="Tailwind CSS" color="bg-teal-500 text-black" />
          </div>
        </div>

        {/* TOOLS */}
        <div className="skill-group mb-20">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-4">
            <SkillPill name="Git" color="bg-orange-600" />
            <SkillPill name="VS Code" color="bg-blue-600" />
            <SkillPill name="GitHub" color="bg-neutral-800 border border-white/10" />
            <SkillPill name="npm" color="bg-red-600" />
          </div>
        </div>

        {/* FOOT NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-gray-500 text-xl poppins-regular"
        >
          Always learning and adding new skills to my toolkit ✨
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
