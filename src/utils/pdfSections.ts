import jsPDF from 'jspdf';
import { TFunction } from 'i18next';

export const addVariableLevels = (doc: jsPDF, t: TFunction, startY: number, pageWidth: number, pageHeight: number, addFooter: () => void, addNewPage: () => void, fixText: (text: string) => string) => {
  addNewPage();
  let y = 30;
  
  doc.setFillColor(76, 29, 149);
  doc.rect(0, 20, pageWidth, 25, 'F');
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text(fixText(t('variables.title', { ns: 'content' })), 15, 35);
  y = 55;

  const colors = [[14, 165, 233], [139, 92, 246], [236, 72, 153], [34, 197, 94]];
  
  ['level1', 'level2', 'level3', 'level4'].forEach((level, idx) => {
    if (y > pageHeight - 90) {
      addFooter();
      addNewPage();
      y = 30;
    }
    
    const [r, g, b] = colors[idx];
    doc.setFillColor(r, g, b);
    doc.rect(15, y - 5, pageWidth - 30, 14, 'F');
    
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text(fixText(t(`variables.${level}.title`, { ns: 'content' })), 20, y + 5);
    y += 22;
    
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, y - 5, pageWidth - 30, 60, 2, 2, 'F');
    
    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text(fixText(t(`variables.${level}.subtitle`, { ns: 'content' })), 20, y + 4);
    y += 13;
    
    doc.setFontSize(15);
    doc.setTextColor(60, 60, 60);
    const desc = doc.splitTextToSize(fixText(t(`variables.${level}.desc`, { ns: 'content' })), pageWidth - 50);
    doc.text(desc, 20, y);
    y += Math.min(desc.length * 6.5, 35) + 18;
  });

  return y;
};



export const addPlatformFeatures = (doc: jsPDF, t: TFunction, pageWidth: number, pageHeight: number, addFooter: () => void, addNewPage: () => void, fixText: (text: string) => string) => {
  addFooter();
  addNewPage();
  let y = 30;
  
  doc.setFillColor(30, 27, 75);
  doc.rect(0, 20, pageWidth, 25, 'F');
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text(fixText(t('platform.title', { ns: 'content' })), 15, 35);
  y = 55;

  const colors = [[14, 165, 233], [139, 92, 246], [236, 72, 153], [34, 197, 94], [251, 146, 60], [168, 85, 247]];

  for (let i = 1; i <= 6; i++) {
    if (y > pageHeight - 75) {
      addFooter();
      addNewPage();
      y = 30;
    }
    
    const [r, g, b] = colors[i - 1];
    doc.setFillColor(r, g, b);
    doc.circle(22, y + 4, 5, 'F');
    
    doc.setFillColor(245, 248, 255);
    doc.roundedRect(30, y - 6, pageWidth - 45, 42, 2, 2, 'F');
    
    doc.setFontSize(19);
    doc.setTextColor(r, g, b);
    doc.text(fixText(t(`platform.f${i}.title`, { ns: 'content' })), 35, y + 3);
    y += 12;
    
    doc.setFontSize(15);
    doc.setTextColor(70, 70, 70);
    const desc = doc.splitTextToSize(fixText(t(`platform.f${i}.desc`, { ns: 'content' })), pageWidth - 60);
    doc.text(desc, 35, y);
    y += Math.min(desc.length * 6.5, 24) + 20;
  }

  return y;
};


