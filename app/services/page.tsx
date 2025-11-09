import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/constants";

export const metadata = {
  title: "Professional Services | Design Consultant Architecture",
  description:
    "Explore our comprehensive professional services including architectural design, structural engineering, project management, BIM, and more.",
};

export default function ServicesPage() {
  return (
    <main>
      <HeroSection
        title="Professional Services"
        subtitle="Our Offerings"
        description="Comprehensive services to bring your vision to life"
        backgroundImage="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Integrated Service Delivery
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            We offer integrated service packages tailored to your specific
            project needs, combining expertise across multiple disciplines for
            optimal results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Design Services
              </h3>
              <p className="text-gray-600 mb-4">
                From conceptual sketches to detailed construction documents, we
                provide comprehensive design services across all project phases.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Architectural Design</li>
                <li>• Structural Engineering</li>
                <li>• Landscape Architecture</li>
                <li>• BIM Modeling</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Consulting Services
              </h3>
              <p className="text-gray-600 mb-4">
                Expert consultation on project feasibility, sustainability,
                valuation, and technical specifications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Land Survey & Analysis</li>
                <li>• Infrastructure Planning</li>
                <li>• Property Valuation</li>
                <li>• 3D Laser Scanning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
