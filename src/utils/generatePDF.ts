import jsPDF from 'jspdf';
import { TFunction } from 'i18next';
import i18n from '../i18n/config';
import { addVariableLevels, addPlatformFeatures } from './pdfSections';
import { addUseCases, addBenefits } from './pdfSections2';
import { addTechnical, addFAQ, addContactPage } from './pdfSections3';

const fixTurkishText = (text: string): string => {
  const map: { [key: string]: string } = {
    'ğ': 'g', 'Ğ': 'G', 'ü': 'u', 'Ü': 'U', 'ş': 's', 'Ş': 'S',
    'ı': 'i', 'İ': 'I', 'ö': 'o', 'Ö': 'O', 'ç': 'c', 'Ç': 'C'
  };
  return text.replace(/[ğĞüÜşŞıİöÖçÇ]/g, (char) => map[char] || char);
};

export const generateSalesPDF = (t: TFunction) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let pageNum = 1;
  const lang = i18n.language.toUpperCase();

  const addHeader = () => {
    doc.setFillColor(30, 27, 75);
    doc.rect(0, 0, pageWidth, 15, 'F');
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text('VariableWorks Studio', 15, 10);
    doc.setFontSize(11);
    doc.setTextColor(0, 217, 255);
    doc.text('Data Intelligence Platform', pageWidth - 15, 10, { align: 'right' });

  };

  const addFooter = () => {
    doc.setFillColor(30, 27, 75);
    doc.rect(0, pageHeight - 12, pageWidth, 12, 'F');
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text(`${pageNum}`, pageWidth / 2, pageHeight - 5, { align: 'center' });
    pageNum++;
  };

  const addNewPage = () => {
    doc.addPage();
    addHeader();
  };

  const safeText = (text: string, x: number, y: number, options?: any) => {
    doc.text(fixTurkishText(text), x, y, options);
  };

  // Cover Page - Stunning gradient design
  doc.setFillColor(30, 27, 75);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  doc.setFillColor(49, 46, 129);
  doc.triangle(0, 0, pageWidth, 0, pageWidth, pageHeight / 2, 'F');
  doc.setFillColor(76, 29, 149);
  doc.triangle(0, pageHeight, pageWidth, pageHeight, 0, pageHeight / 2, 'F');
  
  doc.setFontSize(48);
  doc.setTextColor(255, 255, 255);
  doc.text('VariableWorks', pageWidth / 2, 80, { align: 'center' });
  doc.setFontSize(36);
  doc.setTextColor(0, 217, 255);
  doc.text('Studio', pageWidth / 2, 105, { align: 'center' });
  
  doc.setFillColor(0, 217, 255);
  doc.rect(pageWidth / 2 - 50, 115, 100, 3, 'F');
  
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  safeText(t('hero.title', { ns: 'common' }), pageWidth / 2, 140, { align: 'center' });
  doc.setFontSize(18);
  doc.setTextColor(0, 217, 255);
  safeText(t('hero.titleHighlight', { ns: 'common' }), pageWidth / 2, 158, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setTextColor(200, 200, 200);
  const subtitle = doc.splitTextToSize(fixTurkishText(t('hero.subtitle', { ns: 'common' })), pageWidth - 50);
  doc.text(subtitle, pageWidth / 2, 180, { align: 'center' });

  doc.setFontSize(12);
  doc.setTextColor(150, 150, 150);
  doc.text(new Date().toLocaleDateString(), pageWidth / 2, pageHeight - 20, { align: 'center' });


  // Modules
  addNewPage();
  let y = 30;
  doc.setFillColor(30, 27, 75);
  doc.rect(0, 20, pageWidth, 25, 'F');
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  safeText(t('modules.title', { ns: 'modules' }), 15, 35);
  y = 55;

  ['enrichment', 'analytiq', 'hybrid'].forEach((key, idx) => {
    if (y > pageHeight - 85) {
      addFooter();
      addNewPage();
      y = 30;
    }
    
    const colors = [[14, 165, 233], [139, 92, 246], [236, 72, 153]];
    const [r, g, b] = colors[idx];
    
    doc.setFillColor(r, g, b);
    doc.rect(15, y - 5, 6, 65, 'F');
    doc.setFillColor(245, 245, 250);
    doc.roundedRect(23, y - 5, pageWidth - 38, 65, 3, 3, 'F');
    
    doc.setFontSize(22);
    doc.setTextColor(r, g, b);
    safeText(t(`modules.${key}.title`, { ns: 'modules' }), 30, y + 7);
    y += 18;
    
    doc.setFontSize(16);
    doc.setTextColor(60, 60, 60);
    const desc = doc.splitTextToSize(fixTurkishText(t(`modules.${key}.desc`, { ns: 'modules' })), pageWidth - 60);
    doc.text(desc, 30, y);
    y += Math.min(desc.length * 7, 40) + 18;
  });



  addFooter();
  addVariableLevels(doc, t, 25, pageWidth, pageHeight, addFooter, addNewPage, fixTurkishText);
  addPlatformFeatures(doc, t, pageWidth, pageHeight, addFooter, addNewPage, fixTurkishText);
  const useCasesY = addUseCases(doc, t, pageWidth, pageHeight, addFooter, addNewPage, fixTurkishText);
  addBenefits(doc, t, useCasesY, pageWidth, pageHeight, addFooter, addNewPage, fixTurkishText);
  addTechnical(doc, t, pageWidth, pageHeight, addFooter, addNewPage, fixTurkishText);
  addFAQ(doc, t, pageWidth, pageHeight, addFooter, addNewPage, fixTurkishText);
  addContactPage(doc, t, pageWidth, pageHeight, addFooter, addNewPage, fixTurkishText);

  doc.save(`VariableWorks_${lang}_${new Date().toISOString().split('T')[0]}.pdf`);
};
