import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { OrganizationSchema, WebSiteSchema, SoftwareApplicationSchema } from "@/components/seo/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chowboy.io'),
  title: {
    default: 'Chowboy | AI-Powered Recipe Manager & Cooking Companion',
    template: '%s | Chowboy'
  },
  description: 'Import recipes from any website, Instagram, or TikTok. Get AI-powered cooking tips, manage grocery lists, and discover personalized recipe recommendations. Your smartest cooking companion.',
  keywords: ['recipe manager', 'cooking app', 'recipe organizer', 'AI cooking assistant', 'grocery list app', 'meal planning', 'recipe import', 'Instagram recipes', 'TikTok recipes', 'cooking tips', 'wine pairing', 'nutrition analysis'],
  authors: [{ name: 'Chowboy Team' }],
  creator: 'Chowboy',
  publisher: 'Chowboy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chowboy.io',
    siteName: 'Chowboy',
    title: 'Chowboy | AI-Powered Recipe Manager & Cooking Companion',
    description: 'Import recipes from anywhere, get AI-powered cooking tips, and discover personalized recipe recommendations. Your smartest cooking companion.',
    images: [
      {
        url: '/chowboy-logo.png',
        width: 1200,
        height: 630,
        alt: 'Chowboy App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chowboy | AI-Powered Recipe Manager & Cooking Companion',
    description: 'Import recipes from anywhere, get AI-powered cooking tips, and discover personalized recipe recommendations.',
    images: ['/chowboy-logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://chowboy.io',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <SoftwareApplicationSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
