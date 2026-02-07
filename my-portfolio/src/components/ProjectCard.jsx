import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, desc, tech, image }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        relative group
        rounded-3xl overflow-hidden
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        hover:border-violet-500/40
      "
    >
      {/* glow */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-violet-500/20 via-transparent to-transparent
          transition-opacity duration-500
          pointer-events-none
        "
      />

      {/* image */}
      <div className="h-48 overflow-hidden border-b border-purple-900">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            scale-105 group-hover:scale-110
            transition-transform duration-700 
          "
        />
      </div>

      {/* content */}
      <div className="relative p-6 space-y-4">
        <h3 className="text-xl font-semibold flex items-center justify-between">
          {title}
          <ArrowUpRight
            size={18}
            className="opacity-0 group-hover:opacity-100 transition"
          />
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed overflow-hidden h-16">
          {desc}
        </p>

        {/* tech */}
        <div className="flex flex-wrap gap-2 pt-2 overflow-hidden h-10.5">
          {tech.map((t) => (
            <span
              key={t}
              className="
                px-3 py-1 rounded-full text-xs
                bg-white/10 text-gray-300
                border border-white/10 justify-center flex items-center
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
