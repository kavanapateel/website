import { motion } from 'framer-motion';
import { Container, Section, SectionHeader } from '../../ui';
import { servicesData } from '../../../data';

const ServiceIcon = ({ type }) => {
  const iconClasses = "w-7 h-7 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3";
  
  switch (type) {
    case 'code':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case 'cloud':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    case 'ai':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      );
    case 'mobile':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      );
    default:
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      );
  }
};

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <Section id="services" background="muted">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge={servicesData.header.badge}
            title={servicesData.header.title}
            description={servicesData.header.description}
            align="center"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-4"
        >
          {servicesData.items.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative bg-[var(--card)] rounded-3xl p-8 lg:p-10 border border-[var(--border)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle gradient hover effect inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <ServiceIcon type={service.icon} />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a
                  href={service.href}
                  className="inline-flex items-center text-base font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors mt-auto w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                >
                  Learn more
                  <svg
                    className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};
