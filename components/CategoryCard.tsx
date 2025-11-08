import Link from 'next/link';
import { Category } from '@/types';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Star;

  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="group overflow-hidden rounded-lg border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="relative overflow-hidden bg-gray-200 aspect-video">
          <img
            src={category.image_url}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-600 rounded-lg mb-2">
                <IconComponent size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center text-blue-600 group-hover:translate-x-1 transition-transform">
            <span className="text-sm font-semibold">Explore</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
