import { motion } from "motion/react";
import { Mail, Linkedin, Github, Code2 } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "gokhleshns@gmail.com",
    link: "mailto:gokhleshns@gmail.com",
    color: "var(--accent-teal)",
    description: "Drop me a line anytime",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@gokhlesh-kumar",
    link: "https://github.com/gokhlesh-kumar",
    color: "var(--accent-blue)",
    description: "Check out my code",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Gokhlesh Kumar",
    link: "https://www.linkedin.com/in/gokhlesh-kumar",
    color: "var(--accent-purple)",
    description: "Let's connect professionally",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "@gokhlesh-kumar",
    link: "https://leetcode.com/u/gokhlesh-kumar/",
    color: "var(--accent-teal)",
    description: "View my problem-solving",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-x-hidden section-padding"
    >
      {/* Background Blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-30 max-w-[100vw]"
        style={{ background: "var(--blob-teal)" }}
      />

      <div className="relative z-10 section-container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="hero-heading font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Got an idea?
          </h2>
          <p
            className="section-heading mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Let's turn it into a{" "}
            <span className="gradient-text">
              fast, beautiful mobile experience
            </span>
            .
          </p>
          <p className="body-text" style={{ color: "var(--text-secondary)" }}>
            Available for freelance projects and full-time opportunities
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-3xl p-6 transition-all hover:shadow-2xl cursor-pointer group"
              >
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 mx-auto rounded-2xl glass flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background: card.color, color: "white" }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Label */}
                  <div>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.label}
                    </h3>
                    <p
                      className="text-sm mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {card.description}
                    </p>
                    <p
                      className="text-sm font-medium break-all transition-colors"
                      style={{ color: card.color }}
                    >
                      {card.value}
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${card.color}20, transparent 70%)`,
                  }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8 text-center"
        >
          <p
            className="text-lg mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Open to exciting opportunities in mobile development, full-stack
            engineering, and real-time systems.
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Preferred tech stack: React Native • TypeScript • Firebase • Node.js
            • Real-time Architecture
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
          style={{ color: "var(--text-muted)" }}
        >
          <p>© 2025 Gokhlesh Kumar. Built with ❤️ for you!</p>
        </motion.div>
      </div>
    </section>
  );
}
