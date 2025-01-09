import { useTranslations } from 'next-intl';

export default function TermsConditionsPage() {
  const t = useTranslations('TermsPage');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>

        {/* Sección 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section1.title')}</h2>
          <p>{t('sections.section1.content')}</p>
        </section>

        {/* Sección 2 con lista manual */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section2.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section2.list.item1')}</li>
            <li>{t('sections.section2.list.item2')}</li>
            <li>{t('sections.section2.list.item3')}</li>
            <li>{t('sections.section2.list.item4')}</li>
          </ul>
        </section>

        {/* Sección 3 con lista */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section3.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section3.content.item1')}</li>
            <li>{t('sections.section3.content.item2')}</li>
            <li>{t('sections.section3.content.item3')}</li>
          </ul>
        </section>

        {/* Sección 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section4.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section4.content.item1')}</li>
            <li>{t('sections.section4.content.item2')}</li>
            <li>{t('sections.section4.content.item3')}</li>
            <li>{t('sections.section4.content.item4')}</li>
          </ul>
        </section>

        {/* Sección 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section5.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section5.content.item1')}</li>
            <li>{t('sections.section5.content.item2')}</li>
            <li>{t('sections.section5.content.item3')}</li>
            <li>{t('sections.section5.content.item4')}</li>
            <li>{t('sections.section5.content.item5')}</li>
            <li>{t('sections.section5.content.item6')}</li>
            <li>{t('sections.section5.content.item7')}</li>
            <li>{t('sections.section5.content.item8')}</li>
          </ul>
        </section>

        {/* Sección 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section6.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section6.content.item1')}</li>
            <li>{t('sections.section6.content.item2')}</li>
            <li>{t('sections.section6.content.item3')}</li>
            <li>{t('sections.section6.content.item4')}</li>
          </ul>
        </section>

        {/* Sección 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section7.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section7.content.item1')}</li>
            <li>{t('sections.section7.content.item2')}</li>
            <li>{t('sections.section7.content.item3')}</li>
          </ul>
        </section>

        {/* Sección 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section8.title')}</h2>
          <p>{t('sections.section8.content')}</p>
        </section>

        {/* Sección 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section9.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section9.content.item1')}</li>
            <li>{t('sections.section9.content.item2')}</li>
          </ul>
        </section>

        {/* Sección 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section10.title')}</h2>
          <p>{t('sections.section10.content')}</p>
        </section>

        {/* Sección 11 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section11.title')}</h2>
          <p>{t('sections.section11.content')}</p>
        </section>

        {/* Sección 12 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section12.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section12.content.item1')}</li>
            <li>{t('sections.section12.content.item2')}</li>
          </ul>
        </section>

        {/* Sección 13 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section13.title')}</h2>
          <p>{t('sections.section13.content')}</p>
        </section>

        {/* Sección 14 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section14.title')}</h2>
          <p>{t('sections.section14.content')}</p>
        </section>

        {/* Sección 15 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section15.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section15.content.item1')}</li>
            <li>{t('sections.section15.content.item2')}</li>
          </ul>
        </section>

        {/* Sección 16 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section16.title')}</h2>
          <ul className="list-disc list-inside pl-4">
            <li>{t('sections.section16.content.item1')}</li>
            <li>{t('sections.section16.content.item2')}</li>
          </ul>
        </section>

        {/* Sección 17 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section17.title')}</h2>
          <p>{t('sections.section17.content')}</p>
        </section>

        {/* Sección 18 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section18.title')}</h2>
          <p>{t('sections.section18.content')}</p>
        </section>

        {/* Sección 19 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t('sections.section19.title')}</h2>
          <p>{t('sections.section19.content')}</p>
        </section>

      </main>
    </div>
  );
}
