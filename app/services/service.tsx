import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { ChevronLeft } from "lucide-react";

import ServiceNav from "~/components/service-nav";

import { getServiceBySlug, getAllServices } from "~/lib/services";

export default function ServicePage() {
    const { t } = useTranslation();
    const location = useLocation();

    const allServices = getAllServices(t);

    const searchParams = new URLSearchParams(location.search);
    const slug = searchParams.get("service") || allServices[0]?.slug;

    const service = slug ? getServiceBySlug(slug, t) : undefined;

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">{t("pageServices.service-not-found")}</h1>
                    <a href="/services" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        {t("pageServices.back-to-services")}
                    </a>
                </div>
            </div>
        );
    }

    return (
        <main className="flex min-h-screen flex-col">
            <div className="bg-gray-100 py-3 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
                    <a href="/home" className="text-gray-600 hover:text-blue-600">
                        {t("pageServices.home")}
                    </a>
                    <span className="text-gray-400">/</span>
                    <a href="/services" className="text-gray-600 hover:text-blue-600">
                        {t("pageServices.services")}
                    </a>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-600">{service.title}</span>
                </div>
            </div>

            <section className="bg-[#0a1525] text-white py-16 px-4 md:px-8 lg:px-16 bg-[url('/bg-pattern.svg')] bg-cover bg-center">
                <div className="max-w-7xl mx-auto">
                    <a href="/home" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        {t("pageServices.back-to-home")}
                    </a>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                            <p className="text-xl text-gray-300">{service.description}</p>
                            <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`mailto:corp@brqueiroz.com.br?subject=Solicitar%20Orçamento%20-%20${encodeURIComponent(service.title)}`}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    {t("pageServices.request-quote")}
                                </a>
                                <a
                                    href={`mailto:suportecst@brqueiroz.com.br?subject=Falar%20com%20Especialista%20-%20${encodeURIComponent(service.title)}`}
                                    className="px-4 py-2 border border-white text-white rounded-md hover:bg-white/10">
                                    {t("pageServices.talk-to-specialist")}
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="bg-white/10 p-2 rounded-full max-h-64 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-[300px_1fr] gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">{t("pageServices.our-services")}</h3>
                            <ServiceNav services={allServices} currentSlug={slug} />
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">{t("pageServices.need-help")}</h3>
                            <p className="text-gray-700 mb-4">
                                {t("pageServices.contact-us")}
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-700">+55 (16) 3555-0065</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-700">+55 (16) 99199-1078</span>
                                </div>
                            </div>

                            <a
                                href="mailto:contato@brqueiroz.com.br"
                                className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center block"
                            >
                                {t("pageServices.request-contact")}
                            </a>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">{t("pageServices.overview")}</h2>
                            <div className="prose max-w-none text-gray-700">
                                {Array.isArray(service.fullDescription) ? (
                                    service.fullDescription.map((paragraph, index) => (
                                        <p key={index} className="mb-4">
                                            {paragraph}
                                        </p>
                                    ))
                                ) : (
                                    <p className="mb-4">{service.fullDescription}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
