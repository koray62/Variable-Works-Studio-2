import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/lib/supabase';

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    phone: '',
    message: '' 
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.errors.nameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.errors.emailInvalid');
    }
    
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = t('contact.errors.phoneInvalid');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.errors.messageTooShort');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || t('contact.errors.sendFailed'));
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div id="contact" className="bg-[#0A1628] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white text-center mb-4">{t('contact.title')}</h2>
        <p className="text-center text-gray-300 mb-12">{t('contact.subtitle')}</p>
        
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-500 text-white rounded-lg text-center">
            {t('contact.successMessage')}
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-500 text-white rounded-lg text-center">
            {errorMessage || t('contact.errors.sendFailed')}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-600 to-blue-600 p-1 rounded-2xl">
          <div className="bg-[#0A1628] rounded-2xl p-8 space-y-6">
            <div>
              <label className="block text-white mb-2 font-semibold">{t('contact.name')} *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:border-[#00D9FF]`}
                placeholder={t('contact.namePlaceholder')}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-white mb-2 font-semibold">{t('contact.email')} *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:border-[#00D9FF]`}
                placeholder={t('contact.emailPlaceholder')}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-white mb-2 font-semibold">{t('contact.company')}</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00D9FF]"
                placeholder={t('contact.companyPlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-white mb-2 font-semibold">{t('contact.phone')}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:border-[#00D9FF]`}
                placeholder={t('contact.phonePlaceholder')}
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className="block text-white mb-2 font-semibold">{t('contact.message')} *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.message ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:border-[#00D9FF]`}
                placeholder={t('contact.messagePlaceholder')}
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-gradient-to-r from-[#00D9FF] to-[#0ea5e9] text-white rounded-lg font-semibold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? t('contact.sending') : t('contact.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
