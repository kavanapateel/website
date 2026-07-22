import { motion } from 'framer-motion';
import { Container, Section, SectionHeader, Button } from '../../ui';
import { portfolioData } from '../../../data';

export const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <Section id="portfolio" background="default">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge={portfolioData.header.badge}
            title={portfolioData.header.title}
            description={portfolioData.header.description}
            align="left"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 lg:gap-12 mt-12"
        >
          {/* Featured Project */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-[var(--card)] rounded-3xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Featured Image Side */}
            <div className="h-64 sm:h-80 lg:h-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center relative overflow-hidden">
              {/* Subtle animated gradient overlay */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center p-6 text-center transform group-hover:scale-105 transition-transform duration-700">
                <svg className="w-16 h-16 text-blue-500/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-lg text-[var(--muted-foreground)] tracking-wide">
                  {portfolioData.featuredProject.imagePlaceholder}
                </span>
              </div>
              <div className="absolute inset-0 opacity-[0.05] dark:opacity-10" style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            </div>

            {/* Featured Content Side */}
            <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-[var(--card)]">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
                {portfolioData.featuredProject.category}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">
                {portfolioData.featuredProject.title}
              </h3>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8">
                {portfolioData.featuredProject.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-10">
                {portfolioData.featuredProject.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)]">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={portfolioData.featuredProject.href} className="focus:outline-none w-fit">
                <Button variant="primary" className="w-fit shadow-md group-hover:shadow-lg transition-all cursor-pointer" size="large">
                  View Case Study
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Secondary Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="group flex flex-col bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Secondary Image */}
                <div className="h-56 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/50 dark:to-zinc-800/50 flex items-center justify-center relative overflow-hidden border-b border-[var(--border)]">
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                  <div className="relative z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform duration-500">
                    <svg className="w-10 h-10 text-[var(--muted-foreground)]/50 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-sm text-[var(--muted-foreground)] tracking-wide px-4 text-center">
                      {project.imagePlaceholder}
                    </span>
                  </div>
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                </div>

                {/* Secondary Content */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.href}
                    className="inline-flex items-center text-sm font-semibold text-[var(--foreground)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
