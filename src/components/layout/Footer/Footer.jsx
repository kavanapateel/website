import { Container } from '../../ui';
import { footerData } from '../../../data';

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-[var(--border)] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col pr-0 lg:pr-8">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-block text-2xl font-extrabold text-[var(--foreground)] tracking-tighter mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm w-fit"
            >
              {footerData.company.logo}
            </a>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6">
              {footerData.company.description}
            </p>
            
            <div className="flex flex-col gap-2 mb-8 text-sm">
              <a 
                href={`mailto:${footerData.company.email}`} 
                className="text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm w-fit"
              >
                {footerData.company.email}
              </a>
              <a 
                href={`tel:${footerData.company.phone.replace(/[^0-9+]/g, '')}`} 
                className="text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm w-fit"
              >
                {footerData.company.phone}
              </a>
            </div>

            {/* Social Icons Placeholders */}
            <div className="flex gap-4">
              {footerData.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  aria-label={social.platform}
                  className="w-10 h-10 rounded-full bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2-4: Links */}
          {footerData.linkGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col">
              <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider mb-6">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-[var(--muted-foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm w-fit inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--muted-foreground)] text-sm text-center md:text-left">
            {footerData.copyright}
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <span>Designed with</span>
            <svg className="w-4 h-4 text-rose-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>by PentaByte Labs</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
