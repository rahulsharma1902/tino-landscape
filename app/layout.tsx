import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tino's Landscape, Lighting & Construction | Montgomery, TX",
  description:
    "Professional landscaping, outdoor lighting installation, stone & rock landscaping, patio & walkway construction, and drainage solutions in Montgomery, Texas. Call +1 832-971-3287 for a free quote.",
  keywords:
    "landscaping Montgomery TX, outdoor lighting installation, stone landscaping, patio construction, drainage solutions, Tino's Landscape",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
