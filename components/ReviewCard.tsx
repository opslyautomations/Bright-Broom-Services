type Props = {
  name: string
  city: string
  rating: number
  text: string
  date?: string
}

export default function ReviewCard({ name, city, rating, text, date }: Props) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
        <div>
          <p className="font-semibold text-navy-brand text-sm">{name}</p>
          <p className="text-xs text-slate-brand">{city}</p>
        </div>
        {date && <p className="text-xs text-gray-400">{date}</p>}
      </div>
    </div>
  )
}
