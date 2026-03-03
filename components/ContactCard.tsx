interface ContactCardProps {
  companyName: string;
  email: string;
  whatsapp: string;
}

export default function ContactCard({
  companyName,
  email,
  whatsapp,
}: ContactCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-4">{companyName}</h3>
      
      <div className="space-y-3">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
            E-mail
          </p>
          <a
            href={`mailto:${email}`}
            className="text-slate-700 hover:text-slate-900 font-medium focus:outline-none focus:underline"
          >
            {email}
          </a>
        </div>

        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
            WhatsApp
          </p>
          <a
            href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900 font-medium focus:outline-none focus:underline"
          >
            {whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
}
