import { motion } from 'motion/react';
import { 
  Smartphone, 
  Code2, 
  Database, 
  Zap, 
  Globe, 
  Layers,
  GitBranch,
  TestTube,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'var(--accent-teal)',
    skills: [
      { name: 'React Native', level: 95 },
      { name: 'Swift', level: 80 },
      { name: 'Kotlin', level: 75 },
      { name: 'Expo', level: 90 },
    ],
  },
  {
    title: 'Frontend',
    icon: Code2,
    color: 'var(--accent-blue)',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    color: 'var(--accent-purple)',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Firebase', level: 90 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'Real-time Systems',
    icon: Zap,
    color: 'var(--accent-teal)',
    skills: [
      { name: 'WebSocket', level: 90 },
      { name: 'Socket.io', level: 85 },
      { name: 'Push Notifications', level: 90 },
      { name: 'Real-time Sync', level: 85 },
    ],
  },
  {
    title: 'State Management',
    icon: Layers,
    color: 'var(--accent-blue)',
    skills: [
      { name: 'Redux', level: 90 },
      { name: 'Zustand', level: 85 },
      { name: 'React Query', level: 85 },
      { name: 'Context API', level: 95 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: GitBranch,
    color: 'var(--accent-purple)',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'App Store Deploy', level: 90 },
    ],
  },
];

const softSkills = [
  { icon: Globe, title: 'Cross-functional Collaboration' },
  { icon: TestTube, title: 'Problem Solving' },
  { icon: Layers, title: 'System Design' },
  { icon: Code2, title: 'Code Review & Mentoring' },
];

export function SkillsSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-x-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 max-w-[100vw]" style={{ background: 'var(--blob-blue)' }} />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 max-w-[100vw]" style={{ background: 'var(--blob-purple)' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Continuously evolving with the latest technologies
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-3xl p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="glass rounded-2xl p-3"
                    style={{ background: category.color, color: 'white' }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold" style={{ color: category.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div 
                        className="h-2 rounded-full overflow-hidden"
                        style={{ background: 'var(--glass-border)' }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: category.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Additional Strengths
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-all"
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 glass rounded-2xl flex items-center justify-center"
                    style={{ color: 'var(--accent-teal)' }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {skill.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}