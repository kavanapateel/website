export const portfolioData = {
  header: {
    badge: 'Our Work',
    title: 'Featured Deployments',
    description: 'A selection of production systems we have engineered to solve high-concurrency, security, and scaling challenges.'
  },
  featuredProject: {
    id: 'project-1',
    title: 'High-Throughput Payment Gateway',
    description: 'Designed and deployed a highly secure, PCI-compliant payment engine processing over 500,000 requests daily. The system reduces API latency and supports active-active multi-region failover.',
    category: 'Infrastructure & Security',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    imagePlaceholder: 'Enterprise FinTech System Schema',
    href: '#contact'
  },
  projects: [
    {
      id: 'project-2',
      title: 'AI Demand Forecasting Platform',
      description: 'Built a predictive data pipeline using machine learning models to analyze order patterns and forecast supply chain needs, reducing stock imbalances.',
      category: 'Data & Machine Learning',
      technologies: ['Python', 'TensorFlow', 'React', 'GCP'],
      imagePlaceholder: 'Demand Forecasting Dashboard',
      href: '#contact'
    },
    {
      id: 'project-3',
      title: 'HIPAA-Compliant Telehealth App',
      description: 'Developed a cross-platform mobile application supporting encrypted video consults, patient schedules, and secure clinical records.',
      category: 'Mobile Systems',
      technologies: ['React Native', 'WebRTC', 'AWS'],
      imagePlaceholder: 'Encrypted Telehealth Interface',
      href: '#contact'
    },
    {
      id: 'project-4',
      title: 'Enterprise ERP Migration',
      description: 'Orchestrated the migration of a legacy, on-premise inventory system into a cloud-native microservices architecture, improving reliability.',
      category: 'Cloud Migration',
      technologies: ['Next.js', 'Go', 'Kubernetes'],
      imagePlaceholder: 'ERP Microservices Layout',
      href: '#contact'
    }
  ]
};
