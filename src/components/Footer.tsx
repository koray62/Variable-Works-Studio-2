import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1628] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('nav.brand')}</h3>
            <p className="text-gray-400">{t('footer.description')}</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.solutions')}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('modules')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.dataEnrichment')}</button></li>
              <li><button onClick={() => scrollToSection('modules')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.analytiqPlatform')}</button></li>
              <li><button onClick={() => scrollToSection('modules')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.hybridSolutions')}</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.platform')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.features')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.documentation')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.api')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.contactUs')}</button></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.support')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#00D9FF] text-sm transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-gray-400 hover:text-[#00D9FF] text-sm transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
