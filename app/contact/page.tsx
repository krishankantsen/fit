'use client';

import { useState, FormEvent } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { submitContactInquiry } from '@/lib/supabase';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry_type: 'general',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitContactInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.inquiry_type,
        message: formData.message,
      });

      toast.success('Thank you! We have received your inquiry. We will be in touch shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiry_type: 'general',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className='bg-black h-[80px]'></div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Phone</h3>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Offices</h3>
                    <div className="space-y-3">
                      {SITE_CONFIG.locations.map((location, idx) => (
                        <div key={idx}>
                          <p className="font-semibold text-gray-900">{location.city}</p>
                          <p className="text-sm text-gray-600">{location.address}</p>
                          <a
                            href={`tel:${location.phone}`}
                            className="text-sm text-blue-600 hover:text-blue-700"
                          >
                            {location.phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Quick Response</h3>
                <p className="text-gray-600">
                  We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="project">Project Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="career">Career</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your inquiry"
                  />
                </div>

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? 'Sending...' : 'Send Message'}
                  {!isLoading && <Send size={16} className="ml-2" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
