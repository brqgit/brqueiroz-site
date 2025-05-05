import type { ReactNode } from "react"

interface CardProps {
  imageSrc?: string
  imageAlt?: string
  title?: string
  description?: string
  content?: string | ReactNode
  buttonText?: string
  onButtonClick?: () => void
  className?: string
  link?: string
}

export default function Card({
  imageSrc = "/placeholder.svg?height=250&width=500",
  imageAlt = "Card cover image",
  title = "Card Title",
  description = "This is a description for this card component",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Sed in tellus ac nulla bibendum pellentesque.",
  buttonText = "View Details",
  link = '',
  onButtonClick = () => { },
  className = "",
}: CardProps) {
  return (
    <div
      className={`w-full max-w-md min-h-[540px] max-h-[540px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg flex flex-col ${className}`}
    >
      <div className="w-full min-h-[220px] max-h-[220px] overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="mb-1 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-3 text-sm text-gray-500">{description}</p>
        <div className="flex-1 flex flex-col">
          {typeof content === "string" ? (
            <p
              className="text-sm text-gray-600 overflow-hidden text-ellipsis"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                whiteSpace: "normal"
              }}
            >
              {content}
            </p>
          ) : (
            <div className="mb-4">{content}</div>
          )}
        </div>
      </div>
      <div className="flex justify-end px-5 pb-5">
        <button
          className="rounded-md bg-[#1c5abd] px-4 py-2 text-sm font-medium text-white hover:bg-[#1a4fa8] focus:outline-none focus:ring-2 focus:ring-[#1c5abd] focus:ring-offset-2"
          onClick={() => {
            if (link) window.open(link, "_blank");
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

