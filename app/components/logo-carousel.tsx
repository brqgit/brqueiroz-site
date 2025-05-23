import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getPartnersLogos } from "~/lib/partners-logos";

const animation = { duration: 30000, easing: (t: number) => t };

export default function LogoCarousel() {
  const logos = getPartnersLogos();

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 6,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 3, spacing: 8 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider py-4">
      {logos.map((logo) => (
        <div className="keen-slider__slide flex items-center justify-center" key={logo.id}>
          <img
            src={logo.src || "/placeholder.svg"}
            alt={logo.alt}
            className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-200 p-2"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}