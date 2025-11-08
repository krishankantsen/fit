import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = project.image_urls?.[0] || 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg';

  return (
    <Link href={`/portfolio/${project.slug}`}>
      <div className="group overflow-hidden rounded-lg border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="relative overflow-hidden bg-gray-200 aspect-video">
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-600 uppercase">
              {project.location}
            </span>
            <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
}
