import { motion } from "framer-motion";
import { FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";

// Group skills by category. Each skill keeps its real brand color on the
// icon so the cards stay disciplined (slate + cyan) while the icons are
// where the visual energy lives.
const categories = [
  {
    name: "Languages",
    skills: [
      { name: "Java", level: 85, icon: FaJava, color: "#EA2D2E" },
      { name: "Python", level: 90, icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", level: 88, icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", level: 80, icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 85, icon: SiReact, color: "#61DAFB" },
      { name: "HTML5", level: 92, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", level: 88, icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 80, icon: SiNodedotjs, color: "#339933" },
      { name: "Express", level: 78, icon: SiExpress, color: "#F5F5F5" },
      { name: "MongoDB", level: 75, icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 88, icon: SiGit, color: "#F05032" },
      { name: "GitHub", level: 90, icon: SiGithub, color: "#F5F5F5" },
    ],
  },
];

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="group relative rounded-xl border border-slate-700/60 bg-slate-800/60
                 p-5 backdrop-blur-sm transition-all duration-300
                 hover:-translate-y-1.5 hover:border-cyan-400/60
                 hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg
                     bg-slate-900/80 text-2xl transition-transform duration-300
                     group-hover:scale-110"
          style={{ color: skill.color }}
        >
          <Icon />
        </div>

        <div className="flex flex-1 items-center justify-between">
          <span className="font-semibold text-gray-100">{skill.name}</span>
          <span className="font-mono text-xs text-cyan-400">
            {skill.level}%
          </span>
        </div>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-900">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 + index * 0.05, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-5xl font-bold text-cyan-400"
        >
          Skills
        </motion.h2>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  {category.name}
                </h3>
                <span className="h-px flex-1 bg-slate-700/60" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
