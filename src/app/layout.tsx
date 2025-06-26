import './globals.css';


import type { ReactNode } from 'react';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
