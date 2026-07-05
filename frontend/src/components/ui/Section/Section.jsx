import clsx from 'clsx';

export const Section = ({
  id,
  children,
  className,
  background = 'default',
  ...props
}) => {
  const backgrounds = {
    default: 'bg-[var(--background)]',
    muted: 'bg-[var(--muted)]',
    dark: 'bg-[var(--foreground)] text-[var(--background)]',
  };

  return (
    <section
      id={id}
      className={clsx('py-16 md:py-24 lg:py-32', backgrounds[background], className)}
      {...props}
    >
      {children}
    </section>
  );
};
