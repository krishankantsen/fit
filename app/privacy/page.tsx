import { HeroSection } from "@/components/HeroSection";

export const metadata = {
  title: "Privacy Policy | Design Consultant Architecture",
  description: "Our privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <main>
      <HeroSection
        title="Privacy Policy"
        subtitle="Legal"
        description="How we handle your personal information"
        backgroundImage="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Privacy Policy</h2>
            <p>
              Design Consultant Architecture is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website.
            </p>

            <h3>Information We Collect</h3>
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect on the site includes:
            </p>
            <ul>
              <li>
                Personal data you voluntarily disclose (name, email, phone)
              </li>
              <li>Automatically collected data (cookies, usage patterns)</li>
              <li>Information from contact forms and inquiries</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the site to:
            </p>
            <ul>
              <li>Respond to your inquiries and requests</li>
              <li>Send you promotional information about our services</li>
              <li>Improve and optimize our website</li>
              <li>Generate analytics and insights</li>
            </ul>

            <h3>Disclosure of Your Information</h3>
            <p>
              We may disclose your information when required by law or to
              protect our rights. We do not sell, trade, or otherwise transfer
              to outside parties your personally identifiable information.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at info@Design Consultant-architecture.com.
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
