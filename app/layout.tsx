import './globals.css';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export const metadata = {
  title: {
    default: 'chanceludwick.dev',
    template: '%s | chanceludwick.dev',
  },
  description: 'Software engineer at Superior Livestock and student at Devslopes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={[inter.variable, calSans.variable].join(' ')}>
      <head>{/* <Analytics /> */}</head>
      <body className='bg-black'>{children}</body>
    </html>
  );
}
