import jsPDF from 'jspdf';
import { TFunction } from 'i18next';

export const addTechnical = (doc: jsPDF, t: TFunction, pageWidth: number, pageHeight: number, addFooter: () => void, addNewPage: () => void, fixText: (text: string) => string) => {
  addFooter();
  addNewPage();
  let y = 30;
  
  doc.setFillColor(236, 72, 153);
  doc.rect(0, 20, pageWidth, 25, 'F');
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text(fixText(t('Teknik Üstünlükler', { ns: 'content' })), 15, 35);
  y = 55;
  
  const colors = [[14, 165, 233], [139, 92, 246], [236, 72, 153], [251, 146, 60]];
  
  for (let i = 1; i <= 4; i++) {
    if (y > pageHeight - 75) {
      addFooter();
      addNewPage();
      y = 30;
    }
    
    const [r, g, b] = colors[i - 1];
    
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, y - 5, pageWidth - 30, 50, 2, 2, 'F');
    doc.setFillColor(r, g, b);
    doc.circle(22, y + 6, 4.5, 'F');
    
    doc.setFontSize(18);
    doc.setTextColor(r, g, b);
    doc.text(fixText(t(`technical.f${i}.title`, { ns: 'content' })), 30, y + 4);
    y += 13;
    
    doc.setFontSize(15);
    doc.setTextColor(70, 70, 70);
    const desc = doc.splitTextToSize(fixText(t(`technical.f${i}.desc`, { ns: 'content' })), pageWidth - 55);
    doc.text(desc, 30, y);
    y += Math.min(desc.length * 6.5, 30) + 20;
  }
};



export const addFAQ = (doc: jsPDF, t: TFunction, pageWidth: number, pageHeight: number, addFooter: () => void, addNewPage: () => void, fixText: (text: string) => string) => {
  addFooter();
  addNewPage();
  let y = 30;
  
  doc.setFillColor(251, 146, 60);
  doc.rect(0, 20, pageWidth, 25, 'F');
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text(fixText(t('faq.title', { ns: 'content' })), 15, 35);
  y = 55;
  
  for (let i = 1; i <= 5; i++) {
    if (y > pageHeight - 75) {
      addFooter();
      addNewPage();
      y = 30;
    }
    
    doc.setFillColor(254, 243, 199);
    doc.roundedRect(15, y - 5, pageWidth - 30, 18, 2, 2, 'F');
    doc.setFontSize(17);
    doc.setTextColor(180, 83, 9);
    doc.text(fixText(t(`faq.q${i}.q`, { ns: 'content' })), 20, y + 5);
    y += 22;
    
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(15, y - 3, pageWidth - 30, 35, 2, 2, 'F');
    doc.setFontSize(15);
    doc.setTextColor(60, 60, 60);
    const ans = doc.splitTextToSize(fixText(t(`faq.q${i}.a`, { ns: 'content' })), pageWidth - 50);
    doc.text(ans, 20, y + 6);
    y += Math.min(ans.length * 6.5, 28) + 22;
  }
};



export const addContactPage = (doc: jsPDF, t: TFunction, pageWidth: number, pageHeight: number, addFooter: () => void, addNewPage: () => void, fixText: (text: string) => string) => {
  addFooter();
  addNewPage();
  
  doc.setFillColor(30, 27, 75);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  doc.setFillColor(49, 46, 129);
  doc.circle(pageWidth / 2, pageHeight / 2, 70, 'F');
  
  doc.setFontSize(36);
  doc.setTextColor(255, 255, 255);
  doc.text(fixText(t('contact.title', { ns: 'footer' })), pageWidth / 2, 85, { align: 'center' });
  
  doc.setFillColor(0, 217, 255);
  doc.rect(pageWidth / 2 - 40, 95, 80, 3, 'F');
  
  doc.setFontSize(16);
  doc.setTextColor(0, 217, 255);
  doc.text('info@variableworks.com', pageWidth / 2, 120, { align: 'center' });
  doc.text('+90 (XXX) XXX XX XX', pageWidth / 2, 138, { align: 'center' });
  doc.setFontSize(14);
  doc.setTextColor(200, 200, 200);
  doc.text('www.variableworks.com', pageWidth / 2, 158, { align: 'center' });
  
  doc.setFontSize(13);
  doc.setTextColor(150, 150, 150);
  const contactDesc = doc.splitTextToSize(fixText(t('contact.description', { ns: 'footer' })), pageWidth - 60);
  doc.text(contactDesc, pageWidth / 2, 185, { align: 'center' });
  
  addFooter();
};

