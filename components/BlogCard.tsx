import Link from 'next/link';
import { BlogPost } from '@/types';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const publishedDate = new Date(post.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group overflow-hidden rounded-lg border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="relative overflow-hidden bg-gray-200 aspect-video">
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <div className="p-6 bg-white">
          <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{publishedDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{post.author_name}</span>
            </div>
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center text-blue-600 group-hover:translate-x-1 transition-transform">
            <span className="text-sm font-semibold">Read more</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
