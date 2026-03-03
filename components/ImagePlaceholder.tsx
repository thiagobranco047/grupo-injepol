interface ImagePlaceholderProps {
  className?: string;
  alt?: string;
}

export default function ImagePlaceholder({ 
  className = '', 
  alt = 'Imagem placeholder' 
}: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 ${className}`}
      role="img"
      aria-label={alt}
    />
  );
}
