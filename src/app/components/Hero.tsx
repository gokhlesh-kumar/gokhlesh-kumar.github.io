import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

interface HeroProps {
  onResumeClick: () => void;
}

export function Hero({ onResumeClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden px-4 sm:px-6 py-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--blob-teal)' }}
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-40 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'var(--blob-blue)' }}
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--blob-purple)' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Building mobile experiences
            <br />
            that feel{' '}
            <span className="gradient-text">
              fast, fluid, and alive
            </span>
            .
          </h1>

          {/* Subheading */}
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Gokhlesh Kumar — Software Engineer
            </p>
            <p className="text-base sm:text-lg" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Software Engineer specializing in scalable, high-performance mobile apps with real-time systems and production deployments across Android &amp; iOS.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass rounded-full px-6 sm:px-8 py-3 sm:py-4 font-medium transition-all hover:shadow-xl text-sm sm:text-base"
              style={{ 
                background: 'var(--accent-teal)',
                color: 'white'
              }}
            >
              Explore Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onResumeClick}
              className="glass rounded-full px-6 sm:px-8 py-3 sm:py-4 font-medium transition-all hover:shadow-xl text-sm sm:text-base"
              style={{ 
                borderColor: 'var(--accent-teal)',
                borderWidth: '2px',
                color: 'var(--accent-teal)'
              }}
            >
              View Resume
            </motion.button>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3">
            {['React Native', 'TypeScript', 'Firebase', 'Real-time Systems'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass rounded-full px-5 py-2 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Floating Resume Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onResumeClick}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="relative group cursor-pointer"
            style={{ perspective: '1000px' }}
          >
            <div 
              className="glass-strong rounded-2xl p-8 w-80 h-[480px] shadow-2xl transition-all duration-300"
              style={{
                transform: 'rotateY(-5deg)',
                boxShadow: '0 20px 60px var(--glass-shadow), 0 0 40px var(--accent-teal-glow)'
              }}
            >
              {/* Resume Document Visual */}
              <div className="space-y-6">
                {/* Header with Icon */}
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full glass flex items-center justify-center">
                    <FileText className="w-8 h-8" style={{ color: 'var(--accent-teal)' }} />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent-teal)' }}>
                    Resume
                  </p>
                </div>

                {/* Name and Title */}
                <div className="text-center space-y-2 pb-4 border-b" style={{ borderColor: 'var(--glass-border)' }}>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Gokhlesh Kumar
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--accent-teal)' }}>
                    Mobile & Software Engineer
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    React Native • TypeScript • Firebase
                  </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-4">
                  {/* Experience Section */}
                  <div className="space-y-2">
                    <div className="h-2 rounded" style={{ background: 'var(--accent-teal)', width: '45%', opacity: 0.8 }} />
                    <div className="h-2 rounded" style={{ background: 'var(--glass-border)', width: '100%', opacity: 0.4 }} />
                    <div className="h-2 rounded" style={{ background: 'var(--glass-border)', width: '85%', opacity: 0.4 }} />
                  </div>

                  {/* Skills Section */}
                  <div className="space-y-2">
                    <div className="h-2 rounded" style={{ background: 'var(--accent-blue)', width: '35%', opacity: 0.8 }} />
                    <div className="flex gap-2">
                      <div className="h-2 rounded flex-1" style={{ background: 'var(--glass-border)', opacity: 0.4 }} />
                      <div className="h-2 rounded flex-1" style={{ background: 'var(--glass-border)', opacity: 0.4 }} />
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="space-y-2">
                    <div className="h-2 rounded" style={{ background: 'var(--accent-purple)', width: '40%', opacity: 0.8 }} />
                    <div className="h-2 rounded" style={{ background: 'var(--glass-border)', width: '100%', opacity: 0.4 }} />
                    <div className="h-2 rounded" style={{ background: 'var(--glass-border)', width: '90%', opacity: 0.4 }} />
                  </div>

                  {/* Education Section */}
                  <div className="space-y-2">
                    <div className="h-2 rounded" style={{ background: 'var(--accent-teal)', width: '38%', opacity: 0.8 }} />
                    <div className="h-2 rounded" style={{ background: 'var(--glass-border)', width: '75%', opacity: 0.4 }} />
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, var(--accent-teal-glow), transparent 70%)'
                }}
              />
            </div>

            {/* Floating Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              Click to view full resume
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}