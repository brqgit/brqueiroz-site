// import { useRef, useState, useEffect } from "react";
// import { getPartnersLogos } from "~/lib/partners-logos";

// export default function LogoCarousel() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [position, setPosition] = useState(0);
//   const speed = 1;

//   const logos = getPartnersLogos();
//   const logoSpacing = 10;

//   useEffect(() => {
//     const firstSetEl = document.querySelector(".logo-set") as HTMLElement;

//     let animationId: number;
//     let currentPosition = position;

//     const animate = () => {
//       if (isDragging || isPaused || !firstSetEl) return;

//       currentPosition -= speed;

//       const setWidth = firstSetEl.offsetWidth;
//       if (Math.abs(currentPosition) >= setWidth) {
//         currentPosition += setWidth;
//       }

//       setPosition(currentPosition);

//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, [isDragging, isPaused, position]);

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     setStartX(e.pageX);
//     document.body.classList.add("select-none");
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     setIsDragging(true);
//     setStartX(e.touches[0].pageX);
//     document.body.classList.add("select-none");
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;

//     const x = e.pageX;
//     const diff = x - startX;
//     setStartX(x);

//     setPosition((prevPosition) => prevPosition + diff);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!isDragging) return;

//     const x = e.touches[0].pageX;
//     const diff = x - startX;
//     setStartX(x);

//     setPosition((prevPosition) => prevPosition + diff);
//   };

//   const stopDragging = () => {
//     setIsDragging(false);
//     document.body.classList.remove("select-none");
//   };

//   const LogoItem = ({ logo, prefix }: { logo: typeof logos[0]; prefix: string }) => (
//     <div
//       key={`${prefix}-${logo.id}`}
//       className="flex-shrink-0 w-50 h-25 bg-white rounded-lg shadow-sm flex items-center justify-center"
//       style={{ marginRight: `${logoSpacing}px` }}
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <img
//         src={logo.src || "/placeholder.svg"}
//         alt={logo.alt}
//         className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-200 p-4"
//         draggable="false"
//       />
//     </div>
//   );

//   return (
//     <div className="w-full overflow-hidden relative">
//       <div
//         className="relative overflow-hidden py-2"
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={stopDragging}
//         onMouseLeave={stopDragging}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={stopDragging}
//       >
//         <div
//           ref={containerRef}
//           className="flex"
//           style={{
//             transform: `translateX(${position}px)`,
//             transition: isDragging ? "none" : "transform 0.1s ease",
//             display: "flex",
//             flexWrap: "nowrap",
//           }}
//         >
//           <div className="flex flex-nowrap logo-set">
//             {logos.map((logo) => (
//               <LogoItem key={`start-${logo.id}`} logo={logo} prefix="start" />
//             ))}
//           </div>

//           <div className="flex flex-nowrap logo-set">
//             {logos.map((logo) => (
//               <LogoItem key={`main-${logo.id}`} logo={logo} prefix="main" />
//             ))}
//           </div>

//           <div className="flex flex-nowrap logo-set">
//             {logos.map((logo) => (
//               <LogoItem key={`end-${logo.id}`} logo={logo} prefix="end" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { getPartnersLogos } from "~/lib/partners-logos";

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [startX, setStartX] = useState(0)
  const [position, setPosition] = useState(0)
  const [logos, setLogos] = useState(getPartnersLogos())
  const speed = 1
  const logoSpacing = 8

  // Função para duplicar os logos (cria 3 conjuntos)
  useEffect(() => {
    const originalLogos = getPartnersLogos()
    // Criamos um array com três cópias dos logos originais
    setLogos([...originalLogos, ...originalLogos, ...originalLogos])
  }, [])

  // Efeito de animação principal
  useEffect(() => {
    const animate = () => {
      if (isDragging || isPaused || !containerRef.current) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      // Movemos o carrossel alterando a posição
      setPosition((prevPosition) => {
        let newPosition = prevPosition - speed

        // Quando o primeiro conjunto de logos sai completamente da tela
        // reposicionamos sem que seja visível (criando o efeito infinito)
        if (containerRef.current) {
          const firstSetEl = containerRef.current.querySelector(".logo-set") as HTMLElement
          if (firstSetEl) {
            const setWidth = firstSetEl.offsetWidth + logoSpacing

            // Se o primeiro conjunto saiu completamente, reposicionamos
            if (Math.abs(newPosition) >= setWidth) {
              // Em vez de adicionar, substituímos diretamente para evitar o efeito de "pular"
              newPosition = -1 // Um pequeno offset para manter o movimento suave
            }
          }
        }

        return newPosition
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDragging, isPaused, speed, logoSpacing])

  // Manipuladores de eventos para arrastar
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    document.body.classList.add("select-none")
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    document.body.classList.add("select-none")
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const x = e.clientX
    const diff = x - startX
    setStartX(x)

    setPosition((prevPosition) => prevPosition + diff)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const x = e.touches[0].clientX
    const diff = x - startX
    setStartX(x)

    setPosition((prevPosition) => prevPosition + diff)
  }

  const stopDragging = () => {
    setIsDragging(false)
    document.body.classList.remove("select-none")
  }

  // Quebramos os logos em três conjuntos para controlar melhor o movimento infinito
  const logoSets = {
    first: logos.slice(0, logos.length / 3),
    second: logos.slice(logos.length / 3, (logos.length / 3) * 2),
    third: logos.slice((logos.length / 3) * 2),
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        className="relative overflow-hidden py-2"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
        aria-hidden="true" // Este é um elemento decorativo
      >
        {/* Contêiner principal que se move */}
        <div
          ref={containerRef}
          className="flex"
          style={{
            transform: `translateX(${position}px)`,
            // Transição suave, mas não durante o arrastar
            transition: isDragging ? "none" : "transform 0.05s linear",
            willChange: "transform", // Otimização para melhor performance
          }}
        >
          {/* Primeiro conjunto de logos */}
          <div className="flex flex-nowrap logo-set">
            {logoSets.first.map((logo) => (
              <LogoItem
                key={`first-${logo.id}`}
                logo={logo}
                prefix="first"
                logoSpacing={logoSpacing}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>

          {/* Segundo conjunto de logos */}
          <div className="flex flex-nowrap logo-set">
            {logoSets.second.map((logo) => (
              <LogoItem
                key={`second-${logo.id}`}
                logo={logo}
                prefix="second"
                logoSpacing={logoSpacing}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>

          {/* Terceiro conjunto de logos */}
          <div className="flex flex-nowrap logo-set">
            {logoSets.third.map((logo) => (
              <LogoItem
                key={`third-${logo.id}`}
                logo={logo}
                prefix="third"
                logoSpacing={logoSpacing}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente para cada logo individual
function LogoItem({
  logo,
  prefix,
  logoSpacing,
  onMouseEnter,
  onMouseLeave,
}: {
  logo: ReturnType<typeof getPartnersLogos>[0]
  prefix: string
  logoSpacing: number
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div
      // className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center"
      className="flex-shrink-0 w-50 h-25 bg-white rounded-lg shadow-sm flex items-center justify-center"

      style={{ marginRight: `${logoSpacing}px` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={logo.src || "/placeholder.svg"}
        alt={logo.alt}
        // className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-200 p-2"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-200 p-4"
        draggable="false"
      />
    </div>
  )
}