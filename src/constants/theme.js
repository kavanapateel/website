export const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6', // Brand Blue
      600: '#2563eb',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      500: '#8b5cf6', // Brand Purple
      600: '#7c3aed',
      900: '#4c1d95',
    },
    accent: {
      light: '#38bdf8',
      DEFAULT: '#0ea5e9',
      dark: '#0284c7',
    },
    background: {
      light: '#ffffff',
      dark: '#09090b', // Zinc 950
      altLight: '#f4f4f5', // Zinc 100
      altDark: '#18181b', // Zinc 900
    },
    text: {
      light: '#fafafa',
      dark: '#09090b',
      mutedLight: '#a1a1aa', // Zinc 400
      mutedDark: '#52525b', // Zinc 600
    },
  },
  typography: {
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Poppins', 'system-ui', 'sans-serif'],
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
  },
  spacing: {
    section: {
      sm: 'py-12',
      md: 'py-16 md:py-24',
      lg: 'py-24 md:py-32',
    },
    element: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-8',
    },
  },
  borderRadius: {
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    glow: '0 0 15px -3px rgba(59, 130, 246, 0.4)',
  },
  gradients: {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-500',
    text: 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    DEFAULT: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  zIndex: {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  containerWidth: {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
  },
};
