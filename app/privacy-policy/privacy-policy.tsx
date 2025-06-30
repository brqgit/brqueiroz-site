import { useTranslation } from "react-i18next";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <main className="flex min-h-screen flex-col">
            <div className="bg-gray-100 py-3 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
                    <a href="/home" className="text-gray-600 hover:text-blue-600">
                        {t("pageServices.home")}
                    </a>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-600">{t("privacyPolicy.title")}</span>
                </div>
            </div>

            <section className="bg-[#0a1525] text-white py-16 px-4 md:px-8 lg:px-16 bg-[url('/bg-pattern.svg')] bg-cover bg-center">
                <div className="max-w-7xl mx-auto">
                    <a href="/home" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        {t("pageServices.back-to-home")}
                    </a>
                    <div className="justify-center text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">{t("privacyPolicy.title")}</h1>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto grid gap-12 border-r border-gray-200 pr-8">
                    <div className="prose max-w-none text-gray-700 space-y-8 text-justify">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.title')}</h3>
                            <p className="text-justify">
                                {t('privacyPolicy.intro')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.collection.title')}</h3>
                            <p>{t('privacyPolicy.collection.text')}</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.legalBasis.title')}</h3>
                            <ul className="list-disc pl-6 mt-2">
                                {(t('privacyPolicy.legalBasis.items', { returnObjects: true }) as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.cookies.title')}</h3>
                            <p className="text-justify">
                                {t('privacyPolicy.cookies.text')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.sharing.title')}</h3>
                            <p className="text-justify">
                                {t('privacyPolicy.sharing.text')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.security.title')}</h3>
                            <p className="text-justify">
                                {t('privacyPolicy.security.text')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.rights.title')}</h3>
                            <p className="text-justify">
                                {t('privacyPolicy.rights.intro')}
                            </p>
                            <ul className="list-disc pl-6 mt-2">

                                {(t('privacyPolicy.rights.items', { returnObjects: true }) as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.changes.title')}</h3>
                            <p className="text-justify">
                                {t('privacyPolicy.changes.text')}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{t('privacyPolicy.contact.title')}</h3>
                            <p className="text-justify">
                                {t('privacyPolicy.contact.text')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
