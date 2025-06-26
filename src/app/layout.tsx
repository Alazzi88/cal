import './globals.css';
import Head from 'next/head';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4a90e2" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="description" content="حاسبة شهر وسنة ميلادك بسرعة وسهولة" />
      </Head>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
