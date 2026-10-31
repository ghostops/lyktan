// Allt innehåll som ändras från år till år samlas här.
// Tomma värden ('') visas inte på sidan. Fyll i dem när de är kända.

export const site = {
  name: 'Föreningen Lyktan',
  url: 'http://jjr3afwtimmpcrr7xvdyxghk.62.238.42.92.sslip.io', // Tillfällig URL, byt till riktig domän
  description:
    'Föreningen Lyktan ordnar julfirande med mat, musik, gemenskap och omtanke för ensamma äldre och äldre hemlösa.',
  orgNr: '', // t.ex. '802000-0000'
  email: 'leah.aahmed@gmail.com',
  instagram: {
    handle: '@foreningen_lyktan',
    url: 'https://www.instagram.com/foreningen_lyktan/',
  },
  swish: '123 003 43 55',
  swishRecipient: '', // namnet som visas i Swish, t.ex. 'Föreningen Lyktan'
  swishMessage: 'Jul', // förifyllt meddelande i QR-koden (public/swish-qr.png)
  volunteerForm:
    'https://docs.google.com/forms/d/e/1FAIpQLScyNIX37oUtnOwlJqIzFHj1wvDCl2jLF1O4zxxjYm6ahVZncA/viewform',
};

export const event = {
  year: 2026,
  dateLong: 'Fredag 25 december 2026',
  dateShort: 'Juldagen 25 december',
  time: '12.00 till 15.00',
  endIso: '2026-12-25T15:00:00+01:00', // efter detta visas ”vi ses nästa jul”
  volunteerArrival: '', // när volontärer ska vara på plats, t.ex. 'kl. 10.00'
  signupDeadline: '', // sista dag att anmäla sig, t.ex. '15 december'
  address: 'Rosenlundsgatan 44 A',
  area: 'Södermalm, Stockholm',
  mapUrl: 'https://www.openstreetmap.org/search?query=Rosenlundsgatan%2044%20A%2C%20Stockholm',
};

// Siffror från förra året. Bandet visas bara när alla värden är ifyllda.
export const stats = [
  { value: '', label: 'gäster förra året' },
  { value: '', label: 'volontärer' },
  { value: '', label: 'julklappar delades ut' },
];

// Var och när julklappar lämnas, t.ex. 'Lämna dem på … senast 20 december.'
export const giftDropoff = '';

export const giftWishes = [
  'Varma sockor, mössor och vantar',
  'Hygienartiklar',
  'Choklad och godsaker',
  'Böcker och korsord',
];

// Fler frågor till Bra att veta. Frågor utan svar visas inte.
export const extraFaq = [
  { q: 'Finns det någon åldersgräns för volontärer?', a: '' },
  { q: 'Kan jag ta med en kompis?', a: '' },
  { q: 'Får jag kvitto på mitt bidrag?', a: '' },
];
