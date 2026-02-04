interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
}

const PageHeader = ({ title, subtitle, description, badge }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-16 bg-secondary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {badge && (
          <span className="inline-block text-gold font-medium uppercase tracking-widest text-sm mb-4">
            {badge}
          </span>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gold font-medium mb-4">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
