import { motion } from 'framer-motion';
import { Container, Section, SectionHeader } from '../../ui';
import { testimonialsData } from '../../../data';

export const Testimonials = () => {
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

  // Helper component to render stars
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index} 
            className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-amber-400' : 'text-zinc-300 dark:text-zinc-700'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <Section id="testimonials" background="default">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge={testimonialsData.header.badge}
            title={testimonialsData.header.title}
            description={testimonialsData.header.description}
            align="center"
          />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
        >
          {testimonialsData.items.map((testimonial, index) => {
            // Generate a consistent random-looking color based on index
            const colors = ['bg-blue-600', 'bg-purple-600', 'bg-emerald-600', 'bg-rose-600', 'bg-amber-600', 'bg-sky-600'];
            const avatarBg = colors[index % colors.length];

            return (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="group relative bg-[var(--background)] rounded-2xl p-8 border border-[var(--border)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-6 right-6 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                  <svg className="w-16 h-16 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="mb-6 relative z-10">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Quote Content */}
                <blockquote className="text-[var(--foreground)] text-lg leading-relaxed mb-8 flex-grow relative z-10 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-[var(--border)] group-hover:border-blue-500/30 transition-colors duration-300">
                  {/* Avatar Placeholder */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-[var(--background)] group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.avatarInitials}
                  </div>
                  
                  {/* Details */}
                  <div className="flex flex-col">
                    <span className="font-bold text-[var(--foreground)] text-sm tracking-tight">
                      {testimonial.clientName}
                    </span>
                    <span className="text-[var(--muted-foreground)] text-xs mt-0.5">
                      {testimonial.role}, <span className="text-blue-600 dark:text-blue-400 font-medium">{testimonial.companyName}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
};
