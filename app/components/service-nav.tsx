import type { ServiceType } from "../lib/services"

interface ServiceNavProps {
  services: ServiceType[]
  currentSlug: string
}

export default function ServiceNav({ services, currentSlug }: ServiceNavProps) {
  return (
    <nav className="space-y-1">
      {services.map((service) => (
        <a
          key={service.slug}
          href={`/services?service=${service.slug}`}
          className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            service.slug === currentSlug
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          {service.title}
        </a>
      ))}
    </nav>
  )
}