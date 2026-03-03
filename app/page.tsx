import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CompanyCard from '@/components/CompanyCard';
import PillarCard from '@/components/PillarCard';
import CTA from '@/components/CTA';
import { companies, groupPillars } from '@/data/companies';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Grupo Injepol: tradição e inteligência em poliuretano e soluções industriais"
        description="Injepol, Fenap e Moramo Brasil — empresas complementares, unidas por qualidade, confiança e excelência técnica."
      />

      {/* Força do Grupo */}
      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            A Força do Grupo Injepol
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Nosso diferencial está na união de expertise, infraestrutura e 
            compromisso com a excelência técnica e relações duradouras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupPillars.map((pillar) => (
            <PillarCard
              key={pillar.id}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </Section>

      {/* Empresas do Grupo */}
      <Section id="empresas">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Empresas do Grupo
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Três empresas especializadas, cada uma com seu foco de mercado, 
            unidas pela qualidade e tradição.
          </p>
        </div>

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

      {/* Sinergia */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Sinergia e Complementaridade
          </h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              O Grupo Injepol reúne empresas com décadas de experiência em 
              injeção de poliuretano, construção de moldes e desenvolvimento 
              de produtos técnicos para diversos segmentos industriais.
            </p>
            <p>
              Juntas, Injepol, Fenap e Moramo Brasil formam um grupo capaz de 
              atender demandas variadas — desde peças técnicas especializadas 
              até produtos para o consumidor final — mantendo sempre o mesmo 
              padrão de excelência, confiabilidade e comprometimento.
            </p>
            <p>
              Essa sinergia permite ao grupo oferecer soluções completas, 
              apoio técnico qualificado e parceria estratégica para o 
              desenvolvimento e fabricação de produtos inovadores.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section>
        <CTA
          title="Vamos conversar?"
          description="Entre em contato para conhecer melhor nossas soluções e como podemos ajudar seu negócio."
          buttonText="Fale conosco"
          buttonHref="/contato"
        />
      </Section>
    </>
  );
}
