import { useEffect } from "react"
import { useNavigate } from "react-router"

export default function LoadingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("./home")
      window.location.href = "/home";
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background bg-gray-950 text-whites">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-95 h-auto mb-4">
          <img src="./brqueiroz_logo-branca_3s.webp" alt="Logo" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  )
}

