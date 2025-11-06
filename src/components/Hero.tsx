import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation('common');
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95]">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/6905a39c687361e38050ccb8_1761977302519_e627fa47.webp" 
          alt="Data Analytics" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          {t('hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#FF6B6B]">{t('hero.titleHighlight')}</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('modules')}
            className="px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#0ea5e9] text-white rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            {t('hero.exploreSolutions')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
          >
            {t('hero.getInTouch')}
          </button>
        </div>
      </div>
    </div>
  );
}
