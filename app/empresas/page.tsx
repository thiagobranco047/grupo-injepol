import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CompanyCard from '@/components/CompanyCard';
import { companies } from '@/data/companies';

export const metadata: Metadata = {
  title: 'Empresas',
  description: 'Conheça as empresas que formam o Grupo Injepol: Injepol, Fenap e Moramo Brasil.',
};

export default function EmpresasPage() {
  return (
    <>
      <Hero
        subtitle="Grupo Injepol"
        title="Nossas Empresas"
        description="Conheça as empresas especializadas que compõem o Grupo Injepol, cada uma com expertise própria e compromisso com qualidade."
        className="min-h-[50vh]"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              name={company.name}
              description={company.description}
              tags={company.setorTags}
              logoInitials={company.logoInitials}
              href={`/empresas/${company.slug}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
