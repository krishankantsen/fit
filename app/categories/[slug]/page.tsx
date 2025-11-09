import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { CATEGORIES, SERVICES } from "@/lib/constants";
import { getProjectsByCategory, getServices } from "@/lib/supabase";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${category.name} | Design Consultant Architecture`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({
  params,
}: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const projects = await getProjectsByCategory(category.id);
  const allServices = await getServices();

  const relevantServices = allServices.filter((service) =>
    SERVICES.find((s) => s.id === service.id)
  );

  return (
    <main>
      <HeroSection
        title={category.name}
        subtitle="Category"
        description={category.description}
        backgroundImage={category.image_url}
        cta={{ text: "Request Consultation", href: "/consultation" }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About {category.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            {category.description}
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Key Capabilities
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span className="text-gray-700">
                  Strategic planning and masterplanning
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span className="text-gray-700">
                  Conceptual and detailed design
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span className="text-gray-700">
                  Project management and coordination
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span className="text-gray-700">
                  Sustainable design integration
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 6).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {projects.length > 6 && (
              <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">View All Projects</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantServices.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Interested in a {category.name} Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact our team to discuss how we can help with your next project.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/consultation">Request Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
