interface TestimonialCardProps {
  name: string
  position: string
  testimonial: string
  image?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export default function TestimonialCard({ name, position, testimonial, image, onClick, style }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
      onClick={onClick}
      style={style}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
    >
      <div className="flex items-center gap-4 mb-4">
        {/* {image && (
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            width={60}
            height={60}
            className="rounded-full"
          />
        )} */}
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>
  )
}

