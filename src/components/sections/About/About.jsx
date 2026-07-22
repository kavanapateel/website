import { motion } from 'framer-motion';
import { Container, Section, SectionHeader, Button } from '../../ui';
import { aboutData } from '../../../data';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <Section id="about" background="default">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <SectionHeader
              badge={aboutData.header.badge}
              title={aboutData.header.title}
              description={aboutData.header.description}
              align="left"
              className="mb-8"
            />
            
            <motion.div variants={itemVariants} className="prose prose-zinc dark:prose-invert max-w-none mb-10">
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-8">
                {aboutData.content.story}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {aboutData.content.mission.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {aboutData.content.mission.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {aboutData.content.vision.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {aboutData.content.vision.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[var(--border)] mb-10">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-extrabold text-[var(--foreground)] mb-1">{stat.value}</span>
                  <span className="text-sm font-medium text-[var(--muted-foreground)] tracking-wide">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href={aboutData.cta.href} className="focus:outline-none">
                <Button variant="primary" className="shadow-md hover:shadow-lg hover:-translate-y-0.5 px-8 cursor-pointer">
                  {aboutData.cta.label}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-3xl shadow-2xl overflow-hidden relative group flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/50 bg-[var(--muted)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/80 dark:to-zinc-800/80 opacity-90 transition-opacity group-hover:opacity-100 backdrop-blur-xl"></div>
            
            {/* Minimalist wireframe/placeholder illustration */}
            <div className="relative z-10 flex flex-col items-center text-[var(--muted-foreground)] p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mb-6 opacity-30 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p className="font-semibold tracking-widest uppercase text-sm text-[var(--foreground)]">Operations & Strategy Hub</p>
              <p className="text-xs opacity-60 mt-3 max-w-[250px]">Our centralized operations hub coordinating cloud migrations, AI integrations, and developer teams globally.</p>
            </div>
            
            {/* Decorative grid pattern in placeholder */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};
