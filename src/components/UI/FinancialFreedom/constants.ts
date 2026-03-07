
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// For desktop
export const desktopHeaderPhrase = ['Margilon iqtisodiyoti haqida'];
export const desktopParagraphPhrase = [
  "Marg'ilon shahrida 18 yilda ilk bor iqtisodiyot 1 yil ichida 23% o'sib Farg'ona viloyat ichida 2-o'rinni egalladi,birgina Marg'ilon shahar yalpi ichki mahsuloti 2025-yilda 200 million AQSH dollarga yetdi."
];
export const desktopBriefNotePhrase = [
  'Aqlli investitsiyalar,',
  'xavfsiz tolovlar va',
  'ekspert korsatmalari, barchasi',
  'Margilonda',
];

// For mobile
export const mobileHeaderPhrase = ['Margilon iqtisodiyoti haqida'];
export const mobileParagraphPhrase = ["Marg'ilon shahrida 18 yilda ilk bor iqtisodiyot 1 yil ichida 23% o'sib Farg'ona viloyat ichida 2-o'rinni egalladi,birgina Marg'ilon shahar yalpi ichki mahsuloti 2025-yilda 200 million AQSH dollarga yetdi."];

export const mobileBriefNotePhrase = [
  'Aqlli',
  ' investitsiyalar,',
  'xavfsiz',
  ' tolovlar,',
  'va mutaxassislar',
  'hammasi',
  'Margilonda.',
];

export const edges = [
  {
    point: 'Soliq va byudjet',
   details: `Sanoat va savdo daromadlaridan shahar hokimiyati soliq tushumlari oladi.
Shahar byudjeti quyidagi yo'nalishlarda ishlatiladi:
- yo'l va infratuzilma
- kommunal xizmatlar
- madaniyat va sport obyektlari
- ijtimoiy yordam dasturlari`,
    icon: ic_banknotes,
  },
  {
    point: 'Qishloq xojaligi va daromad',
    details:
      'Margilon atrofidagi dehqonchilik (paxta, sabzavot, meva) shaharga pul oqimini keltiradi.Mahsulotlar bozor va sanoat korxonalariga sotiladi, bu esa iqtisodiy aylanishni oshiradi.',
    icon: ic_circle_stack,
  },
  {
    point: 'Turizm va pul aylanmasi',
    details:
      'Margilonga keladigan turistlar ipak mato va hunarmandchilik mahsulotlarini sotib oladi, bu shaharga qoshimcha daromad keltiradi.Turizm mavsumida shaharda pul aylanmasi sezilarli darajada oshadi.',
    icon: ic_arrows_left_right,
  },
];
