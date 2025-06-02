import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { getPartnersLogos } from "~/lib/partners-logos";

const animation = { duration: 18000, easing: (t: number) => t };
let isMouseOver = false;

export default function LogoCarousel() {
  const logos = getPartnersLogos();
  const duplicateedLogos = Array(2).fill(logos).flat();

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: "auto",
      spacing: 8,
    },
    created(s) {
      s.container.addEventListener("mouseover", () => {
        isMouseOver = true;
        s.animator.stop();
      })
      s.container.addEventListener("mouseout", () => {
        isMouseOver = false;
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      })
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      if (!isMouseOver) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
    animationEnded(s) {
      if (!isMouseOver) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider py-4">
      {duplicateedLogos.map((logo) => (
        <div className="keen-slider__slide !min-w-50 !min-h-25 !w-50 !h-25 bg-white rounded-lg shadow-sm flex items-center justify-center" key={logo.id}>
          <img
            src={logo.src || "/placeholder.svg"}
            alt={logo.alt}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-200 p-4"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}