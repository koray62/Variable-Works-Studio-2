import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';

export default function Navigation() {
  const { t, i18n } = useTranslation('common');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleDownloadPDF = () => {
    console.log('PDF indirme başlatılıyor...');
    console.log('Base URL:', window.location.origin);
    
    const link = document.createElement('a');
    link.href = '/dokuman.pdf';
    link.download = 'dokuman.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('PDF indirme linki tıklandı');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={scrollToTop} className="text-2xl font-bold text-white hover:text-[#00D9FF] transition-colors">
            {t('nav.brand')}
          </button>
          
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => scrollToSection('modules')} className="text-white hover:text-[#00D9FF] transition-colors">{t('nav.solutions')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#00D9FF] transition-colors">{t('nav.contact')}</button>
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              title={t('nav.downloadPDF')}
            >
              <Download className="w-4 h-4" />
              <span className="hidden lg:inline">PDF</span>
            </button>
            <div className="flex gap-2">
              <button onClick={() => changeLanguage('tr')} className={`px-3 py-1 rounded ${i18n.language === 'tr' ? 'bg-[#00D9FF] text-white' : 'text-gray-300 hover:text-white'}`}>TR</button>
              <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-[#00D9FF] text-white' : 'text-gray-300 hover:text-white'}`}>EN</button>
            </div>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-gradient-to-r from-[#00D9FF] to-[#0ea5e9] text-white rounded-lg font-semibold hover:scale-105 transition-transform">
              {t('nav.requestDemo')}
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white text-2xl">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('modules')} className="block w-full text-left text-white hover:text-[#00D9FF] py-2">{t('nav.solutions')}</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-[#00D9FF] py-2">{t('nav.contact')}</button>
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <div className="flex gap-2">
              <button onClick={() => changeLanguage('tr')} className={`px-3 py-1 rounded flex-1 ${i18n.language === 'tr' ? 'bg-[#00D9FF] text-white' : 'text-gray-300'}`}>TR</button>
              <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded flex-1 ${i18n.language === 'en' ? 'bg-[#00D9FF] text-white' : 'text-gray-300'}`}>EN</button>
            </div>
            <button onClick={() => scrollToSection('contact')} className="w-full px-6 py-2 bg-gradient-to-r from-[#00D9FF] to-[#0ea5e9] text-white rounded-lg font-semibold">
              {t('nav.requestDemo')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
