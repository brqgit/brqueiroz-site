import { useRef, useState, useEffect } from "react";
import { getPartnersLogos } from "~/lib/partners-logos";

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [position, setPosition] = useState(0);
  const speed = 1;

  const logos = getPartnersLogos();
  const logoSpacing = 10;

  useEffect(() => {
    const firstSetEl = document.querySelector(".logo-set") as HTMLElement;

    let animationId: number;
    let currentPosition = position;

    const animate = () => {
      if (isDragging || isPaused || !firstSetEl) return;

      currentPosition -= speed;

      const setWidth = firstSetEl.offsetWidth;
      if (Math.abs(currentPosition) >= setWidth) {
        currentPosition += setWidth;
      }

      setPosition(currentPosition);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isDragging, isPaused, position]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    document.body.classList.add("select-none");
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    document.body.classList.add("select-none");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const x = e.pageX;
    const diff = x - startX;
    setStartX(x);

    setPosition((prevPosition) => prevPosition + diff);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX;
    const diff = x - startX;
    setStartX(x);

    setPosition((prevPosition) => prevPosition + diff);
  };

  const stopDragging = () => {
    setIsDragging(false);
    document.body.classList.remove("select-none");
  };

  const LogoItem = ({ logo, prefix }: { logo: typeof logos[0]; prefix: string }) => (
    <div
      key={`${prefix}-${logo.id}`}
      className="flex-shrink-0 w-50 h-25 bg-white rounded-lg shadow-sm flex items-center justify-center"
      style={{ marginRight: `${logoSpacing}px` }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img
        src={logo.src || "/placeholder.svg"}
        alt={logo.alt}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-200 p-4"
        draggable="false"
      />
    </div>
  );

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="relative overflow-hidden py-2"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
      >
        <div
          ref={containerRef}
          className="flex"
          style={{
            transform: `translateX(${position}px)`,
            transition: isDragging ? "none" : "transform 0.1s ease",
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          <div className="flex flex-nowrap logo-set">
            {logos.map((logo) => (
              <LogoItem key={`start-${logo.id}`} logo={logo} prefix="start" />
            ))}
          </div>

          <div className="flex flex-nowrap logo-set">
            {logos.map((logo) => (
              <LogoItem key={`main-${logo.id}`} logo={logo} prefix="main" />
            ))}
          </div>

          <div className="flex flex-nowrap logo-set">
            {logos.map((logo) => (
              <LogoItem key={`end-${logo.id}`} logo={logo} prefix="end" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}