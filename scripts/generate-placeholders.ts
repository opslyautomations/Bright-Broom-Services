/**
 * Generates placeholder WebP images for all states and cities.
 * In production, replace with real geo-tagged photography.
 * Run: npx ts-node --project tsconfig.json scripts/generate-placeholders.ts
 */
import sharp from 'sharp'
import * as fs from 'fs'
import * as path from 'path'

const BASE = path.join(process.cwd(), 'public', 'images')

type LocationEntry = {
  path: string
  color: [number, number, number]
  label: string
}

const locations: LocationEntry[] = [
  // States
  { path: 'states/california.webp', color: [20, 184, 166], label: 'California' },
  { path: 'states/arizona.webp', color: [249, 115, 22], label: 'Arizona' },
  { path: 'states/nevada.webp', color: [168, 85, 247], label: 'Nevada' },
  { path: 'states/colorado.webp', color: [59, 130, 246], label: 'Colorado' },
  { path: 'states/virginia.webp', color: [34, 197, 94], label: 'Virginia' },
  // California cities
  { path: 'locations/california/santa-maria.webp', color: [20, 184, 166], label: 'Santa Maria CA' },
  { path: 'locations/california/santa-barbara.webp', color: [20, 184, 166], label: 'Santa Barbara CA' },
  { path: 'locations/california/san-luis-obispo.webp', color: [20, 184, 166], label: 'San Luis Obispo CA' },
  { path: 'locations/california/bakersfield.webp', color: [20, 184, 166], label: 'Bakersfield CA' },
  { path: 'locations/california/lompoc.webp', color: [20, 184, 166], label: 'Lompoc CA' },
  { path: 'locations/california/orcutt.webp', color: [20, 184, 166], label: 'Orcutt CA' },
  { path: 'locations/california/nipomo.webp', color: [20, 184, 166], label: 'Nipomo CA' },
  { path: 'locations/california/avila-beach.webp', color: [20, 184, 166], label: 'Avila Beach CA' },
  { path: 'locations/california/pismo-beach.webp', color: [20, 184, 166], label: 'Pismo Beach CA' },
  { path: 'locations/california/guadalupe.webp', color: [20, 184, 166], label: 'Guadalupe CA' },
  { path: 'locations/california/arroyo-grande.webp', color: [20, 184, 166], label: 'Arroyo Grande CA' },
  { path: 'locations/california/buellton.webp', color: [20, 184, 166], label: 'Buellton CA' },
  { path: 'locations/california/solvang.webp', color: [20, 184, 166], label: 'Solvang CA' },
  { path: 'locations/california/santa-ynez.webp', color: [20, 184, 166], label: 'Santa Ynez CA' },
  // Arizona cities
  { path: 'locations/arizona/gilbert.webp', color: [249, 115, 22], label: 'Gilbert AZ' },
  { path: 'locations/arizona/phoenix.webp', color: [249, 115, 22], label: 'Phoenix AZ' },
  { path: 'locations/arizona/scottsdale.webp', color: [249, 115, 22], label: 'Scottsdale AZ' },
  { path: 'locations/arizona/mesa.webp', color: [249, 115, 22], label: 'Mesa AZ' },
  { path: 'locations/arizona/chandler.webp', color: [249, 115, 22], label: 'Chandler AZ' },
  // Nevada cities
  { path: 'locations/nevada/las-vegas.webp', color: [168, 85, 247], label: 'Las Vegas NV' },
  { path: 'locations/nevada/spring-valley.webp', color: [168, 85, 247], label: 'Spring Valley NV' },
  { path: 'locations/nevada/paradise.webp', color: [168, 85, 247], label: 'Paradise NV' },
  // Colorado cities
  { path: 'locations/colorado/denver.webp', color: [59, 130, 246], label: 'Denver CO' },
  { path: 'locations/colorado/aurora.webp', color: [59, 130, 246], label: 'Aurora CO' },
  { path: 'locations/colorado/arvada.webp', color: [59, 130, 246], label: 'Arvada CO' },
  { path: 'locations/colorado/lakewood.webp', color: [59, 130, 246], label: 'Lakewood CO' },
  // Virginia cities
  { path: 'locations/virginia/washington-dc.webp', color: [34, 197, 94], label: 'Washington DC' },
  { path: 'locations/virginia/arlington.webp', color: [34, 197, 94], label: 'Arlington VA' },
  { path: 'locations/virginia/alexandria.webp', color: [34, 197, 94], label: 'Alexandria VA' },
  { path: 'locations/virginia/annandale.webp', color: [34, 197, 94], label: 'Annandale VA' },
  { path: 'locations/virginia/mclean.webp', color: [34, 197, 94], label: 'McLean VA' },
  // Services
  { path: 'services/standard-cleaning.webp', color: [15, 47, 68], label: 'Standard Cleaning' },
  { path: 'services/deep-cleaning.webp', color: [15, 47, 68], label: 'Deep Cleaning' },
  { path: 'services/move-in-move-out-cleaning.webp', color: [15, 47, 68], label: 'Move In Out Cleaning' },
  { path: 'services/commercial-janitorial-cleaning.webp', color: [15, 47, 68], label: 'Commercial Janitorial' },
  { path: 'services/specialty-cleaning.webp', color: [15, 47, 68], label: 'Specialty Cleaning' },
  { path: 'services/post-construction-cleaning.webp', color: [15, 47, 68], label: 'Post Construction' },
]

async function generate() {
  for (const loc of locations) {
    const fullPath = path.join(BASE, loc.path)
    const dir = path.dirname(fullPath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    if (fs.existsSync(fullPath)) continue
    const [r, g, b] = loc.color
    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 3,
        background: { r, g, b },
      },
    })
      .webp({ quality: 80 })
      .toFile(fullPath)
    console.log(`Generated: ${loc.path}`)
  }
  console.log('Done.')
}

generate().catch(console.error)
