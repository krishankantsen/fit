import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Z</span>
              </div>
              <span className="font-bold text-lg text-white">Zenith</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/innovation" className="hover:text-blue-400 transition-colors">Innovation</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/residential" className="hover:text-blue-400 transition-colors">Residential</Link></li>
              <li><Link href="/categories/commercial" className="hover:text-blue-400 transition-colors">Commercial</Link></li>
              <li><Link href="/categories/education" className="hover:text-blue-400 transition-colors">Education</Link></li>
              <li><Link href="/categories/healthcare" className="hover:text-blue-400 transition-colors">Healthcare</Link></li>
              <li><Link href="/categories/infrastructure" className="hover:text-blue-400 transition-colors">Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-blue-400 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-blue-400 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{SITE_CONFIG.locations[0].city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
