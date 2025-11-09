import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { getServices, getProjects } from "@/lib/supabase";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${service.name} | Design Consultant Architecture`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const allProjects = await getProjects();
  const relatedProjects = allProjects.slice(0, 3);

  return (
    <main>
      <HeroSection
        title={service.name}
        subtitle="Our Service"
        description={service.description}
        backgroundImage="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
        cta={{ text: "Request Service", href: "/contact" }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {service.name}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {service.detailed_description}
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded mb-12">
            <h3 className="font-bold text-xl text-gray-900 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Expert team with extensive experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>State-of-the-art technology and tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Sustainable and innovative approaches</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Quality assurance and compliance focus</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Process</h3>
              <ol className="space-y-2 text-gray-600 text-sm">
                <li>1. Initial consultation</li>
                <li>2. Project assessment</li>
                <li>3. Proposal development</li>
                <li>4. Execution</li>
                <li>5. Delivery & support</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Deliverables
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Comprehensive reports</li>
                <li>• Technical drawings</li>
                <li>• 3D models & visualizations</li>
                <li>• Quality documentation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Timeline</h3>
              <p className="text-gray-600 text-sm mb-3">
                Project duration varies based on scope and complexity. We
                provide detailed timelines during consultation.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/consultation">Get Timeline</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
              Project Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Complementary Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.filter((s) => s.id !== service.id)
              .slice(0, 2)
              .map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact our team to discuss how {service.name} can benefit your
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/contact">Request Service</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              <Link href="/consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
