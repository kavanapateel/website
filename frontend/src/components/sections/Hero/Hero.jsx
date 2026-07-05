import { motion } from 'framer-motion';
import { Container, Button, Section } from '../../ui';
import { heroData } from '../../../data';

export const Hero = () => {
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const headingWords = heroData.heading.split(' ');
  const hasMultipleWords = headingWords.length > 2;
  const firstPart = hasMultipleWords ? headingWords.slice(0, -3).join(' ') : heroData.heading;
  const lastPart = hasMultipleWords ? headingWords.slice(-3).join(' ') : '';

  return (
    <Section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--background)]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20 dark:opacity-10 blur-3xl z-0">
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" />
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-zinc-100 text-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-200 ring-1 ring-inset ring-zinc-500/20 shadow-sm backdrop-blur-md transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700">
                <span className="flex w-2 h-2 rounded-full bg-blue-500 mr-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
                {heroData.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--foreground)] mb-6 leading-[1.05]"
            >
              <span className="block">{firstPart}</span>
              {hasMultipleWords && (
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 pb-2 mt-1">
                  {lastPart}
                </span>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl leading-relaxed font-light"
            >
              {heroData.description}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
            >
              <Button size="large" variant="primary" className="shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 px-8">
                {heroData.primaryCta.label}
              </Button>
              <Button size="large" variant="ghost" className="shadow-sm hover:-translate-y-0.5 border border-[var(--border)] bg-[var(--background)] px-8">
                {heroData.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-[var(--muted-foreground)] font-medium tracking-wide"
            >
              {heroData.trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {indicator}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-3xl shadow-2xl overflow-hidden relative group flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/50 bg-[var(--background)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-50 to-white dark:from-zinc-900/80 dark:to-zinc-800/80 opacity-90 transition-opacity group-hover:opacity-100 backdrop-blur-xl"></div>
            
            {/* Minimalist wireframe/placeholder illustration */}
            <div className="relative z-10 flex flex-col items-center text-[var(--muted-foreground)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mb-6 opacity-40 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
              <p className="font-semibold tracking-widest uppercase text-sm">Architecture Graphic</p>
              <p className="text-xs opacity-60 mt-2 max-w-[200px] text-center">Awaiting custom 3D isometric illustration of cloud architecture.</p>
            </div>
            
            {/* Decorative grid pattern in placeholder */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};
