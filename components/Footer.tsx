import Link from 'next/link';
import { companies } from '@/data/companies';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre o Grupo */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">Grupo Injepol</h3>
            <p className="text-sm leading-relaxed mb-4">
              Tradição e inteligência em poliuretano e soluções industriais. 
              Injepol, Fenap e Moramo Brasil — empresas complementares, unidas 
              por qualidade, confiança e excelência técnica.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/empresas" 
                  className="hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Empresas
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Sites Oficiais */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Sites Oficiais</h3>
            <ul className="space-y-2 text-sm">
              {companies.map((company) => (
                <li key={company.id}>
                  <a
                    href={company.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-center">
          <p>© {currentYear} Grupo Injepol. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
