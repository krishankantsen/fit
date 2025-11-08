'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, CATEGORIES, SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">Z</span>
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">Zenith</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                Categories
              </button>
              <div className="hidden group-hover:block absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 text-sm"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                Services
              </button>
              <div className="hidden group-hover:block absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.id}
                    href={`/services/${svc.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 text-sm"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/portfolio" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Portfolio
            </Link>

            <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>

            <Link href="/innovation" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Innovation
            </Link>

            <Link href="/blog" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>

            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/consultation">Consultation</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/portfolio" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
              Portfolio
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
              About
            </Link>
            <Link href="/innovation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
              Innovation
            </Link>
            <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
              Blog
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
              Contact
            </Link>
            <div className="px-4 py-2">
              <Button asChild className="w-full">
                <Link href="/consultation">Consultation</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
