import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
// import img1 from "../assets/project-preview.avif";

import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern animated portfolio built with React, GSAP, Tailwind and Framer Motion with smooth animations and transitions.This is fully responsive and optimized for performance. It features a clean and intuitive design, showcasing my skills, projects, and experience in a visually appealing way. The website is built with a focus on user experience, ensuring that visitors can easily navigate through the content and learn more about my work.This is fully made by Ai(ChatGPT-4) and I have added some custom animations and design ideas with lovable Ai to make it unique and personalized.",
    tech: ["React", "GSAP", "TailwindCSS", "Framer Motion", "ChatGPT-4", "Lovable AI"],
    image: img1,
    live: "https://your-live-site.com",
    github: "https://github.com/yourusername",
  },
  {
    title: "SwasthyaSetu AI Medibot",
    desc: "Whatsapp integrated Artificial Intelligence medibot which tells about diseases and their symptoms. using RAG architecture.We have build it using static data i.e encyclopedia of medicine and use of webhooks to send and receive messages from whatsapp using Facebook Business API.(gpt-5.o nano), and pineconeDB for vector database.Ngork is used to create a secure tunnel to localhost for testing the webhook integration. This project is a great example of how AI can be used to provide valuable information and support to users in the healthcare domain. The medibot can assist users in understanding various diseases, their symptoms, and potential treatments, making healthcare information more accessible and convenient.Tested on test number provided by whatsapp sandbox.",
    tech: ["Flask", "Meta Developers API", "pineconeDB", "OpenAI API", "Facebook Business API", "Ngrok"],
    image: img2,
    github: "https://github.com/Gunjesh-Nayak/medibot",
  },
  {
    title: "Tomato Food Delivery Web App",
    desc: "Responsive web app with clean architecture.this is a full stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It features a user-friendly interface for browsing and ordering food, with a focus on self-learnig. The backend is built with Express.js and Node.js, providing a robust API for handling user authentication, order management, and payment processing. The frontend is developed using React, offering a seamless and interactive user experience. MongoDB is used as the database to store user data, orders, and menu items. This project demonstrates my ability to create a complete web application from scratch, utilizing modern technologies and best practices in web development.",
    tech: ["JavaScript", "API", "React", "TailwindCSS", "Express.js", "MongoDB","jwt","bcrypt","nodemon","cors","token-based authentication", "Stripe Payment Gateway"],
    image: img3,
    live: "https://your-live-site.com",
    github: "https://github.com/Gunjesh-Nayak/TomatoVT",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useGSAP(() => {
    gsap.from(".project-item", {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
        once: true,
      },
    });
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="px-6 md:px-20 py-40 bg-black text-white poppins-regular"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold">
              Selected <span className="text-violet-400">Projects</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one is a unique challenge that I've tackled with creativity and technical skill.<br/> Feel free to explore and see the details of each project by clicking on them!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <div
                key={i}
                className="project-item cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
