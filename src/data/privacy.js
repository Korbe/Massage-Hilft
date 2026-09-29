// Datenschutzerklärung. Absätze dürfen einfache Links (<a>) enthalten – werden per v-html gerendert (nur statischer Inhalt!).
// TODO: Vor Livegang von Tanja & Elmar (ggf. Rechtsberatung) prüfen lassen, Hosting-Anbieter eintragen.

export const privacyUpdated = '29.09.2026'

const mail = (m) => `<a href="mailto:${m}">${m}</a>`

export const privacySections = [
  {
    h: 'Allgemeine Hinweise',
    p: [
      'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG, TKG 2021). Diese Website setzt Cookies und das Analyse-Tool Google Analytics <strong>nur mit Ihrer ausdrücklichen Einwilligung</strong> ein. Schriftarten, Bilder und Videos werden von unserem eigenen Webserver geladen; Inhalte von Drittanbietern wie Google Fonts, Google Maps oder YouTube werden nicht eingebunden.',
    ],
  },
  {
    h: 'Verantwortliche',
    p: [
      'Massage hilft! besteht aus zwei eigenständigen Praxen. Verantwortlich für die Verarbeitung Ihrer Daten ist jeweils die Person, mit der Sie Kontakt aufnehmen bzw. bei der Sie in Behandlung sind:',
    ],
    contacts: [
      { name: 'Tanja Paulic', lines: ['Ebentaler Straße 169, 9020 Klagenfurt, Österreich'], email: 'massagehilft@paulic.at', phone: '0664 / 431 37 00' },
      { name: 'Elmar Pasterk, BA, MA', lines: ['Pischeldorfer Straße 103, 9020 Klagenfurt, Österreich'], email: 'elmar.pasterk@gmx.at', phone: '0680 / 143 31 84' },
    ],
  },
  {
    h: 'Server-Logfiles',
    p: [
      // TODO: Hosting-Anbieter mit Anschrift eintragen
      'Für den Betrieb dieser Website wird die Serverinfrastruktur von <em>[Hosting-Anbieter, Anschrift]</em> genutzt. Der Hosting-Provider erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind insbesondere:',
    ],
    list: ['IP-Adresse', 'Datum und Uhrzeit der Anfrage', 'Browsertyp und Version', 'Betriebssystem', 'aufgerufene Seite/Referrer-URL'],
    after: [
      'Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website). Die Server-Logfiles werden aus Sicherheitsgründen (z. B. zur Aufklärung von Missbrauchsfällen) für maximal 14 Tage gespeichert und anschließend automatisch gelöscht, sofern keine gesetzliche Aufbewahrungspflicht entgegensteht.',
    ],
  },
  {
    h: 'Google Analytics',
    p: [
      'Diese Website verwendet Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (Muttergesellschaft: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) – <strong>ausschließlich dann, wenn Sie dem im Cookie-Banner ausdrücklich zustimmen.</strong> Ohne Ihre Zustimmung wird Google Analytics nicht geladen.',
      'Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen (z. B. aufgerufene Seiten, Verweildauer, ungefährer Standort, Gerät und Browser). Die dadurch erzeugten Informationen werden in der Regel an einen Server von Google übertragen und dort gespeichert. Wir nutzen Google Analytics ausschließlich zur Verbesserung unserer Website. IP-Adressen werden von Google Analytics 4 nicht gespeichert.',
      'Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO sowie § 165 Abs. 3 TKG 2021. Eine Datenübermittlung in die USA kann nicht ausgeschlossen werden; Google ist nach dem EU-US Data Privacy Framework zertifiziert und verweist zusätzlich auf die EU-Standardvertragsklauseln. Die von Google Analytics gesetzten Cookies (_ga, _ga_*) werden bis zu 14 Monate gespeichert.',
      'Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie die „Cookie-Einstellungen“ im Footer der Website aufrufen oder uns per E-Mail kontaktieren. Bereits gesetzte Cookies können Sie zusätzlich in den Einstellungen Ihres Browsers löschen.',
    ],
  },
  {
    h: 'Cookie-Einstellungen verwalten',
    p: [
      'Beim ersten Besuch dieser Website werden Sie über ein Cookie-Banner um Ihre Einwilligung zu nicht notwendigen Cookies (Google Analytics) gebeten. Ihre Auswahl wird im lokalen Speicher Ihres Browsers vermerkt, damit das Banner nicht bei jedem Besuch erneut erscheint.',
      'Sie können Ihre Auswahl jederzeit mit Wirkung für die Zukunft ändern oder widerrufen, indem Sie die „Cookie-Einstellungen“ im Footer dieser Website erneut aufrufen.',
    ],
  },
  {
    h: 'Kontaktaufnahme',
    p: [
      'Wenn Sie mit uns per Telefon, E-Mail, SMS oder (bei Tanja Paulic) über WhatsApp Kontakt aufnehmen, werden die von Ihnen übermittelten personenbezogenen Daten (z. B. Name, Telefonnummer, E-Mail-Adresse sowie der Inhalt Ihrer Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage, der Terminvereinbarung und für den Fall von Anschlussfragen verarbeitet.',
      'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertrag bzw. vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Kommunikation).',
      '<strong>Bitte senden Sie uns keine Befunde oder sonstigen Gesundheitsdaten per E-Mail oder WhatsApp.</strong> Diese besprechen wir lieber persönlich in der Praxis.',
      'Die übermittelten Daten werden ausschließlich zur Bearbeitung Ihres Anliegens verwendet und nicht ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben, sofern keine gesetzliche Verpflichtung besteht. Anfragen, die zu keinem Termin führen, werden spätestens nach 12 Monaten gelöscht.',
    ],
  },
  {
    h: 'Behandlung & Patientendaten',
    p: [
      'Im Rahmen einer Behandlung verarbeiten wir die dafür erforderlichen Daten, insbesondere Name, Kontaktdaten, Geburtsdatum, Angaben zu Beschwerden und zum Behandlungsverlauf, ärztliche Verordnungen bzw. Befunde sowie Rechnungsdaten.',
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Behandlungsvertrag) sowie für Gesundheitsdaten Art. 9 Abs. 2 lit. h DSGVO (Gesundheitsversorgung durch Berufsgeheimnisträger). Als Heilmasseure unterliegen wir der gesetzlichen Verschwiegenheitspflicht nach dem Medizinischen Masseur- und Heilmasseurgesetz (MMHmG).',
      // TODO: Aufbewahrungsdauer der Dokumentation bestätigen
      'Die Behandlungsdokumentation wird entsprechend den gesetzlichen Dokumentations- und Aufbewahrungspflichten aufbewahrt. Rechnungsrelevante Daten werden aufgrund gesetzlicher Aufbewahrungspflichten (insbesondere § 132 BAO) sieben Jahre lang aufbewahrt. Rechnungen, die Sie zur Kostenrückerstattung bei Ihrer Krankenkasse einreichen, übermitteln Sie selbst.',
    ],
  },
  {
    h: 'WhatsApp',
    p: [
      'Für die Terminanfrage bei Tanja Paulic steht WhatsApp als zusätzlicher Kommunikationskanal zur Verfügung. Dabei werden insbesondere Ihre Telefonnummer sowie die Inhalte der ausgetauschten Nachrichten verarbeitet.',
      'WhatsApp ist ein Dienst der WhatsApp Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland (ein Unternehmen der Meta-Gruppe). Die Datenverarbeitung erfolgt durch WhatsApp bzw. Meta eigenverantwortlich; darauf haben wir keinen Einfluss. Es kann nicht ausgeschlossen werden, dass personenbezogene Daten auch auf Servern außerhalb der Europäischen Union, insbesondere in den USA, verarbeitet werden.',
      'Die Kontaktaufnahme über WhatsApp erfolgt freiwillig und auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Soweit eine Übermittlung in Drittländer erfolgt, basiert diese auf Art. 49 Abs. 1 lit. a DSGVO. Alternativ erreichen Sie uns jederzeit telefonisch oder per E-Mail.',
    ],
  },
  {
    h: 'Externe Links (Social Media & Google Maps)',
    p: [
      'Auf dieser Website finden Sie Links zu unseren Profilen auf Facebook und Instagram, zu WhatsApp sowie zu Google Maps („Anfahrt“). Beim bloßen Besuch dieser Website werden keine personenbezogenen Daten an diese Anbieter übermittelt.',
      'Erst durch das aktive Anklicken eines Links verlassen Sie diese Website und werden auf die Plattform des jeweiligen Anbieters weitergeleitet. Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Dienstes.',
    ],
  },
  {
    h: 'Ihre Rechte',
    p: [
      'Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten zu. Soweit die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.',
      `Zur Ausübung dieser Rechte genügt eine formlose Mitteilung an ${mail('massagehilft@paulic.at')} (Praxis Tanja Paulic) bzw. ${mail('elmar.pasterk@gmx.at')} (Praxis Elmar Pasterk).`,
    ],
  },
  {
    h: 'Beschwerderecht',
    p: [
      'Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren oder uns direkt kontaktieren:',
    ],
    contacts: [
      { name: 'Österreichische Datenschutzbehörde', lines: ['Barichgasse 40–42, 1030 Wien'], phone: '+43 1 52 152-0', email: 'dsb@dsb.gv.at' },
    ],
  },
]
