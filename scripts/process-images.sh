#!/usr/bin/env bash
# process-images.sh
# Converts photos to WebP, resizes, and geotagges with IPTC + GPS metadata.
# Requirements: brew install exiftool webp
#
# Usage:
#   1. Drop your photos into scripts/photo-staging/<category>/
#      Categories: services, states, locations/california, locations/arizona, etc.
#   2. Run: bash scripts/process-images.sh
#   3. Processed files land in public/images/ — ready to commit.

set -euo pipefail

STAGING_DIR="$(dirname "$0")/photo-staging"
OUT_DIR="$(dirname "$0")/../public/images"
QUALITY=85

check_deps() {
  local missing=()
  command -v exiftool >/dev/null 2>&1 || missing+=("exiftool")
  command -v cwebp    >/dev/null 2>&1 || missing+=("webp")
  if [ ${#missing[@]} -gt 0 ]; then
    echo "Missing dependencies: ${missing[*]}"
    echo "Install with: brew install ${missing[*]}"
    exit 1
  fi
}

# GPS coordinates for every service area
declare -A GPS_LAT GPS_LNG GPS_REF_LAT GPS_REF_LNG

GPS_LAT["california"]="34.9530";        GPS_LNG["california"]="120.4357";       GPS_REF_LAT["california"]="N"; GPS_REF_LNG["california"]="W"
GPS_LAT["arizona"]="33.4484";           GPS_LNG["arizona"]="112.0740";          GPS_REF_LAT["arizona"]="N";    GPS_REF_LNG["arizona"]="W"
GPS_LAT["nevada"]="36.1699";            GPS_LNG["nevada"]="115.1398";           GPS_REF_LAT["nevada"]="N";     GPS_REF_LNG["nevada"]="W"
GPS_LAT["colorado"]="39.7392";          GPS_LNG["colorado"]="104.9903";         GPS_REF_LAT["colorado"]="N";   GPS_REF_LNG["colorado"]="W"
GPS_LAT["virginia"]="38.8816";          GPS_LNG["virginia"]="77.0910";          GPS_REF_LAT["virginia"]="N";   GPS_REF_LNG["virginia"]="W"

GPS_LAT["santa-maria"]="34.9530";       GPS_LNG["santa-maria"]="120.4357";      GPS_REF_LAT["santa-maria"]="N";      GPS_REF_LNG["santa-maria"]="W"
GPS_LAT["santa-barbara"]="34.4208";     GPS_LNG["santa-barbara"]="119.6982";    GPS_REF_LAT["santa-barbara"]="N";    GPS_REF_LNG["santa-barbara"]="W"
GPS_LAT["san-luis-obispo"]="35.2828";   GPS_LNG["san-luis-obispo"]="120.6596";  GPS_REF_LAT["san-luis-obispo"]="N";  GPS_REF_LNG["san-luis-obispo"]="W"
GPS_LAT["bakersfield"]="35.3733";       GPS_LNG["bakersfield"]="119.0187";      GPS_REF_LAT["bakersfield"]="N";      GPS_REF_LNG["bakersfield"]="W"
GPS_LAT["arroyo-grande"]="35.1188";     GPS_LNG["arroyo-grande"]="120.5907";    GPS_REF_LAT["arroyo-grande"]="N";    GPS_REF_LNG["arroyo-grande"]="W"
GPS_LAT["pismo-beach"]="35.1427";       GPS_LNG["pismo-beach"]="120.6407";      GPS_REF_LAT["pismo-beach"]="N";      GPS_REF_LNG["pismo-beach"]="W"
GPS_LAT["nipomo"]="35.0422";            GPS_LNG["nipomo"]="120.4760";           GPS_REF_LAT["nipomo"]="N";           GPS_REF_LNG["nipomo"]="W"
GPS_LAT["orcutt"]="34.8647";            GPS_LNG["orcutt"]="120.4346";           GPS_REF_LAT["orcutt"]="N";           GPS_REF_LNG["orcutt"]="W"
GPS_LAT["guadalupe"]="34.9719";         GPS_LNG["guadalupe"]="120.5726";        GPS_REF_LAT["guadalupe"]="N";        GPS_REF_LNG["guadalupe"]="W"
GPS_LAT["buellton"]="34.6138";          GPS_LNG["buellton"]="120.1938";         GPS_REF_LAT["buellton"]="N";         GPS_REF_LNG["buellton"]="W"
GPS_LAT["solvang"]="34.5958";           GPS_LNG["solvang"]="120.1377";          GPS_REF_LAT["solvang"]="N";          GPS_REF_LNG["solvang"]="W"
GPS_LAT["santa-ynez"]="34.6130";        GPS_LNG["santa-ynez"]="120.0763";       GPS_REF_LAT["santa-ynez"]="N";       GPS_REF_LNG["santa-ynez"]="W"
GPS_LAT["lompoc"]="34.6391";            GPS_LNG["lompoc"]="120.4579";           GPS_REF_LAT["lompoc"]="N";           GPS_REF_LNG["lompoc"]="W"
GPS_LAT["avila-beach"]="35.1797";       GPS_LNG["avila-beach"]="120.7318";      GPS_REF_LAT["avila-beach"]="N";      GPS_REF_LNG["avila-beach"]="W"

GPS_LAT["phoenix"]="33.4484";           GPS_LNG["phoenix"]="112.0740";          GPS_REF_LAT["phoenix"]="N";          GPS_REF_LNG["phoenix"]="W"
GPS_LAT["mesa"]="33.4152";              GPS_LNG["mesa"]="111.8315";             GPS_REF_LAT["mesa"]="N";             GPS_REF_LNG["mesa"]="W"
GPS_LAT["gilbert"]="33.3528";           GPS_LNG["gilbert"]="111.7890";          GPS_REF_LAT["gilbert"]="N";          GPS_REF_LNG["gilbert"]="W"
GPS_LAT["chandler"]="33.3062";          GPS_LNG["chandler"]="111.8413";         GPS_REF_LAT["chandler"]="N";         GPS_REF_LNG["chandler"]="W"
GPS_LAT["scottsdale"]="33.4942";        GPS_LNG["scottsdale"]="111.9261";       GPS_REF_LAT["scottsdale"]="N";       GPS_REF_LNG["scottsdale"]="W"

GPS_LAT["las-vegas"]="36.1699";         GPS_LNG["las-vegas"]="115.1398";        GPS_REF_LAT["las-vegas"]="N";        GPS_REF_LNG["las-vegas"]="W"
GPS_LAT["paradise"]="36.0921";          GPS_LNG["paradise"]="115.1454";         GPS_REF_LAT["paradise"]="N";         GPS_REF_LNG["paradise"]="W"
GPS_LAT["spring-valley"]="36.1086";     GPS_LNG["spring-valley"]="115.2392";    GPS_REF_LAT["spring-valley"]="N";    GPS_REF_LNG["spring-valley"]="W"

GPS_LAT["denver"]="39.7392";            GPS_LNG["denver"]="104.9903";           GPS_REF_LAT["denver"]="N";           GPS_REF_LNG["denver"]="W"
GPS_LAT["aurora"]="39.7294";            GPS_LNG["aurora"]="104.8319";           GPS_REF_LAT["aurora"]="N";           GPS_REF_LNG["aurora"]="W"
GPS_LAT["lakewood"]="39.7047";          GPS_LNG["lakewood"]="105.0814";         GPS_REF_LAT["lakewood"]="N";         GPS_REF_LNG["lakewood"]="W"
GPS_LAT["arvada"]="39.8028";            GPS_LNG["arvada"]="105.0875";           GPS_REF_LAT["arvada"]="N";           GPS_REF_LNG["arvada"]="W"

GPS_LAT["arlington"]="38.8816";         GPS_LNG["arlington"]="77.0910";         GPS_REF_LAT["arlington"]="N";        GPS_REF_LNG["arlington"]="W"
GPS_LAT["alexandria"]="38.8048";        GPS_LNG["alexandria"]="77.0469";        GPS_REF_LAT["alexandria"]="N";       GPS_REF_LNG["alexandria"]="W"
GPS_LAT["mclean"]="38.9339";            GPS_LNG["mclean"]="77.1773";            GPS_REF_LAT["mclean"]="N";           GPS_REF_LNG["mclean"]="W"
GPS_LAT["annandale"]="38.8304";         GPS_LNG["annandale"]="77.1963";         GPS_REF_LAT["annandale"]="N";        GPS_REF_LNG["annandale"]="W"
GPS_LAT["washington-dc"]="38.9072";     GPS_LNG["washington-dc"]="77.0369";     GPS_REF_LAT["washington-dc"]="N";    GPS_REF_LNG["washington-dc"]="W"

process_image() {
  local src="$1"
  local dest_webp="$2"
  local slug="$3"
  local title="$4"
  local keywords="$5"

  local tmp_jpg="/tmp/bb_process_$$.jpg"

  # Convert to JPG first (cwebp works better from jpg), then to webp
  sips -s format jpeg "$src" --out "$tmp_jpg" -Z 1200 --resampleHeightWidthMax 1200 >/dev/null 2>&1
  cwebp -q $QUALITY "$tmp_jpg" -o "$dest_webp" >/dev/null 2>&1
  rm -f "$tmp_jpg"

  # Add IPTC + GPS metadata via exiftool
  local exif_args=(
    -overwrite_original
    -IPTC:ObjectName="$title"
    -IPTC:Keywords="house cleaning, professional cleaning, Bright Broom Service, $keywords"
    -IPTC:CopyrightNotice="© 2026 Bright Broom Service. All rights reserved."
    -IPTC:Credit="Bright Broom Service"
    -IPTC:Source="brightbroomservice.com"
    -XMP:Description="$title — professional cleaning by Bright Broom Service."
    -XMP:Creator="Bright Broom Service"
    -XMP:Rights="© 2026 Bright Broom Service"
  )

  # Add GPS if we have coords for this slug
  if [[ -n "${GPS_LAT[$slug]+x}" ]]; then
    exif_args+=(
      -GPSLatitude="${GPS_LAT[$slug]}"
      -GPSLatitudeRef="${GPS_REF_LAT[$slug]}"
      -GPSLongitude="${GPS_LNG[$slug]}"
      -GPSLongitudeRef="${GPS_REF_LNG[$slug]}"
    )
  fi

  exiftool "${exif_args[@]}" "$dest_webp" >/dev/null 2>&1
  echo "  ✓ $(basename "$dest_webp")"
}

main() {
  check_deps

  if [ ! -d "$STAGING_DIR" ]; then
    echo "Staging directory not found: $STAGING_DIR"
    echo "Create it and drop your photos in subdirectories matching public/images/ structure."
    exit 1
  fi

  echo "Processing images from $STAGING_DIR..."
  local count=0

  # Walk every file in staging
  while IFS= read -r -d '' src; do
    ext="${src##*.}"
    ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
    [[ "$ext_lower" =~ ^(jpg|jpeg|png|heic|heif|tiff|tif)$ ]] || continue

    # Determine relative path from staging root
    rel="${src#$STAGING_DIR/}"          # e.g. services/standard-cleaning.jpg
    dir="$(dirname "$rel")"             # e.g. services
    filename="$(basename "$rel")"       # e.g. standard-cleaning.jpg
    slug="${filename%.*}"               # e.g. standard-cleaning

    dest_dir="$OUT_DIR/$dir"
    mkdir -p "$dest_dir"
    dest_webp="$dest_dir/${slug}.webp"

    # Build human title from slug
    title=$(echo "$slug" | tr '-' ' ' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1))substr($i,2)}1')
    keywords="$slug, $dir"

    process_image "$src" "$dest_webp" "$slug" "$title Cleaning — $dir" "$keywords"
    ((count++))
  done < <(find "$STAGING_DIR" -type f -print0)

  echo ""
  echo "Done. Processed $count images → public/images/"
  echo "Run 'npm run build' to verify everything loads correctly."
}

main
