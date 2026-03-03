import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'primary' | 'secondary';
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonHref,
  variant = 'primary',
}: CTAProps) {
  const bgClass = variant === 'primary' ? 'bg-slate-900' : 'bg-slate-100';
  const textClass = variant === 'primary' ? 'text-white' : 'text-slate-900';
  const buttonClass =
    variant === 'primary'
      ? 'bg-white text-slate-900 hover:bg-slate-100'
      : 'bg-slate-900 text-white hover:bg-slate-800';

  return (
    <div className={`${bgClass} ${textClass} rounded-lg p-8 md:p-12 text-center`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className={`text-lg mb-8 ${variant === 'primary' ? 'text-slate-300' : 'text-slate-600'}`}>
        {description}
      </p>
      <Link
        href={buttonHref}
        className={`inline-block ${buttonClass} px-8 py-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2`}
      >
        {buttonText}
      </Link>
    </div>
  );
}
