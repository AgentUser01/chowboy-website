import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { OrganizationSchema, WebSiteSchema, SoftwareApplicationSchema } from "@/components/seo/StructuredData";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import SocialProof from "@/components/ui/SocialProof";
import ExitIntentModal from "@/components/ui/ExitIntentModal";
import FloatingCTA from "@/components/ui/FloatingCTA";

const inter = Inter({ subsets: ["latin"] });

// Google Analytics Measurement ID
// TODO: Replace with your actual GA4 Measurement ID from https://analytics.google.com
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-0V8VZ6XXYJ';

export const metadata: Metadata = {
  metadataBase: new URL('https://chowboy.io'),
  title: {
    default: 'Chowboy | Save Recipes from Anywhere. Cook Smarter.',
    template: '%s | Chowboy'
  },
  description: 'Save recipes from Instagram, TikTok, websites, or photos of cookbooks. AI-powered meal planning, grocery lists, nutrition analysis, and step-by-step cooking instructions. Free recipe manager app.',
  keywords: [
    'recipe manager app',
    'recipe saver app',
    'recipe organizer',
    'save recipes from Instagram',
    'save recipes from TikTok',
    'import recipes from social media',
    'cookbook scanner app',
    'AI recipe manager',
    'AI chef assistant',
    'AI cooking assistant',
    'meal planning app',
    'weekly meal planner',
    'grocery list app',
    'grocery list from recipes',
    'nutrition analysis app',
    'nutrition tracker for recipes',
    'step by step cooking app',
    'cooking instructions app',
    'best recipe app 2026',
    'recipe app for iPhone',
    'cooking app',
    'meal prep app',
  ],
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
    title: 'Chowboy | Save Recipes from Anywhere. Cook Smarter.',
    description: 'Save recipes from Instagram, TikTok, websites, or photos of cookbooks. AI-powered meal planning, grocery lists, nutrition analysis, and step-by-step cooking instructions.',
    images: [
      {
        url: '/images/all-recipes-one-place.png',
        width: 1200,
        height: 630,
        alt: 'Chowboy – All your recipes in one place',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chowboy | Save Recipes from Anywhere. Cook Smarter.',
    description: 'Save recipes from Instagram, TikTok, websites, or photos of cookbooks. AI-powered meal planning, grocery lists, and step-by-step cooking instructions.',
    images: ['/images/all-recipes-one-place.png'],
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
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* iOS App Banner */}
        <meta name="apple-itunes-app" content="app-id=6741332753" />
        
        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#8AA88B" />
        
        <OrganizationSchema />
        <WebSiteSchema />
        <SoftwareApplicationSchema />
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <SocialProof />
        <ExitIntentModal />
        <FloatingCTA />
      </body>
    </html>
  );
}
