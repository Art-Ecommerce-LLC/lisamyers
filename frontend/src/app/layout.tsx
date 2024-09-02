import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yoga Therapy',
  description: 'Find your inner peace with yoga therapy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        <nav>
          <Navbar />
        </nav>
        <main className="flex-grow flex items-center justify-center bg-white">
          {children}
        </main>
        <footer className="bg-white">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
