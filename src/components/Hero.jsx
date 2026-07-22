import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg font-medium">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-extrabold mt-3 leading-tight">
            Siddamshettiwar
            <br />
            <span className="text-cyan-400">Saivikas</span>
          </h1>

          <div className="text-3xl text-gray-300 mt-6 h-16">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Java Full Stack Developer",
                2000,
                "Open to Work",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            Passionate Full Stack Developer specializing in Java,
            Spring Boot, React, Node.js, MongoDB, and modern web
            technologies. I enjoy building scalable, high-performance
            applications that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a href="#projects">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-7 py-3 rounded-xl transition duration-300 shadow-lg">
                View Projects
              </button>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-cyan-500 hover:bg-cyan-500 hover:text-black px-7 py-3 rounded-xl transition duration-300 flex items-center gap-2">
                <FaDownload />
                Resume
              </button>
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/saivikassiddamshettiwar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/siddamshettiwar-saivikas-a4635b284"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:saivikassidds01@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <img
              src={hero}
              alt="Saivikas"
              className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;