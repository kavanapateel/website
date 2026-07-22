import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Container, Button, ThemeToggle } from '../../ui';
import { navigationData, companyInfo } from '../../../data';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount to handle initial state if not at top
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-[1100] transition-all duration-300',
        isScrolled
          ? 'py-3 md:py-4 glass border-b border-[var(--border)] shadow-sm'
          : 'py-5 md:py-6 bg-transparent border-transparent'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex-shrink-0 flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-white font-bold text-lg leading-none">
              {companyInfo.name.charAt(0)}
            </span>
          </div>
          <span className="font-bold text-xl tracking-tight text-[var(--foreground)]">
            {companyInfo.name.split(' ')[0]}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
          {navigationData.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium rounded-md text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="focus:outline-none">
            <Button variant="primary" size="small" className="shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 -mr-2 text-[var(--foreground)] rounded-md hover:bg-[var(--muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full glass bg-[var(--background)]/95 border-b border-[var(--border)] shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigationData.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium rounded-md text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-[var(--primary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-[var(--border)]">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full focus:outline-none">
                  <Button variant="primary" size="medium" className="w-full shadow-md cursor-pointer">
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
