import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import LogoPlaceholder from '@/components/LogoPlaceholder';
import { companies } from '@/data/companies';
import Link from 'next/link';

interface CompanyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return companies.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    return {
      title: 'Empresa não encontrada',
    };
  }

  return {
    title: company.name,
    description: company.description.substring(0, 160),
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    notFound();
  }

  return (
    <>
      <Hero
        subtitle="Grupo Injepol"
        title={company.name}
        description={company.slogan || ''}
        className="min-h-[40vh]"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Logo e Informações Básicas */}
          <div className="flex items-start space-x-6 mb-8">
            <LogoPlaceholder initials={company.logoInitials} size="lg" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Sobre a {company.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {company.setorTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Diferenciais */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Diferenciais
            </h3>
            <ul className="space-y-3">
              {company.diferenciais.map((diferencial, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-slate-700"
                >
                  <svg
                    className="w-6 h-6 text-slate-900 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{diferencial}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="bg-slate-50 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Entre em contato
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">
                  E-mail
                </p>
                <a
                  href={`mailto:${company.contactEmail}`}
                  className="text-slate-900 font-medium hover:text-slate-700 focus:outline-none focus:underline"
                >
                  {company.contactEmail}
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-medium hover:text-slate-700 focus:outline-none focus:underline"
                >
                  {company.whatsapp}
                </a>
              </div>
            </div>
            <a
              href={company.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 text-white px-6 py-3 rounded font-medium hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              Visitar site oficial
            </a>
          </div>

          {/* Voltar */}
          <div className="mt-8">
            <Link
              href="/empresas"
              className="text-slate-600 hover:text-slate-900 font-medium focus:outline-none focus:underline"
            >
              ← Voltar para empresas
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
