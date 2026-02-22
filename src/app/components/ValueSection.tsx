import { motion } from 'motion/react';
import { Zap, Smartphone, RefreshCw, Rocket } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Performance obsessed',
    description: 'Every millisecond counts. Optimized rendering, lazy loading, and 60fps animations.',
  },
  {
    icon: Smartphone,
    title: 'Cross-platform specialist',
    description: 'Write once, deploy everywhere. Native performance on iOS and Android.',
  },
  {
    icon: RefreshCw,
    title: 'Real-time architecture builder',
    description: 'WebSocket mastery. Live updates, instant sync, seamless collaboration.',
  },
  {
    icon: Rocket,
    title: 'Production-ready engineering',
    description: 'Scalable code, comprehensive testing, monitoring, and error tracking.',
  },
];

export function ValueSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 overflow-x-hidden">
      {/* Background Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 max-w-[100vw]" style={{ background: 'var(--blob-purple)' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What I bring to the table
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Engineering mobile experiences with precision and care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-3xl p-8 transition-all hover:shadow-xl cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="glass rounded-2xl p-4 transition-all group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background: 'var(--accent-teal)', color: 'white' }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {value.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}