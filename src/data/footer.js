export const footerData = {
  company: {
    logo: 'PentaByte Labs',
    description: 'Engineering the future of enterprise technology with scalable, secure, and intelligent digital solutions.',
    email: 'hello@pentabytelabs.com',
    phone: '+1 (555) 123-4567'
  },
  linkGroups: [
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Services',
      items: [
        { label: 'Custom Software', href: '/services/software' },
        { label: 'Cloud Architecture', href: '/services/cloud' },
        { label: 'AI & Data Science', href: '/services/ai' },
        { label: 'Mobile Development', href: '/services/mobile' }
      ]
    },
    {
      title: 'Quick Links',
      items: [
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Blog & Insights', href: '/blog' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  ],
  socials: [
    { id: 'linkedin', platform: 'LinkedIn', url: '#' },
    { id: 'twitter', platform: 'Twitter', url: '#' },
    { id: 'github', platform: 'GitHub', url: '#' },
    { id: 'dribbble', platform: 'Dribbble', url: '#' }
  ],
  copyright: `© ${new Date().getFullYear()} PentaByte Labs. All rights reserved.`
};
