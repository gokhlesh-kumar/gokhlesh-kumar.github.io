import { motion } from 'motion/react';
import { X, Download } from 'lucide-react';
import { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 overflow-x-hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)'
        }} 
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative glass-strong rounded-3xl w-full max-w-[calc(100vw-1rem)] sm:max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b" style={{ borderColor: 'var(--glass-border)' }}>
          <h2 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Resume
          </h2>
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://drive.usercontent.google.com/uc?id=1AKe8ZX_aZ0NPAD7OfvF_WZTlkO2f5CA5&authuser=0&export=download';
                link.download = 'Gokhlesh_Kumar_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="glass rounded-full p-2 md:p-3 hover:scale-105 transition-transform"
              style={{ color: 'var(--accent-teal)' }}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={onClose}
              className="glass rounded-full p-2 md:p-3 hover:scale-105 transition-transform"
              style={{ color: 'var(--text-secondary)' }}
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content - Scrollable */}
        <div className="overflow-y-auto p-4 md:p-8" style={{ maxHeight: 'calc(90vh - 80px)' }}>
          <div className="space-y-6 md:space-y-8" style={{ color: 'var(--text-primary)' }}>
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold">Gokhlesh Kumar</h1>
              <p className="text-xl" style={{ color: 'var(--accent-teal)' }}>Software Engineer</p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Mansarovar, Jaipur, Rajasthan, India &nbsp;|&nbsp; gokhleshsn@gmail.com &nbsp;|&nbsp; +91 9667660110
                <br />
                linkedin.com/in/gokhlesh-kumar/ &nbsp;|&nbsp; github.com/gokhlesh
              </p>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Summary</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Software Engineer specializing in scalable, high-performance mobile apps with deep ownership across
                Android &amp; iOS. Experienced in complex state management, real-time systems, performance
                optimization, and production deployments for 8+ enterprise and consumer apps.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-4 gradient-text">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p style={{ color: 'var(--accent-teal)' }}>Softsensor.ai, Jaipur &nbsp;|&nbsp; Aug 2023 - Present</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside" style={{ color: 'var(--text-secondary)' }}>
                    <li>Own end-to-end development of multiple React Native applications used in production across Android and iOS.</li>
                    <li>Led development of driver-facing and admin mobile apps for a large-scale delivery management platform.</li>
                    <li>Architected complex workflows including vehicle inspection, scheduling, live tracking, and AI-based damage detection.</li>
                    <li>Implemented real-time features such as live location tracking, push notifications (FCM), and in-app updates.</li>
                    <li>Built Twilio-powered in-app chat enabling seamless communication between drivers and admins.</li>
                    <li>Collaborated with designers and backend engineers in Agile sprints to deliver high-quality releases on time.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Research Intern</h3>
                  <p style={{ color: 'var(--accent-teal)' }}>Samsung R&amp;D Institute, Bangalore &nbsp;|&nbsp; Sep 2021 - May 2022</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside" style={{ color: 'var(--text-secondary)' }}>
                    <li>Contributed to Emotion Intelligence &amp; Text-Based Personality Profiling research.</li>
                    <li>Built and evaluated ML models (LSTM, RNN, SVM) for sentiment and personality prediction using TensorFlow.</li>
                    <li>Performed data preprocessing, feature extraction, training, and validation using Python.</li>
                    <li>Developed strong foundations in data-driven problem solving and research workflows.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Education</h2>
              <div>
                <h3 className="text-xl font-bold">B.E. in Computer Science</h3>
                <p style={{ color: 'var(--accent-teal)' }}>
                  Chandigarh University, Mohali, Punjab (140413) &nbsp;|&nbsp; Aug 2020 - May 2023
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-4" style={{ color: 'var(--text-secondary)' }}>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Mobile</h4>
                  <p>React Native, React Navigation, Redux, React Query, Firebase, FCM, Native Modules (iOS &amp; Android), Kotlin, Swift</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Languages</h4>
                  <p>JavaScript (ES6+), TypeScript, Java, SQL</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Web</h4>
                  <p>React.js, Node.js, Express, REST APIs, MUI</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Tools</h4>
                  <p>Git, GitHub, Xcode, Android Studio, Reactotron, Postman, JIRA</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-3 gradient-text">Projects</h2>
              <div>
                <h3 className="text-xl font-bold">Delivery Management &amp; Driver Operations App</h3>
                <ul className="mt-2 space-y-1 list-disc list-inside" style={{ color: 'var(--text-secondary)' }}>
                  <li>Integrated biometric login, face recognition, and face sign-off for secure delivery operations.</li>
                  <li>Enabled live location tracking, route mapping, and real-time updates via Firebase Cloud Messaging (FCM).</li>
                  <li>Implemented Twilio-based chat and in-app messaging between drivers and admins for seamless communication.</li>
                  <li>Built AI-driven damage detection, RBAC access control, and an admin dashboard with delivery insights.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}