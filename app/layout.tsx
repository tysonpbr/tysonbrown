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

const preloadImages = [
  "/about_1.jpeg",
  "/about_2.jpeg",
  "/about_3.jpg",
  "/about_4.jpg",
  "/kaizen_1.jpg",
  "/kaizen_2.jpg",
  "/kaizen_3.jpg",
  "/kaizen_4.jpg",
  "/korotu_1.jpg",
  "/korotu_2.jpg",
  "/korotu_3.jpg",
  "/korotu_4.jpg",
  "/sn_1.jpg",
  "/sn_2.jpg",
  "/sn_3.jpg",
  "/sn_4.jpg",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tb_logo.png" type="image/png" />
        <link rel="shortcut icon" href="/tb_logo.png" type="image/png" />
        {preloadImages.map((src) => (
          <link
            key={src}
            rel="preload"
            as="image"
            href={src}
            type="image/jpeg"
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
