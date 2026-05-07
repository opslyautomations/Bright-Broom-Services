export type City = {
  slug: string
  name: string
  state: string
  stateSlug: string
  stateAbbr: string
  lat: number
  lng: number
  metaTitle: string
  metaDescription: string
  intro: string[]
  neighborhoods: string[]
  homeTypes: string
  weatherContext: string
  serviceExamples: { scenario: string; detail: string }[]
  nearbySlugs: string[]
  faqs: { q: string; a: string }[]
  zipCodes?: string
}

export type StateHub = {
  slug: string
  name: string
  abbr: string
  lat: number
  lng: number
  metaTitle: string
  metaDescription: string
  intro: string[]
  regionalContext: string
  whyChoose: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
  cities: City[]
}

export const stateHubs: StateHub[] = [
  {
    slug: 'california',
    name: 'California',
    abbr: 'CA',
    lat: 36.7783,
    lng: -119.4179,
    metaTitle: 'House Cleaning Services California | Bright Broom',
    metaDescription:
      'Professional house & commercial cleaning across California — Santa Maria, Santa Barbara, SLO & more cities. Family-owned Bright Broom. Get a free quote.',
    intro: [
      'Bright Broom Service is headquartered in Santa Maria, California, and proudly serves 14 cities across the Central Coast, Santa Barbara County, and beyond. From the salt-air cottages of Avila Beach to the wine-country estates of Santa Ynez Valley, we understand how California\'s coastal and inland environments affect homes and businesses differently.',
      'California\'s coastal homes face unique cleaning challenges — salt air accelerates mineral deposits on fixtures and windows, marine humidity encourages mold and mildew in bathrooms, and seasonal pollen from eucalyptus and coastal sage settles on every surface. Our team is trained for California\'s specific environment, using the right products and protocols for each region.',
    ],
    regionalContext: 'Central Coast salt air, coastal humidity, seasonal wildfire ash, agricultural dust, and wine-country estate maintenance.',
    whyChoose: [
      { title: 'California Headquarters', body: 'We are based in Santa Maria — this is our home market. We know the neighborhoods, the home types, and what Central Coast clients expect from a professional cleaning service.' },
      { title: 'Coastal & Inland Expertise', body: 'From beachfront vacation rentals in Pismo Beach to ranches in Santa Ynez, we bring environment-appropriate cleaning techniques and products to every property type.' },
      { title: '14 Cities Served', body: 'Our California footprint covers the Central Coast comprehensively — Santa Barbara County, San Luis Obispo County, and Kern County locations available.' },
    ],
    faqs: [
      { q: 'Do you serve all of the Central Coast?', a: 'Yes. Our California service area covers Santa Maria, Santa Barbara, San Luis Obispo, Bakersfield, Lompoc, Orcutt, Nipomo, Avila Beach, Pismo Beach, Guadalupe, Arroyo Grande, Buellton, Solvang, and Santa Ynez.' },
      { q: 'Do you handle vacation rental turnovers on the Central Coast?', a: 'Absolutely. Airbnb and short-term rental turnover cleaning is a core specialty in Avila Beach, Pismo Beach, Solvang, and the Santa Ynez Valley where STRs are prevalent.' },
      { q: 'Is Bright Broom Service insured in California?', a: 'Yes. We carry full general liability insurance and workers\' compensation coverage in California.' },
    ],
    cities: [
      {
        slug: 'santa-maria',
        name: 'Santa Maria',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 34.9530,
        lng: -120.4357,
        metaTitle: 'Cleaning Services Santa Maria CA | Bright Broom',
        metaDescription:
          'Professional house & commercial cleaning in Santa Maria, CA. Bright Broom is headquartered here — deep cleaning, move-out & standard service. Get a free quote.',
        intro: [
          'Santa Maria is home base for Bright Broom Service, and we bring our highest standard of care to the city where our business was born. Whether you\'re in a family home in Orcutt Road Estates, a condo near Main Street, or a commercial space in the Battles Road corridor, our team knows Santa Maria\'s neighborhoods personally.',
          'Santa Maria\'s inland location brings warm, dry summers with occasional wildfire ash events and cool marine-layer mornings that leave surfaces damp and prone to dust adhesion. We use cleaning schedules and products suited to this climate, ensuring your home stays fresh through seasonal changes.',
        ],
        neighborhoods: ['Orcutt Road Estates', 'Bradley Square', 'Oakley Park', 'Battles Road Corridor', 'Westside', 'Downtown Santa Maria'],
        homeTypes: 'Single-family ranch homes, newer tract developments, older downtown properties, and agricultural estate homes.',
        weatherContext: 'Warm dry summers with marine-layer mornings, seasonal wildfire ash, mild winters. Dust from agricultural operations common in spring and fall.',
        serviceExamples: [
          { scenario: 'Pre-listing deep clean in Bradley Square', detail: 'A 3-bed/2-bath home in Bradley Square, Santa Maria prepped for real estate listing with a full deep clean, inside appliances, and garage sweep.' },
          { scenario: 'Bi-weekly standard cleaning in Orcutt Road Estates', detail: 'Recurring bi-weekly service for a busy family of four in a 4-bedroom home — kitchens, bathrooms, all floors, and weekly linen straightening.' },
          { scenario: 'Commercial janitorial in the Battles Road business park', detail: 'Nightly janitorial service for a 3,000 sq ft professional office in Santa Maria\'s commercial corridor — restrooms, floors, trash, and surfaces.' },
        ],
        nearbySlugs: ['lompoc', 'orcutt', 'nipomo', 'guadalupe', 'santa-barbara'],
        faqs: [
          { q: 'Is Bright Broom Service headquartered in Santa Maria?', a: 'Yes. Santa Maria is our home base. Our team lives and works in this community, which means we bring a personal level of care and familiarity to every Santa Maria job.' },
          { q: 'Do you offer same-week scheduling in Santa Maria?', a: 'Often yes. As our primary service area, Santa Maria typically has the most flexible scheduling availability. Call us to confirm same-week or next-day options.' },
          { q: 'Do you serve commercial businesses in Santa Maria?', a: 'Yes. We provide recurring janitorial and commercial cleaning for offices, retail locations, and professional spaces throughout the Santa Maria business district.' },
        ],
        zipCodes: '93454, 93455, 93456, 93458',
      },
      {
        slug: 'santa-barbara',
        name: 'Santa Barbara',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 34.4208,
        lng: -119.6982,
        metaTitle: 'Cleaning Services Santa Barbara CA | Bright Broom',
        metaDescription:
          'Professional house & commercial cleaning in Santa Barbara, CA. Deep cleaning, move-in/out, standard recurring & specialty services. Get a free quote.',
        intro: [
          'Santa Barbara\'s iconic Spanish Colonial architecture, oceanfront estates, and hillside homes demand a cleaning service that matches the city\'s standards. Bright Broom Service serves the full Santa Barbara area — from the Eastside and Mesa neighborhoods to the Riviera and Montecito-adjacent properties.',
          'Coastal Santa Barbara brings specific maintenance challenges: salt air oxidizes metal fixtures, marine humidity promotes mildew in bathrooms and closets, and eucalyptus pollen blankets surfaces throughout the year. Our team applies coastal-appropriate cleaning protocols that address these conditions directly.',
        ],
        neighborhoods: ['The Mesa', 'Eastside', 'Riviera', 'Samarkand', 'Montecito-adjacent', 'Lower Riviera', 'San Roque', 'Hope Ranch area'],
        homeTypes: 'Spanish Colonial estates, hillside single-family homes, Craftsman bungalows, luxury vacation rentals, and historic downtown condos.',
        weatherContext: 'Year-round mild coastal climate. Salt air from the Pacific accelerates mineral deposits. Marine layer humidity promotes mildew. Eucalyptus pollen is a constant surface challenge.',
        serviceExamples: [
          { scenario: 'Luxury estate deep clean in the Riviera', detail: 'Full top-to-bottom deep clean for a 5-bed hillside estate — tile grout restoration, fixture detailing, inside all cabinetry and appliances.' },
          { scenario: 'Vacation rental turnover on the Mesa', detail: 'Same-day Airbnb turnover service for a 2-bed Mesa cottage — fresh linens staged, full clean, ocean-salt residue wiped from all surfaces.' },
          { scenario: 'Move-out cleaning for a State Street condo', detail: 'Deposit-protecting move-out clean for a furnished 1-bedroom condo, including inside all appliances and interior windows.' },
        ],
        nearbySlugs: ['santa-maria', 'san-luis-obispo', 'buellton', 'solvang', 'goleta'],
        faqs: [
          { q: 'Do you serve all Santa Barbara neighborhoods?', a: 'Yes. We serve the Mesa, Eastside, Riviera, San Roque, Samarkand, Goleta area, and Montecito-adjacent properties. Call us if you are unsure about your specific address.' },
          { q: 'Do you clean high-end and luxury homes?', a: 'Yes. We work in upscale properties throughout Santa Barbara and bring appropriate care, discretion, and detail to luxury cleaning engagements.' },
          { q: 'Can you handle vacation rental turnovers in Santa Barbara?', a: 'Absolutely. STR turnover cleaning is one of our most-requested Santa Barbara services. We work within tight check-in windows to get your property guest-ready.' },
        ],
        zipCodes: '93101, 93103, 93105, 93108, 93109, 93110',
      },
      {
        slug: 'san-luis-obispo',
        name: 'San Luis Obispo',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 35.2828,
        lng: -120.6596,
        metaTitle: 'Cleaning Services San Luis Obispo CA | Bright Broom',
        metaDescription:
          'House & commercial cleaning in San Luis Obispo, CA. Deep cleaning, standard recurring, move-out & specialty services from Bright Broom. Get a free quote.',
        intro: [
          'San Luis Obispo\'s mix of Cal Poly student rentals, downtown Victorian homes, and the surrounding wine-country properties in the Edna Valley creates a diverse cleaning market. Bright Broom Service brings flexible, high-standard service to SLO homeowners, property managers, and businesses alike.',
          'SLO\'s inland-coastal microclimate means mild temperatures year-round, but the spring pollen season and periodic wildfire smoke from surrounding hills keeps surfaces dusty and allergy-prone. Our team accounts for these seasonal factors in every cleaning schedule.',
        ],
        neighborhoods: ['Downtown SLO', 'Old Town', 'Foothill Area', 'Laguna Lake', 'Johnson Avenue Corridor', 'Edna Valley area', 'Cal Poly adjacent'],
        homeTypes: 'Victorian and Craftsman single-family homes, student rental properties, new townhomes, wine-country estates in Edna Valley.',
        weatherContext: 'Mild inland-coastal climate with warm dry summers. Spring pollen season is heavy. Wildfire smoke events occur in late summer. Morning fog common in fall.',
        serviceExamples: [
          { scenario: 'Move-out clean for a Cal Poly-area rental', detail: 'Full deposit-protecting move-out clean for a 3-bed student rental in the Cal Poly area — every room, inside all appliances, and full bathroom restoration.' },
          { scenario: 'Deep clean for a downtown Victorian home', detail: 'Pre-sale deep clean for a historic Victorian on Pacific Street — grout restoration, window tracks, fixture detailing, and interior cabinet cleaning.' },
          { scenario: 'Recurring office cleaning in downtown SLO', detail: 'Weekly commercial cleaning for a 4-person professional office — surfaces, restroom, trash, floors, and break room.' },
        ],
        nearbySlugs: ['arroyo-grande', 'pismo-beach', 'nipomo', 'avila-beach', 'santa-maria'],
        faqs: [
          { q: 'Do you serve rental properties near Cal Poly?', a: 'Yes. We regularly serve student rental properties and are experienced with the level of turnover cleaning these homes require between tenants.' },
          { q: 'Do you serve businesses in downtown SLO?', a: 'Yes. We provide recurring janitorial and one-time commercial cleaning for offices, retail, and professional spaces throughout downtown San Luis Obispo.' },
          { q: 'Can you clean wine-country properties in the Edna Valley?', a: 'Absolutely. We serve residential and estate properties in the Edna Valley and surrounding wine-country areas south of SLO.' },
        ],
        zipCodes: '93401, 93405, 93407',
      },
      {
        slug: 'bakersfield',
        name: 'Bakersfield',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 35.3733,
        lng: -119.0187,
        metaTitle: 'Cleaning Services Bakersfield CA | Bright Broom',
        metaDescription:
          'Professional house & commercial cleaning in Bakersfield, CA. Standard recurring, deep cleaning, move-out & janitorial services. Get a free quote.',
        intro: [
          'Bakersfield\'s hot valley summers and dry agricultural environment create some of the highest dust-load conditions in California. Bright Broom Service brings reliable, thorough cleaning to Bakersfield homes and businesses across the 99 Corridor, Seven Oaks, Oleander-Sunset, and surrounding areas.',
          'Kern County\'s combination of fine agricultural dust, oil-country particulates, and intense summer heat means surfaces accumulate faster here than almost anywhere in California. Our cleaning protocols are designed for high-load environments — using microfiber systems that capture rather than redistribute dust, and scheduling that aligns with the dusty spring and fall seasons.',
        ],
        neighborhoods: ['Seven Oaks', 'Oleander-Sunset', 'Downtown Bakersfield', 'Rosedale', 'Silver Creek', 'Westchester', 'East Bakersfield'],
        homeTypes: 'Large suburban single-family homes, newer tract developments in Seven Oaks, older Craftsman and ranch homes downtown, commercial buildings along the 99 corridor.',
        weatherContext: 'Hot dry summers with temperatures often exceeding 100°F. Agricultural dust and oil-field particulates create high indoor dust accumulation. Smoke events from San Joaquin Valley agricultural burns common in fall.',
        serviceExamples: [
          { scenario: 'Summer deep clean in Seven Oaks', detail: 'Post-summer deep clean for a 2,800 sq ft Seven Oaks home — ceiling fans, vents, all surfaces, inside appliances, and full baseboard scrub after months of dust accumulation.' },
          { scenario: 'Move-out clean in Oleander-Sunset', detail: 'Full landlord-standard move-out clean for a 3-bed rental including carpets, all cabinets, appliances, and interior windows.' },
          { scenario: 'Recurring office janitorial near the 99 corridor', detail: 'Twice-weekly commercial cleaning for a Bakersfield professional office — floors, surfaces, restrooms, and kitchen area.' },
        ],
        nearbySlugs: ['santa-maria', 'arroyo-grande', 'san-luis-obispo', 'nipomo'],
        faqs: [
          { q: 'How do you handle Bakersfield\'s extreme dust?', a: 'We use microfiber cleaning systems and HEPA-equipped vacuums for Bakersfield homes, which capture fine agricultural and industrial dust rather than redistributing it. We also recommend higher-frequency schedules for homes in open-area developments.' },
          { q: 'Do you clean commercial properties in Bakersfield?', a: 'Yes. We serve offices, retail spaces, and professional environments throughout Bakersfield with recurring janitorial and one-time commercial cleaning services.' },
          { q: 'Can you schedule around the summer heat?', a: 'Yes. We can accommodate early morning or evening scheduling preferences for Bakersfield clients during the summer months.' },
        ],
        zipCodes: '93301, 93304, 93306, 93308, 93309, 93311, 93312, 93313',
      },
      {
        slug: 'lompoc',
        name: 'Lompoc',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 34.6391,
        lng: -120.4579,
        metaTitle: 'Cleaning Services Lompoc CA | Bright Broom',
        metaDescription:
          'House and commercial cleaning in Lompoc, CA. Standard recurring, deep cleaning, move-out & specialty services from Bright Broom. Get a free quote today.',
        intro: [
          'Lompoc sits in the Santa Ynez River Valley, surrounded by flower fields and Vandenberg-adjacent military housing communities. Bright Broom Service regularly serves Lompoc homes, military family housing, and small businesses in the downtown corridor.',
          'Lompoc\'s coastal valley climate brings morning fog and marine-influenced humidity, making bathrooms and enclosed spaces prone to mildew. The Vandenberg military community also generates consistent demand for move-in/move-out cleaning as families transition between assignments — a service we have streamlined specifically for military family housing needs.',
        ],
        neighborhoods: ['Downtown Lompoc', 'Vandenberg Village', 'Ryon Park area', 'Mission Hills', 'Eastside Lompoc'],
        homeTypes: 'Military family housing, mid-century ranch homes, single-family tract homes, small commercial properties.',
        weatherContext: 'Coastal valley climate with frequent morning fog. Marine humidity promotes mildew in bathrooms. Mild year-round temperatures with cool summer evenings.',
        serviceExamples: [
          { scenario: 'Military family move-out clean near Vandenberg', detail: 'Full inspection-ready move-out clean for a military family housing unit — every room, appliance interiors, baseboards, and final walkthrough against housing inspection checklist.' },
          { scenario: 'Deep clean for a Ryon Park ranch home', detail: 'Pre-summer deep clean for a 3-bed ranch home including grout restoration, ceiling fans, vent covers, and full appliance interiors.' },
          { scenario: 'Downtown Lompoc office recurring clean', detail: 'Weekly cleaning for a downtown Lompoc small business — reception, office spaces, restroom, and kitchen area.' },
        ],
        nearbySlugs: ['santa-maria', 'buellton', 'solvang', 'orcutt', 'santa-barbara'],
        faqs: [
          { q: 'Do you serve Vandenberg military housing?', a: 'Yes. We regularly clean military family housing in the Lompoc and Vandenberg area and are experienced with the move-out inspection standards required by military housing offices.' },
          { q: 'Do you serve the downtown Lompoc area?', a: 'Yes. We serve both residential and commercial properties throughout downtown Lompoc and the surrounding valley communities.' },
          { q: 'Can you accommodate short-notice military move-outs?', a: 'We do our best to accommodate short-notice bookings for military families. Call us directly for urgent scheduling needs.' },
        ],
        zipCodes: '93436, 93437, 93438',
      },
      {
        slug: 'orcutt',
        name: 'Orcutt',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 34.8647,
        lng: -120.4368,
        metaTitle: 'Cleaning Services Orcutt CA | Bright Broom',
        metaDescription:
          'Professional house cleaning in Orcutt, CA. Recurring standard cleaning, deep cleaning & move-out services from Bright Broom. Get a free quote today.',
        intro: [
          'Orcutt is one of Santa Barbara County\'s most desirable residential communities, known for its newer developments, equestrian properties, and proximity to Santa Maria. Bright Broom Service serves Orcutt homeowners with the same thoroughness we bring to our Santa Maria HQ clients.',
          'Many Orcutt homes feature open floor plans, tile throughout, and large kitchen islands — layouts that benefit from a consistent professional cleaning schedule to maintain the polished appearance these homes are built for. Our recurring and deep cleaning services are specifically popular among Orcutt\'s families and professionals.',
        ],
        neighborhoods: ['Old Orcutt', 'Bradley Square', 'Orcutt Hills', 'Rice Ranch', 'Solomon Hills area'],
        homeTypes: 'Newer large-format single-family homes, equestrian properties, some older bungalows in Old Orcutt.',
        weatherContext: 'Similar to Santa Maria — warm dry summers with marine-layer influence. Agricultural dust from surrounding fields, especially in spring.',
        serviceExamples: [
          { scenario: 'Weekly standard cleaning in Rice Ranch', detail: 'Recurring weekly service for a 4-bed/3-bath Rice Ranch home — kitchens, bathrooms, all floors, and common areas maintaining a consistently fresh standard.' },
          { scenario: 'Deep clean for an Orcutt Hills property', detail: 'One-time deep clean for a 2,400 sq ft home including inside all appliances, cabinetry, grout, and full baseboard detail.' },
          { scenario: 'Move-out clean for an Old Orcutt bungalow', detail: 'Turnover clean for a 2-bed bungalow in Old Orcutt after a long-term tenant — deposit-protecting standard throughout.' },
        ],
        nearbySlugs: ['santa-maria', 'nipomo', 'arroyo-grande', 'guadalupe', 'lompoc'],
        faqs: [
          { q: 'Is Orcutt in your primary service area?', a: 'Yes. Orcutt is one of our most-served communities, located just minutes from our Santa Maria headquarters.' },
          { q: 'Do you clean equestrian properties in Orcutt?', a: 'We handle residential cleaning for equestrian-property homes. For barn or stable areas, please call to discuss scope and we can assess appropriately.' },
          { q: 'Can you start a recurring service quickly in Orcutt?', a: 'Often within the same week. Orcutt is in our primary scheduling zone — contact us for current availability.' },
        ],
        zipCodes: '93455',
      },
      {
        slug: 'nipomo',
        name: 'Nipomo',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 35.0447,
        lng: -120.4752,
        metaTitle: 'Cleaning Services Nipomo CA | Bright Broom',
        metaDescription:
          'House and commercial cleaning in Nipomo, CA. Standard, deep cleaning, move-out & specialty services from Bright Broom Service. Get a free quote.',
        intro: [
          'Nipomo\'s mesa community sits between Santa Maria and Arroyo Grande, characterized by newer residential developments, agricultural estate homes, and access to the Nipomo Dunes. Bright Broom Service brings reliable, scheduled cleaning to Nipomo homes across the mesa and surrounding areas.',
          'Nipomo\'s location between the coast and inland valley means homes can experience both marine-layer humidity and inland dust depending on the season. Our team tailors cleaning schedules and product selection to address both conditions effectively.',
        ],
        neighborhoods: ['Nipomo Mesa', 'Shelly Road area', 'Pomeroy Road corridor', 'Woodland area'],
        homeTypes: 'Newer tract single-family homes, agricultural estate properties, some rural acreage homes.',
        weatherContext: 'Mixed coastal-inland climate. Marine layer humidity in mornings, dry afternoon winds. Seasonal agricultural dust from surrounding fields.',
        serviceExamples: [
          { scenario: 'Bi-weekly standard cleaning on Nipomo Mesa', detail: 'Recurring bi-weekly service for a 3-bed/2-bath Nipomo Mesa home — kitchens, bathrooms, all floor surfaces, and regular dusting on a consistent schedule.' },
          { scenario: 'Move-out clean for a Nipomo estate rental', detail: 'Full turnover clean for an agricultural estate rental property — main house, guest suite, and detached office space cleaned to inspection standard.' },
          { scenario: 'Pre-sale deep clean in Nipomo', detail: 'Deep clean for a seller-prepped 4-bed home — inside all appliances, cabinets, grout restoration, and full window track cleaning.' },
        ],
        nearbySlugs: ['santa-maria', 'orcutt', 'arroyo-grande', 'pismo-beach', 'san-luis-obispo'],
        faqs: [
          { q: 'Do you serve the Nipomo Mesa area?', a: 'Yes. The Nipomo Mesa is one of our active service zones. We have recurring clients throughout the mesa developments.' },
          { q: 'Can you clean rural or acreage properties in Nipomo?', a: 'Yes. We handle both standard subdivision homes and larger rural properties. Call to discuss scope for properties with guest houses or outbuildings.' },
          { q: 'How soon can you start service in Nipomo?', a: 'Nipomo is in our core Central Coast service area. Same-week availability is often possible — contact us to confirm.' },
        ],
        zipCodes: '93444',
      },
      {
        slug: 'avila-beach',
        name: 'Avila Beach',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 35.1800,
        lng: -120.7307,
        metaTitle: 'Cleaning Services Avila Beach CA | Bright Broom',
        metaDescription:
          'House and vacation rental cleaning in Avila Beach, CA. Airbnb turnovers, deep cleaning & standard recurring from Bright Broom Service. Get a free quote.',
        intro: [
          'Avila Beach is a premier Central Coast vacation destination, with a high concentration of short-term rentals, second homes, and beachfront properties. Bright Broom Service specializes in the rapid, thorough turnover cleaning that STR hosts in Avila Beach rely on to maintain 5-star guest ratings.',
          'Beachfront and near-beach properties in Avila Beach face accelerated cleaning demands — salt air leaves a film on all surfaces, sand tracks in from every guest visit, and the humid marine environment promotes mildew in bathrooms and fabrics. Our Avila Beach cleaning protocols are specifically designed to address these conditions quickly and effectively.',
        ],
        neighborhoods: ['Downtown Avila Beach', 'Avila Valley', 'Port San Luis area', 'Creek Road'],
        homeTypes: 'Vacation rentals, second homes, beachfront cottages, Avila Valley residential properties.',
        weatherContext: 'Direct coastal exposure — heavy salt air deposits on all surfaces, high marine humidity, sand infiltration from beach proximity, year-round mild temperatures.',
        serviceExamples: [
          { scenario: 'Same-day Airbnb turnover for a beachfront cottage', detail: 'Same-day STR turnover for a 2-bed beachfront cottage — full clean, salt residue removal, linen staging, and restocking between guest checkouts and check-ins.' },
          { scenario: 'Deep clean for a vacation second home', detail: 'Seasonal deep clean for an owner\'s second home returning after months away — salt film removal, mildew treatment in bathrooms, full appliance and cabinet cleaning.' },
          { scenario: 'Recurring bi-weekly clean for an Avila Valley home', detail: 'Standard bi-weekly service for a permanent Avila Valley resident managing coastal dust and humidity accumulation on a consistent schedule.' },
        ],
        nearbySlugs: ['pismo-beach', 'san-luis-obispo', 'arroyo-grande', 'nipomo', 'santa-maria'],
        faqs: [
          { q: 'Do you specialize in vacation rental turnovers in Avila Beach?', a: 'Yes. Airbnb and STR turnover cleaning is one of our primary Avila Beach services. We work within tight guest check-in windows and can coordinate directly with your STR calendar.' },
          { q: 'How do you handle the salt air and sand in coastal properties?', a: 'We use protocols specifically designed for coastal homes — microfiber systems for salt film removal, thorough floor cleaning for sand, and mildew-preventive products in bathrooms and high-humidity areas.' },
          { q: 'Can you do same-day turnovers in Avila Beach?', a: 'For recurring STR hosts, we build same-day turnovers into your schedule. For one-off requests, contact us as early as possible to confirm availability.' },
        ],
        zipCodes: '93424',
      },
      {
        slug: 'pismo-beach',
        name: 'Pismo Beach',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 35.1428,
        lng: -120.6413,
        metaTitle: 'Cleaning Services Pismo Beach CA | Bright Broom',
        metaDescription:
          'House & vacation rental cleaning in Pismo Beach, CA. Airbnb turnovers, standard recurring, deep clean & specialty from Bright Broom. Get a free quote.',
        intro: [
          'Pismo Beach is one of the Central Coast\'s most active short-term rental markets, with everything from oceanfront condos to cliffside homes. Bright Broom Service provides fast, thorough turnover cleaning and recurring residential service throughout Pismo Beach, Oceano, and Shell Beach.',
          'The Pismo Beach coastal environment requires cleaning that understands the ocean — salt deposits on windows and surfaces, sand in carpets and entryways after every guest visit, and the high-humidity bathrooms that are common in beachside rentals. Our team is built for this environment.',
        ],
        neighborhoods: ['Downtown Pismo Beach', 'Shell Beach', 'Oceano adjacent', 'Pismo Heights', 'Cienega Road area'],
        homeTypes: 'Oceanfront condos and homes, STR vacation rentals, cliffside Shell Beach properties, Oceano residential homes.',
        weatherContext: 'Direct ocean exposure. Salt air deposits, sand infiltration, and marine humidity are constant factors. Peak STR season runs June through September.',
        serviceExamples: [
          { scenario: 'Weekend STR turnover in Shell Beach', detail: 'Saturday morning turnover for a 3-bed Shell Beach vacation rental — complete clean, linen change, bathroom refresh, and kitchen reset between guests.' },
          { scenario: 'Pre-season deep clean for a Pismo condo', detail: 'Annual pre-season deep clean for an oceanfront condo — salt film removal from all surfaces, grout restoration in the bathrooms, inside all appliances and cabinets.' },
          { scenario: 'Recurring standard cleaning for a Pismo Heights resident', detail: 'Bi-weekly recurring cleaning for a permanent Pismo Heights homeowner managing coastal salt and sand accumulation.' },
        ],
        nearbySlugs: ['avila-beach', 'arroyo-grande', 'san-luis-obispo', 'nipomo', 'santa-maria'],
        faqs: [
          { q: 'Do you service Airbnb rentals in Pismo Beach regularly?', a: 'Yes. STR turnover cleaning is one of our most common Pismo Beach service types. We work with hosts who have properties in downtown Pismo, Shell Beach, and Oceano.' },
          { q: 'Can you handle the sand and salt issues specific to beach properties?', a: 'Absolutely. Our coastal cleaning protocols include sand-focused floor and entryway systems, salt-film surface treatment, and humidity-appropriate bathroom products.' },
          { q: 'Do you serve Shell Beach and Oceano as well?', a: 'Yes. Our Pismo Beach service area includes Shell Beach and the Oceano community. Contact us with your address to confirm.' },
        ],
        zipCodes: '93449',
      },
      {
        slug: 'guadalupe',
        name: 'Guadalupe',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 34.9747,
        lng: -120.5740,
        metaTitle: 'Cleaning Services Guadalupe CA | Bright Broom',
        metaDescription:
          'House and commercial cleaning in Guadalupe, CA. Standard recurring, deep cleaning & move-out services from Bright Broom Service. Get a free quote.',
        intro: [
          'Guadalupe is a small, close-knit agricultural community on the Santa Maria River, just west of Santa Maria. Bright Broom Service serves Guadalupe homes and businesses with the same quality and care we bring to our headquarters city nearby.',
          'Guadalupe\'s location near agricultural fields and the dunes means homes deal with significant dust accumulation — particularly during planting and harvest seasons. Our team understands this environment and schedules cleaning accordingly to keep homes consistently clean throughout the agricultural calendar.',
        ],
        neighborhoods: ['Downtown Guadalupe', 'West Guadalupe', 'Dunes area residential'],
        homeTypes: 'Single-family homes, older ranch properties, some agricultural worker housing, small commercial storefronts.',
        weatherContext: 'Coastal-influenced with agricultural dust from surrounding fields. Marine layer humidity from proximity to the dunes. Seasonal dust peaks during agricultural operations.',
        serviceExamples: [
          { scenario: 'Recurring cleaning for a Guadalupe family home', detail: 'Monthly standard cleaning for a 3-bed family home near downtown Guadalupe — kitchens, bathrooms, and all living areas on a consistent monthly schedule.' },
          { scenario: 'Deep clean after an agricultural dust season', detail: 'Post-harvest-season deep clean for a Guadalupe home — all vents, ceiling fans, baseboards, and surfaces thoroughly cleaned after months of field-dust exposure.' },
          { scenario: 'Move-out clean for a Guadalupe rental', detail: 'Deposit-protecting move-out clean for a rental property in Guadalupe to landlord inspection standard.' },
        ],
        nearbySlugs: ['santa-maria', 'lompoc', 'orcutt', 'nipomo', 'arroyo-grande'],
        faqs: [
          { q: 'Do you serve Guadalupe regularly?', a: 'Yes. Guadalupe is in our core service zone — just minutes from our Santa Maria headquarters.' },
          { q: 'How do you handle agricultural dust in Guadalupe homes?', a: 'We recommend bi-weekly or monthly service for Guadalupe homes during agricultural seasons. Our HEPA-equipped vacuums and microfiber systems are effective for the fine dust common in this area.' },
          { q: 'Do you offer commercial cleaning in Guadalupe?', a: 'Yes. We serve small businesses and commercial properties in downtown Guadalupe as well as residential clients.' },
        ],
        zipCodes: '93434',
      },
      {
        slug: 'arroyo-grande',
        name: 'Arroyo Grande',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 35.1185,
        lng: -120.5903,
        metaTitle: 'Cleaning Services Arroyo Grande CA | Bright Broom',
        metaDescription:
          'House and commercial cleaning in Arroyo Grande, CA. Standard, deep cleaning, move-out & specialty services from Bright Broom Service. Get a free quote.',
        intro: [
          'Arroyo Grande is one of the Central Coast\'s most popular residential communities, known for its charming Village, hillside neighborhoods, and proximity to Pismo Beach and SLO. Bright Broom Service serves homeowners, landlords, and businesses throughout the Arroyo Grande and Five Cities area.',
          'The mix of older Village homes, newer hillside developments, and Rancho Grande estates gives Arroyo Grande a diverse range of cleaning needs. Our team is experienced across all of these property types, from historic character homes to contemporary open-plan layouts.',
        ],
        neighborhoods: ['The Village', 'Rancho Grande', 'Soto Sports Complex area', 'Cherry Avenue Corridor', 'East Grand Avenue area', 'Corbett Canyon'],
        homeTypes: 'Historic Village cottages, Rancho Grande hillside estates, newer tract developments, some agricultural and rural properties in Corbett Canyon.',
        weatherContext: 'Mild coastal-valley climate. Mornings cooler than Santa Maria inland. Fog common in fall. Spring pollen from oak trees and flowering plants throughout the Village.',
        serviceExamples: [
          { scenario: 'Pre-listing deep clean for a Village home', detail: 'Full deep clean for a 1920s Village cottage listed for sale — grout restoration, period fixtures polished, interior windows, and full appliance and cabinet cleaning.' },
          { scenario: 'Recurring standard service in Rancho Grande', detail: 'Bi-weekly standard cleaning for a 4-bed Rancho Grande hillside home — all rooms, bathrooms, kitchen, and floors maintained on a consistent schedule.' },
          { scenario: 'Move-out cleaning for a Cherry Avenue rental', detail: 'Turnover cleaning for a landlord-owned rental near Cherry Avenue — full move-out standard including inside appliances, closets, and final inspection walkthrough.' },
        ],
        nearbySlugs: ['pismo-beach', 'nipomo', 'san-luis-obispo', 'avila-beach', 'santa-maria'],
        faqs: [
          { q: 'Do you serve the Village area of Arroyo Grande?', a: 'Yes. We clean homes throughout the Village and all of Arroyo Grande, including Rancho Grande and Corbett Canyon properties.' },
          { q: 'Can you handle older historic homes in the Village?', a: 'Yes. We are experienced with older character homes and understand how to clean historic woodwork, tile, and fixtures appropriately — without causing damage.' },
          { q: 'Do you serve the broader Five Cities area?', a: 'Yes. In addition to Arroyo Grande, we serve Pismo Beach, Grover Beach, Oceano, and Nipomo as part of the Five Cities area.' },
        ],
        zipCodes: '93420',
      },
      {
        slug: 'buellton',
        name: 'Buellton',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 34.6136,
        lng: -120.1941,
        metaTitle: 'Cleaning Services Buellton CA | Bright Broom',
        metaDescription:
          'House and commercial cleaning in Buellton, CA. Standard recurring, deep cleaning & specialty services from Bright Broom Service. Get a free quote.',
        intro: [
          'Buellton serves as the gateway to the Santa Ynez Valley and is home to a growing residential community along with significant commercial activity along Highway 101. Bright Broom Service serves Buellton homeowners and businesses as part of our Santa Ynez Valley coverage.',
          'Located at the intersection of the 101 and Highway 246, Buellton properties range from newer residential developments to ranch homes on the valley floor. Our team provides consistent, professional cleaning for the Buellton community as part of our broader Santa Barbara County service area.',
        ],
        neighborhoods: ['Downtown Buellton', 'Industrial Way area', 'Residential areas west of 101', 'Flying Flags area'],
        homeTypes: 'Newer single-family developments, ranch homes, RV park-adjacent residential, some commercial properties along the 101.',
        weatherContext: 'Santa Ynez Valley climate — warm dry summers, cool valley nights, occasional marine push from the coast. Minimal dust compared to inland areas.',
        serviceExamples: [
          { scenario: 'Recurring cleaning for a Buellton family home', detail: 'Bi-weekly standard service for a 3-bed Buellton home — kitchens, bathrooms, living areas, and floors on a consistent schedule.' },
          { scenario: 'Commercial cleaning for a Highway 101 business', detail: 'Weekly cleaning for a Buellton commercial property along the 101 corridor — reception, office spaces, restroom, and common areas.' },
          { scenario: 'Deep clean for a Buellton ranch home', detail: 'Pre-sale deep clean for a valley ranch home — all rooms, inside appliances, full baseboard and vent detail.' },
        ],
        nearbySlugs: ['solvang', 'santa-ynez', 'lompoc', 'santa-barbara', 'santa-maria'],
        faqs: [
          { q: 'Do you serve Buellton as part of your Santa Ynez Valley coverage?', a: 'Yes. Buellton is part of our Santa Ynez Valley service area alongside Solvang, Santa Ynez, and Los Olivos.' },
          { q: 'Do you clean commercial properties along Highway 101 in Buellton?', a: 'Yes. We serve commercial and retail properties along the 101 corridor in Buellton with recurring or one-time cleaning services.' },
        ],
        zipCodes: '93427',
      },
      {
        slug: 'solvang',
        name: 'Solvang',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 34.5958,
        lng: -120.1376,
        metaTitle: 'Cleaning Services Solvang CA | Bright Broom',
        metaDescription:
          'House & vacation rental cleaning in Solvang, CA. Airbnb turnovers, standard recurring & deep cleaning from Bright Broom Service. Get a free quote.',
        intro: [
          'Solvang is one of California\'s most distinctive communities — a Danish-style village in the heart of the Santa Ynez Valley with a thriving tourism economy and high concentration of vacation rentals, inns, and second homes. Bright Broom Service provides thorough cleaning for Solvang homeowners and STR hosts.',
          'The STR market in Solvang is highly competitive, and guests expect the Danish-village charm to extend to the cleanliness of their accommodations. Our turnover cleaning service ensures Solvang vacation rentals maintain the 5-star presentation that keeps guests returning and review scores high.',
        ],
        neighborhoods: ['Downtown Solvang', 'Alisal Road', 'Mission Drive area', 'Oak Trail', 'Santa Ynez Valley floor'],
        homeTypes: 'Danish-style vacation rentals, wine-country second homes, residential neighborhood homes, some rural valley floor properties.',
        weatherContext: 'Warm dry summers, cool clear nights. Valley floor dust in dry season. Low humidity relative to the coast but marine influence arrives via the 246 corridor.',
        serviceExamples: [
          { scenario: 'STR turnover for a downtown Solvang vacation rental', detail: 'Guest-turnover cleaning for a 2-bed Danish-style vacation cottage in downtown Solvang — full clean, staging, and restocking between guests.' },
          { scenario: 'Recurring cleaning for a Santa Ynez Valley second home', detail: 'Monthly standard cleaning for a second home outside Solvang maintained in pristine condition between owner visits.' },
          { scenario: 'Deep clean for a wine-country estate in Solvang', detail: 'Pre-season deep clean for a wine-country property including tile and grout restoration, inside all appliances, and full exterior-surface patio clean.' },
        ],
        nearbySlugs: ['buellton', 'santa-ynez', 'lompoc', 'santa-barbara', 'los-olivos'],
        faqs: [
          { q: 'Do you clean Airbnb vacation rentals in downtown Solvang?', a: 'Yes. STR turnover cleaning is a primary service for Solvang clients. We coordinate with your booking calendar for reliable between-guest turnovers.' },
          { q: 'Can you maintain a second home in Solvang on a monthly schedule?', a: 'Yes. We regularly maintain second homes and vacation properties on monthly or bi-monthly schedules for owners who visit periodically.' },
          { q: 'Do you serve rural Santa Ynez Valley properties near Solvang?', a: 'Yes. We serve properties throughout the Santa Ynez Valley, including Alisal Road, rural valley floor homes, and ranches near Solvang.' },
        ],
        zipCodes: '93463',
      },
      {
        slug: 'santa-ynez',
        name: 'Santa Ynez',
        state: 'California',
        stateSlug: 'california',
        stateAbbr: 'CA',
        lat: 34.6081,
        lng: -120.0813,
        metaTitle: 'Cleaning Services Santa Ynez CA | Bright Broom',
        metaDescription:
          'House and ranch property cleaning in Santa Ynez, CA. Standard recurring, deep cleaning & specialty from Bright Broom Service. Get a free quote.',
        intro: [
          'Santa Ynez is the heart of California\'s wine country, home to ranches, equestrian estates, and the charming downtown known for its western-town character. Bright Broom Service provides cleaning for Santa Ynez residences across the valley floor and surrounding hillside properties.',
          'Ranch and equestrian properties in Santa Ynez have specific cleaning needs — fine valley dust infiltrates every surface, horse hair and hay particles settle in entryways, and the open-plan interiors common in ranch architecture require particular attention to high ceilings and exposed beams. Our team is experienced in this environment.',
        ],
        neighborhoods: ['Downtown Santa Ynez', 'Baseline Avenue area', 'Old Ranch Road', 'Valley floor estates', 'Edison Street area'],
        homeTypes: 'Ranch homes, equestrian estates, wine-country residential, historic western-style downtown homes.',
        weatherContext: 'Hot dry summers, cool valley nights. Valley floor dust is significant — especially from unpaved ranch roads. Wildfire smoke events occur in late summer.',
        serviceExamples: [
          { scenario: 'Ranch home deep clean in Santa Ynez', detail: 'Annual deep clean for a 4-bed ranch home — all rooms, vents, ceiling fans, inside appliances, full baseboard detail, and interior window cleaning.' },
          { scenario: 'Recurring standard cleaning for a valley estate', detail: 'Bi-weekly standard service for a Santa Ynez Valley estate — main house kitchen, bathrooms, living areas, and floors on a consistent schedule.' },
          { scenario: 'Pre-event cleaning for a wine-country property', detail: 'Day-before event clean for a vineyard estate hosting a private gathering — full house clean, guest bathrooms detailed, kitchen and entertaining areas pristine.' },
        ],
        nearbySlugs: ['solvang', 'buellton', 'santa-barbara', 'lompoc', 'los-olivos'],
        faqs: [
          { q: 'Do you clean ranch and equestrian properties in Santa Ynez?', a: 'Yes. We clean the residential portions of ranch and equestrian properties throughout Santa Ynez. For barn and stable areas, contact us to discuss scope.' },
          { q: 'Can you handle the dust load from Santa Ynez Valley floor properties?', a: 'Yes. Valley floor homes accumulate dust quickly, especially in summer and during dry years. We use high-efficiency microfiber and HEPA equipment suited to this environment.' },
          { q: 'Do you clean vacation rental properties in the wine country?', a: 'Yes. We service vacation rentals and event-use properties throughout the Santa Ynez Valley.' },
        ],
        zipCodes: '93460',
      },
    ],
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    abbr: 'AZ',
    lat: 33.4484,
    lng: -112.0740,
    metaTitle: 'House Cleaning Services Arizona | Bright Broom',
    metaDescription:
      'Professional house & commercial cleaning across Arizona — Gilbert, Phoenix, Scottsdale, Mesa & Chandler. Family-owned Bright Broom Service. Get a free quote.',
    intro: [
      'Bright Broom Service brings professional, insured cleaning to the Greater Phoenix metropolitan area, serving Gilbert, Phoenix, Scottsdale, Mesa, and Chandler. Arizona\'s rapid residential growth, active real estate market, and year-round warm climate create consistent demand for high-quality cleaning services.',
      'Desert living brings unique cleaning challenges that coastal or mountain services simply don\'t understand. Arizona\'s monsoon season delivers fine dust, mud, and allergens inside every home in the late summer months. Winter brings surprisingly cold nights and dried plant debris. And the year-round dry heat accelerates dust accumulation and dries out grout and surfaces. Our Arizona teams are trained for the desert environment.',
    ],
    regionalContext: 'Monsoon-season dust and mud, extreme summer heat, desert dust accumulation, rapidly growing suburban home market.',
    whyChoose: [
      { title: 'Desert-Specific Protocols', body: 'We know Arizona homes. Monsoon dust, desert allergens, and extreme heat cycles require cleaning approaches specific to the Southwest — not just standard techniques applied to a hot place.' },
      { title: 'Serving the Entire East Valley', body: 'Our Arizona coverage spans Gilbert, Mesa, Chandler, Scottsdale, and Phoenix — the full East Valley market plus the urban core and its surrounding communities.' },
      { title: 'Rapid Growth Market Ready', body: 'Arizona\'s boom in new construction and real estate turnover creates constant demand for move-in, move-out, and post-construction cleaning. We are built for this volume.' },
    ],
    faqs: [
      { q: 'Do you cover the full Phoenix metro area?', a: 'Our Arizona service covers Gilbert, Phoenix, Scottsdale, Mesa, and Chandler. Call us if you are in an adjacent community and we may be able to accommodate.' },
      { q: 'Do you handle monsoon-season cleanup?', a: 'Yes. Post-monsoon deep cleaning for homes that experienced dust infiltration is one of our most common Arizona service requests in late summer.' },
      { q: 'Is Bright Broom Service insured in Arizona?', a: 'Yes. We carry full liability insurance and workers\' compensation in Arizona.' },
    ],
    cities: [
      {
        slug: 'gilbert',
        name: 'Gilbert',
        state: 'Arizona',
        stateSlug: 'arizona',
        stateAbbr: 'AZ',
        lat: 33.3528,
        lng: -111.7890,
        metaTitle: 'House Cleaning Gilbert AZ | Bright Broom Service',
        metaDescription:
          'Professional house & commercial cleaning in Gilbert, AZ. Standard recurring, deep cleaning, move-in/out & specialty services. Get a free quote.',
        intro: [
          'Gilbert is one of Arizona\'s fastest-growing communities, with large family homes, newer master-planned neighborhoods, and a thriving commercial district. Bright Broom Service provides reliable recurring and specialty cleaning throughout Gilbert\'s neighborhoods — from Agritopia and Power Ranch to the newer developments along Warner and Ray roads.',
          'Gilbert\'s large open-plan homes with tile-heavy finishes benefit enormously from consistent professional cleaning. Desert dust accumulates rapidly on horizontal surfaces, tile grout darkens quickly in high-humidity bathrooms, and the size of Gilbert homes means DIY cleaning is both time-consuming and often incomplete. Our Gilbert teams are sized and scheduled to handle the market.',
        ],
        neighborhoods: ['Agritopia', 'Power Ranch', 'Morrison Ranch', 'Val Vista Lakes', 'Spectrum', 'Finley Farms', 'San Tan Ranch'],
        homeTypes: 'Large master-planned community single-family homes, newer construction with tile-heavy interiors, some luxury estates in gated communities.',
        weatherContext: 'Monsoon season (July-September) brings fine dust, occasional mud tracks, and humidity spikes. Summer heat 105-115°F accelerates dust accumulation. Mild winters with cool mornings.',
        serviceExamples: [
          { scenario: 'Bi-weekly standard cleaning in Power Ranch', detail: 'Recurring bi-weekly service for a 4-bed Power Ranch home — large kitchen, 3 bathrooms, all living areas, and tile floors maintained on a consistent schedule.' },
          { scenario: 'Post-monsoon deep clean in Agritopia', detail: 'Late-summer deep clean after monsoon season — all vents, ceiling fans, window tracks, grout lines, and interior surfaces refreshed after dust infiltration.' },
          { scenario: 'Move-out clean for a Gilbert subdivision rental', detail: 'Deposit-protecting move-out clean for a landlord-owned Gilbert rental — inside all appliances, full bathroom restoration, baseboard detail throughout.' },
        ],
        nearbySlugs: ['chandler', 'mesa', 'scottsdale', 'phoenix'],
        faqs: [
          { q: 'Do you serve all Gilbert neighborhoods including newer developments?', a: 'Yes. We clean throughout Gilbert including Agritopia, Power Ranch, Morrison Ranch, Val Vista Lakes, San Tan Ranch, and the newer developments along Warner, Ray, and Higley roads.' },
          { q: 'How do you handle Arizona dust in Gilbert homes?', a: 'We use microfiber systems and HEPA-equipped vacuums that capture fine desert dust rather than redistributing it. For Gilbert homes, we also pay particular attention to window tracks, vent covers, and ceiling fans where dust concentrates.' },
          { q: 'Do you offer post-construction cleaning in Gilbert?', a: 'Yes. Gilbert\'s rapid growth means new construction and renovation projects are constant. We handle post-construction cleaning for both homeowners and general contractors.' },
        ],
        zipCodes: '85233, 85234, 85295, 85296, 85297, 85298',
      },
      {
        slug: 'phoenix',
        name: 'Phoenix',
        state: 'Arizona',
        stateSlug: 'arizona',
        stateAbbr: 'AZ',
        lat: 33.4484,
        lng: -112.0740,
        metaTitle: 'House Cleaning Phoenix AZ | Bright Broom Service',
        metaDescription:
          'Professional house & commercial cleaning in Phoenix, AZ. Deep cleaning, recurring, move-in/out, post-construction & specialty. Get a free quote.',
        intro: [
          'Phoenix is Arizona\'s largest city and one of the fastest-growing metro areas in the United States. Bright Broom Service serves Phoenix homeowners and businesses across the city\'s many distinctive neighborhoods — from the historic bungalows of Arcadia and North Central to the luxury high-rises of Biltmore and the dense rental market of Midtown.',
          'Phoenix\'s extreme climate is the defining factor for residential cleaning. Summer temperatures above 110°F, combined with monsoon-season dust storms (haboobs), create homes where dust infiltration is constant and high-volume. Our Phoenix teams are trained to address the specific cleaning demands of the Sonoran Desert environment at scale.',
        ],
        neighborhoods: ['Arcadia', 'Biltmore', 'North Central', 'Midtown', 'South Mountain', 'Ahwatukee', 'North Phoenix', 'Laveen', 'Maryvale'],
        homeTypes: 'Historic ranch bungalows in Arcadia, luxury estates in Biltmore, high-density midtown rentals, large suburban homes in Ahwatukee and North Phoenix.',
        weatherContext: 'Extreme heat (110°F+) in summer. Monsoon season brings haboobs — massive dust storms that infiltrate homes regardless of weather stripping. Dry winters with mild temperatures.',
        serviceExamples: [
          { scenario: 'Luxury deep clean in Arcadia', detail: 'Pre-listing deep clean for a 4-bed Arcadia ranch home — tile grout restoration, inside all appliances and cabinetry, pool-adjacent patio surface clean, and interior window detailing.' },
          { scenario: 'Post-construction cleaning in North Phoenix', detail: 'Three-phase post-construction clean for a newly renovated North Phoenix home — rough debris removal, HEPA final clean, and pre-move-in touch-up.' },
          { scenario: 'Commercial janitorial in Phoenix Midtown', detail: 'Nightly janitorial for a Midtown Phoenix professional office building — multi-suite servicing, restrooms, floors, and common areas on a 5-night-per-week schedule.' },
        ],
        nearbySlugs: ['scottsdale', 'mesa', 'gilbert', 'chandler'],
        faqs: [
          { q: 'Do you serve all Phoenix neighborhoods including the Biltmore and Arcadia?', a: 'Yes. We clean throughout Phoenix including Arcadia, Biltmore, North Central, Midtown, Ahwatukee, South Mountain, and North Phoenix neighborhoods.' },
          { q: 'Do you handle post-monsoon haboob cleanup?', a: 'Yes. After a haboob, fine desert dust penetrates every room. We provide post-storm deep cleaning that addresses all infiltrated surfaces including vent covers, window tracks, and horizontal surfaces throughout the home.' },
          { q: 'Do you provide commercial cleaning for Phoenix businesses?', a: 'Yes. We service offices, retail, medical, and professional spaces throughout Phoenix with recurring janitorial and one-time commercial cleaning.' },
        ],
        zipCodes: '85001, 85004, 85006, 85013, 85016, 85018, 85020, 85022, 85028, 85032, 85040, 85044, 85048',
      },
      {
        slug: 'scottsdale',
        name: 'Scottsdale',
        state: 'Arizona',
        stateSlug: 'arizona',
        stateAbbr: 'AZ',
        lat: 33.4942,
        lng: -111.9261,
        metaTitle: 'House Cleaning Scottsdale AZ | Bright Broom',
        metaDescription:
          'Luxury home and commercial cleaning in Scottsdale, AZ. Deep cleaning, standard recurring, move-in/out & specialty from Bright Broom Service. Get a free quote.',
        intro: [
          'Scottsdale is Arizona\'s luxury market leader — home to gated communities, resort-style estates, and some of the most premium residential properties in the Southwest. Bright Broom Service brings white-glove cleaning standards to Scottsdale homeowners who expect the best — from Old Town condos to North Scottsdale estate homes in McDowell Mountain Ranch and Silverleaf.',
          'Scottsdale luxury properties come with specific demands: travertine and stone flooring that requires careful product selection, high-end cabinetry and fixtures that need appropriate treatment, and clients who notice every detail. Our Scottsdale team is trained and equipped for premium residential cleaning at the level this market expects.',
        ],
        neighborhoods: ['Old Town Scottsdale', 'McCormick Ranch', 'McDowell Mountain Ranch', 'Grayhawk', 'DC Ranch', 'Silverleaf', 'Gainey Ranch', 'North Scottsdale'],
        homeTypes: 'Luxury gated-community estates, travertine-floored modern homes, resort-style properties, Old Town condos and high-rises.',
        weatherContext: 'Same desert heat and monsoon dynamics as Phoenix, but properties typically have higher-quality weatherproofing and filtration. Travertine and stone surfaces require careful product selection in heat.',
        serviceExamples: [
          { scenario: 'Recurring luxury cleaning in DC Ranch', detail: 'Weekly cleaning for a DC Ranch estate — all rooms on schedule, travertine floors maintained appropriately, outdoor entertaining areas wiped down, and high-end fixtures handled with care.' },
          { scenario: 'Move-out clean for a Gainey Ranch property', detail: 'Full turnover clean for a high-end Gainey Ranch condo — every surface, inside all appliances, stone flooring polished, and inspection-ready finish throughout.' },
          { scenario: 'Airbnb turnover for an Old Town Scottsdale luxury rental', detail: 'Short-notice turnover for a luxury STR property in Old Town — white-glove clean and reset for arriving guests.' },
        ],
        nearbySlugs: ['phoenix', 'gilbert', 'mesa', 'chandler'],
        faqs: [
          { q: 'Do you have experience cleaning luxury properties and estates in Scottsdale?', a: 'Yes. Luxury residential cleaning is a core service in Scottsdale. We use appropriate products for stone, travertine, and high-end surfaces and bring the level of detail these properties require.' },
          { q: 'Do you serve North Scottsdale communities like DC Ranch and McDowell Mountain Ranch?', a: 'Yes. We serve all of Scottsdale including the North Scottsdale luxury communities — DC Ranch, Silverleaf, Grayhawk, and McDowell Mountain Ranch.' },
          { q: 'Can you accommodate recurring service for a vacation or second home in Scottsdale?', a: 'Yes. We regularly maintain Scottsdale second homes and vacation properties on a scheduled basis for owners who visit periodically.' },
        ],
        zipCodes: '85250, 85251, 85253, 85254, 85255, 85257, 85258, 85259, 85260, 85262',
      },
      {
        slug: 'mesa',
        name: 'Mesa',
        state: 'Arizona',
        stateSlug: 'arizona',
        stateAbbr: 'AZ',
        lat: 33.4152,
        lng: -111.8315,
        metaTitle: 'House Cleaning Mesa AZ | Bright Broom Service',
        metaDescription:
          'Professional house & commercial cleaning in Mesa, AZ. Standard recurring, deep cleaning, move-in/out & janitorial services. Get a free quote from Bright Broom.',
        intro: [
          'Mesa is the third-largest city in Arizona and home to a diverse mix of residential neighborhoods, active adult communities, and growing commercial corridors. Bright Broom Service serves Mesa homeowners, property managers, and businesses from the historic downtown grid to the newer master-planned developments near Power and Elliot roads.',
          'Mesa\'s large active-adult retirement community creates a specific segment of residential cleaning needs — homes where owners are home frequently, expect consistent quality, and value a trusted, known team. Our Mesa recurring clients include both family homes and active-adult households that rely on us for dependable, relationship-based service.',
        ],
        neighborhoods: ['Downtown Mesa', 'Eastmark', 'Longbow', 'Red Mountain', 'Dobson Ranch', 'Superstition Springs', 'Las Sendas', 'Power Ranch area'],
        homeTypes: 'Active-adult community homes, large family tract homes, some historic downtown properties, newer master-planned developments in East Mesa.',
        weatherContext: 'Hot dry summers with monsoon-season dust and humidity spikes. Mild winters. Similar to Phoenix but slightly further east — Red Mountain corridor can see cooler temperatures.',
        serviceExamples: [
          { scenario: 'Recurring service for an active-adult home in Dobson Ranch', detail: 'Weekly standard cleaning for a 2-bed Dobson Ranch active-adult home — consistent team, familiar routines, and dependable weekly schedule.' },
          { scenario: 'Deep clean for a Las Sendas family home', detail: 'Pre-sale deep clean for a 4-bed Las Sendas home — inside all appliances, grout restoration in 3 bathrooms, full baseboard and vent cleaning.' },
          { scenario: 'Commercial janitorial for a Mesa medical office', detail: 'Nightly janitorial for a Mesa medical office — exam rooms, reception, restrooms, and common areas with enhanced disinfection protocols.' },
        ],
        nearbySlugs: ['gilbert', 'chandler', 'phoenix', 'scottsdale'],
        faqs: [
          { q: 'Do you serve active-adult and retirement communities in Mesa?', a: 'Yes. We have many active-adult clients in Mesa communities like Dobson Ranch and Leisure World. We understand this market\'s preference for consistent teams and reliable scheduling.' },
          { q: 'Do you serve East Mesa including Las Sendas and Eastmark?', a: 'Yes. Our Mesa coverage extends to all areas including the newer East Mesa communities of Las Sendas, Eastmark, and the Superstition Springs corridor.' },
          { q: 'Do you offer commercial and medical office cleaning in Mesa?', a: 'Yes. We serve commercial offices, retail, and medical spaces throughout Mesa with recurring janitorial and one-time cleaning services.' },
        ],
        zipCodes: '85201, 85203, 85204, 85205, 85206, 85207, 85208, 85209, 85210, 85212, 85213',
      },
      {
        slug: 'chandler',
        name: 'Chandler',
        state: 'Arizona',
        stateSlug: 'arizona',
        stateAbbr: 'AZ',
        lat: 33.3062,
        lng: -111.8413,
        metaTitle: 'House Cleaning Chandler AZ | Bright Broom Service',
        metaDescription:
          'Professional house and commercial cleaning in Chandler, AZ. Standard recurring, deep cleaning, move-in/out & specialty from Bright Broom. Get a free quote.',
        intro: [
          'Chandler has evolved from a farming community into one of Arizona\'s premier tech-corridor cities, home to Intel, PayPal, and a growing professional population with dual-income households that value professional home services. Bright Broom Service serves Chandler homeowners and businesses across the city\'s master-planned communities and commercial districts.',
          'Chandler\'s professional demographic tends to be time-poor and standards-conscious — they want cleaning that does not require follow-up and a schedule that simply works. Our Chandler clients are among our most consistent recurring customers because we deliver exactly that.',
        ],
        neighborhoods: ['Downtown Chandler', 'Sun Groves', 'Ocotillo', 'Pecos Ranch', 'Fulton Ranch', 'Cooper Commons', 'McCaslin Ranch'],
        homeTypes: 'Master-planned community single-family homes, newer upscale developments, Ocotillo resort-style lakefront properties, tech-corridor proximity townhomes.',
        weatherContext: 'Desert heat with monsoon season matching the broader Phoenix metro. Chandler sits slightly south and is marginally cooler in summer evenings. New developments have better thermal sealing, reducing dust infiltration.',
        serviceExamples: [
          { scenario: 'Weekly recurring service for a Fulton Ranch professional household', detail: 'Weekly standard cleaning for a Chandler dual-income household with 3 kids — full-home routine on a locked-in weekly schedule, same team every visit.' },
          { scenario: 'Deep clean for an Ocotillo lakefront property', detail: 'Full deep clean for a premium Ocotillo lakefront home — outdoor entertaining area, all interior rooms, inside appliances, and floor-to-ceiling detail.' },
          { scenario: 'Post-construction cleaning for a Chandler commercial renovation', detail: 'Post-reno cleaning for a Chandler tech-corridor office space — HEPA dust removal, all surfaces, inside cabinetry, and final pre-occupancy walkthrough.' },
        ],
        nearbySlugs: ['gilbert', 'mesa', 'phoenix', 'scottsdale'],
        faqs: [
          { q: 'Do you serve all Chandler neighborhoods including Ocotillo?', a: 'Yes. We clean throughout Chandler including the Ocotillo resort communities, Fulton Ranch, Pecos Ranch, Sun Groves, and Cooper Commons.' },
          { q: 'Do you handle post-construction cleaning for Chandler commercial clients?', a: 'Yes. We regularly work with commercial clients and general contractors in Chandler for post-construction and renovation cleanup.' },
          { q: 'How quickly can you start recurring service in Chandler?', a: 'Typically within one week. Chandler is an active service zone and we maintain scheduling availability for new recurring clients.' },
        ],
        zipCodes: '85224, 85225, 85226, 85244, 85248, 85249, 85286',
      },
    ],
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    abbr: 'NV',
    lat: 36.1716,
    lng: -115.1391,
    metaTitle: 'House Cleaning Services Nevada | Bright Broom',
    metaDescription:
      'Professional house and commercial cleaning across Nevada — Las Vegas, Spring Valley & Paradise. Family-owned Bright Broom Service. Get a free quote today.',
    intro: [
      'Bright Broom Service serves the Las Vegas metro area including the residential communities of Spring Valley and Paradise. Nevada\'s booming short-term rental market, combined with rapid residential growth and a large base of professional households, creates consistent demand for high-quality cleaning services.',
      'The Las Vegas desert environment shares many of the same challenges as Arizona — fine dust accumulation, extreme summer heat, and periodic dust events. But Nevada\'s STR economy adds a specific dimension: tens of thousands of vacation rentals that need fast, thorough turnover cleaning on tight guest-rotation schedules. We specialize in both.',
    ],
    regionalContext: 'Desert dust accumulation, massive STR market, extreme summer heat, rapidly growing residential suburbs.',
    whyChoose: [
      { title: 'STR Turnover Specialists', body: 'Las Vegas has one of the largest short-term rental concentrations in the country. Our Nevada team is optimized for fast, thorough STR turnovers that protect your guest ratings.' },
      { title: 'Desert-Proven Techniques', body: 'Fine Nevada desert dust infiltrates every home. We use equipment and protocols specifically effective for desert-environment dust management.' },
      { title: 'Flexible Scheduling for Vegas Lifestyles', body: 'Las Vegas operates 24/7, and so do we. We offer flexible scheduling including early morning, late evening, and weekend slots to work around your schedule.' },
    ],
    faqs: [
      { q: 'Do you serve the entire Las Vegas metro including Henderson?', a: 'Our Nevada coverage focuses on Las Vegas, Spring Valley, and Paradise. Call us if you are in Henderson or Summerlin and we may be able to accommodate.' },
      { q: 'Do you handle Airbnb and vacation rental turnovers in Las Vegas?', a: 'Yes. STR turnover cleaning is a primary service for our Nevada clients. We coordinate with your booking calendar for reliable between-guest cleaning.' },
      { q: 'Is Bright Broom Service insured in Nevada?', a: 'Yes. We carry full liability coverage and workers\' compensation in Nevada.' },
    ],
    cities: [
      {
        slug: 'las-vegas',
        name: 'Las Vegas',
        state: 'Nevada',
        stateSlug: 'nevada',
        stateAbbr: 'NV',
        lat: 36.1716,
        lng: -115.1391,
        metaTitle: 'Cleaning Services Las Vegas NV | Bright Broom',
        metaDescription:
          'Professional house & commercial cleaning in Las Vegas, NV. STR turnovers, deep cleaning, recurring & move-out services. Get a free quote from Bright Broom.',
        intro: [
          'Las Vegas is one of the most dynamic residential and short-term rental markets in the country. Bright Broom Service serves Las Vegas homeowners, property managers, and STR hosts across the valley — from Summerlin and the Northwest to the Historic Westside and the areas surrounding the Strip.',
          'Cleaning in Las Vegas requires speed, thoroughness, and reliability. The STR market operates on tight guest rotation schedules that punish missed turnovers with immediate review damage. Residential clients in the heat-intense summers need consistent maintenance. Our Las Vegas operation is built to serve both markets with the urgency and quality the city demands.',
        ],
        neighborhoods: ['Summerlin', 'Downtown Las Vegas', 'Southwest Las Vegas', 'Northwest Las Vegas', 'Henderson-adjacent', 'East Las Vegas', 'North Las Vegas areas'],
        homeTypes: 'STR vacation rentals, luxury Summerlin single-family homes, high-density apartment and condo units, commercial spaces along major corridors.',
        weatherContext: 'Extreme summer heat (115°F+). Fine desert dust year-round. Occasional dust storms. Very low humidity means dust clings to surfaces electrostatically. Winter mild but cold nights.',
        serviceExamples: [
          { scenario: 'Same-day STR turnover near the Las Vegas Strip', detail: 'Morning turnover for a 3-bed vacation rental with a 4-hour window between guest checkout and check-in — full clean, restocking, staging, and quality check.' },
          { scenario: 'Deep clean for a Summerlin family home', detail: 'Pre-summer deep clean for a 4-bed Summerlin home — inside all appliances, all vents and fans, grout restoration, and full window track cleaning before the heat season.' },
          { scenario: 'Commercial janitorial for a Las Vegas professional office', detail: 'Nightly janitorial for a Las Vegas corporate office suite — all floors, restrooms, breakrooms, reception, and common areas five nights per week.' },
        ],
        nearbySlugs: ['spring-valley', 'paradise', 'henderson'],
        faqs: [
          { q: 'Do you handle STR turnovers across Las Vegas on tight schedules?', a: 'Yes. Vacation rental turnover cleaning is a specialty for our Las Vegas team. We coordinate directly with your STR calendar and are experienced with the tight windows common in the Vegas rental market.' },
          { q: 'Can you handle commercial cleaning for Las Vegas businesses?', a: 'Yes. We provide recurring janitorial and one-time commercial cleaning for offices, retail, and professional spaces throughout Las Vegas.' },
          { q: 'Do you serve all of Las Vegas including Summerlin and Southwest?', a: 'Yes. Our Las Vegas coverage includes Summerlin, Southwest, Northwest, and the areas adjacent to Henderson and North Las Vegas.' },
        ],
        zipCodes: '89101, 89102, 89103, 89106, 89107, 89108, 89109, 89117, 89128, 89129, 89134, 89135, 89138, 89144, 89145',
      },
      {
        slug: 'spring-valley',
        name: 'Spring Valley',
        state: 'Nevada',
        stateSlug: 'nevada',
        stateAbbr: 'NV',
        lat: 36.1085,
        lng: -115.2384,
        metaTitle: 'Cleaning Services Spring Valley NV | Bright Broom',
        metaDescription:
          'Professional house and commercial cleaning in Spring Valley, NV. Standard recurring, deep cleaning & move-out services from Bright Broom. Get a free quote.',
        intro: [
          'Spring Valley is one of the Las Vegas metro\'s largest unincorporated communities, featuring a mix of established residential neighborhoods, newer developments, and convenient access to the Strip corridor. Bright Broom Service provides residential and commercial cleaning throughout Spring Valley.',
          'Spring Valley\'s dense residential footprint and proximity to the Strip means a high concentration of both permanent residents and investment properties used as short-term rentals. Our service covers both markets with equal thoroughness and reliability.',
        ],
        neighborhoods: ['Spring Valley proper', 'Trails area', 'Peccole Ranch-adjacent', 'Summerlin-adjacent', 'West Spring Valley'],
        homeTypes: 'Single-family suburban homes, townhomes and condos, some STR investment properties, small commercial buildings.',
        weatherContext: 'Same Las Vegas desert environment — extreme summer heat, fine dust year-round, very low humidity. Slightly elevated due to proximity to Red Rock area; somewhat cooler in summer evenings.',
        serviceExamples: [
          { scenario: 'Bi-weekly recurring cleaning for a Spring Valley family home', detail: 'Bi-weekly standard service for a 3-bed Spring Valley home — all rooms, kitchens, bathrooms, and tile floors consistently maintained.' },
          { scenario: 'Deep clean for a Spring Valley investment property', detail: 'Pre-rental deep clean for a Spring Valley investment property — inside all appliances, bathrooms fully restored, and all rooms cleaned to listing standard.' },
          { scenario: 'Move-out clean for a Spring Valley rental', detail: 'Deposit-protecting move-out clean for a Spring Valley rental unit — full checklist clean, inside appliances, and final walkthrough.' },
        ],
        nearbySlugs: ['las-vegas', 'paradise', 'henderson'],
        faqs: [
          { q: 'Do you serve Spring Valley as part of your Las Vegas coverage?', a: 'Yes. Spring Valley is within our active Las Vegas service area. We have recurring clients throughout Spring Valley.' },
          { q: 'Can you clean investment properties and STRs in Spring Valley?', a: 'Yes. We regularly clean rental investment properties and STR units throughout Spring Valley.' },
        ],
        zipCodes: '89117, 89146, 89147, 89148',
      },
      {
        slug: 'paradise',
        name: 'Paradise',
        state: 'Nevada',
        stateSlug: 'nevada',
        stateAbbr: 'NV',
        lat: 36.0995,
        lng: -115.1439,
        metaTitle: 'Cleaning Services Paradise NV | Bright Broom',
        metaDescription:
          'House and commercial cleaning in Paradise, NV (Las Vegas area). Recurring standard, deep cleaning & STR turnovers from Bright Broom. Get a free quote.',
        intro: [
          'Paradise is the unincorporated community that hosts the Las Vegas Strip, the UNLV campus, and many of the metro\'s most in-demand short-term rental properties. Bright Broom Service brings professional, reliable cleaning to Paradise residential and commercial clients.',
          'The Paradise area\'s concentration of STR properties, combined with its proximity to major entertainment venues and a transient high-traffic population, means cleaning standards here need to be consistent and thorough. Our Paradise team is experienced with the volume and pace of this market.',
        ],
        neighborhoods: ['Paradise proper', 'University District', 'Strip-adjacent residential', 'East Paradise', 'Nevada Southern University area'],
        homeTypes: 'High-density condos and apartments, STR investment properties, single-family homes, commercial properties along major corridors.',
        weatherContext: 'Core Las Vegas desert heat. Strip-area properties experience additional foot traffic and accelerated wear. University District properties have high turnover seasonally.',
        serviceExamples: [
          { scenario: 'STR turnover for a Paradise condo near the Strip', detail: 'Same-day turnover for a 2-bed Paradise condo with a 5-hour window — complete clean, sanitization, guest amenity reset, and staging.' },
          { scenario: 'Recurring cleaning for a University District home', detail: 'Monthly standard cleaning for a Paradise residential property near UNLV — consistent clean on a manageable monthly budget.' },
          { scenario: 'Commercial cleaning for a Paradise business', detail: 'Weekly janitorial for a small professional office in the Paradise commercial corridor.' },
        ],
        nearbySlugs: ['las-vegas', 'spring-valley', 'henderson'],
        faqs: [
          { q: 'Do you serve Paradise as part of the Las Vegas metro area?', a: 'Yes. Paradise is part of our active Nevada service area and we have clients throughout the community.' },
          { q: 'Do you handle STR turnovers near the Strip in Paradise?', a: 'Yes. Strip-adjacent STR cleaning is a common request for our Paradise service. We work within tight guest windows and coordinate with your booking platform.' },
        ],
        zipCodes: '89109, 89119, 89120, 89121',
      },
    ],
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    abbr: 'CO',
    lat: 39.7392,
    lng: -104.9903,
    metaTitle: 'House Cleaning Services Colorado | Bright Broom',
    metaDescription:
      'Professional house and commercial cleaning across Colorado — Denver, Aurora, Arvada & Lakewood. Family-owned Bright Broom Service. Get a free quote today.',
    intro: [
      'Bright Broom Service serves the Denver metropolitan area including Aurora, Arvada, and Lakewood. Colorado\'s growing population, strong real estate market, and active lifestyle demographic creates consistent demand for professional residential and commercial cleaning across the Front Range.',
      'Colorado presents unique cleaning challenges that require different approaches than other states. High altitude affects cleaning product performance. Mud-track season in spring is intense as snow melts and outdoor activities resume. Allergen seasons hit hard — particularly cottonwood in late spring and ragweed in late summer. And homes in Colorado\'s outdoor-lifestyle culture take on more dirt, mud, and debris than properties in lower-activity regions.',
    ],
    regionalContext: 'High altitude, mud-track season, cottonwood and ragweed allergen seasons, snow-season debris, outdoor-lifestyle homes that accumulate more dirt.',
    whyChoose: [
      { title: 'Front Range Coverage', body: 'We serve the Denver core plus the surrounding communities of Aurora, Arvada, and Lakewood — the metro\'s most populated residential areas west, east, and south of downtown.' },
      { title: 'Altitude-Aware Protocols', body: 'At 5,280 feet and above, standard cleaning products and approaches may underperform. Our Colorado teams use product selections and techniques calibrated for high-altitude conditions.' },
      { title: 'Colorado Lifestyle Ready', body: 'Colorado homes see more mud, dirt, pet hair, and outdoor gear than almost anywhere else. We are built for the cleaning demands of an active-lifestyle household.' },
    ],
    faqs: [
      { q: 'Does altitude affect your cleaning service in Colorado?', a: 'High altitude can affect some cleaning products\' performance and drying times. Our Colorado teams use altitude-appropriate products and protocols to ensure consistent results.' },
      { q: 'How do you handle Colorado\'s mud season?', a: 'Spring mud-track season is one of our busiest times in Colorado. We emphasize entryway, mudroom, and hard floor cleaning in spring schedules, and are available for post-mud-season deep cleans.' },
      { q: 'Is Bright Broom Service insured in Colorado?', a: 'Yes. We carry full liability insurance and workers\' compensation in Colorado.' },
    ],
    cities: [
      {
        slug: 'denver',
        name: 'Denver',
        state: 'Colorado',
        stateSlug: 'colorado',
        stateAbbr: 'CO',
        lat: 39.7392,
        lng: -104.9903,
        metaTitle: 'Cleaning Services Denver CO | Bright Broom Service',
        metaDescription:
          'Professional house & commercial cleaning in Denver, CO. Deep cleaning, recurring, post-construction & move-out services. Get a free quote from Bright Broom.',
        intro: [
          'Denver is Colorado\'s largest city and one of the fastest-growing metros in the United States, driven by a young professional population, a booming tech sector, and a housing market that sees consistent real estate activity. Bright Broom Service serves Denver homeowners, condo owners, and businesses across the city\'s many distinctive neighborhoods.',
          'Denver\'s outdoor-lifestyle culture means homes see more mud, trail dirt, dog hair, and gear storage than average. Spring mud season is particularly intense as snowmelt and outdoor recreation resume simultaneously. Our Denver cleaning schedules are built to address these lifestyle-specific demands.',
        ],
        neighborhoods: ['Capitol Hill', 'Cherry Creek', 'Highlands', 'Congress Park', 'Washington Park', 'LoDo', 'Sunnyside', 'Five Points', 'Stapleton (Central Park)', 'Green Valley Ranch'],
        homeTypes: 'Historic bungalows in Highlands and Sunnyside, luxury condos in Cherry Creek, Victorian homes in Capitol Hill, newer townhomes in LoDo, large suburban homes in Stapleton.',
        weatherContext: 'High altitude (5,280 ft). Intense spring mud season. Heavy cottonwood season (May-June). Summer afternoon thunderstorms. Cold snowy winters that track debris inside. Low humidity year-round.',
        serviceExamples: [
          { scenario: 'Post-construction cleaning for a Highlands renovation', detail: 'Three-phase post-construction clean for a full remodel of a 1920s Highlands bungalow — rough debris, HEPA final clean, and pre-move-in touch-up.' },
          { scenario: 'Deep clean for a Cherry Creek condo', detail: 'Pre-sale deep clean for a 2-bed Cherry Creek condo — all surfaces, inside appliances, full baseboard and vent detail, interior windows.' },
          { scenario: 'Recurring weekly service for a Washington Park family home', detail: 'Weekly standard cleaning for a 4-bed Washington Park home with 2 dogs — mud-focused entryway clean, pet hair management, and full-home weekly maintenance.' },
        ],
        nearbySlugs: ['aurora', 'arvada', 'lakewood', 'boulder'],
        faqs: [
          { q: 'Do you clean the full range of Denver neighborhoods from Highlands to Stapleton?', a: 'Yes. We serve all Denver neighborhoods including Highlands, Cherry Creek, Washington Park, Capitol Hill, LoDo, Sunnyside, Five Points, and the Stapleton/Central Park area.' },
          { q: 'How do you handle mud season cleaning in Denver?', a: 'Spring mud season is intense in Denver. We adjust schedules to include additional attention to entryways, mudrooms, and hard floors during March-May, and offer post-mud-season deep cleans for clients who want a full reset.' },
          { q: 'Do you provide post-construction cleaning for Denver renovations?', a: 'Yes. Denver\'s active remodel market makes post-construction cleaning a high-demand service. We work with homeowners and GCs on all phases.' },
        ],
        zipCodes: '80202, 80203, 80204, 80205, 80206, 80207, 80209, 80210, 80211, 80212, 80216, 80218, 80220, 80221, 80222, 80224, 80230, 80238, 80239, 80246, 80247',
      },
      {
        slug: 'aurora',
        name: 'Aurora',
        state: 'Colorado',
        stateSlug: 'colorado',
        stateAbbr: 'CO',
        lat: 39.7294,
        lng: -104.8319,
        metaTitle: 'Cleaning Services Aurora CO | Bright Broom Service',
        metaDescription:
          'Professional house & commercial cleaning in Aurora, CO. Standard recurring, deep cleaning, move-in/out & specialty services. Get a free quote from Bright Broom.',
        intro: [
          'Aurora is Colorado\'s third-largest city and one of the Denver metro\'s most diverse and rapidly growing communities. With large suburban neighborhoods, military-adjacent housing near Buckley Air Force Base, and a growing commercial sector, Aurora represents a broad range of residential cleaning needs.',
          'Aurora\'s location east of Denver on the high plains brings slightly drier, windier conditions than the city core. Spring dust and cottonwood season can be intense. Our Aurora team accounts for these east-metro conditions in every cleaning schedule.',
        ],
        neighborhoods: ['Southlands', 'Saddle Rock', 'Tallyn\'s Reach', 'Buckley area', 'Centretech', 'Murphy Creek', 'Beacon Point'],
        homeTypes: 'Large suburban single-family homes, newer master-planned communities in Southeast Aurora, military family housing near Buckley, some urban condos in Central Aurora.',
        weatherContext: 'High-plains exposure east of Denver — slightly windier and drier. Cottonwood season intense in May-June. Spring mud less severe than Denver west-side but still significant.',
        serviceExamples: [
          { scenario: 'Recurring standard cleaning in Southlands', detail: 'Bi-weekly service for a 4-bed Southlands home — full-home cleaning, tile floors, bathrooms, and kitchen on a consistent bi-weekly schedule.' },
          { scenario: 'Military family move-out near Buckley', detail: 'Inspection-ready move-out clean for a military family near Buckley AFB — full checklist, inside appliances, and housing-authority standard finish.' },
          { scenario: 'Deep clean for an Aurora home before listing', detail: 'Pre-listing deep clean for a 3-bed Aurora home — inside all appliances, grout restoration, full baseboard and vent detail.' },
        ],
        nearbySlugs: ['denver', 'lakewood', 'arvada', 'boulder'],
        faqs: [
          { q: 'Do you serve military families near Buckley Air Force Base in Aurora?', a: 'Yes. We are experienced with military housing move-out requirements and serve the Buckley-adjacent Aurora communities regularly.' },
          { q: 'Do you serve the Southlands area of Southeast Aurora?', a: 'Yes. Southlands and the surrounding Southeast Aurora neighborhoods are active service areas for us.' },
          { q: 'How quickly can you start service in Aurora?', a: 'Typically within one week. Aurora is an active part of our Denver metro coverage area.' },
        ],
        zipCodes: '80010, 80011, 80012, 80013, 80014, 80015, 80016, 80017, 80018, 80019',
      },
      {
        slug: 'arvada',
        name: 'Arvada',
        state: 'Colorado',
        stateSlug: 'colorado',
        stateAbbr: 'CO',
        lat: 39.8028,
        lng: -105.0875,
        metaTitle: 'Cleaning Services Arvada CO | Bright Broom Service',
        metaDescription:
          'Professional house and commercial cleaning in Arvada, CO. Standard recurring, deep cleaning & specialty services from Bright Broom. Get a free quote today.',
        intro: [
          'Arvada sits at the foothills northwest of Denver, blending established neighborhoods like Olde Town with newer developments along the Candelas corridor. Bright Broom Service serves Arvada homeowners across the full spectrum of the city\'s residential offerings — from historic bungalows in Olde Town to large new construction in the northwest.',
          'Arvada\'s proximity to the foothills means homes see significant cottonwood and pollen accumulation in spring and trail-sourced debris year-round from the popular Ralston Creek and Van Bibber trails. Our Arvada clients tend to be active outdoor households that appreciate consistent, professional cleaning that keeps pace with their lifestyle.',
        ],
        neighborhoods: ['Olde Town Arvada', 'Candelas', 'Lake Arbor', 'Ralston Valley', 'Clearview', 'Oberon Road area'],
        homeTypes: 'Historic bungalows and Craftsman homes in Olde Town, large newer homes in Candelas, mid-century single-family homes in Lake Arbor, some foothills-adjacent properties.',
        weatherContext: 'Foothills proximity means more wind, heavier cottonwood season, and cooler temperatures than Denver proper. Spring mud season intense from trail and outdoor activity. Summer wildfire smoke from western Colorado can affect air quality.',
        serviceExamples: [
          { scenario: 'Recurring cleaning for an Olde Town Arvada Craftsman', detail: 'Bi-weekly standard service for a renovated Craftsman home in Olde Town — period features cleaned appropriately, wood floors, tile bathrooms, and kitchen on schedule.' },
          { scenario: 'Post-construction clean for a Candelas new build', detail: 'Final-phase post-construction clean for a new Candelas home — HEPA dust removal, inside all new cabinetry and appliances, fixture detailing, pre-move-in ready.' },
          { scenario: 'Deep clean for a Lake Arbor home after pollen season', detail: 'Post-cottonwood-season deep clean — ceiling fans, all surfaces, vents, window tracks, and a full allergen-reduction cleaning throughout the home.' },
        ],
        nearbySlugs: ['denver', 'lakewood', 'aurora', 'boulder'],
        faqs: [
          { q: 'Do you clean older homes in Olde Town Arvada?', a: 'Yes. We clean historic Craftsman and mid-century homes throughout Olde Town Arvada and are experienced with the specific needs of older homes.' },
          { q: 'Do you serve the newer Candelas development in northwest Arvada?', a: 'Yes. Candelas is an active service area for us, with many newer large-format homes that benefit from recurring professional cleaning.' },
          { q: 'Can you help with post-cottonwood allergen cleaning in Arvada?', a: 'Yes. Arvada\'s proximity to cottonwood trees along waterways makes spring deep cleaning a popular service. We focus on HEPA vacuuming, vent covers, and surface allergen removal.' },
        ],
        zipCodes: '80002, 80003, 80004, 80005, 80007',
      },
      {
        slug: 'lakewood',
        name: 'Lakewood',
        state: 'Colorado',
        stateSlug: 'colorado',
        stateAbbr: 'CO',
        lat: 39.7047,
        lng: -105.0814,
        metaTitle: 'Cleaning Services Lakewood CO | Bright Broom',
        metaDescription:
          'House and commercial cleaning in Lakewood, CO. Standard recurring, deep cleaning, move-out & specialty from Bright Broom Service. Get a free quote today.',
        intro: [
          'Lakewood sits west of Denver with views of the Front Range foothills and a mix of mid-century established neighborhoods, newer developments along Belmar, and access to Red Rocks and Bear Creek Trail networks. Bright Broom Service serves Lakewood homeowners and businesses across the city\'s varied residential landscape.',
          'Lakewood\'s active outdoor population creates homes that see consistent mud, dust, and trail debris — particularly in spring and early summer. Our Lakewood clients frequently request spring deep cleans and consistent recurring service that keeps pace with an active household\'s cleaning demands.',
        ],
        neighborhoods: ['Belmar', 'Green Mountain', 'Daniels Park area', 'Estes Street Corridor', 'Villa Park area', 'Carmody Park'],
        homeTypes: 'Mid-century single-family homes, newer Belmar mixed-use residential, Green Mountain trail-access homes, some industrial-adjacent commercial properties.',
        weatherContext: 'Front Range foothills proximity — heavier wind, significant pollen and cottonwood season, and spring mud. Access to outdoor trails means more dirt tracked into homes year-round.',
        serviceExamples: [
          { scenario: 'Recurring cleaning for a Green Mountain home', detail: 'Weekly standard service for a 3-bed Green Mountain home near the trailhead — entryway and mudroom focused every visit, full-home clean throughout.' },
          { scenario: 'Move-out clean for a Lakewood mid-century rental', detail: 'Full move-out clean for a mid-century Lakewood rental — inside all appliances, hardwood floors, bathroom restoration, and deposit-protecting finish.' },
          { scenario: 'Deep clean for a Belmar condo', detail: 'Pre-sale deep clean for a 2-bed Belmar mixed-use condo — all surfaces, inside appliances, interior windows, full baseboard and vent cleaning.' },
        ],
        nearbySlugs: ['denver', 'arvada', 'aurora', 'boulder'],
        faqs: [
          { q: 'Do you serve Green Mountain and trail-adjacent neighborhoods in Lakewood?', a: 'Yes. Green Mountain is one of our active Lakewood service zones, and we understand the trail-lifestyle cleaning demands of homes in this area.' },
          { q: 'Do you serve the Belmar and mixed-use residential areas of Lakewood?', a: 'Yes. We clean condos and homes throughout the Belmar development and surrounding Lakewood neighborhoods.' },
          { q: 'Can you handle mid-century home cleaning in Lakewood?', a: 'Yes. Many Lakewood homes are mid-century construction. We are experienced with older flooring types, fixtures, and surface materials common in homes from this era.' },
        ],
        zipCodes: '80214, 80215, 80226, 80227, 80228, 80232',
      },
    ],
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    abbr: 'VA',
    lat: 38.9072,
    lng: -77.0369,
    metaTitle: 'House Cleaning Services Virginia | Bright Broom',
    metaDescription:
      'Professional house & commercial cleaning across Virginia & DC Metro — Arlington, Alexandria, Annandale, McLean & DC. Get a free quote from Bright Broom.',
    intro: [
      'Bright Broom Service serves the Virginia/DC Metro area, covering Arlington, Alexandria, Annandale, McLean, and Washington DC. The Northern Virginia and DC Metro market is one of the most demanding and competitive cleaning markets in the country — a federal government-adjacent professional population with high standards, historic and modern homes side by side, and a four-season climate that creates constant cleaning demands.',
      'Virginia\'s distinct seasons bring diverse cleaning challenges: brutal summer pollen from trees and grasses, humid summers that promote mildew in basements and bathrooms, and fall leaf and tannin staining on exterior surfaces. The DC Metro market also includes a high concentration of high-rises, townhomes, and historic row houses that each require different cleaning approaches.',
    ],
    regionalContext: 'Federal-government-adjacent professional market, mix of historic and modern homes, intense pollen seasons, humid summers, four-season climate.',
    whyChoose: [
      { title: 'DC Metro Expertise', body: 'We understand the Northern Virginia and Washington DC market — federal relocation schedules, co-op and condo building access requirements, and the standard expected by this region\'s professional households.' },
      { title: 'Historic and Modern Home Experience', body: 'From Civil War-era Alexandria row houses to McLean luxury estates and Arlington high-rises, we bring appropriate care to every property type in the DC metro.' },
      { title: 'Pollen and Humidity Management', body: 'Virginia\'s spring pollen season is among the worst in the country. Our allergen-focused cleaning protocols address pollen, humidity-driven mildew, and the specific surface challenges of the Mid-Atlantic environment.' },
    ],
    faqs: [
      { q: 'Do you serve Washington DC proper as well as Northern Virginia?', a: 'Yes. Our Virginia/DC Metro coverage includes Washington DC, Arlington, Alexandria, Annandale, and McLean.' },
      { q: 'How do you handle Virginia\'s intense pollen season?', a: 'Spring pollen in Northern Virginia is significant. We offer allergen-focused deep cleans in spring that address pollen on all horizontal surfaces, vent covers, screens, and window sills. HEPA vacuuming is standard for all Virginia services.' },
      { q: 'Is Bright Broom Service insured in Virginia and DC?', a: 'Yes. We carry full liability insurance and workers\' compensation coverage for Virginia and Washington DC operations.' },
    ],
    cities: [
      {
        slug: 'washington-dc',
        name: 'Washington DC',
        state: 'Virginia',
        stateSlug: 'virginia',
        stateAbbr: 'DC',
        lat: 38.9072,
        lng: -77.0369,
        metaTitle: 'Cleaning Services Washington DC | Bright Broom',
        metaDescription:
          'Professional house and commercial cleaning in Washington DC. Deep cleaning, standard recurring, move-in/out & specialty from Bright Broom. Get a free quote.',
        intro: [
          'Washington DC\'s residential market is defined by historic row houses in Capitol Hill and Georgetown, luxury condos in NoMa and the Wharf, and the dense apartment corridors of Columbia Heights and Adams Morgan. Bright Broom Service brings professional cleaning to DC homeowners, renters, and property managers who expect a high-quality, dependable service.',
          'DC\'s four-season climate creates year-round cleaning demands: spring tree and grass pollen blankets surfaces from March through May, summer humidity promotes mildew in basements and less-ventilated spaces, fall leaves and tannin staining, and winter mud and salt tracked in from the sidewalks. Our DC team is experienced across all seasons and all housing types.',
        ],
        neighborhoods: ['Capitol Hill', 'Georgetown', 'Adams Morgan', 'Columbia Heights', 'NoMa', 'Navy Yard', 'Dupont Circle', 'U Street Corridor', 'Shaw', 'Petworth'],
        homeTypes: 'Historic row houses in Capitol Hill and Georgetown, luxury condos in NoMa and Wharf, dense apartment buildings, mid-century residential in Petworth and Columbia Heights.',
        weatherContext: 'Four-season Mid-Atlantic climate. Heavy spring pollen (March-May). Humid summers with significant mildew risk in older buildings. Fall leaf debris. Winter salt and mud from sidewalks tracked indoors.',
        serviceExamples: [
          { scenario: 'Recurring cleaning for a Capitol Hill row house', detail: 'Bi-weekly standard service for a 3-story Capitol Hill row house — hardwood floors throughout, kitchen, bathrooms, and all living areas on a consistent schedule.' },
          { scenario: 'Spring allergen deep clean for a Georgetown home', detail: 'Post-pollen-season deep clean for a Georgetown townhome — all horizontal surfaces, HEPA vacuuming throughout, vent covers, window sills, and allergen reduction in bedrooms.' },
          { scenario: 'Move-out clean for a NoMa luxury condo', detail: 'Full move-out clean for a 2-bed NoMa condo — inside all appliances, full bathroom restoration, interior windows, and deposit-protecting finish.' },
        ],
        nearbySlugs: ['arlington', 'alexandria', 'annandale', 'mclean'],
        faqs: [
          { q: 'Do you serve all DC neighborhoods including Georgetown and Capitol Hill?', a: 'Yes. We serve homes throughout Washington DC including Capitol Hill, Georgetown, Adams Morgan, NoMa, Dupont Circle, Columbia Heights, Shaw, and Petworth.' },
          { q: 'Can you access high-rise and condo buildings in DC?', a: 'Yes. We are experienced with building access requirements for DC condos and high-rises, including coordinate key fob access and concierge-facilitated entry.' },
          { q: 'Do you offer spring allergen cleaning for DC homes?', a: 'Yes. Spring pollen is severe in DC. We offer dedicated spring deep cleans with allergen-focused protocols including HEPA vacuuming, surface wipe-down, and vent cleaning.' },
        ],
        zipCodes: '20001, 20002, 20003, 20004, 20005, 20007, 20008, 20009, 20010, 20011',
      },
      {
        slug: 'arlington',
        name: 'Arlington',
        state: 'Virginia',
        stateSlug: 'virginia',
        stateAbbr: 'VA',
        lat: 38.8816,
        lng: -77.0910,
        metaTitle: 'Cleaning Services Arlington VA | Bright Broom',
        metaDescription:
          'Professional house and commercial cleaning in Arlington, VA. Standard recurring, deep cleaning, move-in/out & janitorial from Bright Broom. Get a free quote.',
        intro: [
          'Arlington is one of the most densely populated and professionally active counties in the country, home to Amazon HQ2, the Pentagon, and a highly educated, high-income residential population concentrated in Clarendon, Ballston, Pentagon City, and Rosslyn. Bright Broom Service provides cleaning for Arlington homeowners, renters, and businesses across the full range of property types.',
          'Arlington\'s mix of luxury high-rise condos, historic single-family neighborhoods like Ashton Heights and Dominion Hills, and rapidly developing commercial corridors creates diverse cleaning demands. Our Arlington service is experienced with condo building access, federal-leased office cleaning standards, and the expectations of a demanding professional market.',
        ],
        neighborhoods: ['Clarendon', 'Ballston', 'Pentagon City', 'Crystal City', 'Rosslyn', 'Ashton Heights', 'Dominion Hills', 'Lyon Village', 'Shirlington'],
        homeTypes: 'Luxury high-rise condos, historic bungalows in Ashton Heights and Dominion Hills, townhomes throughout, mixed-use residential in Clarendon and Ballston.',
        weatherContext: 'Four-season Mid-Atlantic climate identical to DC. Spring pollen intense (oak, grass, tree). Humid summers. Winter sidewalk salt tracks into condos and homes. Fall leaf debris.',
        serviceExamples: [
          { scenario: 'Recurring cleaning for a Clarendon high-rise condo', detail: 'Weekly cleaning for a 2-bed Clarendon condo — kitchen, bathrooms, floors, and all surfaces maintained on a locked-in weekly schedule.' },
          { scenario: 'Office janitorial for an Arlington federal corridor business', detail: 'Nightly janitorial for an Arlington office near the Pentagon — multi-office servicing, restrooms, conference rooms, and common areas five nights per week, with COI provided.' },
          { scenario: 'Move-out clean for an Ashton Heights single-family home', detail: 'Full deposit-protecting move-out clean for a 3-bed Ashton Heights home — inside all appliances, bathrooms fully restored, hardwood floors cleaned.' },
        ],
        nearbySlugs: ['washington-dc', 'alexandria', 'annandale', 'mclean'],
        faqs: [
          { q: 'Do you provide COIs for commercial clients near the Pentagon and federal facilities in Arlington?', a: 'Yes. We carry full liability insurance and can provide certificates of insurance for federal-adjacent commercial and professional cleaning contracts in Arlington.' },
          { q: 'Do you serve Arlington high-rise condos including Clarendon and Ballston?', a: 'Yes. We are experienced with high-rise condo access and clean throughout Clarendon, Ballston, Pentagon City, Crystal City, and Rosslyn.' },
          { q: 'Do you handle the Ashton Heights and Dominion Hills neighborhoods?', a: 'Yes. The historic single-family neighborhoods of Arlington are well within our service area.' },
        ],
        zipCodes: '22201, 22202, 22203, 22204, 22205, 22206, 22207, 22209',
      },
      {
        slug: 'alexandria',
        name: 'Alexandria',
        state: 'Virginia',
        stateSlug: 'virginia',
        stateAbbr: 'VA',
        lat: 38.8048,
        lng: -77.0469,
        metaTitle: 'Cleaning Services Alexandria VA | Bright Broom',
        metaDescription:
          'Professional house and historic home cleaning in Alexandria, VA. Standard recurring, deep cleaning, move-in/out & specialty from Bright Broom. Get a free quote.',
        intro: [
          'Alexandria is one of America\'s most historically significant cities, with a dense concentration of 18th and 19th century row houses, Federal-style brick homes, and cobblestone streets in Old Town. Bright Broom Service brings careful, appropriate cleaning to Alexandria\'s historic homes alongside modern condo and townhome cleaning throughout the city.',
          'Historic homes in Alexandria require special attention — period woodwork, original hardwood floors, marble mantels, and antique fixtures demand appropriate products and methods. Our Alexandria team is trained for the nuances of historic home cleaning, ensuring we preserve the character of these irreplaceable properties while delivering a thoroughly clean result.',
        ],
        neighborhoods: ['Old Town Alexandria', 'Del Ray', 'Rosemont', 'Seminary Hill', 'Carlyle', 'North Ridge', 'Potomac Yard'],
        homeTypes: 'Historic Federal-style row houses in Old Town, 1920s-1940s bungalows in Del Ray, newer condos in Carlyle and Potomac Yard, some large single-family homes in Rosemont and North Ridge.',
        weatherContext: 'Humid Mid-Atlantic climate with direct Potomac River influence. Spring pollen from Old Town\'s mature street trees is intense. Summer humidity promotes mildew in older home basements. Winter salt from cleared sidewalks.',
        serviceExamples: [
          { scenario: 'Historic row house deep clean in Old Town', detail: 'Deep clean for an 1850s Old Town row house — original hardwood floors cleaned with appropriate products, marble surfaces properly maintained, period tile bathrooms restored.' },
          { scenario: 'Recurring service for a Del Ray bungalow', detail: 'Bi-weekly standard cleaning for a 1930s Del Ray bungalow — hardwood floors, vintage tile bathrooms, kitchen, and all living areas on a consistent bi-weekly schedule.' },
          { scenario: 'Move-out clean for a Potomac Yard condo', detail: 'Full deposit-protecting move-out clean for a 2-bed modern condo in Potomac Yard — inside all appliances, bathrooms fully cleaned, all surfaces.' },
        ],
        nearbySlugs: ['arlington', 'washington-dc', 'annandale', 'mclean'],
        faqs: [
          { q: 'Do you have experience cleaning historic homes in Old Town Alexandria?', a: 'Yes. Old Town\'s historic row houses require appropriate product selection for original hardwood, marble, period tile, and antique fixtures. Our team is trained for historic home cleaning.' },
          { q: 'Do you serve Del Ray and the residential neighborhoods outside Old Town?', a: 'Yes. We serve all Alexandria neighborhoods including Del Ray, Rosemont, Seminary Hill, and North Ridge in addition to Old Town.' },
          { q: 'How do you handle humidity and mildew in older Alexandria homes?', a: 'Older Alexandria homes can develop mildew in basements and less-ventilated areas during humid summers. We address this specifically in our cleaning protocols and can recommend ventilation strategies.' },
        ],
        zipCodes: '22301, 22302, 22304, 22305, 22306, 22307, 22308, 22309, 22310, 22311, 22312',
      },
      {
        slug: 'annandale',
        name: 'Annandale',
        state: 'Virginia',
        stateSlug: 'virginia',
        stateAbbr: 'VA',
        lat: 38.8307,
        lng: -77.1958,
        metaTitle: 'Cleaning Services Annandale VA | Bright Broom',
        metaDescription:
          'Professional house and commercial cleaning in Annandale, VA. Standard recurring, deep cleaning & move-in/out from Bright Broom Service. Get a free quote.',
        intro: [
          'Annandale is one of Northern Virginia\'s most diverse communities, with a dense mix of mid-century single-family homes, townhome communities, and a vibrant small-business corridor. Bright Broom Service provides residential and commercial cleaning throughout Annandale and the surrounding Fairfax County communities.',
          'Annandale\'s established residential neighborhoods feature mid-century homes from the 1950s-1970s that have specific cleaning considerations — original hardwood floors, older tile bathrooms, and homes that have decades of wear on surfaces. Our team is experienced with these property types and handles them appropriately.',
        ],
        neighborhoods: ['Downtown Annandale', 'Ravensworth', 'Wakefield Chapel area', 'Heritage Heights', 'Sleepy Hollow'],
        homeTypes: 'Mid-century single-family homes from the 1950s-1970s, some newer townhome communities, small commercial buildings along Little River Turnpike.',
        weatherContext: 'Northern Virginia four-season climate. Spring pollen intense. Summer humidity affects older homes without modern HVAC. Fall leaf debris significant from mature neighborhood trees.',
        serviceExamples: [
          { scenario: 'Recurring cleaning for a Ravensworth mid-century home', detail: 'Bi-weekly standard cleaning for a 1965-era Ravensworth single-family home — original hardwood floors, vintage tile bathrooms, and all rooms on schedule.' },
          { scenario: 'Deep clean for an Annandale home before re-listing', detail: 'Pre-listing deep clean for a mid-century Annandale home — inside all appliances, thorough bathroom restoration, ceiling fans and vents, and full window track cleaning.' },
          { scenario: 'Commercial cleaning for an Annandale small business', detail: 'Weekly janitorial for an Annandale restaurant supply business — office area, restroom, and front counter on a weekly commercial schedule.' },
        ],
        nearbySlugs: ['arlington', 'alexandria', 'mclean', 'washington-dc'],
        faqs: [
          { q: 'Do you serve mid-century homes throughout Annandale?', a: 'Yes. Annandale\'s mid-century housing stock is a significant part of our Virginia service area and we are experienced with the cleaning needs of homes from this era.' },
          { q: 'Do you provide commercial cleaning for Annandale businesses?', a: 'Yes. We serve small businesses and commercial properties along the Annandale commercial corridor with recurring janitorial and one-time services.' },
          { q: 'Do you serve the surrounding Fairfax County communities near Annandale?', a: 'Yes. Our Annandale service area extends into adjacent Fairfax County communities. Contact us with your address to confirm coverage.' },
        ],
        zipCodes: '22003',
      },
      {
        slug: 'mclean',
        name: 'McLean',
        state: 'Virginia',
        stateSlug: 'virginia',
        stateAbbr: 'VA',
        lat: 38.9340,
        lng: -77.1773,
        metaTitle: 'Cleaning Services McLean VA | Bright Broom',
        metaDescription:
          'Luxury home and commercial cleaning in McLean, VA. Recurring standard, deep cleaning & specialty services from Bright Broom. Get a free quote today.',
        intro: [
          'McLean is one of the wealthiest and most prestigious residential communities in the Washington DC Metro area, home to government officials, diplomats, executives, and some of the Mid-Atlantic\'s finest estate properties. Bright Broom Service brings white-glove cleaning standards to McLean homes that demand the highest level of care and discretion.',
          'McLean\'s estate properties, gated communities, and luxury homes require cleaning that matches the standard of the properties themselves — thorough, meticulous, and handled by a team that understands how to care for premium surfaces, fine furnishings, and irreplaceable materials. Our McLean team is trained to work at this level.',
        ],
        neighborhoods: ['Downtown McLean', 'Langley', 'Chesterbrook', 'Westwood', 'Spring Hill area', 'Salona Village', 'Evermay'],
        homeTypes: 'Luxury estate homes, large Colonial and Federal-style single-family homes, some luxury townhomes near Tyson\'s Corner, gated community estates.',
        weatherContext: 'Northern Virginia four-season climate. McLean\'s mature tree canopy creates intense spring pollen and significant fall leaf debris. Large estate properties with extensive grounds amplify outdoor-to-indoor debris transfer.',
        serviceExamples: [
          { scenario: 'Weekly white-glove cleaning for a McLean estate', detail: 'Weekly full-home cleaning for a 7,000 sq ft McLean estate — all rooms, premium surface care, gourmet kitchen detail, multiple bathrooms, and estate-standard finish throughout.' },
          { scenario: 'Deep clean for a McLean executive home before a private event', detail: 'Pre-event deep clean for a McLean Colonial estate — all surfaces, formal rooms, updated kitchen, multiple bathrooms, and exterior entertaining area.' },
          { scenario: 'Move-out clean for a McLean luxury home', detail: 'Premium move-out clean for a large McLean home — every room to inspection standard, inside all appliances, full bathroom and kitchen detail, and hardwood floors appropriately cleaned.' },
        ],
        nearbySlugs: ['arlington', 'annandale', 'washington-dc', 'alexandria'],
        faqs: [
          { q: 'Do you have experience with luxury estate cleaning in McLean?', a: 'Yes. McLean luxury estate cleaning is a specialty for our Virginia team. We bring appropriate care, discretion, and detail to high-value properties and are experienced with premium surface materials.' },
          { q: 'Do you clean government official or diplomatic residences in McLean?', a: 'We clean private residences throughout McLean. We maintain full confidentiality and operate with discretion for all our McLean clients.' },
          { q: 'Can you staff a McLean estate with a dedicated cleaning team?', a: 'Yes. For large McLean estates requiring consistent weekly service, we can assign a dedicated team that learns your specific preferences and property layout.' },
        ],
        zipCodes: '22101, 22102',
      },
    ],
  },
]

export function getStateBySlug(slug: string): StateHub | undefined {
  return stateHubs.find(s => s.slug === slug)
}

export function getCityBySlug(stateSlug: string, citySlug: string): City | undefined {
  const state = getStateBySlug(stateSlug)
  return state?.cities.find(c => c.slug === citySlug)
}

export function getAllCities(): City[] {
  return stateHubs.flatMap(s => s.cities)
}
