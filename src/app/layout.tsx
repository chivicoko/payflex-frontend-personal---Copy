import { ReactNode } from 'react';
import './globals.css';
import ScrollToTopButton from '@/components/button/ScrollToTopButton';
import { Maven_Pro, Signika_Negative, Ubuntu, Sora, Inter } from 'next/font/google';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], weight: ['400', '900'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sora' });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '700'], variable: '--font-ubuntu' });
const mavenPro = Maven_Pro({ subsets: ['latin'], weight: ['400', '900'], variable: '--font-maven-pro' });
const signikaNegative = Signika_Negative({ subsets: ['latin'], weight: ['300', '700'], variable: '--font-signika-negative' });

export const metadata = {
  title: "Payflex | Payflex Banking App",
  description: "Payflex is a modern Banking platform for everyone.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${mavenPro.variable} ${signikaNegative.variable} ${ubuntu.variable} ${sora.variable} ${inter.variable}`}>
      <body className='relative h-full min-h-fit flex'>
        <div className="w-full h-fit min-h-screen">
          <ReactQueryProvider>
            {children}
            <Toaster position="top-center" reverseOrder={false} />
            <ScrollToTopButton/>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
