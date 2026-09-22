import type { LucideIcon } from 'lucide-react'
import { Construction, Factory, Pipette, SprayCan, Truck, Wrench } from 'lucide-react'

export type ServiceItem = {
  id: string
  title: string
  subtitle?: string
  description: string
  itemsLabel: string
  items: string[]
  cta: string
  quoteService: string
  icon: LucideIcon
}

export const services: ServiceItem[] = [
  {
    id: 'siphoning',
    title: 'Septic Tank Siphoning',
    subtitle: 'Sipsip Pozo Negro & Septic Tank Cleaning',
    description:
      "A full septic tank or pozo negro may cause foul odors, slow drainage, wastewater backup, and sanitation problems. MSMalabanan Barado Expert provides professional septic tank siphoning and cleaning services based on your property's condition and accessibility.",
    itemsLabel: 'Suitable for',
    items: [
      'Houses',
      'Apartments',
      'Restaurants',
      'Offices',
      'Commercial establishments',
      'Rental properties',
      'Buildings',
    ],
    cta: 'Request Siphoning Quote',
    quoteService: 'Septic Tank Siphoning',
    icon: Truck,
  },
  {
    id: 'declogging',
    title: 'Declogging Service',
    subtitle: 'Baradong Toilet, Sink, Drainage & Sewer Line',
    description:
      'We help clear blockages affecting toilets, kitchen sinks, floor drains, drainage systems, and sewer lines.',
    itemsLabel: 'Services include',
    items: [
      'Baradong toilet',
      'Baradong lababo',
      'Kitchen sink blockage',
      'Bathroom drainage',
      'Floor drains',
      'Main drainage',
      'Sewer line blockage',
      'Slow-draining pipes',
    ],
    cta: 'Request Declogging Quote',
    quoteService: 'Declogging',
    icon: Pipette,
  },
  {
    id: 'plumbing',
    title: 'Plumbing Repair & Installation',
    description:
      'Professional assistance for damaged, leaking, blocked, or improperly installed plumbing and drainage systems.',
    itemsLabel: 'Work includes',
    items: [
      'Pipe repair',
      'Leak repair',
      'Drain pipe replacement',
      'Water line installation',
      'Inlet installation',
      'Outlet installation',
      'Drainage installation',
      'Plumbing troubleshooting',
      'Pipe rerouting',
    ],
    cta: 'Request Plumbing Quote',
    quoteService: 'Plumbing',
    icon: Wrench,
  },
  {
    id: 'grease-trap',
    title: 'Grease Trap Cleaning',
    description:
      'Professional grease trap cleaning for restaurants, cafés, commercial kitchens, food businesses, hotels, and other establishments. Grease, oil, and food particles can accumulate and cause odors, blockages, and slow drainage.',
    itemsLabel: 'Common needs',
    items: [
      'Restaurants and cafés',
      'Commercial kitchens',
      'Hotels and food businesses',
      'Odor and grease buildup',
      'Slow kitchen drainage',
    ],
    cta: 'Request Grease Trap Quote',
    quoteService: 'Grease Trap Cleaning',
    icon: SprayCan,
  },
  {
    id: 'stp',
    title: 'STP Cleaning & Maintenance',
    subtitle: 'Sewage Treatment Plant Cleaning',
    description:
      'Professional sewage treatment plant cleaning and maintenance services depending on the condition and requirements of the facility.',
    itemsLabel: 'Suitable for',
    items: [
      'Commercial buildings',
      'Condominiums',
      'Restaurants',
      'Hotels',
      'Industrial facilities',
      'Property developments',
    ],
    cta: 'Request STP Quote',
    quoteService: 'STP Cleaning',
    icon: Factory,
  },
  {
    id: 'construction',
    title: 'Septic Tank Construction',
    description:
      'Septic tank construction services for residential and commercial properties, from site assessment through plumbing connection.',
    itemsLabel: 'Scope may include',
    items: [
      'Site assessment',
      'Septic tank planning',
      'Excavation',
      'Septic vault construction',
      'Inlet connection',
      'Outlet connection',
      'Drainage connection',
      'Plumbing connection',
    ],
    cta: 'Request Construction Quote',
    quoteService: 'Septic Tank Construction',
    icon: Construction,
  },
]
