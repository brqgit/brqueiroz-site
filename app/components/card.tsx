import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { X, Play } from "lucide-react";
import { motion } from "framer-motion";

interface CardProps {
  imageSrc?: string;
  media?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  content?: string | ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  onModalStateChange?: (open: boolean) => void;
  className?: string;
  link?: string;
}

export default function Card({
  imageSrc = "/placeholder.svg?height=250&width=500",
  media,
  imageAlt = "Card cover image",
  title = "Card Title",
  description = "This is a description for this card component",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Sed in tellus ac nulla bibendum pellentesque.",
  buttonText = "View Details",
  link = "",
  onButtonClick = () => {},
  onModalStateChange,
  className = "",
}: CardProps) {
  const isVideo = media && media.endsWith(".mp4");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    onModalStateChange?.(isVideoModalOpen);
  }, [isVideoModalOpen, onModalStateChange]);

  if (isVideo) {
    return (
      <>
        <div
          className={`w-full max-w-md min-h-[540px] max-h-[540px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg relative cursor-pointer group ${className}`}
          onClick={() => setIsVideoModalOpen(true)}
        >
          <video
            src={media}
            className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 flex items-center justify-center transition-all">
                <Play
                  className="w-10 h-10 text-gray-900 ml-1"
                  fill="currentColor"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="mb-1 text-xl font-bold">{title}</h3>
              {/*<p className="mb-3 text-sm text-white/90">{description}</p>*/}
              {typeof content === "string" ? (
                <p
                  className="text-sm text-white/80 overflow-hidden text-ellipsis mb-4"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    whiteSpace: "normal",
                  }}
                >
                  {content}
                </p>
              ) : (
                <div className="mb-4">{content}</div>
              )}
              <div className="flex justify-end">
              </div>
            </div>
          </div>
        </div>

        {isVideoModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <button
              className="absolute top-4 right-4  text-white font-bold text-lg z-50"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Fechar"
            >
              <motion.div
                className="cursor-pointer"
                whileHover={{
                  scale: 1.2,
                  rotate: 90,
                  transition: { duration: 0.2 },
                }}
              >
                <X className="h-14 w-14" />
              </motion.div>
            </button>
            <div
              className="relative max-h-[80vh] overflow-hidden rounded-l bg-white shadow-lg flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={media}
                className="h-auto object-contain rounded-lg"
                controls
                autoPlay
              />
            </div>
          </div>
        )}
      </>
    );
  }

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
        {link.includes("tiinside") &&
          <div className="absolute top-2 right-2">
            <img
              src="/brands/logo_ti_2024.png"
              alt="Logo"
              className="h-7"
            />
          </div>
        }
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
                whiteSpace: "normal",
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
  );
}
