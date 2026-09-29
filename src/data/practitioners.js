export const practitioners = [
  {
    id: 'tanja',
    slug: '/tanja-paulic',
    firstName: 'Tanja',
    name: 'Tanja Paulic',
    title: 'Heilmasseurin',
    initials: 'TP',
    pronoun: 'bei Tanja',
    street: 'Ebentaler Straße 169',
    city: '9020 Klagenfurt',
    phoneDisplay: '0664 / 431 37 00',
    phone: '+436644313700',
    email: 'massagehilft@paulic.at',
    whatsapp: '436644313700',
    // TODO: 1–2 persönliche Sätze mit Tanja abstimmen
    intro:
      'Mir ist wichtig, dass eine Behandlung Körper und Kopf gleichermaßen erreicht – und dass Sie danach mit einem leichteren Gefühl nach Hause gehen.',
    tagline: 'Ganzheitlich berührt. Individuell begleitet.',
    bio: [
      'Tanja Paulic hat nach dem Abschluss zur Medizinischen Masseurin (2023) ihre Qualifikation vertieft und im Dezember 2025 die Ausbildung zur Heilmasseurin mit ausgezeichnetem Erfolg an der Kneipp-Akademie in Klagenfurt abgeschlossen.',
      'Ihr Fokus liegt auf Behandlungen, die Körper und Geist gleichermaßen erreichen. Ob durch eine persönlich abgestimmte Heilmassage, die sanfte Begleitung der MANNEA-Methode oder die Raindrop Technique® mit hochwertigen ätherischen Ölen von Young Living: Ihr Anliegen ist es, Raum für Regeneration und innere Balance zu schaffen.',
    ],
    offers: ['Heilmassage', 'MANNEA-Methode', 'Raindrop Technique®', 'Entspannungsmassage'], // TODO: Angebot pro Praxis bestätigen
    mapsQuery: 'Ebentaler Straße 169, 9020 Klagenfurt',
  },
  {
    id: 'elmar',
    slug: '/elmar-pasterk',
    firstName: 'Elmar',
    name: 'Elmar Pasterk',
    nameSuffix: ', BA, MA',
    title: 'Heilmasseur',
    initials: 'EP',
    pronoun: 'bei Elmar',
    street: 'Pischeldorfer Straße 103',
    city: '9020 Klagenfurt',
    phoneDisplay: '0680 / 143 31 84',
    phone: '+436801433184',
    email: 'elmar.pasterk@gmx.at',
    whatsapp: null,
    // TODO: 1–2 persönliche Sätze mit Elmar abstimmen
    intro:
      'Für mich ist Massage echtes Handwerk – eine „Kunst der Berührung“, die Empathie, Erfahrung und Fachwissen braucht.',
    tagline: 'Beschwerden lindern. Gesundheit fördern.',
    bio: [
      'Elmar Pasterk, BA, MA absolvierte 2006 die Ausbildung zum gewerblichen Masseur am BFI in Wien. Seine Massagekenntnisse konnte er in Instituten in Wien, Niederösterreich und Kärnten vertiefen. 2013 schloss er das Masterstudium „Management von Gesundheitseinrichtungen“ an der Fachhochschule Krems ab.',
      '2019 gründete er das Massage hilft!-Institut in Klagenfurt. Die Ausbildung zum Heilmasseur schloss er 2023 an der Kneipp-Akademie ab.',
      'Klassische Massage mit all ihren Techniken und Griffen ist für ihn echtes Handwerk: Sie kann helfen, Beschwerden des Bewegungsapparates zu lindern, beweglicher zu werden und neue Kraft zu schöpfen.',
    ],
    offers: ['Heilmassage', 'Klassische Massage', 'Entspannungsmassage', 'Schumann 3D Platte'], // TODO: Angebot pro Praxis bestätigen
    mapsQuery: 'Pischeldorfer Straße 103, 9020 Klagenfurt',
  },
]

// Impressum-Angaben je Praxis. `null` = noch offen, wird als Platzhalter angezeigt.
export const imprints = [
  {
    id: 'elmar',
    company: 'Elmar Pasterk, BA, MA',
    rows: [
      { label: 'GLN', value: '910027038588' },
      { label: 'Adresse', value: ['Pischeldorfer Straße 103, 9020 Klagenfurt'] },
      { label: 'UID-Nummer', value: 'ATU57698012' },
      { label: 'Behörde', value: 'Magistrat der Stadt Klagenfurt' },
      { label: 'GISA-Zahl', value: '31259101' },
      { label: 'Berechtigung', value: 'gewerblicher Masseur, freiberuflicher Heilmasseur' },
      { label: 'Telefon', value: '0680 / 143 31 84', href: 'tel:+436801433184' },
      { label: 'E-Mail', value: 'elmar.pasterk@gmx.at', href: 'mailto:elmar.pasterk@gmx.at' },
    ],
  },
  {
    // TODO: Impressum-Daten von Tanja ergänzen
    id: 'tanja',
    company: 'Tanja Paulic',
    rows: [
      { label: 'GLN', value: null },
      { label: 'Adresse', value: ['Ebentaler Straße 169, 9020 Klagenfurt'] },
      { label: 'UID-Nummer', value: null },
      { label: 'Behörde', value: null },
      { label: 'GISA-Zahl', value: null },
      { label: 'Berechtigung', value: null },
      { label: 'Telefon', value: '0664 / 431 37 00', href: 'tel:+436644313700' },
      { label: 'E-Mail', value: 'massagehilft@paulic.at', href: 'mailto:massagehilft@paulic.at' },
    ],
  },
]

export const byId =(id) => practitioners.find((p) => p.id === id)

export const mapsUrl = (p) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Massage hilft! ' + p.mapsQuery)}`

export const whatsappUrl = (p) =>
  p.whatsapp
    ? `https://wa.me/${p.whatsapp}?text=${encodeURIComponent('Hallo Tanja, ich möchte gerne einen Termin anfragen.')}`
    : null

export const social = {
  facebook: 'https://www.facebook.com/profile.php?id=100063536260378',
  instagram: 'https://www.instagram.com/massagehilft/',
}
