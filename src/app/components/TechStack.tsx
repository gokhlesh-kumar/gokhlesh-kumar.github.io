import { motion } from 'motion/react';

const techStack = {
  Mobile: ['React Native', 'Swift', 'Kotlin', 'Expo', 'React Navigation'],
  Realtime: ['WebSocket', 'Firebase', 'Socket.io', 'Push Notifications', 'FCM'],
  Architecture: ['Redux', 'Zustand', 'React Query', 'API Design', 'State Management'],
  Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Supabase'],
  Tools: ['Git', 'Jest', 'Detox', 'Xcode', 'Android Studio', 'VS Code'],
};

export function TechStack() {
  return (
    <section id="tech" className="relative py-24 px-4 sm:px-6 overflow-x-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 max-w-[100vw]" style={{ background: 'var(--blob-teal)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 max-w-[100vw]" style={{ background: 'var(--blob-blue)' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Modern tools for modern challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-3xl p-6 hover:shadow-xl transition-all"
            >
              <h3 
                className="text-xl font-bold mb-4 pb-3 border-b"
                style={{ 
                  color: 'var(--accent-teal)',
                  borderColor: 'var(--glass-border)'
                }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-full px-4 py-2 text-sm font-medium cursor-default"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}