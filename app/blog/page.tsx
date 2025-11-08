import { HeroSection } from '@/components/HeroSection';
import { BlogCard } from '@/components/BlogCard';
import { BLOG_CATEGORIES } from '@/lib/constants';
import { getBlogPosts } from '@/lib/supabase';

export const metadata = {
  title: 'Blog & Insights | Zenith Architecture',
  description: 'Read our latest articles on architecture, design trends, sustainability, and industry insights.',
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <main>
      <HeroSection
        title="Blog & Insights"
        subtitle="Latest Articles"
        description="Industry news, case studies, and insights on architecture and design"
        backgroundImage="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((category) => (
                <button
                  key={category.slug}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {blogPosts.length > 0 ? (
            <div>
              {/* Featured Post */}
              {blogPosts.length > 0 && (
                <div className="mb-16 pb-16 border-b border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <img
                        src={blogPosts[0].featured_image_url}
                        alt={blogPosts[0].title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="text-sm text-blue-600 font-semibold uppercase mb-2">
                        {blogPosts[0].category}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="text-sm text-gray-500">
                        By {blogPosts[0].author_name} • {new Date(blogPosts[0].published_date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* All Posts */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
