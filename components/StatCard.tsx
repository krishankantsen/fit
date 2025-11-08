interface StatCardProps {
  number: string;
  label: string;
  suffix?: string;
}

export function StatCard({ number, label, suffix }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
        {number}
        {suffix && <span className="text-3xl sm:text-4xl">{suffix}</span>}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}
