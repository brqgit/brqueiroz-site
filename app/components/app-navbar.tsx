import React, { useState, useEffect } from "react";

const AppNavbar: React.FC = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavbarBg(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (header) {
      observer.observe(header);
    }

    return () => {
      if (header) {
        observer.unobserve(header);
      }
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
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 w-full py-2 transition-colors duration-300 ${
        navbarBg ? "bg-[#0a1525]" : "bg-transparent mt-5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="./Logo_Branco.svg" alt="" className="w-45 h-auto" />
        </div>
        <ul className="list-none flex m-0 p-0">
          {["SOBRE NÓS", "SERVIÇOS", "PARCEIROS", "CASES", "CONTATO"].map((item) => (
            <li className="ml-8" key={item}>
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
      </div>
    </nav>
  );
};

export default AppNavbar;