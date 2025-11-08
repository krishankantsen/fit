import { HeroSection } from '@/components/HeroSection';
import { StatCard } from '@/components/StatCard';
import { AWARDS } from '@/lib/constants';
import { getTeamMembers } from '@/lib/supabase';

export const metadata = {
  title: 'About Us | Zenith Architecture',
  description: 'Learn about Zenith Architecture, our history, values, team, and awards in the architecture and engineering industry.',
};

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();

  return (
    <main>
      <HeroSection
        title="About Zenith"
        subtitle="Who We Are"
        description="A multidisciplinary firm committed to design excellence and sustainable innovation"
        backgroundImage="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Founded in 1998, Zenith Architecture began with a simple mission: to design and build better spaces that enhance human experience while respecting environmental responsibility. Over the past 25 years, we've evolved into a multidisciplinary firm with offices across three continents.
          </p>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Our approach combines rigorous technical expertise with creative innovation. We believe that exceptional design emerges from deep understanding of client needs, site context, and cultural significance. Every project is an opportunity to push boundaries and create lasting value.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Today, we're proud to have completed over 300 projects across 12 major categories, with a team of 80+ professionals spanning architecture, engineering, landscape design, and project management.
          </p>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We pursue design and technical excellence in every project, regardless of scale or complexity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility guides our design philosophy and project delivery approach.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace emerging technologies and methodologies to create innovative solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Multidisciplinary teamwork and stakeholder engagement drive our best outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <StatCard number="300" label="Projects Completed" suffix="+" />
            <StatCard number="25" label="Years of Experience" suffix="+" />
            <StatCard number="80" label="Team Members" suffix="+" />
            <StatCard number="15" label="International Awards" suffix="+" />
          </div>
        </div>
      </section>

      {teamMembers.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.slice(0, 8).map((member) => (
                <div key={member.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  {member.image_url && (
                    <img
                      src={member.image_url}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-3">{member.role}</p>
                    {member.bio && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                    )}
                    {member.expertise && member.expertise.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.slice(0, 2).map((exp, idx) => (
                          <span key={idx} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                            {exp}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AWARDS.map((award, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <span className="font-bold">{award.year}</span>
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
