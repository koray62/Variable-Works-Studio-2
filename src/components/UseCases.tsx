import React from 'react';
import { useTranslation } from 'react-i18next';

export default function UseCases() {
  const { t } = useTranslation('footer');

  const cases = [
    {
      title: t('usecases.customer.title'),
      items: [
        t('usecases.customer.i1'),
        t('usecases.customer.i2'),
        t('usecases.customer.i3')
      ]
    },
    {
      title: t('usecases.risk.title'),
      items: [
        t('usecases.risk.i1'),
        t('usecases.risk.i2'),
        t('usecases.risk.i3')
      ]
    },
    {
      title: t('usecases.ops.title'),
      items: [
        t('usecases.ops.i1'),
        t('usecases.ops.i2'),
        t('usecases.ops.i3')
      ]
    }
  ];

  return (
    <div className="bg-[#0A1628] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white text-center mb-16">
          {t('usecases.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-600 to-blue-600 p-1 rounded-2xl">
              <div className="bg-[#0A1628] rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">{useCase.title}</h3>
                <ul className="space-y-4">
                  {useCase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-200">
                      <span className="text-[#00D9FF] mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
