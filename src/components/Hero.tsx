import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Professional
              Ottawa
              Moving Services<br />
              You Can Trust
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Make your next move stress-free with our experienced team. We handle everything from packing to unpacking, ensuring your belongings arrive safely at your new home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white sm:px-40 px-16 py-6 rounded-lg font-medium text-xl transition-colors flex items-center justify-center">
                Get Free Quote
                <span className="ml-2">→</span>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6">

              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Exceptional Communication Day or Night</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Free Estimates</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Professional movers carrying boxes and furniture" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 text-center font-medium">
                Experienced movers handling your belongings with care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;