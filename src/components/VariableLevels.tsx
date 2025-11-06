import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function VariableLevels() {
  const { t } = useTranslation('content');
  const [activeLevel, setActiveLevel] = useState(0);

  const levels = [
    {
      title: t('variables.level1.title'),
      subtitle: t('variables.level1.subtitle'),
      description: t('variables.level1.desc'),
      features: [t('variables.level1.f1'), t('variables.level1.f2'), t('variables.level1.f3'), t('variables.level1.f4')]
    },
    {
      title: t('variables.level2.title'),
      subtitle: t('variables.level2.subtitle'),
      description: t('variables.level2.desc'),
      features: [t('variables.level2.f1'), t('variables.level2.f2'), t('variables.level2.f3'), t('variables.level2.f4')]
    },
    {
      title: t('variables.level3.title'),
      subtitle: t('variables.level3.subtitle'),
      description: t('variables.level3.desc'),
      features: [t('variables.level3.f1'), t('variables.level3.f2'), t('variables.level3.f3'), t('variables.level3.f4')]
    },
    {
      title: t('variables.level4.title'),
      subtitle: t('variables.level4.subtitle'),
      description: t('variables.level4.desc'),
      features: [t('variables.level4.f1'), t('variables.level4.f2'), t('variables.level4.f3'), t('variables.level4.f4')]
    },
    {
      title: t('variables.level5.title'),
      subtitle: t('variables.level5.subtitle'),
      description: t('variables.level5.desc'),
      features: [t('variables.level5.f1'), t('variables.level5.f2'), t('variables.level5.f3'), t('variables.level5.f4')]
    }
  ];

  return (
    <div className="bg-[#0A1628] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white text-center mb-16">{t('variables.title')}</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {levels.map((level, index) => (
            <button
              key={index}
              onClick={() => setActiveLevel(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeLevel === index
                  ? 'bg-gradient-to-r from-[#00D9FF] to-[#0ea5e9] text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {level.title}
            </button>
          ))}
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-1 rounded-2xl">
          <div className="bg-[#0A1628] rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-2">{levels[activeLevel].subtitle}</h3>
            <p className="text-gray-300 text-lg mb-8">{levels[activeLevel].description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {levels[activeLevel].features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-200">
                  <span className="text-[#00D9FF] mr-3 text-xl">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
