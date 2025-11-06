import React from 'react';
import { useTranslation } from 'react-i18next';
import ModuleCard from './ModuleCard';

export default function Modules() {
  const { t } = useTranslation('modules');
  
  const modules = [
    {
      title: t('modules.enrichment.title'),
      description: t('modules.enrichment.desc'),
      features: [
        t('modules.enrichment.f1'),
        t('modules.enrichment.f2'),
        t('modules.enrichment.f3'),
        t('modules.enrichment.f4')
      ],
      image: 'https://d64gsuwffb70l.cloudfront.net/6905a39c687361e38050ccb8_1761977303286_37c659d6.webp',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: t('modules.analytiq.title'),
      description: t('modules.analytiq.desc'),
      features: [
        t('modules.analytiq.f1'),
        t('modules.analytiq.f2'),
        t('modules.analytiq.f3'),
        t('modules.analytiq.f4')
      ],
      image: 'https://d64gsuwffb70l.cloudfront.net/6905a39c687361e38050ccb8_1761977303996_4273e567.webp',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: t('modules.hybrid.title'),
      description: t('modules.hybrid.desc'),
      features: [
        t('modules.hybrid.f1'),
        t('modules.hybrid.f2'),
        t('modules.hybrid.f3')
      ],
      image: 'https://d64gsuwffb70l.cloudfront.net/6905a39c687361e38050ccb8_1761977304751_5500d038.webp',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div id="modules" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0A1628] mb-4">{t('modules.title')}</h2>
          <p className="text-xl text-gray-600">{t('modules.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </div>
    </div>
  );
}
