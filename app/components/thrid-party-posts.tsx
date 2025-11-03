import { useTranslation } from "react-i18next";
import { Carousel } from "./carousel";

const thirdPartyPosts = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/placeholder.svg",
    link: "#",
    buttonText: "Ler artigo",
  },
  {
    title: "Ut enim ad minim veniam",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: "/placeholder.svg",
    link: "#",
    buttonText: "Ler artigo",
  },
  {
    title: "Duis aute irure dolor in reprehenderit",
    description:
      "In voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSrc: "/placeholder.svg",
    link: "#",
    buttonText: "Saiba mais",
  },
  {
    title: "Excepteur sint occaecat cupidatat non proident",
    description:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageSrc: "/placeholder.svg",
    link: "#",
    buttonText: "Ver histórias",
  },
];

export default function ThirdPartyPostsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0a1525]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-10 text-white">
          POSTS EM <span className="text-blue-600">DESTAQUES</span>
        </h2>
        <Carousel
          itemsPerPage={2}
          autoPlayInterval={6000}
          showArrows={false}
          className="max-w-6xl mx-auto"
        >
          {thirdPartyPosts.map((post, idx) => (
            <div
              key={idx}
              className="group relative flex min-w-[500px] h-64 overflow-hidden rounded-2xl border border-border bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] max-w-lg mx-auto"
            >
              {/* Imagem à esquerda */}
              <div className="relative h-64 w-48 flex-shrink-0 overflow-hidden">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20"></div>
              </div>

              {/* Conteúdo à direita */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="mt-3 text-balance text-xl font-bold text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-700 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                </div>

                <button
                  className="rounded-md bg-[#1c5abd] max-w-[120px] px-4 py-2 text-sm font-medium text-white hover:bg-[#1a4fa8] focus:outline-none focus:ring-2 focus:ring-[#1c5abd] focus:ring-offset-2"
                  onClick={() => {
                    if (post.link) window.open(post.link, "_blank");
                  }}
                >
                  {post.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
