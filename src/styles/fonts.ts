import { Inter, Poppins, Roboto } from 'next/font/google';

export const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  style: 'normal',
  variable: '--font-family-inter',
  display: 'swap',
});

export const poppins = Poppins({
  weight: '600',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-family-poppins',
  display: 'swap',
});

export const roboto = Roboto({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-family-roboto',
  display: 'swap',
});