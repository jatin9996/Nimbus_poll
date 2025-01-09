import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Navbar from '@/components/whiteListLanding/Navbar';
import Footer from '../../components/whiteListLanding/Footer';
import Script from 'next/script';

import SocialMediaBar from '@/components/whiteListLanding/SocialMediaBar';

import './globals.css';

// amplifyConfig.js
import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json';

Amplify.configure(outputs);

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();

  const currentPath = ''; 
  
  
  console.log('internal layout locale', locale);


  return (
    <html lang={locale || 'es'} className="h-full">
      <head>
        <link rel="icon" href="/pollo-favicon.png" />
        {/* Código de Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2ZHY6Y85VH"
        ></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2ZHY6Y85VH');
          `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} currentPath={currentPath} />
          <main className="flex-grow">{children}</main>
          <Footer locale={locale} />
          <SocialMediaBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
