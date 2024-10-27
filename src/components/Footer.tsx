import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-white">Antworers</span>
            </div>
            <p className="text-gray-400 text-base">
              Making the world a better place through advanced AI analytics solutions.
            </p>
            <div className="flex space-x-6">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6">{/* Icon would go here */}</div>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  {['Analytics', 'Automation', 'Integration', 'Security'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {['Documentation', 'Guides', 'API Status', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {['Privacy', 'Terms', 'License', 'Patents'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Antworers LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;