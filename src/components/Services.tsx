import React from 'react';
import { Home, Building, Package, MapPin, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Moving",
      description: "Complete home moving services including packing, loading, transportation, and unpacking.",
      features: ["Furniture disassembly", "Packing supplies", "Safe transport"],
      color: "blue"
    },
    {
      icon: Building,
      title: "Commercial Moving",
      description: "Professional office and business relocations with minimal downtime.",
      features: ["Office equipment", "Document handling", "After-hours service"],
      color: "blue"
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Expert packing and unpacking services to protect your valuable items.",
      features: ["Professional packing", "Quality materials", "Fragile item care"],
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Long Distance",
      description: "Safe and reliable long-distance moving services across state lines.",
      features: ["Interstate moves", "Tracking service", "Insurance coverage"],
      color: "blue"
    },
    {
      icon: Clock,
      title: "Emergency Moving",
      description: "Quick response moving services for urgent relocation needs.",
      features: ["Same-day service", "Flexible scheduling", "Rapid response"],
      color: "blue"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Moving Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential moves to commercial relocations, we provide comprehensive moving solutions tailored to your needs.
          </p>
        </div>
        
        {/* First row - 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100 hover:border-blue-200">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        {/* Second row - 2 services centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {services.slice(3, 5).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index + 3} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100 hover:border-blue-200">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;