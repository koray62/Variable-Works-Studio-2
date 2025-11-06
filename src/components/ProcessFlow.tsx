import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ProcessFlow() {
  const { t } = useTranslation('common');
  
  const steps = [
    { title: t('process.step1'), color: 'from-blue-500 to-cyan-500' },
    { title: t('process.step2'), color: 'from-cyan-500 to-purple-500' },
    { title: t('process.step3'), color: 'from-purple-500 to-pink-500' },
    { title: t('process.step4'), color: 'from-pink-500 to-red-500' }
  ];

  return (
    <div className="bg-[#0A1628] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`bg-gradient-to-br ${step.color} p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform`}>
                <h3 className="text-2xl font-bold text-white text-center">{step.title}</h3>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-cyan-400">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-300 mt-12 text-lg">
          {t('process.subtitle')}
        </p>
      </div>
    </div>
  );
}
