import { useTranslation } from 'next-i18next';

export default function PrivacyPolicy() {
    const { t } = useTranslation('privacy');

    return (
        <div className="min-h-screen bg-[#0a1525]">
            <div className="container mx-auto px-4 py-16">
                <article className="prose prose-invert max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-8">
                        {t('privacy.title')}
                    </h1>

                    <div className="text-gray-300 space-y-8">
                        <p>{t('privacy.intro')}</p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                                {t('privacy.collection.title')}
                            </h2>
                            <p>{t('privacy.collection.text')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                                {t('privacy.legalBasis.title')}
                            </h2>
                            <p>{t('privacy.legalBasis.intro')}</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                {(t('privacy.legalBasis.items', { returnObjects: true }) as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                                {t('privacy.cookies.title')}
                            </h2>
                            <p>{t('privacy.cookies.text')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                                {t('privacy.sharing.title')}
                            </h2>
                            <p>{t('privacy.sharing.text')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                                {t('privacy.security.title')}
                            </h2>
                            <p>{t('privacy.security.text')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                                {t('privacy.rights.title')}
                            </h2>
                            <p>{t('privacy.rights.intro')}</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                {(t('privacy.rights.items', { returnObjects: true }) as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                                {t('privacy.changes.title')}
                            </h2>
                            <p>{t('privacy.changes.text')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                                {t('privacy.contact.title')}
                            </h2>
                            <p>{t('privacy.contact.text')}</p>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    );
}