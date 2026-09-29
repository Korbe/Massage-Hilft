import kopf from '../assets/koerper/kopf-nacken.png'
import obererRuecken from '../assets/koerper/oberer-ruecken.png'
import untererRuecken from '../assets/koerper/unterer-ruecken.png'
import huefte from '../assets/koerper/gesaess-huefte.png'
import beine from '../assets/koerper/beine.png'
import fuesse from '../assets/koerper/fuesse.png'
import arme from '../assets/koerper/arme-haende.png'
import brust from '../assets/koerper/brust-bauch.png'

export const bodyAreas = [
  {
    id: 'kopf-nacken',
    image: kopf,
    name: 'Kopf, Gesicht, Nacken & Halswirbelsäule',
    keyword: 'Nackenmassage in Klagenfurt',
    headline: 'Wenn der Schulterblick beim Autofahren zur Ganzkörperdrehung wird.',
    text: 'Beim Ausparken dreht der ganze Oberkörper mit, weil der Kopf allein nicht mehr will. Abends drückt es hinter den Augen, und morgens tut der Kiefer weh, obwohl Sie doch nur geschlafen haben. Wir lösen mit gezielten Griffen, was sich in Nacken, Kopfhaut und Kiefer festgebissen hat. Und plötzlich ist da wieder Platz zwischen Ohren und Schultern.',
  },
  {
    id: 'oberer-ruecken',
    image: obererRuecken,
    name: 'Oberer & mittlerer Rücken, Schultern',
    keyword: 'Rücken- und Schultermassage in Klagenfurt',
    headline: 'Wann waren Ihre Schultern zuletzt dort, wo sie hingehören?',
    text: 'Irgendwann im Laufe des Tages sind sie Richtung Ohren gewandert und haben es sich dort gemütlich gemacht. Zwischen den Schulterblättern wohnt dieser eine Knoten, der nie Miete zahlt und den Sie selbst nie erreichen, egal wie sehr Sie sich verrenken. Genau dort setzen wir an. Oft merkt man erst danach, wie flach man die ganze Zeit geatmet hat.',
  },
  {
    id: 'unterer-ruecken',
    image: untererRuecken,
    name: 'Unterer Rücken & Lendenwirbelsäule',
    keyword: 'Massage bei Kreuzschmerzen in Klagenfurt',
    headline: 'Wenn Socken anziehen zur sportlichen Disziplin wird.',
    text: 'Morgens erst einmal vorsichtig aus dem Bett rollen. Nach der Autofahrt die Hand ins Kreuz, bevor man sich aufrichten traut. Die Getränkekiste? Die bleibt lieber im Kofferraum. Viele halten das irgendwann für normal. Ist es nicht. Wir schauen genau hin, was Ihren unteren Rücken so festhält, damit Sie sich wieder bücken können, ohne vorher Anlauf zu nehmen.',
  },
  {
    id: 'gesaess-huefte',
    image: huefte,
    name: 'Gesäß & Hüfte',
    keyword: 'Massage bei Hüftbeschwerden in Klagenfurt',
    headline: 'Der Schmerz, den man nicht so recht herzeigen kann.',
    text: 'Er sitzt tief, irgendwo zwischen Hüfte und Po, und manchmal zieht er bis in den Oberschenkel. Beim langen Sitzen rutschen Sie hin und her, beim Gehen fühlt sich ein Bein schwerer an als das andere. Oft steckt die Ursache in genau der Muskulatur, die kaum jemand beachtet. Wir kennen diese Zusammenhänge und wissen, wo wir ansetzen müssen, damit Sie wieder rund laufen.',
  },
  {
    id: 'beine',
    image: beine,
    name: 'Beine, Oberschenkel & Waden',
    keyword: 'Beinmassage und Lymphdrainage in Klagenfurt',
    headline: 'Wenn sich die Beine am Abend anfühlen wie mit Blei gefüllt.',
    text: 'Nach einem langen Tag im Stehen legen Sie die Füße hoch und merken erst dann, wie schwer sie sind. Oder die Waden sind nach der Tour auf den Dobratsch so hart, dass jede Stufe einzeln verhandelt wird. Mit gezielter Massage lockern wir die Muskulatur und unterstützen die Regeneration. Bei geschwollenen Beinen bringt unsere Lymphdrainage mit sanftem Rhythmus wieder Leichtigkeit in jeden Schritt.',
  },
  {
    id: 'fuesse',
    image: fuesse,
    name: 'Füße & Fußsohlen',
    keyword: 'Fußmassage in Klagenfurt',
    headline: 'Endlich die Schuhe aus – und trotzdem tut jeder Schritt weh.',
    text: 'Unsere Füße tragen uns tausende Schritte am Tag, über harten Boden und in engen Schuhen, und beschweren sich erstaunlich selten. Wenn die Fußsohle aber beim ersten Auftreten am Morgen brennt, ist es Zeit, ihnen etwas zurückzugeben. Eine Behandlung der Füße spürt man oft bis hinauf in den Rücken. Ein bisschen wie barfuß über eine warme Sommerwiese.',
  },
  {
    id: 'arme-haende',
    image: arme,
    name: 'Arme & Hände',
    keyword: 'Massage für Arme und Hände in Klagenfurt',
    headline: 'Wenn das Gurkenglas plötzlich gewinnt.',
    text: 'Ihre Hände arbeiten den ganzen Tag: an der Maus, am Werkzeug, am Lenkrad, am Handy. Irgendwann kribbeln die Finger, der Unterarm brennt, und das Handgelenk meldet sich bei jeder Drehung. Wir lösen die Spannung von den Fingerspitzen bis zum Ellbogen. Damit Ihre Hände wieder das tun, was sie am besten können: kräftig zupacken und locker loslassen.',
  },
  {
    id: 'brust-bauch',
    image: brust,
    name: 'Brust, Zwerchfell & Bauch',
    keyword: 'Zwerchfell- und Bauchbehandlung in Klagenfurt',
    headline: 'Wann haben Sie zuletzt so richtig bis in den Bauch geatmet?',
    text: 'Stress macht eng. Der Atem bleibt oben in der Brust hängen, der Bauch fühlt sich an wie zugeschnürt, und selbst ein tiefer Seufzer bringt nur kurz Erleichterung. Wir behandeln Brustkorb, Zwerchfell und Bauch mit viel Feingefühl und immer in Ihrem Tempo. Bis der Atem wieder ganz von selbst nach unten fließt.',
  },
]

