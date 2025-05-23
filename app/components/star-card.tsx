import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  text: string;
  icon: ReactNode;
}

export default function StatCard({ number, text, icon }: StatCardProps) {
  const [animatedNumber, setAnimatedNumber] = useState("0");

  useEffect(() => {
    const numericPart = parseFloat(number.replace(/[^\d.,]/g, "").replace(",", "."));
    const suffix = number.replace(/[\d.,]/g, "");

    if (!isNaN(numericPart)) {
      const duration = 2;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = numericPart * progress;

        const formattedNumber = number.includes(",") || number.includes(".")
          ? currentNumber.toFixed(1).replace(".", ",")
          : Math.floor(currentNumber).toString();

        setAnimatedNumber(`${formattedNumber}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [number]);

  return (
    <div className="bg-white/10 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-3xl font-bold text-white mb-2">
        <motion.span>{animatedNumber}</motion.span>
      </h3>
      <p className="text-white/80">{text}</p>
    </div>
  );
}
