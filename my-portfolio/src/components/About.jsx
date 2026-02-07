import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import photo from "../assets/react.jpeg";
import {
  MapPin,
  Calendar,
  Code2,
  Download,
} from "lucide-react";

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: aboutRef }
  );

  return (
    <section
      id="about"
      ref={aboutRef}
      className="px-6 md:px-20 py-40 bg-black text-white"
    >
      <div className="text-6xl font-bold mb-6">About <span className="text-violet-600">Me</span></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT – PHOTO CARD */}
        <div className="about-item relative">
          <div className="rounded-3xl bg-neutral-900 border border-white/10 p-10
                          shadow-[0_0_80px_rgba(139,92,246,0.35)]">
            
            <img src={photo} className="w-full h-1/2 object-contain object-center rounded-2xl" alt="" />
          </div>

          {/* Open to Work Badge */}
          <span className="absolute -bottom-5 right-8 px-5 py-2 rounded-xl
                           bg-violet-600 text-white text-sm font-medium shadow-lg">
            Open to Work
          </span>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="poppins-regular">
          <h2 className="about-item text-4xl md:text-5xl font-bold mb-6">
            Passionate Developer & Problem Solver
          </h2>

          <div className="about-item text-gray-400 text-lg leading-relaxed max-w-2xl">
            <p>
              I’m a dedicated web developer with a strong foundation in
              programming languages including C, C++, Python, JavaScript,
              and React. I love building beautiful, functional web
              applications that solve real problems.
            </p>

            <p className="mt-6">
             My journey began with learning the fundamentals of programming, sparking a strong interest in problem-solving and web development. I value clean code, modern technologies, and continuous learning.
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="about-item grid gap-6 mt-10 md:grid-cols-3">

  {/* Location */}
  <div className="
    flex items-start gap-4 p-5 rounded-2xl
    bg-white/5 backdrop-blur-xl
    border border-white/15
    shadow-lg shadow-black/20
    hover:bg-white/10
    hover:border-violet-400/30
    transition-all duration-300
  ">
    <MapPin className="text-violet-400 mt-1" size={22} />
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-400">
        Location
      </p>
      <p className="font-medium text-gray-200 leading-snug pt-3">
        Raipur, Chhattisgarh<br />
        India
      </p>
    </div>
  </div>

  {/* Experience */}
  <div className="
    flex items-start gap-4 p-5 rounded-2xl
    bg-white/5 backdrop-blur-xl
    border border-white/15
    shadow-lg shadow-black/20
    hover:bg-white/10
    hover:border-violet-400/30
    transition-all duration-300
  ">
    <Calendar className="text-violet-400 mt-1" size={22} />
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-400">
        Experience
      </p>
      <p className="font-medium text-gray-200 pt-5">
        1+ Years learning
      </p>
    </div>
  </div>

  {/* Specialty */}
  <div className="
    flex items-start gap-4 p-5 rounded-2xl
    bg-white/5 backdrop-blur-xl
    border border-white/15
    shadow-lg shadow-black/20
    hover:bg-white/10
    hover:border-violet-400/30
    transition-all duration-300
  ">
    <Code2 className="text-violet-400 mt-1" size={22} />
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-400">
        Specialty
      </p>
      <p className="font-medium text-gray-200 pt-5">
        Web Development
      </p>
    </div>
  </div>

</div>

          {/* WHAT DRIVES ME */}
          <div className="about-item mt-12">
            <h3 className="text-lg font-semibold mb-4">
              What Drives Me
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Problem Solving",
                "Open Source",
                "Learning New Tech",
                "Building Projects",
              ].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 rounded-full text-sm
                             bg-neutral-900 border border-white/10
                             text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="about-item mt-12">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-4
                         rounded-xl bg-violet-600 text-white font-medium
                         hover:bg-violet-700 transition
                         shadow-[0_10px_40px_rgba(139,92,246,0.4)]"
            >
              <Download size={24} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
