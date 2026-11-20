import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PHORVA — AI & Web3 Ecosystem",
    template: "%s | PHORVA",
  },
  applicationName: "PHORVA",
  description:
    "PHORVA is an emerging AI and Web3 ecosystem bringing together builders, communities and intelligent products to develop, test and discover useful technology.",
  keywords: [
    "PHORVA",
    "AI ecosystem",
    "Web3",
    "AI agents",
    "technology",
    "builders",
    "PhorvaTrade",
    "PhorvaAgent",
    "Prophixy",
  ],
  openGraph: {
    title: "PHORVA — AI & Web3 Ecosystem",
    description:
      "Build intelligence. Connect innovation. Explore an emerging ecosystem of AI products, builders and communities.",
    type: "website",
    siteName: "PHORVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "PHORVA — AI & Web3 Ecosystem",
    description:
      "Build intelligence. Connect innovation. Explore the PHORVA ecosystem.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
