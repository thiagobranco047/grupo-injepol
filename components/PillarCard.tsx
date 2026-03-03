interface PillarCardProps {
  title: string;
  description: string;
}

export default function PillarCard({ title, description }: PillarCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
