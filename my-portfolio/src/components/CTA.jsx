import { useRef , useState} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(".contact-item", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 70%",
        once: true,
      },
    });
  }, []);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`,
         {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        
      });
      

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully 🚀");
        form.reset();
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Server error");
      console.log("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 md:px-20 py-40 bg-black text-white poppins-regular"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER / CTA */}
        <div className="contact-item text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Get in <span className="text-violet-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind, an opportunity, or just want to say hi? I’m
            always open to meaningful conversations.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT – FORM */}
          <form
            onSubmit={handleSubmit}
            className="contact-item bg-neutral-900 border border-white/10
                            rounded-3xl p-10 space-y-6  
                          shadow-[0_0_100px_rgba(139,92,246,0.35)]"
          >
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-5 py-3 rounded-xl bg-black
                         border border-white/10 text-white
                         placeholder-gray-500 focus:outline-none
                         focus:border-violet-500"
            />

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full px-5 py-3 rounded-xl bg-black
                         border border-white/10 text-white
                         placeholder-gray-500 focus:outline-none
                         focus:border-violet-500"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Tell me about your project..."
              className="w-full px-5 py-3 rounded-xl bg-black
                         border border-white/10 text-white
                         placeholder-gray-500 focus:outline-none
                         focus:border-violet-500"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3
    px-6 py-4 rounded-xl transition font-medium
    ${loading ? "bg-violet-400 cursor-not-allowed" : "bg-violet-600 hover:bg-violet-700"}
  `}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>
          </form>

          {/* RIGHT – CTA / INFO */}
          <div
            className="contact-item space-y-8 rounded-3xl p-10
                        "
          >
            <div>
              <h3 className="text-4xl font-semibold mb-3">Let’s Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you have a
                question or just want to say hi, I’ll do my best to get back to
                you.
              </p>
            </div>

            {/* SOCIALS */}
            <div>
              <p className="text-lg text-gray-300 mb-4">Find me on</p>
              <div className="flex gap-4">
                {[
                  {
                    Icon: Github,
                    href: "https://github.com/Gunjesh-Nayak",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/gunjesh-nayak",
                  },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/gunjesh_nyk",
                  },
                  {
                    Icon: Mail,
                    href: "mailto:gunjeshnayak@gmail.com",
                  },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-neutral-900
               border border-white/10 flex items-center
               justify-center text-gray-300
               hover:text-white hover:border-violet-500
               transition"
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </div>

            {/* EMAIL CTA */}
            <div className="rounded-2xl bg-neutral-900 border border-white/10 p-6">
              <p className="text-gray-300 text-sm mb-1">Prefer email?</p>
              <p className="text-violet-400 font-medium">
                gunjeshnayak@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
