interface LogoPlaceholderProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LogoPlaceholder({ 
  initials, 
  size = 'md',
  className = '' 
}: LogoPlaceholderProps) {
  const sizeClasses = {
    sm: 'w-16 h-16 text-lg',
    md: 'w-24 h-24 text-2xl',
    lg: 'w-32 h-32 text-3xl'
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-bold text-slate-700 ${className}`}
      aria-label={`Logo ${initials}`}
    >
      {initials}
    </div>
  );
}
