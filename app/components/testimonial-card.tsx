interface TestimonialCardProps {
  name: string
  position: string
  testimonial: string
  image?: string
}

export default function TestimonialCard({ name, position, testimonial, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        {image && (
          <img
            src={image || "public/placeholder.svg"}
            alt={name}
            width={60}
            height={60}
            className="rounded-full"
          />
        )}
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>
  )
}

