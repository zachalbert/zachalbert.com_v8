import "../globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";
import cx from "classnames";
import { getWritings } from "@/sanity/sanity-utils";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Product Design Portfolio | Zac Halbert",
  description: "The Product Design Portfolio of Zac Halbert",
  metadataBase: new URL("https://www.zachalbert.com"),
};

// Remove caching for all fetch requests in this route
export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const writings = await getWritings();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <div className="flex flex-row grow relative">
            <div className="w-full flex flex-col">
              <Header writings={writings.length} />

              <main className="grow">{children}</main>

              <Footer />
            </div>
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
