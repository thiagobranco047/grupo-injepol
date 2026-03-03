import ImagePlaceholder from './ImagePlaceholder';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function Hero({ title, subtitle, description, className = '' }: HeroProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background */}
      <ImagePlaceholder 
        className="absolute inset-0 w-full h-full" 
        alt="Hero background"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-slate-300 text-sm md:text-base font-medium uppercase tracking-wider mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
