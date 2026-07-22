import clsx from 'clsx';

export const SectionHeader = ({
  badge,
  title,
  description,
  align = 'center',
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <div className={clsx('max-w-3xl mb-12 md:mb-16', alignmentClasses[align], className)}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-[var(--muted-foreground)] md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
};
