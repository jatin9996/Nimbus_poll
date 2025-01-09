import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SocialMediaBar() {
  const t = useTranslations('HomePage');

  return (
    <div className="fixed bottom-0 w-full bg-blue-500 flex justify-around py-2 z-50 lg:hidden">
      <a href="https://x.com/pollodotlol" target="_blank" className="text-white">
        <Image 
          src="/x-logo.webp" 
          alt={t('social_icons.twitter')} 
          width={30} 
          height={30} 
        />
      </a>
      <a href="https://discord.gg/QcUBqfq7" target="_blank" className="text-white">
        <Image 
          src="/discord-logo.webp" 
          alt={t('social_icons.discord')} 
          width={30} 
          height={30} 
        />
      </a>
      <a href="https://t.me/pollololTG" target="_blank" className="text-white">
        <Image 
          src="/telegram-logo.webp" 
          alt={t('social_icons.telegram')} 
          width={30} 
          height={30} 
        />
      </a>
    </div>
  );
}
