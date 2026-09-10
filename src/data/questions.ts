import type { Question, VolunteerType } from '../types/quiz'

export const volunteerTypes: VolunteerType[] = [
  {
    id: 'organizator',
    name: 'Organizator',
    emoji: '📋',
    description: 'Ti si osoba koja drži sve konce u rukama. Dok drugi još razmišljaju, ti već imaš plan A, B i C. Bez tebe bi svaka akcija završila u kaosu – a s tobom sve štima do zadnje minute.',
    funFact: 'Tvoj notes i olovka su tvoje supermoći. Vjerojatno imaš spreadsheet za sve – pa čak i za ovaj kviz.',
    tip: 'Na 72 sata preuzmi koordinaciju tima ili vodi evidenciju zadataka. Tvoja sposobnost da vidiš širu sliku je neprocjenjiva!',
    compatibleWith: 'izvodac',
  },
  {
    id: 'izvodac',
    name: 'Izvođač / Radnik',
    emoji: '🔨',
    description: 'Kad treba nešto napraviti – ti si prvi na terenu. Ne voliš puno pričati, radije djeluješ. Tvoje ruke su uvijek spremne pomoći, a energija ti ne ponestaje dok posao nije gotov.',
    funFact: 'Dok drugi pričaju o problemu, ti si ga već riješio. Tvoj moto: "Manje priče, više posla!"',
    tip: 'Na 72 sata budi u prvim redovima fizičkih aktivnosti – renoviranje, čišćenje, gradnja. Tvoja izdržljivost inspirira cijeli tim!',
    compatibleWith: 'organizator',
  },
  {
    id: 'povezivac',
    name: 'Povezivač / Animator',
    emoji: '🎉',
    description: 'Ti si ljepilo koje drži tim na okupu! Uvijek znaš kako podići atmosferu, upoznati ljude i stvoriti osjećaj zajedništva. Tamo gdje si ti – tamo je dobra energija.',
    funFact: 'Poznaješ sve i svi poznaju tebe. Nakon 72 sata imat ćeš 50 novih prijatelja i 200 novih pratitelja na Instagramu.',
    tip: 'Na 72 sata vodi igre, animiraj grupu i budi most između timova. Tvoja pozitivna energija je zarazna!',
    compatibleWith: 'kreativac',
  },
  {
    id: 'kreativac',
    name: 'Kreativac',
    emoji: '🎨',
    description: 'Ideje ti nikad ne nedostaju! Vidiš ljepotu u detaljima i znaš kako od običnog napraviti posebno. Dekoracija, dizajn, sadržaj – sve što dotakneš postaje kreativno remek-djelo.',
    funFact: 'Dok drugi vide prazan zid, ti već vidiš mural. Pinterest je tvoj drugi dom.',
    tip: 'Na 72 sata preuzmi vizualni identitet akcije – plakate, dekoraciju, fotografiju. Tvoj kreativni dodir čini razliku!',
    compatibleWith: 'povezivac',
  },
]

export const questions: Question[] = [
  {
    id: 1,
    text: 'Kad se priprema veliki volonterski projekt, što prvo radiš?',
    answers: [
      { text: 'Pravim raspored i dijelim zadatke', type: 'organizator' },
      { text: 'Pitam što treba napraviti i odmah krećem', type: 'izvodac' },
      { text: 'Okupljam ekipu i motiviram ih', type: 'povezivac' },
      { text: 'Smišljam temu i vizualni identitet', type: 'kreativac' },
    ],
  },
  {
    id: 2,
    text: 'Na volonterskoj akciji netko se osjeća izgubljeno. Kako reagiraš?',
    answers: [
      { text: 'Uputim ga gdje treba biti prema planu', type: 'organizator' },
      { text: 'Pozovem ga da radi sa mnom', type: 'izvodac' },
      { text: 'Upoznam ga s ostatkom tima', type: 'povezivac' },
      { text: 'Predložim mu kreativni zadatak', type: 'kreativac' },
    ],
  },
  {
    id: 3,
    text: 'Koji zadatak bi najradije preuzeo/la?',
    answers: [
      { text: 'Koordinacija svih timova', type: 'organizator' },
      { text: 'Fizički posao na terenu', type: 'izvodac' },
      { text: 'Vođenje igara i aktivnosti', type: 'povezivac' },
      { text: 'Dizajn plakata i materijala', type: 'kreativac' },
    ],
  },
  {
    id: 4,
    text: 'Kako se osjećaš kad plan krene po zlu?',
    answers: [
      { text: 'Brzo napravim novi plan', type: 'organizator' },
      { text: 'Improvizujem i radim dalje', type: 'izvodac' },
      { text: 'Smirujem ekipu i držim moral', type: 'povezivac' },
      { text: 'Vidim priliku za nešto novo', type: 'kreativac' },
    ],
  },
  {
    id: 5,
    text: 'Što te najviše veseli na kraju uspješne akcije?',
    answers: [
      { text: 'Da je sve prošlo po planu', type: 'organizator' },
      { text: 'Da vidim konkretne rezultate rada', type: 'izvodac' },
      { text: 'Da su se svi dobro zabavili', type: 'povezivac' },
      { text: 'Da je naš rad izgledao super', type: 'kreativac' },
    ],
  },
  {
    id: 6,
    text: 'Kako bi te prijatelji opisali?',
    answers: [
      { text: 'Pouzdana osoba koja ima sve pod kontrolom', type: 'organizator' },
      { text: 'Uvijek spreman/na pomoći', type: 'izvodac' },
      { text: 'Duša društva', type: 'povezivac' },
      { text: 'Pun/a ideja', type: 'kreativac' },
    ],
  },
  {
    id: 7,
    text: 'Koji alat bi najradije koristio/la?',
    answers: [
      { text: 'Planer ili spreadsheet', type: 'organizator' },
      { text: 'Čekić ili lopatu', type: 'izvodac' },
      { text: 'Mikrofon ili megafon', type: 'povezivac' },
      { text: 'Kist ili laptop za dizajn', type: 'kreativac' },
    ],
  },
]
