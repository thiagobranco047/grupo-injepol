import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import ContactCard from '@/components/ContactCard';
import { companies } from '@/data/companies';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o Grupo Injepol. Estamos prontos para atender você.',
};

export default function ContatoPage() {
  return (
    <>
      <Hero
        subtitle="Grupo Injepol"
        title="Fale Conosco"
        description="Estamos prontos para atender você. Entre em contato através do formulário ou pelos canais diretos de cada empresa."
        className="min-h-[40vh]"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Formulário */}
          <div>
            <ContactForm />
          </div>

          {/* Informações de Contato */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Contato Direto
              </h2>
              <p className="text-slate-600">
                Prefere falar diretamente? Escolha a empresa e entre em 
                contato pelos nossos canais oficiais.
              </p>
            </div>

            <div className="space-y-4">
              {companies.map((company) => (
                <ContactCard
                  key={company.id}
                  companyName={company.name}
                  email={company.contactEmail}
                  whatsapp={company.whatsapp}
                />
              ))}
            </div>

            {/* Nota sobre dados de contato */}
            {/* <div className="mt-6 p-4 bg-slate-50 rounded border border-slate-200">
              <p className="text-sm text-slate-600">
                <strong>Nota:</strong> Os dados de contato acima são placeholders. 
                Para atualizar com informações reais, edite o arquivo{' '}
                <code className="text-xs bg-slate-200 px-1 py-0.5 rounded">
                  data/companies.ts
                </code>
              </p>
            </div> */}
          </div>
        </div>
      </Section>
    </>
  );
}
