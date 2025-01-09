// src/app/[locale]/layout.tsx

import './[locale]/globals.css';

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  console.log('external layout locale', locale);
  
  return (
    <html lang={locale || 'en'} className="h-full">
          <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
