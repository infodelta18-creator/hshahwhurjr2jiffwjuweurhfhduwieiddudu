type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Hokimiyatga keladigan', 'savollar'];
export const mobileHeaderPhrase = ['Hokimiyatga ', 'keladigan', 'savollar'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Margilon shahar hokimiyat binosi qayerda?',
    answer:
      'Uzbekistan Respublikasi, Fargona viloyati, Margilon shahar, Mustaqillik kochasi 448-a uy. Hokimlik telefon raqami: (73) 253 30 88',
  },
  {
    question: 'Yer uchastkasi yoki uy qurish uchun ruxsatni qanday olsam bo‘ladi?',
    answer:
      'Yer ajratish faqat onlayn auksion orqali amalga oshiriladi,fuqarolar ariza topshirish uchun E-auksion platformasidan foydalanishi kerak.',
  },
  {
    question: 'Margilonda ish topish uchun qayerga murojaat qilaman?',
    answer:
      'Ish izlovchilar Bandlik markazlariga murojaat qilishi mumkin.Shuningdek davlat portali orqali ham vakansiyalar korish mumkin.',
  },
{
    question: 'Kam taminlangan oila sifatida yordam olish mumkinmi?',
    answer:
      'Ariza mahalla fuqarolar yigini orqali topshiriladi.Malumotlar ijtimoiy reyestr orqali tekshiriladi.',
  },
{
    question: 'Biznes boshlash uchun ruxsat qayerdan olinadi?',
    answer:
      'Shahar hokimiyati va soliq idorasi orqali.',
  },
{
    question: 'Elektr taminoti uzilib qolsa nima qilish kerak?',
    answer:
      'Hududiy elektr tarmoqlari bilan boglanish. Tel',
  },

  {
    question: 'Dokon yoki bino qurish uchun qanday ruxsat kerak?”',
    answer:
      'Qurilish uchun loyiha tasdiqlanishi kerak.Ruxsatnoma hokimiyat arxitektura bo‘limi orqali olinadi.',
  },
];
