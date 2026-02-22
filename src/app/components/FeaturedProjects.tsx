import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Delivery Management & Driver Operations App",
    description:
      "Enterprise-grade delivery management platform with driver and admin mobile apps, built using React Native for Android and iOS.",
    tags: [
      "React Native",
      "TypeScript",
      "Firebase",
      "FCM",
      "Twilio",
      "Native Modules",
    ],
    metrics: [
      "Biometric & face sign-off",
      "Live location tracking",
      "AI damage detection",
    ],
    gradient: "linear-gradient(135deg, var(--accent-teal), var(--accent-blue))",
  },
  {
    title: "Emotion Intelligence & Personality Profiling",
    description:
      "Research project exploring emotion intelligence and text-based personality profiling using deep learning models.",
    tags: ["Python", "TensorFlow", "LSTM", "RNN", "SVM"],
    metrics: [
      "ML models for sentiment",
      "Personality prediction",
      "Data-driven workflows",
    ],
    gradient:
      "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
  },
  {
    title: "Mobile App Experiments",
    description:
      "Collection of React Native experiments focused on performance optimization, navigation flows, and real-time UX.",
    tags: ["React Native", "React Navigation", "React Query", "Performance"],
    metrics: [
      "60fps interactions",
      "Optimized state management",
      "Production-ready patterns",
    ],
    gradient:
      "linear-gradient(135deg, var(--accent-purple), var(--accent-teal))",
  },
  {
    title: "Full-Stack Practice Projects",
    description:
      "Web projects using React.js, Node.js, and Express with REST APIs and MUI-based dashboards.",
    tags: ["React.js", "Node.js", "Express", "REST APIs", "MUI"],
    metrics: ["End-to-end features", "Clean UI", "API integrations"],
    gradient:
      "linear-gradient(135deg, var(--accent-teal), var(--accent-purple))",
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 overflow-x-hidden"
    >
      {/* Background Blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 max-w-[100vw]"
        style={{ background: "var(--blob-purple)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 max-w-[100vw]"
        style={{ background: "var(--blob-teal)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Featured Projects
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Real-world applications that solve real problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group cursor-pointer transition-all hover:shadow-2xl"
            >
              {/* Gradient Header */}
              <div
                className="h-48 relative overflow-hidden"
                style={{ background: project.gradient }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-64 h-64 rounded-full"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      filter: "blur(40px)",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  className="mb-6"
                  style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
                >
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="glass rounded-full px-3 py-1 text-sm font-medium"
                      style={{ color: "var(--accent-teal)" }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass rounded-full px-3 py-1 text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {/* <div className="flex gap-4">
                  <button className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105" style={{ color: 'var(--accent-teal)' }}>
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </button>
                  <button className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105" style={{ color: 'var(--text-secondary)' }}>
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
