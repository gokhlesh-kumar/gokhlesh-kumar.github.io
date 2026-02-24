import { motion } from "motion/react";
import { Settings2, Zap, Layout, Users, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: Zap,
    text: "Performance before polish",
    color: "var(--accent-teal)",
  },
  {
    icon: Settings2,
    text: "Real-time systems require deterministic state",
    color: "var(--accent-blue)",
  },
  {
    icon: Layout,
    text: "UI must feel native, not cross-platform",
    color: "var(--accent-purple)",
  },
  {
    icon: Users,
    text: "Clean architecture scales teams",
    color: "var(--text-primary)",
  },
  {
    icon: ShieldCheck,
    text: "Production stability > feature velocity",
    color: "var(--accent-teal)",
  },
];

export function EngineeringPhilosophy() {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="text-sm uppercase tracking-widest font-bold mb-2"
            style={{ color: "var(--accent-purple)" }}
          >
            Engineering Philosophy
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            How I Build
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 transition-all hover:scale-[1.02] group"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  borderColor: "var(--glass-border)",
                }}
              >
                <div
                  className="rounded-xl p-3 shrink-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <Icon
                    className="w-6 h-6 transition-transform group-hover:scale-110 group-hover:rotate-3"
                    style={{ color: principle.color }}
                  />
                </div>
                <div>
                  <h3
                    className="text-base sm:text-lg font-bold leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {principle.text}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