// Hotspots on the hero body illustration (percent of image, back view unless noted)
export const heroHotspots = [
  { area: 'kopf-nacken', x: 71.5, y: 19, label: 'Nacken' },
  { area: 'oberer-ruecken', x: 76, y: 28, label: 'Schultern' },
  { area: 'unterer-ruecken', x: 71.5, y: 41, label: 'Kreuz' },
  { area: 'gesaess-huefte', x: 67, y: 51, label: 'Hüfte' },
  { area: 'beine', x: 75, y: 70, label: 'Waden' },
  { area: 'fuesse', x: 33.5, y: 90, label: 'Füße' },
  { area: 'arme-haende', x: 14, y: 54, label: 'Hände' },
  { area: 'brust-bauch', x: 29.5, y: 36, label: 'Bauch' },
]

export const services = [
  {
    id: 'heilmassage',
    to: '/heilmassage',
    title: 'Heilmassage',
    text: 'Gezielte Behandlung von Muskeln und Faszien bei Verspannungen, Schmerzen und Bewegungseinschränkungen. Individuell abgestimmt auf das, was Ihr Körper gerade braucht.',
    icon: 'hands',
  },
  {
    id: 'lymphdrainage',
    to: '/lymphdrainage',
    title: 'Lymphdrainage',
    text: 'Eine sanfte, rhythmische Technik, die den Lymphfluss anregt. Wohltuend bei geschwollenen Beinen, Wassereinlagerungen oder nach Operationen.',
    icon: 'drops',
  },
  {
    id: 'mannea',
    to: '/mannea-methode',
    title: 'MANNEA-Methode',
    text: 'Wenn nicht nur ein Muskel, sondern das ganze Gleichgewicht aus dem Lot ist. Eine ganzheitliche, sehr sanfte Behandlung für Frauen und Männer. Sie beginnt sitzend mit Rücken und Becken und setzt sich im Liegen im Bauchbereich fort. Sie kann Ihre Entspannung und Ihr Wohlbefinden unterstützen und auch eine ärztliche Behandlung begleiten.',
    icon: 'leaf',
    feature: true,
  },
]

