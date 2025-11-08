import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { BlogCard } from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/supabase';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    if (!posts || posts.length === 0) {
      return [];
    }
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${post.title} | Blog | Zenith Architecture`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const publishedDate = new Date(post.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main>
      <div className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
          <div className="text-sm text-blue-300 uppercase tracking-wide mb-4">{post.category}</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-blue-200">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{post.author_name}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{publishedDate}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-12 mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <article className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-300">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
                  {post.author_name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">{post.author_name}</h3>
                <p className="text-gray-600">Architecture & Design Expert</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Subscribe to our newsletter for the latest insights and industry news.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/contact">Subscribe</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
