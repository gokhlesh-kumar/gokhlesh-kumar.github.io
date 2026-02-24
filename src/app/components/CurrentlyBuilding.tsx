import { motion } from "motion/react";

export function CurrentlyBuilding() {
  return (
    <section
      id="about"
      className="section-padding section-container relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{
          borderColor: "var(--glass-border)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="space-y-4 relative z-10 w-full">
          <div className="flex items-center gap-3">
            <h2
              className="section-heading font-bold"
              style={{ color: "var(--text-primary)", lineHeight: 1 }}
            >
              Currently Building
            </h2>
            <div className="flex items-center justify-center relative">
              <span
                className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"
                style={{ boxShadow: "0 0 10px 2px rgba(34, 197, 94, 0.5)" }}
              ></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 absolute inline-flex opacity-75 animate-ping"></span>
            </div>
            <span className="text-sm font-medium text-green-500 uppercase tracking-widest ml-1 opacity-90">
              Active
            </span>
          </div>

          <div className="space-y-2 max-w-3xl">
            <p
              className="body-text font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Architecting real-time delivery systems at production scale.
            </p>
            <p
              className="body-text"
              style={{ color: "var(--text-muted)", fontSize: "0.9em" }}
            >
              Focused on React Native performance, AI-based damage detection &
              live operations.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
