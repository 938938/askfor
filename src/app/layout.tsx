import type { Metadata } from 'next';
import './globals.css';
import ReduxToolkitProvider from '@/config/ReduxProvider';
import Nav from '@/components/Nav';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'QnA Now',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ReactQueryClientProvider>
        <ReduxToolkitProvider>
          <body className='bg-defaultWisper p-2'>
            <div className='bg-white border-2 border-solid border-defaultMidnightexpress p-2 w-full md:w-1/2 mx-auto mt-12 relative min-h-[90dvh]'>
              <Nav />
              <div>{children}</div>
              <Footer />
            </div>
          </body>
        </ReduxToolkitProvider>
      </ReactQueryClientProvider>
    </html>
  );
}
