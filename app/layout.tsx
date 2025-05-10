import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Tyson Brown",
  description: "My very own portfolio website",
};

// ✅ Add all your jpg / jpeg images here
const preloadImages = [
  "/images/about_1.jpeg",
  "/images/about_2.jpeg",
  "/images/about_3.jpg",
  "/images/about_4.jpg",
  "/images/kaizen_1.jpg",
  "/images/kaizen_2.jpg",
  "/images/kaizen_3.jpg",
  "/images/kaizen_4.jpg",
  "/images/korotu_1.jpg",
  "/images/korotu_2.jpg",
  "/images/korotu_3.jpg",
  "/images/korotu_4.jpg",
  "/images/sn_1.jpg",
  "/images/sn_2.jpg",
  "/images/sn_3.jpg",
  "/images/sn_4.jpg",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {preloadImages.map((src) => (
          <link
            key={src}
            rel="preload"
            as="image"
            href={src}
            type={src.endsWith(".jpeg") ? "image/jpeg" : "image/jpg"}
          />
        ))}
      </head>
      <body
        className={`${josefinSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