export const moreServices = [
  { to: '/entspannungsmassage', title: 'Entspannungsmassage', text: 'Teil- oder Ganzkörper, auf Wunsch mit ätherischen Ölen, Zirbenöl oder nach der Raindrop® Technik.' },
  { to: '/hot-stone-massage', title: 'Hot Stone Massage', text: 'Warme Basaltsteine, fließende Griffe und der bewusste Wechsel von Wärme und Kälte.' },
  { to: '/preise', title: 'Preise & Gutscheine', text: 'Alle Behandlungen und Preise auf einen Blick. Gutscheine erhältlich ab € 10,–.' },
]

export const steps = [
  { title: 'Wählen Sie Ihre Praxis', text: 'Bei Tanja in der Ebentaler Straße oder bei Elmar in der Pischeldorfer Straße.' },
  { title: 'Melden Sie sich', text: 'Per Telefon, Mail oder WhatsApp. Ganz, wie es Ihnen lieber ist.' },
  { title: 'Erzählen Sie uns, wo’s zwickt', text: 'Den Rest übernehmen wir gemeinsam.' },
]

export const homeFaq = [
  {
    q: 'Brauche ich eine ärztliche Verordnung?',
    a: 'Nein, Sie können auch ohne Verordnung zu uns kommen. Mit ärztlicher Verordnung ist aber eine teilweise Kostenrückerstattung durch Ihre Krankenkasse möglich. Gewöhnlich können bis zu 10 Einheiten auf einmal verordnet werden.',
  },
  {
    q: 'Wie funktioniert die Kostenrückerstattung?',
    a: 'Sie bezahlen die Behandlung direkt bei uns und reichen die Rechnung gemeinsam mit der Verordnung bei Ihrer Krankenkasse ein. Wie hoch die Erstattung ist, hängt von Ihrer Krankenkasse ab. Wir erklären Ihnen gerne, worauf Sie achten müssen.',
  },
  {
    q: 'Tut eine Heilmassage weh?',
    a: 'Manchmal gibt es diesen „guten Schmerz“, bei dem man merkt: Genau da ist es. Aber Sie bestimmen, wo die Grenze liegt. Sagen Sie uns jederzeit, wenn es zu viel wird. Wir sind Heilmasseure, keine Folterknechte.',
  },
  {
    q: 'Wie viele Behandlungen brauche ich?',
    a: 'Das hängt davon ab, wie lange Ihr Körper schon mit den Beschwerden lebt. Manchmal spüren Sie schon nach einer Behandlung eine deutliche Erleichterung, bei hartnäckigen Themen braucht es mehrere Termine. Wir besprechen das ehrlich mit Ihnen.',
  },
  {
    q: 'Muss ich mich ganz ausziehen?',
    a: 'Nein. Wir behandeln nur den Bereich, der es braucht, und Sie bleiben dabei gut zugedeckt. Wenn Sie sich unsicher sind, fragen Sie einfach. Dafür sind wir da.',
  },
  {
    q: 'Was soll ich mitbringen?',
    a: 'Sich selbst, etwas Zeit und, falls vorhanden, Ihre ärztliche Verordnung oder aktuelle Befunde.',
  },
  {
    q: 'Wie kann ich bezahlen?',
    a: 'In beiden Praxen ist nur Barzahlung möglich. Gratis Parkplätze sind vorhanden.',
  },
  {
    q: 'Kann ich per WhatsApp einen Termin anfragen?',
    a: 'Ja, gerne – bei Tanja. Bitte schicken Sie uns aber keine Befunde oder Gesundheitsdaten per WhatsApp. Die besprechen wir lieber persönlich in der Praxis. Elmar erreichen Sie am besten telefonisch oder per Mail.',
  },
]

export const reviews = [
  { name: 'Vertigo Music Bar', text: 'Top Massage, hilft wirklich! Tanja & Elmar sind äußert nett & freundlich und verstehen ihr Handwerk bestens. Man fühlt sich wohl, sehr empfehlenswert!' },
  { name: 'Petra Strauss', text: 'Klein ,fein und der Mann weiss was er tut. Preis absolut ok. Und die Begrüßung ist zuckersüß 🐕' },
  { name: 'Mike', text: 'Bester Masseur den es gibt. Kann nur positiv weiterempfehlen. TipTop!!!' },
  { name: 'Angelika Grimm', text: 'Super masseur kann ich nur weiterempfehlen' },
]
