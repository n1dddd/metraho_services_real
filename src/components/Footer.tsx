import React from "react";
import { Phone } from 'lucide-react';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gray-200 p-2 rounded-lg">
                <Image
                  alt="MetraHo Services Logo"
                  priority
                  src="/images/metraho_services_logo.svg"
                  className="dark:invert"
                  height={90}
                  width={90}
                />
              </div>
              <span className="text-2xl font-bold">MetraHo Services</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Professional moving services you can trust. We make your
              relocation stress-free with our experienced team and comprehensive
              solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Residential Moving
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Commercial Moving
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Packing Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Long Distance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <Phone className="h-4 w-4 mr-1" />
              (647)-763-7427
              <li>metrahoservices@gmail.com</li>
              <li>Greater Ottawa Area</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
