'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { isPhantomAvailable, connectPhantomWallet, onAccountChanged, onConnectionChanged } from '../../utils/phantomWallet';
import { useState, useEffect } from 'react';

export default function Navbar({ locale, currentPath }: { locale: string, currentPath: string }) {
  const t = useTranslations('HomePage');
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    if (isPhantomAvailable()) {
      connectPhantomWallet(true).then((address) => {
        if (address) {
          setWalletAddress(address);
        }
      });

      onConnectionChanged((isConnected) => {
        if (!isConnected) {
          setWalletAddress(null);
        }
      });

      onAccountChanged((publicKey) => {
        setWalletAddress(publicKey);
      });
    }
  }, []);

  const handleLoginClick = async () => {
    const walletAddress = await connectPhantomWallet();
    if (walletAddress) {
      console.log("Connected with Public Key:", walletAddress);
      setWalletAddress(walletAddress);
    } else {
      alert("Phantom wallet is not installed.");
    }
  };

  return (
    <nav className="bg-blue-500 flex justify-between items-center p-4">
      {/* Logo e información */}
      <a href={`/${locale}`} className="flex items-center">
        <Image 
          src="/pollo-logo-Transparent.webp" 
          alt="Pollo.lol Logo" 
          width={70} 
          height={70} 
        />
        <div className="ml-4">
          <h1 className="text-white text-3xl font-bold">Pollo.lol</h1>
          <p className="text-white text-sm">{t('subtitle')}</p>
        </div>
      </a>

      {/* Idioma y redes sociales */}
      <div className="flex space-x-6 items-center">
        {/* Selector de idioma */}
        <div className="flex space-x-2">
          <a href={`/en${currentPath}`} className="text-white hover:underline">EN</a>
          <a href={`/es${currentPath}`} className="text-white hover:underline">ES</a>
        </div>

        {/* Login Button */}
        {walletAddress ? (
          <p className="text-white">Connected Wallet: {walletAddress}</p>
        ) : (
          <button onClick={handleLoginClick} className="text-white hover:underline bg-blue-700 px-4 py-2 rounded" title="Connect with Phantom Wallet">
            Login
          </button>
        )}

        {/* Iconos de redes sociales */}
        <div className="hidden md:flex space-x-4">
          <a href="https://x.com/pollodotlol" target="_blank">
            <Image 
              src="/x-logo.webp" 
              alt={t('social_icons.twitter')} 
              width={30} 
              height={30} 
            />
          </a>
          <a href="https://t.me/pollololTG" target="_blank">
            <Image 
              src="/telegram-logo.webp" 
              alt={t('social_icons.telegram')} 
              width={30} 
              height={30} 
            />
          </a>
          <a href="https://discord.gg/QcUBqfq7" target="_blank">
            <Image 
              src="/discord-logo.webp" 
              alt={t('social_icons.discord')} 
              width={30} 
              height={30} 
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
