import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation(['common', 'faq']);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqsData = t('faq:questions', { returnObjects: true });
  const faqs = Array.isArray(faqsData) ? faqsData : [];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-[#0A1628] text-center mb-4">{t('common:faq.title')}</h2>
        <p className="text-center text-gray-600 mb-12">{t('common:faq.subtitle')}</p>
        <div className="space-y-4">
          {faqs.map((faq: any, index: number) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0A1628] pr-4">{faq.q}</span>
                <span className="text-2xl text-[#00D9FF] flex-shrink-0">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
