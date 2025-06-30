import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  position: string;
  testimonial: string;
  image?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function TestimonialCard({ name, position, testimonial, image, onClick, style }: TestimonialCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col min-h-[200px]"
      style={style}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-600 text-sm">{position}</p>
          </div>
        </div>
        <p className="text-gray-700 italic mb-4">{testimonial}</p>
      </div>

      {onClick && (
        <motion.button
          onClick={onClick}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium cursor-pointer mt-1"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {t("read-more")} <ArrowRight className="w-4 h-4" />
        </motion.button>
      )}
    </motion.div>
  );
}