import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AppNavbar: React.FC = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 64;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 w-full py-2 transition-colors duration-300 ${navbarBg ? "bg-[#0a1525]" : "bg-transparent pt-5"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="./logo-menu.svg" alt="Logo" className="w-23 h-auto" draggable="false" />
        </div>

        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className="hidden lg:flex list-none items-center gap-8">
          {["SOBRE NÓS", "SERVIÇOS", "PARCEIROS", "CASES", "CONTATO"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.toLowerCase().replace(/\s/g, "-"));
                }}
                className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-64 bg-[#0a1525] shadow-lg z-20 flex flex-col items-center lg:hidden"
        >
          <button
            className="text-white text-2xl self-end m-4 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          <ul className="list-none flex flex-col items-center gap-4 mt-10">
            {["SOBRE NÓS", "SERVIÇOS", "PARCEIROS", "CASES", "CONTATO"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.toLowerCase().replace(/\s/g, "-"));
                  }}
                  className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default AppNavbar;