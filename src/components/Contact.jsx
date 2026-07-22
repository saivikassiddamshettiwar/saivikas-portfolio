import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-cyan-400 mb-4">
          Contact
        </h2>

        <p className="text-gray-400 mb-12">
          Let's connect and build something amazing together.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">

          {/* GitHub */}

          <a
            href="https://github.com/saivikassiddamshettiwar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-800 px-6 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition"
          >
            <FaGithub size={28} />
            GitHub
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/siddamshettiwar-saivikas-a4635b284"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-800 px-6 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition"
          >
            <FaLinkedin size={28} />
            LinkedIn
          </a>

          {/* Email */}

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="flex items-center gap-3 bg-slate-800 px-6 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition"
          >
            <FaEnvelope size={28} />
            Email
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;