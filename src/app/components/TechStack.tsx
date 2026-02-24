import { motion } from "motion/react";

const techStack = [
  "React Native",
  "Swift",
  "Kotlin",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "Firebase",
  "WebSocket",
  "Redux",
  "Architecture",
  "Zustand",
  "React Query",
  "Tailwind CSS",
  "Framer Motion",
  "Expo",
  "Jest",
  "Detox",
];

export function TechStack() {
  return (
    <section id="tech" className="relative overflow-x-hidden section-padding">
      <div className="relative z-10 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="section-heading font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Tech Arsenal
          </h2>
          <p className="body-text" style={{ color: "var(--text-secondary)" }}>
            Core technologies and tools I use to build scalable production apps
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-full px-5 py-2.5 text-sm font-medium cursor-default"
              style={{ color: "var(--text-secondary)" }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
