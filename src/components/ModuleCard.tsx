import React from 'react';

interface ModuleCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  gradient: string;
}

export default function ModuleCard({ title, description, features, image, gradient }: ModuleCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} p-1 rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2`}>
      <div className="bg-[#0A1628] rounded-2xl p-8 h-full">
        <div className="w-20 h-20 mb-6 rounded-xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-200">
              <span className="text-[#00D9FF] mr-2 flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
