import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "1,000+" },
    { icon: Clock, label: "Years Experience", value: "10+" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose MetraHo Services?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 10 years of experience in the moving industry, we've built our reputation on reliability, professionalism, and customer satisfaction. Our team of trained professionals ensures your belongings are handled with the utmost care.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.stockcake.com/public/e/f/a/efa25a4c-b568-4205-b8da-077762dfda28_large/loading-moving-truck-stockcake.jpg" 
              alt="Moving truck and professional movers" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;