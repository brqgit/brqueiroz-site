import { useTranslation } from "react-i18next";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

import { getAllServices } from "~/lib/services";

export default function AppFooter() {
    const { t } = useTranslation();

    const services = getAllServices(t);

    const toCamelCase = (str: string) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <footer id="contact" className="bg-[#0a1525] text-white py-12 px-4 md:px-8 lg:px-16" >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
                    <div>
                        <img
                            src="/Logo_Branco.svg"
                            alt="BR Queiroz Logo"
                            width="180"
                            height="50"
                            className="h-18 w-auto mb-4 mx-auto md:mx-0"
                            draggable="false"
                        />
                        <p className="text-gray-400 text-sm">
                            {t("footer.description")}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">{t("footer.services")}</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <a
                                        href={`/services?service=${service.slug}`}
                                        className="text-gray-400 hover:text-white text-sm"
                                    >
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">{t("footer.quick-links")}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about-us" className="text-gray-400 hover:text-white text-sm">
                                    {toCamelCase(t("navbar.about-us"))}
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-white text-sm">
                                    {toCamelCase(t("navbar.services"))}
                                </a>
                            </li>
                            <li>
                                <a href="#cases" className="text-gray-400 hover:text-white text-sm">
                                    {toCamelCase(t("navbar.cases"))}
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white text-sm">
                                    {toCamelCase(t("navbar.contact"))}
                                </a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                                    {toCamelCase(t("privacyPolicy.title"))}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">{t("footer.contact")}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <Phone className="h-4 w-4 text-blue-400" />
                                <span className="text-gray-400 text-sm">+55 (16) 3555-0065</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <MessageSquare className="h-4 w-4 text-blue-400" />
                                <span className="text-gray-400 text-sm">+55 (16) 99199-1078</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <Mail className="h-4 w-4 text-blue-400" />
                                <a href="mailto:contato@brqueiroz.com.br" className="text-gray-400 text-sm">
                                    contato@brqueiroz.com.br
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <MapPin className="h-4 w-4 text-blue-400" />
                                <span className="text-gray-400 text-sm">Ribeirão Preto - SP</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {t("footer.copyright")}
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="https://www.linkedin.com/company/brqueiroz" target="_blank" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/br_queiroz/" target="_blank" className="text-gray-400 hover:text-white">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}