import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPage');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-8">
        {/* Título de la página */}
        <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>

        {/* Sección 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section1.title')}</h2>
          <p>{t('sections.section1.content')}</p>
        </section>

        {/* Sección 2 con subsecciones */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section2.title')}</h2>

          {/* Subsección 2.1 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{t('sections.section2.subsections.subsection1.title')}</h3>
            <ul className="list-disc list-inside pl-4">
              <li>{t('sections.section2.subsections.subsection1.list.item1')}</li>
              <li>{t('sections.section2.subsections.subsection1.list.item2')}</li>
            </ul>
          </div>

          {/* Subsección 2.2 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{t('sections.section2.subsections.subsection2.title')}</h3>
            <ul className="list-disc list-inside pl-4">
              <li>{t('sections.section2.subsections.subsection2.list.item1')}</li>
              <li>{t('sections.section2.subsections.subsection2.list.item2')}</li>
              <li>{t('sections.section2.subsections.subsection2.list.item3')}</li>
              <li>{t('sections.section2.subsections.subsection2.list.item4')}</li>
            </ul>
            <p>{t('sections.section2.subsections.subsection2.content')}</p>
          </div>

          {/* Subsección 2.3 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{t('sections.section2.subsections.subsection3.title')}</h3>
            <ul className="list-disc list-inside pl-4">
              <li>{t('sections.section2.subsections.subsection3.list.item1')}</li>
              <li>{t('sections.section2.subsections.subsection3.list.item2')}</li>
              <li>{t('sections.section2.subsections.subsection3.list.item3')}</li>
            </ul>
          </div>
        </section>

        {/* Sección 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section3.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section3.list.item1')}</li>
            <li>{t('sections.section3.list.item2')}</li>
            <li>{t('sections.section3.list.item3')}</li>
            <li>{t('sections.section3.list.item4')}</li>
            <li>{t('sections.section3.list.item5')}</li>
          </ul>
        </section>

        {/* Sección 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section4.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section4.list.item1')}</li>
            <li>{t('sections.section4.list.item2')}</li>
            <li>{t('sections.section4.list.item3')}</li>
          </ul>
        </section>

        {/* Sección 5 a Sección 12 */}
        {[5, 6, 7, 8, 9, 10, 11, 12].map((section) => (
          <section key={section} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{t(`sections.section${section}.title`)}</h2>
            <p>{t(`sections.section${section}.content`)}</p>
          </section>
        ))}

      </main>
    </div>
  );
}
