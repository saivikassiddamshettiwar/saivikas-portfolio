import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaMapMarkerAlt,
  FaLaptopCode,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side */}
            <div>

              <h3 className="text-3xl font-bold mb-6">
                Software Engineer &
                <span className="text-cyan-400">
                  {" "}Java Full Stack Developer
                </span>
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                I am an Integrated M.Tech Software Engineering student with a
                passion for building scalable web applications using Java,
                Spring Boot, React, Node.js, Express.js, MongoDB and SQL.

                I enjoy solving real-world problems through technology and
                continuously learning new tools and frameworks.
              </p>

            </div>

            {/* Right Side */}

            <div className="grid gap-6">

              <div className="bg-slate-800 rounded-xl p-6 flex gap-5 items-center">
                <FaGraduationCap className="text-4xl text-cyan-400" />
                <div>
                  <h4 className="font-bold text-xl">Education</h4>
                  <p className="text-gray-400">
                    Integrated M.Tech - Software Engineering
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 flex gap-5 items-center">
                <FaMapMarkerAlt className="text-4xl text-cyan-400" />
                <div>
                  <h4 className="font-bold text-xl">Location</h4>
                  <p className="text-gray-400">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 flex gap-5 items-center">
                <FaCode className="text-4xl text-cyan-400" />
                <div>
                  <h4 className="font-bold text-xl">Languages</h4>
                  <p className="text-gray-400">
                    Java, Python, JavaScript
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 flex gap-5 items-center">
                <FaLaptopCode className="text-4xl text-cyan-400" />
                <div>
                  <h4 className="font-bold text-xl">Tech Stack</h4>
                  <p className="text-gray-400">
                    React, Spring Boot, Node.js, MongoDB
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">4+</h3>
              <p className="mt-3 text-gray-400">Projects</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">10+</h3>
              <p className="mt-3 text-gray-400">Technologies</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">5+</h3>
              <p className="mt-3 text-gray-400">Certifications</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">2026</h3>
              <p className="mt-3 text-gray-400">Graduation</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;