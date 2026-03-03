import Link from 'next/link';
import LogoPlaceholder from './LogoPlaceholder';

interface CompanyCardProps {
  name: string;
  description: string;
  tags: string[];
  logoInitials: string;
  href: string;
}

export default function CompanyCard({
  name,
  description,
  tags,
  logoInitials,
  href,
}: CompanyCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-start space-x-4 mb-4">
        <LogoPlaceholder initials={logoInitials} size="sm" />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
        {description}
      </p>

      <Link
        href={href}
        className="inline-block text-center bg-slate-900 text-white px-6 py-3 rounded font-medium hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      >
        Saiba mais
      </Link>
    </div>
  );
}
