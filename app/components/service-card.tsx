import type { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-blue-50 p-4 rounded-full">{icon}</div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-[#1c5abd]">{title}</h3>
        <p className="text-gray-700">{description}</p>
        {/* <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          veja mais 
        </button> */}
      </div>
    </div>
  )
}
