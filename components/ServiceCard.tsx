import Link from 'next/link';
import { Service } from '@/types';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Star;

  return (
    <Link href={`/services/${service.slug}`}>
      <div className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="inline-block p-3 bg-blue-50 rounded-lg mb-4 group-hover:bg-blue-600 transition-colors duration-300">
          <IconComponent size={24} className="text-blue-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {service.description}
        </p>
        <div className="flex items-center text-blue-600 group-hover:translate-x-1 transition-transform">
          <span className="text-sm font-semibold">Learn more</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  );
}
