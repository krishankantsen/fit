import { HeroSection } from "@/components/HeroSection";

export const metadata = {
  title: "Terms of Service | Design Consultant Architecture",
  description: "Terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <main>
      <HeroSection
        title="Terms of Service"
        subtitle="Legal"
        description="Terms and conditions for our website"
        backgroundImage="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Terms of Service</h2>
            <p>
              Please read these terms and conditions carefully before using
              Design Consultant Architecture's website and services.
            </p>

            <h3>Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Design Consultant
              Architecture's website for personal, non-commercial transitory
              viewing only. This is the grant of a license, not a transfer of
              title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display
              </li>
              <li>Attempt to decompile or reverse engineer the software</li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
            </ul>

            <h3>Disclaimer</h3>
            <p>
              The materials on Design Consultant Architecture's website are
              provided on an 'as is' basis. Design Consultant Architecture makes
              no warranties, expressed or implied, and hereby disclaims and
              negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>

            <h3>Limitations</h3>
            <p>
              In no event shall Design Consultant Architecture or its suppliers
              be liable for any damages (including, without limitation, damages
              for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on Design
              Consultant Architecture's website.
            </p>

            <h3>Accuracy of Materials</h3>
            <p>
              The materials appearing on Design Consultant Architecture's
              website could include technical, typographical, or photographic
              errors. Design Consultant Architecture does not warrant that any
              of the materials on its website are accurate, complete, or
              current.
            </p>

            <h3>Links</h3>
            <p>
              Design Consultant Architecture has not reviewed all of the sites
              linked to its website and is not responsible for the contents of
              any such linked site. The inclusion of any link does not imply
              endorsement by Design Consultant Architecture of the site. Use of
              any such linked website is at the user's own risk.
            </p>

            <h3>Modifications</h3>
            <p>
              Design Consultant Architecture may revise these terms of service
              for its website at any time without notice. By using this website,
              you are agreeing to be bound by the then current version of these
              terms of service.
            </p>

            <p className="text-sm text-gray-500 italic mt-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
