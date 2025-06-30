import { Trans, useTranslation } from "react-i18next";
import { Check, ChevronRight } from "lucide-react"
import { getPartnersLogos } from "~/lib/partners-logos";
import FeaturedMessage from "~/components/featured-message";

export default function AboutUs() {
  const { t } = useTranslation();

  const partners = getPartnersLogos();

  const values = t("about.values", { returnObjects: true }) as { name: string; desc: string }[];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0a1525] to-[#0a0f18] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <Trans
                i18nKey="about.h1"
                components={[
                  <span className="text-white" />,
                  <span className="text-[#1e6cd3]" />
                ]}
              />
            </h1>
            <div className="w-24 h-1 bg-[#1e6cd3]"></div>
            <p className="text-gray-300 text-lg">
              {t("about.p1")}
            </p>
            <p className="text-gray-300 text-lg">
              {t("about.p2")}
            </p>
            <a
              href="mailto:contato@brqueiroz.com.br"
              className="inline-flex items-center bg-[#1e6cd3] hover:bg-[#155ab9] transition-colors px-6 py-3 rounded-md font-medium"
            >
              {t("contact-us")}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img
                src="/about/33.png"
                alt="Tecnologia BRQueiroz"
                width={400}
                height={400}
                className="w-[400px] h-[400px] rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1e6cd3] p-4 rounded-lg">
                <p className="text-2xl font-bold">{t("about.ceo-founder-title")}</p>
                <p className="text-sm uppercase">Valdemir José de Queiroz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-[#111a2e] p-6 rounded-lg hover:bg-[#1a2540] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#1e6cd3] flex items-center justify-center mb-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <Trans
                i18nKey="about.h2"
                components={[
                  <span className="text-[#1e6cd3]" />,
                  <br />,
                  <span className="text-white" />
                ]}
              />
            </h2>
            <div className="w-24 h-1 bg-[#1e6cd3] mb-6"></div>
            <p className="text-gray-300 text-lg mb-8">
              {t("about.p3")}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <Trans
              i18nKey="about.h2-partners"
              components={[
                <span className="text-white" />,
                <span className="text-[#1e6cd3]" />
              ]}
            />

          </h2>
          <div className="w-24 h-1 bg-[#1e6cd3] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t("about.p4")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.alt}
              className="w-32 h-16 bg-[#111a2e] rounded-lg flex items-center justify-center p-4"
            >
              <p className="font-bold text-sm text-center">{partner.alt}</p>
            </div>
          ))}
        </div>
      </div>

      <FeaturedMessage />

    </div>
  )
}
