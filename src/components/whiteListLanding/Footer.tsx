import { useTranslations } from 'next-intl';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('HomePage');

  return (
    <footer className="bg-blue-500 py-4 px-8 text-white">
      <div className="text-center">
        {/* Enlaces del footer */}
        <div>
          <a href={`/${locale}/terms-conditions`} className="text-white hover:underline">
            {t('footer_links.terms_conditions')}
          </a>
          {" | "}
          <a href={`/${locale}/privacy-policy`} className="text-white hover:underline">
            {t('footer_links.privacy_policy')}
          </a>
          {" | "}
          <a href={`mailto:contact@pollo.lol`} className="text-white hover:underline">
            {t('footer_links.contact')}
          </a>
        </div>
        
        <div className="mt-2">
          {/* Litepaper (No es un enlace) */}
          <span className="text-white">
            {t('footer_links.litepaper')}
          </span>
          {" | "}
          {/* Enlaces de idioma (Abren en nueva pestaña) */}
          <a href={`https://docs.google.com/document/d/18weADozyVgpTnMCLRRehfh8TJHjuOLpywbUpk6jmRsY/pub`} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            {t('footer_links.language_switch.en')}
          </a>
          {" | "}
          <a href={`https://docs.google.com/document/d/19LWSb9AbUXFIiTJPfg_XC2ZMxS1iIe3IMia0-SxfcxY/pub`} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            {t('footer_links.language_switch.es')}
          </a>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://x.com/pollodotlol" target="_blank" className="text-white hover:underline">
            {t('footer_links.social_media.twitter')}
          </a>
          <a href="https://t.me/pollololTG" target="_blank" className="text-white hover:underline">
            {t('footer_links.social_media.telegram')}
          </a>
          <a href="https://discord.gg/QcUBqfq7" target="_blank" className="text-white hover:underline">
            {t('footer_links.social_media.discord')}
          </a>
        </div>
      </div>
    </footer>
  );
}
