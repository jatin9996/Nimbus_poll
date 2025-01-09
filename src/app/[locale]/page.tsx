import { useTranslations } from 'next-intl';
import Image from 'next/image';

// amplifyConfig.js
import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json';

Amplify.configure(outputs);

export default function HomePage() {
  const t = useTranslations('HomePage'); 
  return (
    <div>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-8 px-8 bg-gray-100">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl mb-4">
            {t('description1')}
          </p>
          <p className="text-lg md:text-xl mb-4">
            {t('description2')}
          </p>
          <a href="https://www.intract.io/quest/66dad5b99085ecd322235ea5" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg md:text-xl">
              {t('button_whitelist')}
            </button>
          </a>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center p-0 lg:p-10">
          <video 
            className="w-full h-auto rounded-lg shadow-md" 
            controls 
            autoPlay 
            loop 
            muted
          >
            <source src="/Pollo-Intro-Video.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </section>

      {/* Second Section - Game Changer */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-8 px-8">
        <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0 p-0 lg:p-10">
          <Image 
            src="/wl-img-2.webp" 
            alt="Pollo.lol" 
            className="w-full h-auto rounded-lg shadow-md"
            width={300}
            height={300}
            unoptimized={true}
          />
        </div>
        <div className="lg:w-1/2 w-full text-left space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-16">
            {t('section2_title')}
          </h2>
          <ul className="list-none list-inside text-lg space-y-12">
            <li><strong className="underline">{t('game_changer_points.point1')}</strong>: {t('game_changer_points.description1')}</li>
            <li><strong className="underline">{t('game_changer_points.point2')}</strong>: {t('game_changer_points.description2')}</li>
            <li><strong className="underline">{t('game_changer_points.point3')}</strong>: {t('game_changer_points.description3')}</li>
            <li><strong className="underline">{t('game_changer_points.point4')}</strong>: {t('game_changer_points.description4')}</li>
            <li><strong className="underline">{t('game_changer_points.point5')}</strong>: {t('game_changer_points.description5')}</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
