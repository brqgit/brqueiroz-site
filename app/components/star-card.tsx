import type { ReactNode } from "react"

interface StatCardProps {
  number: string
  text: string
  icon: ReactNode
}

export default function StatCard({ number, text, icon }: StatCardProps) {
  return (
    <div className="bg-white/10 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-3xl font-bold text-white mb-2">{number}</h3>
      <p className="text-white/80">{text}</p>
    </div>
  )
}

