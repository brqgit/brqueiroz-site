import type { ReactNode } from "react"
import { useNavigate } from "react-router"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  path: string
}

export default function ServiceCard({ title, description, icon, path }: ServiceCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services?service=${path}`);
  }

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-blue-50 p-4 rounded-full">{icon}</div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-[#1c5abd]">{title}</h3>
        <p className="text-gray-700">{description}</p>
        {/* <button
          onClick={handleClick}
          className="group/btn inline-flex items-center gap-1.5 text-blue-600 text-sm font-medium transition-colors hover:text-blue-800">
          Veja mais
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </button> */}

        <div className="flex justify-end items-end">
          <img
            src="/services/maximizar.gif"
            alt="Veja mais"
            className="w-8 h-8 cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}
