export type Service = {
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  heroAlt: string
  metaTitle: string
  metaDescription: string
  inclusions: string[]
  benefits: { title: string; body: string }[]
  steps: { step: string; title: string; body: string }[]
  faqs: { q: string; a: string }[]
  relatedSlugs: string[]
}

export const services: Service[] = [
  {
    slug: 'standard-cleaning',
    name: 'Standard Cleaning',
    shortName: 'Standard',
    tagline: 'Recurring weekly, bi-weekly, or monthly home cleaning.',
    description:
      'Our standard cleaning service keeps your home consistently fresh with attention to high-traffic areas, kitchens, bathrooms, dusting, vacuuming, and mopping. Schedule weekly, bi-weekly, or monthly and come home to a spotless space every time.',
    heroAlt: 'Professional cleaner wiping kitchen countertops in a bright modern home',
    metaTitle: 'Standard Cleaning Services | Bright Broom Service',
    metaDescription:
      'Recurring weekly, bi-weekly, or monthly home cleaning across CA, AZ, NV, CO & VA. Bright Broom Service keeps your home consistently fresh. Get a free quote.',
    inclusions: [
      'Kitchen — countertops, stovetop, sink, appliance exteriors, cabinet fronts',
      'Bathrooms — toilets, sinks, tubs/showers, mirrors, floors',
      'All rooms — dusting surfaces, furniture, ceiling fans, blinds',
      'Vacuuming all carpets and rugs',
      'Mopping hard floors',
      'Trash removal from all rooms',
      'Bed making / linen straightening',
      'Baseboard wipe-down (weekly schedule)',
      'Interior window sill cleaning',
      'Light switch and door handle sanitizing',
      'Entry and hallway cleaning',
      'Staircase vacuuming and railing dusting',
    ],
    benefits: [
      {
        title: 'Consistent Freshness',
        body: 'A regular schedule prevents buildup and keeps your home guest-ready at all times without the deep-clean scramble.',
      },
      {
        title: 'Same Trusted Team',
        body: 'We assign the same crew to recurring clients so your preferences and routines are learned and respected every visit.',
      },
      {
        title: 'Flexible Scheduling',
        body: 'Weekly, bi-weekly, or monthly — we work around your calendar, not the other way around, 7 days a week.',
      },
    ],
    steps: [
      { step: '1', title: 'Request a Quote', body: 'Fill out our form or call. We gather your home details and schedule preferences.' },
      { step: '2', title: 'We Schedule Your First Clean', body: 'We confirm a date, time, and assign your dedicated cleaning team.' },
      { step: '3', title: 'We Clean — You Relax', body: 'Our team arrives on time, follows your checklist, and leaves your home spotless.' },
      { step: '4', title: 'Ongoing & Consistent', body: 'Your recurring schedule runs automatically. We communicate any changes proactively.' },
    ],
    faqs: [
      { q: 'How often should I schedule standard cleaning?', a: 'Most households benefit from bi-weekly service. Larger homes, families with kids or pets, and homes with high foot traffic often prefer weekly. Monthly works well for smaller or less-used spaces.' },
      { q: 'Do you bring your own supplies and equipment?', a: 'Yes. We arrive fully equipped with professional-grade, family-safe cleaning products and all necessary tools. Just let us know if you have product preferences.' },
      { q: 'Will I get the same team each visit?', a: 'We do our best to assign a consistent crew to recurring clients. If a team member is unavailable, we notify you in advance and send a trained replacement.' },
      { q: 'What if I need to reschedule?', a: 'Just call or message us at least 24 hours in advance. We will work with you to find the next available slot that fits your calendar.' },
    ],
    relatedSlugs: ['deep-cleaning', 'move-in-move-out-cleaning', 'specialty-cleaning'],
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortName: 'Deep Clean',
    tagline: 'Intensive top-to-bottom cleaning targeting buildup and neglected areas.',
    description:
      'Our deep cleaning service goes far beyond a standard clean. We target built-up grime, scale, soap scum, and neglected areas including inside cabinets, behind appliances, baseboards, vents, and light fixtures. Ideal as a one-time refresh or before starting a recurring service.',
    heroAlt: 'Cleaner scrubbing grout in a bright white bathroom during a deep clean',
    metaTitle: 'Deep Cleaning Services | Bright Broom Service',
    metaDescription:
      'Top-to-bottom deep cleaning targeting buildup, grime & neglected areas in CA, AZ, NV, CO & VA homes. Book Bright Broom Service for a thorough deep clean today.',
    inclusions: [
      'Everything in standard cleaning, plus:',
      'Inside oven cleaning — racks, walls, door glass',
      'Inside refrigerator cleaning',
      'Inside all kitchen cabinets and drawers',
      'Behind and under appliances (stove, fridge, washer/dryer)',
      'Bathroom tile grout scrubbing and scale removal',
      'Soap scum removal from all shower/tub surfaces',
      'Detailed baseboard scrubbing — all rooms',
      'Window sills, tracks, and frames — interior',
      'Ceiling fan blade wipe-down and light fixture dusting',
      'Air vent covers and return grilles',
      'Interior door frames, door tops, and switch plates',
      'Exterior of all appliances (detailed)',
      'Garage entryway and mudroom deep sweep',
    ],
    benefits: [
      {
        title: 'Removes Years of Buildup',
        body: 'A deep clean tackles the areas that get skipped in routine cleaning — inside cabinets, behind appliances, grout lines, and scale-covered surfaces.',
      },
      {
        title: 'Perfect Starting Point',
        body: 'Most clients start a recurring standard service with a deep clean first. It resets the baseline so every subsequent visit maintains a higher standard.',
      },
      {
        title: 'Healthier Home Environment',
        body: 'Removing allergen buildup in vents, grout, and fabric surfaces measurably improves indoor air quality — especially important for allergy sufferers and families with young children.',
      },
    ],
    steps: [
      { step: '1', title: 'Get a Quote', body: 'We assess your square footage, home type, and areas of focus to provide an accurate quote.' },
      { step: '2', title: 'Schedule Your Deep Clean', body: 'We block adequate time for a thorough job — typically 4–8 hours depending on home size.' },
      { step: '3', title: 'Top-to-Bottom Cleaning', body: 'Our team works systematically from ceiling to floor, room by room, using professional equipment.' },
      { step: '4', title: 'Walkthrough & Sign-Off', body: 'We complete a final walkthrough with you to confirm every area meets the standard.' },
    ],
    faqs: [
      { q: 'How long does a deep clean take?', a: 'Typically 4–8 hours depending on home size, number of rooms, and the extent of buildup. We allocate appropriate time and will not rush the job.' },
      { q: 'How is a deep clean different from a standard clean?', a: 'A standard clean maintains a clean home. A deep clean resets it — we clean inside appliances, behind furniture, inside cabinets, grout lines, vents, and any area that accumulates buildup over time.' },
      { q: 'Do you clean inside the oven and refrigerator?', a: 'Yes. Interior oven cleaning (including racks) and interior refrigerator cleaning are included in every deep clean.' },
      { q: 'Should I deep clean before or after a move?', a: 'Both. A pre-move deep clean maximizes your deposit return. A post-move deep clean ensures your new home is fresh before you unpack. We specialize in both — see our Move-In/Move-Out service.' },
    ],
    relatedSlugs: ['standard-cleaning', 'move-in-move-out-cleaning', 'post-construction-cleaning'],
  },
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-In / Move-Out Cleaning',
    shortName: 'Move-In/Out',
    tagline: 'Comprehensive turnover cleaning for renters, homeowners, and property managers.',
    description:
      'Our move-in/move-out cleaning service is designed to meet landlord inspection standards and prepare a property for new occupants. We clean every surface, inside every cabinet and appliance, and handle the deep-level detail that determines whether you get your deposit back.',
    heroAlt: 'Empty clean apartment ready for new tenants after professional move-out cleaning',
    metaTitle: 'Move-In Move-Out Cleaning | Bright Broom Service',
    metaDescription:
      'Move-out cleaning that gets your deposit back. Move-in cleaning that makes your new home fresh. Serving CA, AZ, NV, CO & VA. Get a free quote from Bright Broom.',
    inclusions: [
      'Full deep clean of all rooms (all deep-clean inclusions apply)',
      'Inside all kitchen cabinets, drawers, and pantry',
      'Inside oven, refrigerator, microwave, and dishwasher',
      'All bathroom fixtures — scrubbed to inspection standard',
      'Closet interiors — shelves, rods, floors, corners',
      'Interior window cleaning (all accessible windows)',
      'Blinds — full slat wipe-down',
      'Baseboards — entire property',
      'Interior door frames, doors, knobs, and hinges',
      'Laundry area — washer/dryer exterior + drum interior, lint trap',
      'Garage sweep and mop (if applicable)',
      'Patio/deck sweep (if applicable)',
      'Final inspection walkthrough against move-out checklist',
    ],
    benefits: [
      {
        title: 'Deposit-Protecting Standard',
        body: 'We clean to landlord inspection standards. Our checklist mirrors what property managers verify — no guessing, no missed items.',
      },
      {
        title: 'Vacant or Occupied',
        body: 'We handle empty properties after a move and furnished properties before one. Schedule around your move date with flexible same-week availability.',
      },
      {
        title: 'Serves All Parties',
        body: 'Whether you are a tenant protecting your deposit, a homeowner preparing to sell, or a property manager turning over a unit, we deliver the same thorough standard.',
      },
    ],
    steps: [
      { step: '1', title: 'Book Your Move Date', body: 'Schedule as early as possible — ideally the day before final inspection or key handover.' },
      { step: '2', title: 'We Assess the Property', body: 'We review square footage, room count, and any areas of concern to confirm scope and timing.' },
      { step: '3', title: 'Complete Turnover Clean', body: 'Our team works through the full checklist — every cabinet, every appliance, every fixture.' },
      { step: '4', title: 'Inspection-Ready Handoff', body: 'We complete a final walkthrough and leave the property ready for your landlord, buyer, or new occupants.' },
    ],
    faqs: [
      { q: 'Will this cleaning satisfy my landlord\'s inspection?', a: 'Our move-out standard is specifically designed to meet typical landlord checklists. We clean every area inspectors verify, including inside appliances, cabinets, closets, and all fixtures. Most clients recover their full deposit.' },
      { q: 'Do you clean empty homes only?', a: 'No. We clean both vacant properties and occupied homes preparing for a move. For occupied move-outs, we can work around staged boxes and furniture.' },
      { q: 'How far in advance should I book?', a: 'We recommend booking 3–7 days before your move-out date. Same-week availability is often possible — call to confirm.' },
      { q: 'Do you clean inside cabinets and appliances?', a: 'Yes. Every cabinet, drawer, inside the oven, inside the fridge, inside the microwave, and the dishwasher interior are all included.' },
    ],
    relatedSlugs: ['deep-cleaning', 'standard-cleaning', 'specialty-cleaning'],
  },
  {
    slug: 'commercial-janitorial-cleaning',
    name: 'Commercial / Janitorial Cleaning',
    shortName: 'Commercial',
    tagline: 'Recurring cleaning for offices, retail, medical, and professional spaces.',
    description:
      'Bright Broom Service provides professional commercial and janitorial cleaning for offices, retail locations, medical offices, and professional spaces. Daily, nightly, or weekly schedules available. We handle restroom sanitation, floor care, trash removal, surface disinfection, and common-area upkeep — keeping your space professional and hygienic at all times.',
    heroAlt: 'Professional janitor cleaning a modern office space with commercial equipment',
    metaTitle: 'Commercial Janitorial Services | Bright Broom',
    metaDescription:
      'Recurring commercial and janitorial cleaning for offices, retail, medical & professional spaces in CA, AZ, NV, CO & VA. Fully insured. Get a free quote today.',
    inclusions: [
      'Restroom sanitation — toilets, urinals, sinks, mirrors, dispensers, floors',
      'Trash removal and liner replacement — all receptacles',
      'Common area cleaning — lobbies, hallways, break rooms, conference rooms',
      'Surface disinfection — desks, countertops, door handles, switches',
      'Floor care — vacuuming, mopping, sweeping per surface type',
      'Kitchen/break room cleaning — appliances, counters, sink, microwave',
      'Glass and partition cleaning — doors, windows, interior glass',
      'Stairwell and elevator cleaning',
      'Supply restocking coordination (paper products, soap, liners)',
      'After-hours scheduling to avoid business disruption',
      'Secure key/access-code management',
      'Supervisor walkthroughs and quality verification',
    ],
    benefits: [
      {
        title: 'Reliable Recurring Service',
        body: 'We operate on your schedule — daily, nightly, or weekly. You never have to follow up or chase service; we show up as agreed, every time.',
      },
      {
        title: 'Fully Insured & COI-Ready',
        body: 'Bright Broom Service carries full liability insurance and can provide certificates of insurance for property management and corporate procurement requirements.',
      },
      {
        title: 'After-Hours Available',
        body: 'We clean while you and your team are away — zero disruption to your business operations, and a spotless office waiting for you every morning.',
      },
    ],
    steps: [
      { step: '1', title: 'Site Walkthrough', body: 'We assess your space, square footage, and specific requirements before preparing a quote.' },
      { step: '2', title: 'Custom Cleaning Plan', body: 'We build a scope-of-work document tailored to your facility, schedule, and standards.' },
      { step: '3', title: 'Recurring Service Begins', body: 'Your assigned team begins service on the agreed schedule. We issue access protocols and confirm security procedures.' },
      { step: '4', title: 'Ongoing Communication', body: 'Your account manager is reachable directly. We handle requests, scope changes, and quality issues promptly.' },
    ],
    faqs: [
      { q: 'Do you provide certificates of insurance (COIs)?', a: 'Yes. We carry general liability insurance and workers\' compensation coverage and can provide COIs naming your business or property management company as an additional insured upon request.' },
      { q: 'Can you clean after hours or on weekends?', a: 'Absolutely. Most of our commercial clients prefer after-hours service to avoid disrupting employees and visitors. We offer flexible scheduling including nights and weekends.' },
      { q: 'Do you handle medical-grade sanitation?', a: 'We service medical offices and clinics and follow enhanced disinfection protocols for healthcare environments. Contact us to discuss your specific compliance requirements.' },
      { q: 'What is the minimum contract length?', a: 'We offer month-to-month arrangements. For ongoing scheduled service, we do ask for a 30-day notice to cancel so we can plan staffing appropriately.' },
    ],
    relatedSlugs: ['standard-cleaning', 'specialty-cleaning', 'post-construction-cleaning'],
  },
  {
    slug: 'specialty-cleaning',
    name: 'Specialty Cleaning',
    shortName: 'Specialty',
    tagline: 'Targeted cleaning for Airbnb turnovers, carpet, grout, and unique needs.',
    description:
      'Our specialty cleaning services address unique and targeted cleaning needs that fall outside standard recurring service. From Airbnb and short-term rental turnovers to carpet cleaning, exterior surfaces, hardwood and tile/grout restoration, allergen-focused deep cleans, and more — we bring the right equipment and expertise for the job.',
    heroAlt: 'Specialty cleaner using professional carpet extractor in a vacation rental living room',
    metaTitle: 'Specialty Cleaning Services | Bright Broom',
    metaDescription:
      'Airbnb turnovers, carpet cleaning, grout restoration & allergen deep cleans across CA, AZ, NV, CO & VA. Specialty cleaning done right. Get a free quote.',
    inclusions: [
      'Airbnb / short-term rental turnovers — full reset between guests',
      'Carpet cleaning — hot-water extraction, stain treatment, deodorizing',
      'Tile and grout restoration — deep scrub, sealing recommendation',
      'Hardwood floor cleaning and conditioning',
      'Exterior surface cleaning — patios, driveways, garage floors',
      'Allergen-focused deep cleans — HEPA vacuuming, bedding, vents',
      'Move-in/out specialty add-ons (blinds, walls, doors)',
      'Odor elimination treatments',
      'Hoarding cleanup (light to moderate — call to discuss scope)',
      'Post-party or event cleanup',
      'Seasonal deep-clean packages',
    ],
    benefits: [
      {
        title: 'Right Equipment for the Job',
        body: 'Specialty work requires specialty tools. We use professional-grade extractors, HEPA systems, and surface-specific products — not standard household equipment.',
      },
      {
        title: 'Fast Turnovers for STR Hosts',
        body: 'We understand Airbnb check-in windows are tight. Our turnover teams are optimized for speed and consistency — restocked, reset, and guest-ready in one visit.',
      },
      {
        title: 'Protects Your Surfaces',
        body: 'Using the wrong product on hardwood, grout, or carpet causes damage. We match the right method to each surface type to clean without causing wear.',
      },
    ],
    steps: [
      { step: '1', title: 'Describe Your Need', body: 'Call or fill out the form with a description of the specialty service required. Photos help us quote accurately.' },
      { step: '2', title: 'Receive a Custom Quote', body: 'We assess scope, surface type, and equipment needs and provide a tailored quote with a realistic timeline.' },
      { step: '3', title: 'Specialty Service Delivered', body: 'Our trained team arrives with the right equipment and completes the job to a professional standard.' },
      { step: '4', title: 'Follow-Up & Maintenance Plan', body: 'For recurring specialty needs (STR turnovers, periodic carpet cleaning), we set up a reliable ongoing schedule.' },
    ],
    faqs: [
      { q: 'What kinds of specialty cleaning do you take on?', a: 'We handle Airbnb and STR turnovers, carpet cleaning, tile/grout restoration, hardwood conditioning, allergen deep cleans, odor treatment, exterior surface cleaning, event cleanup, and light hoarding cleanup. Call us for anything not listed.' },
      { q: 'Can you do same-day Airbnb turnover cleaning?', a: 'Same-day availability depends on scheduling. For recurring STR hosts, we build turnover service into your block calendar. For one-off requests, call as early as possible.' },
      { q: 'Do you handle biohazard or hoarding situations?', a: 'We handle light-to-moderate hoarding cleanup. Biohazard remediation involving blood, sewage, or hazardous materials requires a licensed biohazard service — we can refer you.' },
      { q: 'How long before I can walk on cleaned carpet?', a: 'Hot-water extraction typically requires 2–4 hours of drying time before light foot traffic. Full drying is usually complete within 6–8 hours depending on humidity and airflow.' },
    ],
    relatedSlugs: ['deep-cleaning', 'move-in-move-out-cleaning', 'commercial-janitorial-cleaning'],
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction / Industrial Cleaning',
    shortName: 'Post-Construction',
    tagline: 'Heavy-duty cleanup after construction or renovation — ready for occupancy.',
    description:
      'Post-construction cleaning is a multi-phase, heavy-duty process that removes construction debris, dust, and residue left behind after building or renovation. Our three-phase approach (rough, final, and touch-up) uses HEPA filtration equipment, commercial-grade tools, and systematic surface detailing to deliver a property that is truly ready for occupancy or handoff.',
    heroAlt: 'Professional crew doing post-construction cleaning in a newly renovated kitchen',
    metaTitle: 'Post-Construction Cleaning | Bright Broom Service',
    metaDescription:
      'Multi-phase post-construction cleaning for builders, GCs & homeowners across CA, AZ, NV, CO & VA. HEPA, surface detail, occupancy-ready. Get a free quote.',
    inclusions: [
      'Phase 1 (Rough Clean) — removal of debris, scraps, packaging, bulk dust sweep',
      'Phase 2 (Final Clean) — HEPA vacuum all surfaces, wipe all fixtures, clean windows',
      'Phase 3 (Touch-Up) — detail polish, spot treatment, fixture shining, final walkthrough',
      'HEPA filtration vacuuming — floors, walls, ceilings, vents',
      'Construction dust removal from all surfaces including overhead',
      'Window cleaning — removal of stickers, labels, paint overspray (interior)',
      'Cabinet interiors — dust and wipe all new cabinetry',
      'Fixture detailing — light fixtures, plumbing fixtures, hardware',
      'Floor care — sweep, vacuum, mop per floor type; tile grout cleanup',
      'Paint overspray and adhesive removal from appropriate surfaces',
      'Appliance cleaning — interiors and exteriors of all new appliances',
      'Final occupancy walkthrough against contractor punch list',
    ],
    benefits: [
      {
        title: 'Three-Phase Process',
        body: 'Construction cleanup is not a single pass. Our rough, final, and touch-up phases ensure every layer of dust and debris is addressed in the right sequence.',
      },
      {
        title: 'HEPA-Grade Dust Removal',
        body: 'Construction dust contains fine particulates that standard vacuums recirculate into the air. We use HEPA filtration equipment to actually capture and remove it.',
      },
      {
        title: 'Insured for Active Job Sites',
        body: 'We carry liability coverage and can work alongside GCs, subcontractors, and property managers in active or newly completed construction environments.',
      },
    ],
    steps: [
      { step: '1', title: 'Coordinate with Your GC or PM', body: 'We align with your project timeline to schedule each cleaning phase at the right construction milestone.' },
      { step: '2', title: 'Phase 1 — Rough Clean', body: 'Bulk debris, packaging, and heavy dust are removed. Site is cleared for finish trades if needed.' },
      { step: '3', title: 'Phase 2 — Final Clean', body: 'HEPA vacuuming, surface wipe-down, window cleaning, fixture detailing, cabinet interiors, and floor care.' },
      { step: '4', title: 'Phase 3 — Touch-Up & Handoff', body: 'Spot treatment, polish, final walkthrough against the punch list. Ready for owner occupancy or client handoff.' },
    ],
    faqs: [
      { q: 'Do you handle all three phases — rough, final, and touch-up?', a: 'Yes. We can be contracted for all three phases or for final and touch-up only, depending on what your project requires. We coordinate directly with your GC.' },
      { q: 'Do you use HEPA filtration equipment?', a: 'Yes. We use HEPA-rated vacuums and air scrubbers for post-construction work. Standard vacuums release fine construction dust back into the air — HEPA equipment actually captures it.' },
      { q: 'How soon after construction can you start?', a: 'We can begin rough cleaning while trades are still finishing, and schedule the final clean to align with your certificate of occupancy or client walkthrough date.' },
      { q: 'Are you insured for active construction sites?', a: 'Yes. We carry general liability and workers\' compensation coverage and can provide COIs for contractors and property owners.' },
    ],
    relatedSlugs: ['deep-cleaning', 'commercial-janitorial-cleaning', 'specialty-cleaning'],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map(s => getServiceBySlug(s)).filter(Boolean) as Service[]
}
