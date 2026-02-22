import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0.8);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrolled = window.scrollY;
      
      // Show navbar after scrolling 50% of hero
      if (scrolled > heroHeight * 0.5) {
        setIsVisible(true);
        // Increase opacity as user scrolls further
        const opacityIncrease = Math.min((scrolled - heroHeight * 0.5) / 300, 0.2);
        setScrollOpacity(0.8 + opacityIncrease);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Tech', id: 'tech' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Navbar */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block px-4"
            style={{ opacity: scrollOpacity }}
          >
            <div className="glass-strong rounded-full px-6 py-3 shadow-2xl">
              <div className="flex items-center gap-8">
                {/* Logo */}
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
                >
                  GK
                </button>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-sm transition-all hover:text-[var(--accent-teal)] relative group whitespace-nowrap"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-teal)] transition-all group-hover:w-full" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>

          {/* Mobile Navbar */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-4 left-2 right-2 sm:left-4 sm:right-4 z-50 lg:hidden max-w-[calc(100vw-1rem)]"
            style={{ opacity: scrollOpacity }}
          >
            <div className="glass-strong rounded-3xl px-4 py-3 shadow-2xl">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-xl font-bold gradient-text"
                >
                  GK
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="glass rounded-full p-2"
                  style={{ color: 'var(--accent-teal)' }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2 space-y-2">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="block w-full text-left px-4 py-3 rounded-2xl transition-all hover:bg-[var(--glass-bg)]"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
