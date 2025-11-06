import jsPDF from 'jspdf';
import { TFunction } from 'i18next';

export const addUseCases = (doc: jsPDF, t: TFunction, pageWidth: number, pageHeight: number, addFooter: () => void, addNewPage: () => void, fixText: (text: string) => string) => {
  addFooter();
  addNewPage();
  let y = 30;
  
  doc.setFillColor(139, 92, 246);
  doc.rect(0, 20, pageWidth, 25, 'F');
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text(fixText(t('useCases.title', { ns: 'content' })), 15, 35);
  y = 55;

  const colors = [[14, 165, 233], [139, 92, 246], [236, 72, 153], [34, 197, 94]];

  ['case1', 'case2', 'case3', 'case4'].forEach((key, idx) => {
    if (y > pageHeight - 80) {
      addFooter();
      addNewPage();
      y = 30;
    }
    
    const [r, g, b] = colors[idx];
    
    doc.setFillColor(r, g, b);
    doc.rect(15, y - 5, 6, 50, 'F');
    doc.setFillColor(250, 252, 255);
    doc.roundedRect(23, y - 5, pageWidth - 38, 50, 2, 2, 'F');
    
    doc.setFontSize(20);
    doc.setTextColor(r, g, b);
    doc.text(fixText(t(`useCases.${key}.title`, { ns: 'content' })), 30, y + 5);
    y += 14;
    
    doc.setFontSize(16);
    doc.setTextColor(70, 70, 70);
    const desc = doc.splitTextToSize(fixText(t(`useCases.${key}.desc`, { ns: 'content' })), pageWidth - 60);
    doc.text(desc, 30, y);
    y += Math.min(desc.length * 7, 30) + 20;
  });

  return y;
};



export const addBenefits = (doc: jsPDF, t: TFunction, startY: number, pageWidth: number, pageHeight: number, addFooter: () => void, addNewPage: () => void, fixText: (text: string) => string) => {
  addFooter();
  addNewPage();
  let y = 30;
  
  doc.setFillColor(34, 197, 94);
  doc.rect(0, 20, pageWidth, 25, 'F');
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text(fixText(t('benefits.title', { ns: 'content' })), 15, 35);
  y = 55;

  const colors = [[14, 165, 233], [139, 92, 246], [236, 72, 153], [251, 146, 60]];

  ['b1', 'b2', 'b3', 'b4'].forEach((key, idx) => {
    if (y > pageHeight - 90) {
      addFooter();
      addNewPage();
      y = 30;
    }
    
    const [r, g, b] = colors[idx];
    doc.setFillColor(r, g, b, 0.1);
    doc.roundedRect(15, y - 5, pageWidth - 30, 60, 3, 3, 'F');
    doc.setDrawColor(r, g, b);
    doc.setLineWidth(0.8);
    doc.roundedRect(15, y - 5, pageWidth - 30, 60, 3, 3, 'S');
    
    doc.setFontSize(20);
    doc.setTextColor(r, g, b);
    doc.text(fixText(t(`benefits.${key}.title`, { ns: 'content' })), 20, y + 6);
    y += 16;
    
    doc.setFontSize(16);
    doc.setTextColor(60, 60, 60);
    const desc = doc.splitTextToSize(fixText(t(`benefits.${key}.desc`, { ns: 'content' })), pageWidth - 50);
    doc.text(desc, 20, y);
    y += Math.min(desc.length * 7, 35) + 20;
  });

  return y;
};


