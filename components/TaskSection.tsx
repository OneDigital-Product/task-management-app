interface TaskSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  slug: string;
}

export function TaskSection({ title, description, children, slug }: TaskSectionProps) {
  return (
    <div className="mb-12">
      {/* Section header with forward slash */}
      <div className="mb-6">
        <h2 className="chunky-text text-4xl md:text-5xl text-primary mb-2">
          /{slug}
        </h2>
        <div className="w-full h-1 bg-primary mb-4"></div>
        <div className="mono-text text-lg text-foreground leading-relaxed max-w-4xl">
          <span className="font-bold text-primary">{title}</span> {description}
        </div>
      </div>

      {/* Section content */}
      <div className="terminal-border bg-card p-6">
        {children}
      </div>

      {/* Bottom decorative lines */}
      <div className="mt-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-px bg-border mb-1"
            style={{ 
              width: '100%',
              opacity: 0.3 + (i * 0.1)
            }}
          />
        ))}
      </div>
    </div>
  );
}