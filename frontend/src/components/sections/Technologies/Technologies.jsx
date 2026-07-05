import { motion } from 'framer-motion';
import { Container, Section, SectionHeader } from '../../ui';
import { technologiesData } from '../../../data';

export const Technologies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  // Custom logo avatar component for technologies
  const TechLogo = ({ name }) => {
    // Generate a consistent pseudo-random color based on the name length to give visual variety
    const colors = ['bg-blue-500', 'bg-purple-500', 'bg-sky-500', 'bg-emerald-500', 'bg-rose-500', 'bg-amber-500'];
    const colorIndex = name.length % colors.length;
    const bgColor = colors[colorIndex];

    return (
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm ${bgColor} bg-opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        {name.charAt(0)}
      </div>
    );
  };

  return (
    <Section id="technologies" background="default">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge={technologiesData.header.badge}
            title={technologiesData.header.title}
            description={technologiesData.header.description}
            align="center"
          />
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
        >
          {technologiesData.categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="bg-[var(--card)] rounded-2xl p-6 lg:p-8 border border-[var(--border)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="mb-6 relative z-10">
                <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight">
                  {category.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-2">
                  {category.description}
                </p>
              </div>

              {/* Technologies List */}
              <ul className="space-y-4 relative z-10">
                {category.items.map((tech) => (
                  <li 
                    key={tech.id} 
                    className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-[var(--muted)] transition-colors duration-200 cursor-default"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <TechLogo name={tech.name} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[var(--foreground)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
                        {tech.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};
