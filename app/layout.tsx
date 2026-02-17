import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gloriouspublicschool.edu.in'),
  title: {
    default: "Glorious Public School | Best Residential & Day Boarding School in Hazaribagh",
    template: "%s | Glorious Public School"
  },
  description: "Glorious Public School, Maheshra is a premier residential and day boarding school in DARU block, Hazaribagh. Established in 1999, offering quality education for Grades 1-10.",
  keywords: ["Glorious Public School", "Residential School Hazaribagh", "best school in Hazaribagh", "English medium school Hazaribagh", "Maheshra school", "Hazaribagh school admissions", "DARU block school"],
  authors: [{ name: "Glorious Public School" }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gloriouspublicschool.edu.in',
    siteName: 'Glorious Public School',
    title: 'Glorious Public School | Best Residential & Day Boarding School in Hazaribagh',
    description: 'Premier residential and day boarding school in Maheshra, Hazaribagh. Established 1999. Admissions Open for 2026-27.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Glorious Public School Hazaribagh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glorious Public School | Best School in Hazaribagh',
    description: 'Premier residential and day boarding school in Maheshra, Hazaribagh.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'School',
      '@id': 'https://gloriouspublicschool.edu.in/#school',
      name: 'Glorious Public School',
      alternateName: 'Glorious Public School Maheshra',
      url: 'https://gloriouspublicschool.edu.in',
      logo: 'https://gloriouspublicschool.edu.in/images/logo.png',
      description: 'Glorious Public School is a residential and day boarding school in Maheshra, Hazaribagh, Jharkhand established in 1999.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Maheshra, DARU Block',
        addressLocality: 'Hazaribagh',
        addressRegion: 'Jharkhand',
        postalCode: '825301',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.0084, // Approximate for DARU block area
        longitude: 85.5009,
      },
      telephone: '+91-XXXXXXXXXX',
      email: 'info@gloriouspublicschool.edu.in',
      priceRange: '₹₹',
    },
    {
      '@type': 'Organization',
      '@id': 'https://gloriouspublicschool.edu.in/#organization',
      name: 'Glorious Public School',
      url: 'https://gloriouspublicschool.edu.in',
      logo: 'https://gloriouspublicschool.edu.in/images/logo.png',
      sameAs: [
        'https://www.facebook.com/gloriouspublicschool',
        'https://www.instagram.com/gloriouspublicschool',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://gloriouspublicschool.edu.in/#localbusiness',
      name: 'Glorious Public School',
      image: 'https://gloriouspublicschool.edu.in/images/school-building.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Maheshra, DARU Block',
        addressLocality: 'Hazaribagh',
        addressRegion: 'Jharkhand',
        postalCode: '825301',
        addressCountry: 'IN',
      },
      telephone: '+91-XXXXXXXXXX',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '14:00',
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style dangerouslySetInnerHTML={{
          __html: `
          body { top: 0 !important; position: static !important; margin-top: 0 !important; }
          html { top: 0 !important; }
          .goog-te-banner-frame.skiptranslate,
          .goog-te-banner-frame,
          .goog-te-banner,
          #goog-gt-tt,
          .goog-te-balloon-frame {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
          .skiptranslate iframe {
            display: none !important;
          }
        `}} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased`} suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919876543210?text=Hello,%20I%20want%20to%20know%20about%20admissions"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        {/* Mobile Call Button */}
        {/* Mobile Call Button */}
        <a
          href="tel:+919876543210"
          className="fixed bottom-24 right-6 z-50 md:hidden bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Call Now"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
