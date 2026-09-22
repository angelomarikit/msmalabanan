import {
  AlertTriangle,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Droplets,
  Home,
  MessagesSquare,
  Recycle,
  ShieldCheck,
  SprayCan,
  Toilet,
  Waves,
  type LucideIcon,
} from 'lucide-react'

export type ProblemItem = {
  title: string
  icon: LucideIcon
}

export const problems: ProblemItem[] = [
  { title: 'Baradong toilet', icon: Toilet },
  { title: 'Mabagal bumaba ang tubig', icon: Droplets },
  { title: 'Umaapaw na drainage', icon: Waves },
  { title: 'Mabahong septic tank', icon: AlertTriangle },
  { title: 'Full pozo negro', icon: Recycle },
  { title: 'Bumabalik ang wastewater', icon: SprayCan },
  { title: 'Baradong kitchen sink', icon: Droplets },
  { title: 'Baradong floor drain', icon: Waves },
  { title: 'Sewer line blockage', icon: AlertTriangle },
  { title: 'Leaking or damaged pipes', icon: ShieldCheck },
]

export const trustItems = [
  'Residential & Commercial',
  'Professional Service',
  'Multiple Service Solutions',
  'Easy Quotation Request',
]

export const whyChooseUs = [
  {
    title: 'Complete Service',
    text: 'From sipsip pozo negro and septic tank siphoning to declogging, plumbing, grease trap cleaning, STP cleaning, and septic tank construction.',
    icon: ShieldCheck,
  },
  {
    title: 'Residential & Commercial',
    text: 'Services available for homes, apartments, restaurants, businesses, offices, buildings, and other properties.',
    icon: Building2,
  },
  {
    title: 'Proper Assessment',
    text: 'Different drainage and septic problems require different solutions. We assess the issue before recommending the appropriate service.',
    icon: ClipboardCheck,
  },
  {
    title: 'Quotation-Based Pricing',
    text: 'Pricing is based on the actual job requirements instead of misleading fixed prices.',
    icon: BadgeCheck,
  },
  {
    title: 'Easy Communication',
    text: 'Customers can contact MSMalabanan directly through phone, email, or the quotation form.',
    icon: MessagesSquare,
  },
  {
    title: 'Professional Service',
    text: 'Organized, customer-focused Malabanan service with a clear process from inquiry to completion.',
    icon: Home,
  },
]

export const steps = [
  {
    step: '01',
    title: 'Tell Us the Problem',
    text: 'Contact us and describe the issue. Customers may send photos or videos when applicable.',
  },
  {
    step: '02',
    title: 'Initial Assessment',
    text: 'We determine the likely service required based on the information provided.',
  },
  {
    step: '03',
    title: 'Get Your Quotation',
    text: 'Pricing is based on the service, location, access, equipment, and scope of work.',
  },
  {
    step: '04',
    title: 'Schedule the Service',
    text: 'Once the quotation is confirmed, schedule the service.',
  },
  {
    step: '05',
    title: 'Service Completion',
    text: 'Our team performs the agreed siphoning, declogging, plumbing, cleaning, or construction work.',
  },
]

export const warningSigns = [
  {
    title: 'Mabagal ang Drainage',
    text: 'Persistent slow drainage may indicate a developing blockage.',
    icon: Droplets,
  },
  {
    title: 'Mabahong Amoy',
    text: 'Foul odors near toilets, drains, or septic areas may indicate waste buildup.',
    icon: AlertTriangle,
  },
  {
    title: 'Umaapaw na Toilet o Drain',
    text: 'Wastewater backup may indicate a serious blockage or full septic tank.',
    icon: Toilet,
  },
  {
    title: 'Puno ang Pozo Negro',
    text: 'Excessive wastewater and sludge may require septic tank siphoning.',
    icon: Recycle,
  },
  {
    title: 'Paulit-ulit na Pagbabara',
    text: 'Recurring blockages may indicate a deeper drainage or sewer problem.',
    icon: Waves,
  },
]

export const residentialUses = [
  'Houses',
  'Apartments',
  'Townhouses',
  'Rental properties',
  'Residential buildings',
]

export const commercialUses = [
  'Restaurants',
  'Hotels',
  'Offices',
  'Buildings',
  'Commercial kitchens',
  'Warehouses',
  'Stores',
  'Property managers',
]

export const contactServices = [
  'Septic Tank Siphoning',
  'Sipsip Pozo Negro',
  'Declogging',
  'Plumbing',
  'Drainage',
  'Grease Trap Cleaning',
  'STP Cleaning',
  'Septic Tank Construction',
]
