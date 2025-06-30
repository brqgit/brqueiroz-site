

import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";

export default function FeaturedMessage() {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 pb-16 md:pb-24">
            <div className="bg-gradient-to-r from-[#1e6cd3] to-[#3b82f6] rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            {t("about.ready-elevate-technologies")}
                        </h2>
                        <p className="text-white/90 mb-0 md:mb-0 md:pr-8">
                            {t("about.p5")}
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <a
                            href="mailto:contato@brqueiroz.com.br"
                            className="inline-flex items-center bg-white text-[#1e6cd3] hover:bg-gray-100 transition-colors px-6 py-3 rounded-md font-medium"
                        >
                            {t("talk-to-us")}
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}