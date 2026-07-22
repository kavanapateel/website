export const technologiesData = {
  header: {
    badge: 'Our Tech Stack',
    title: 'Core Technologies We Trust',
    description: 'We prioritize mature, well-supported technologies to build resilient applications, scalable APIs, and automated infrastructure.'
  },
  categories: [
    {
      id: 'frontend',
      title: 'Frontend & Mobile',
      description: 'Responsive user interfaces, type-safe development, and native mobile apps.',
      items: [
        { id: 'react', name: 'React', desc: 'Interactive web application development' },
        { id: 'nextjs', name: 'Next.js', desc: 'Production-grade React framework' },
        { id: 'typescript', name: 'TypeScript', desc: 'Type safety and scaling codebase support' }
      ]
    },
    {
      id: 'backend',
      title: 'Systems & Cloud',
      description: 'Concurrent backends, distributed systems, and containerized deployments.',
      items: [
        { id: 'node', name: 'Node.js', desc: 'Asynchronous API development' },
        { id: 'go', name: 'Go', desc: 'High-performance microservices' },
        { id: 'aws', name: 'AWS', desc: 'Secure cloud hosting and serverless' }
      ]
    },
    {
      id: 'ai-devops',
      title: 'AI & DevOps',
      description: 'Intelligent inference pipelines and automated container infrastructure.',
      items: [
        { id: 'python', name: 'Python', desc: 'Data engineering and ML model support' },
        { id: 'pytorch', name: 'PyTorch', desc: 'Deep learning workflow implementation' },
        { id: 'docker', name: 'Docker', desc: 'Standardized container environments' }
      ]
    }
  ]
};
