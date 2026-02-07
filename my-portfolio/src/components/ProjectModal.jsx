import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  // lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  // esc to close
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* modal */}
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
    relative z-10 w-full max-w-4xl mx-6
    rounded-3xl
    bg-white/10 backdrop-blur-xl
    border border-white/20
    shadow-[0_40px_120px_rgba(0,0,0,0.8)]
    max-h-[90vh] overflow-hidden
  "
          >
            {/* close */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 z-20
                w-10 h-10 rounded-full
                bg-black/50 border border-white/20
                flex items-center justify-center
                text-white hover:bg-black
              "
            >
              <X size={18} />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* image */}
              <div className="h-[260px] overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* content */}
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold poppins-semibold">{project.title}</h3>

                <p className="text-gray-300 leading-relaxed poppins-regular">{project.desc}</p>

                {/* tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm rounded-full
                     bg-white/10 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* actions */}
                <div className="flex gap-4 pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
            inline-flex items-center gap-2
            px-5 py-3 rounded-xl
            bg-violet-600 hover:bg-violet-700
            transition font-medium
          "
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
            inline-flex items-center gap-2
            px-5 py-3 rounded-xl
            bg-white/10 hover:bg-white/20
            transition font-medium
          "
                    >
                      GitHub <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
