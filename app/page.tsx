import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { CategoryCard } from '@/components/CategoryCard';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { BlogCard } from '@/components/BlogCard';
import { StatCard } from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { CATEGORIES, SERVICES, TESTIMONIALS, AWARDS } from '@/lib/constants';
import { getProjects, getBlogPosts } from '@/lib/supabase';

export default async function Home() {
  const projects = await getProjects();
  const blogPosts = await getBlogPosts();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);
  const recentBlogPosts = blogPosts.slice(0, 3);

  return (
    <main>
      <HeroSection
        title="Transforming Visions into Built Reality"
        subtitle="Welcome to Zenith"
        description="Award-winning architecture and engineering firm specializing in sustainable design, innovative solutions, and transformative projects across the globe."
        backgroundImage="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
        cta={{ text: 'Start Your Project', href: '/consultation' }}
        secondaryCta={{ text: 'View Our Work', href: '/portfolio' }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring together multidisciplinary teams to deliver exceptional results across diverse project categories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/categories">View All Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive professional services to bring your projects to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Showcasing our most significant recent work across diverse sectors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">Explore All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard number="300" label="Completed Projects" suffix="+" />
            <StatCard number="25" label="Years of Experience" suffix="+" />
            <StatCard number="80" label="Team Members" suffix="+" />
            <StatCard number="15" label="International Awards" suffix="+" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium mt-1">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {recentBlogPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Latest Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry news, case studies, and insights on architecture and sustainability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentBlogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/blog">Read More Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/consultation">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
