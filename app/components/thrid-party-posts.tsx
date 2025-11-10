import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'

import { Linkedin } from "lucide-react";

import { Carousel } from "./carousel";

import { getPostsLinkedinAPI } from "~/lib/linkedin-posts";
import type { Article } from "~/lib/linkedin-posts";

export default function ThirdPartyPostsSection() {
  const { t } = useTranslation();
  const [thirdPartyPosts, setthirdPartyPosts] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsLinkedinAPI()
      .then(setthirdPartyPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
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
            {Array.from({ length: 2 }).map((_, idx) => (
              <div
                key={idx}
                className="group relative flex min-w-[500px] h-64 overflow-hidden rounded-2xl border border-border bg-white shadow-lg max-w-lg mx-auto"
              >
                <div className="relative h-64 w-48 flex-shrink-0 overflow-hidden">
                  <Skeleton
                    height="100%"
                    width="100%"
                    className="object-cover rounded-l-2xl"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <Skeleton height={24} width="80%" className="mb-2" />
                    <Skeleton height={16} width="100%" className="mb-1" />
                    <Skeleton height={16} width="90%" className="mb-1" />
                    <Skeleton height={16} width="70%" />
                  </div>
                  <Skeleton height={32} width={120} className="rounded-md" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    );
  }

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
              <div className="relative h-64 w-48 flex-shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20"></div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                {post.link.includes("linkedin.com") && (
                  <Linkedin className="absolute top-2 right-2 w-6 h-6 text-[#1c5abd] z-10" />
                )}

                <div>
                  <h3 className="text-balance text-xl font-bold text-foreground">
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
                  {/*{post.buttonText}*/}
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
