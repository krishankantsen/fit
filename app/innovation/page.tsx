import { HeroSection } from '@/components/HeroSection';
import { AWARDS } from '@/lib/constants';

export const metadata = {
  title: 'Innovation & Sustainability | Zenith Architecture',
  description: 'Learn about our commitment to sustainability, green building practices, and innovative technologies like BIM and laser scanning.',
};

export default function InnovationPage() {
  return (
    <main>
      <HeroSection
        title="Innovation & Sustainability"
        subtitle="Our Commitment"
        description="Pioneering sustainable design and advanced technologies"
        backgroundImage="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Sustainable Design Philosophy
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Our approach to sustainability is inspired by the timeless principles of Laurie Baker, who demonstrated that sensitive, contextual design using local materials and passive strategies can create comfortable, durable spaces while minimizing environmental impact.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We integrate sustainable practices across all project phases, from site selection and material sourcing to operational efficiency and end-of-life considerations. This holistic approach ensures that our designs benefit both immediate users and future generations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Green Building Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">♻</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Material Selection</h3>
              <p className="text-gray-600">
                Prioritize renewable, recycled, and locally-sourced materials that minimize embodied carbon and support regional economies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">☀</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">
                Optimize passive heating and cooling, integrate renewable energy systems, and design for operational carbon reduction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">💧</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Water Management</h3>
              <p className="text-gray-600">
                Implement rainwater harvesting, greywater systems, and efficient fixtures to minimize water consumption and waste.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">🌱</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Biodiversity</h3>
              <p className="text-gray-600">
                Protect and enhance site biodiversity through thoughtful landscape design and habitat conservation strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">🔍</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Indoor Air Quality</h3>
              <p className="text-gray-600">
                Prioritize natural ventilation, non-toxic materials, and healthy indoor environments for occupant wellbeing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">📊</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Performance Monitoring</h3>
              <p className="text-gray-600">
                Track and optimize building performance metrics to ensure sustainability goals are achieved post-completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Advanced Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Information Modeling (BIM)</h3>
              <p className="text-gray-600 mb-4">
                Our BIM services enable integrated project delivery, improved coordination, and better decision-making throughout the project lifecycle. We use BIM for:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>3D design and visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Clash detection and coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Cost and schedule analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Lifecycle and asset management</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3D Laser Scanning</h3>
              <p className="text-gray-600 mb-4">
                High-precision 3D scanning technology captures existing conditions with millimeter accuracy. Perfect for:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>As-built documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Renovation and retrofit projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Heritage site recording</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Complex geometry capture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Certifications & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">LEED Certification</h3>
              <p className="text-sm text-gray-600">Committed to sustainable design and green building standards</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">ISO 9001</h3>
              <p className="text-sm text-gray-600">Quality management systems and continuous improvement</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">ISO 14001</h3>
              <p className="text-sm text-gray-600">Environmental management and sustainability practices</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Passive House</h3>
              <p className="text-sm text-gray-600">Ultra-efficient building design and certification</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Living Building Challenge</h3>
              <p className="text-sm text-gray-600">Regenerative design and net-positive impact projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">AIA COTE</h3>
              <p className="text-sm text-gray-600">Sustainable architectural design recognition</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Innovation Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-200"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                    {award.year}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{award.name}</h3>
                  <p className="text-sm text-gray-600">{award.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
