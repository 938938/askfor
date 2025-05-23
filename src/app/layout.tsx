import type { Metadata } from 'next';
import './globals.css';
import ReduxToolkitProvider from '@/config/ReduxProvider';

export const metadata: Metadata = {
  title: 'Ask for...',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ReduxToolkitProvider>
        <body>{children}</body>
      </ReduxToolkitProvider>
    </html>
  );
}
