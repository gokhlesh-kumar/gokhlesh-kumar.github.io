import { motion } from "motion/react";
import { Calendar, TrendingUp, Users, Zap } from "lucide-react";

const experiences = [
  {
    company: "Softsensor.ai, Jaipur",
    role: "Software Engineer",
    period: "Aug 2023 - Present",
    metrics: [
      { icon: Users, label: "8+ production apps", color: "var(--accent-teal)" },
      {
        icon: Zap,
        label: "Real-time tracking & chat",
        color: "var(--accent-blue)",
      },
      {
        icon: TrendingUp,
        label: "Delivery operations at scale",
        color: "var(--accent-purple)",
      },
    ],
    description:
      "Own end-to-end development of multiple React Native apps for a large-scale delivery management platform with live tracking, in-app chat, and AI-based workflows.",
  },
  {
    company: "Samsung R&D Institute, Bangalore",
    role: "Research Intern",
    period: "Sep 2021 - May 2022",
    metrics: [
      {
        icon: Zap,
        label: "ML models in TensorFlow",
        color: "var(--accent-teal)",
      },
      {
        icon: Users,
        label: "Research collaboration",
        color: "var(--accent-blue)",
      },
    ],
    description:
      "Contributed to Emotion Intelligence and text-based personality profiling research using LSTM, RNN, and SVM models.",
  },
];

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative overflow-x-hidden section-padding"
    >
      {/* Background Blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 max-w-[100vw]"
        style={{ background: "var(--blob-blue)" }}
      />

      <div className="relative z-10 section-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="section-heading font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Experience
          </h2>
          <p className="body-text" style={{ color: "var(--text-secondary)" }}>
            Building impactful products at scale
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-4 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5"
            style={{
              background:
                "linear-gradient(180deg, var(--accent-teal), var(--accent-blue), var(--accent-purple))",
            }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center flex-col lg:flex-row gap-8 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-4 md:left-8 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full"
                    style={{
                      background: "var(--accent-teal)",
                      boxShadow: "0 0 20px var(--accent-teal-glow)",
                    }}
                  />

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-full lg:w-[calc(50%-2rem)]"></div>

                  {/* Content Card */}
                  <div
                    className={`glass rounded-3xl p-6 md:p-8 w-full lg:w-[calc(50%-2rem)] hover:shadow-xl transition-all group ${isEven ? "ml-12 md:ml-16 lg:ml-0 lg:mr-auto" : "ml-12 md:ml-16 lg:ml-auto lg:mr-0"}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3
                          className="text-2xl font-bold mb-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-lg font-medium"
                          style={{ color: "var(--accent-teal)" }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="glass rounded-full px-4 py-1 flex items-center gap-2">
                        <Calendar
                          className="w-4 h-4"
                          style={{ color: "var(--text-muted)" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p
                      className="mb-6"
                      style={{
                        color: "var(--text-secondary)",
                        lineHeight: "1.6",
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3">
                      {exp.metrics.map((metric) => {
                        const Icon = metric.icon;
                        return (
                          <div
                            key={metric.label}
                            className="glass rounded-full px-4 py-2 flex items-center gap-2 transition-all hover:scale-105"
                          >
                            <Icon
                              className="w-4 h-4"
                              style={{ color: metric.color }}
                            />
                            <span
                              className="text-sm font-medium"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {metric.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
