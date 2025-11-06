import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Benefits() {
  const { t } = useTranslation('footer');

  const benefits = [
    {
      title: t('benefits.cost.title'),
      image: 'https://d64gsuwffb70l.cloudfront.net/6905a39c687361e38050ccb8_1761977311626_dfedc260.webp',
      items: [
        { label: t('benefits.cost.i1.l'), desc: t('benefits.cost.i1.d') },
        { label: t('benefits.cost.i2.l'), desc: t('benefits.cost.i2.d') },
        { label: t('benefits.cost.i3.l'), desc: t('benefits.cost.i3.d') },
        { label: t('benefits.cost.i4.l'), desc: t('benefits.cost.i4.d') }
      ]
    },
    {
      title: t('benefits.models.title'),
      image: 'https://d64gsuwffb70l.cloudfront.net/6905a39c687361e38050ccb8_1761977312391_44b12fe0.webp',
      items: [
        { label: t('benefits.models.i1.l'), desc: t('benefits.models.i1.d') },
        { label: t('benefits.models.i2.l'), desc: t('benefits.models.i2.d') },
        { label: t('benefits.models.i3.l'), desc: t('benefits.models.i3.d') }
      ]
    },
    {
      title: t('benefits.security.title'),
      image: 'https://d64gsuwffb70l.cloudfront.net/6905a39c687361e38050ccb8_1761977313127_f30833f9.webp',
      items: [
        { label: t('benefits.security.i1.l'), desc: t('benefits.security.i1.d') },
        { label: t('benefits.security.i2.l'), desc: t('benefits.security.i2.d') },
        { label: t('benefits.security.i3.l'), desc: t('benefits.security.i3.d') }
      ]
    },
    {
      title: t('benefits.deployment.title'),
      image: 'https://d64gsuwffb70l.cloudfront.net/6905a39c687361e38050ccb8_1762115302955_8e61b2ac.webp',
      items: [
        { label: t('benefits.deployment.i1.l'), desc: t('benefits.deployment.i1.d') },
        { label: t('benefits.deployment.i2.l'), desc: t('benefits.deployment.i2.d') },
        { label: t('benefits.deployment.i3.l'), desc: t('benefits.deployment.i3.d') }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-[#0A1628] text-center mb-16">
          {t('benefits.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
              <div className="h-48 overflow-hidden">
                <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0A1628] mb-6">{benefit.title}</h3>
                <div className="space-y-4">
                  {benefit.items.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-[#0A1628] mb-1">{item.label}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
