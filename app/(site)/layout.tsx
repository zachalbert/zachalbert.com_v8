import "../globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";
import cx from "classnames";
import { getWritings } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Product Design Portfolio | Zac Halbert",
  description: "The Product Design Portfolio of Zac Halbert",
  metadataBase: new URL("https://www.zachalbert.com"),
};

// Remove caching for all fetch requests in this route
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const writings = await getWritings();
  const currentYear = new Date().getFullYear().toString();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <div className="flex flex-row grow relative">
            <div className="w-full flex flex-col">
              <Header writings={writings.length} />

              <main className="grow">{children}</main>
              <footer
                className={cx(
                  "text-gray-600",
                  "bg-gray-100",
                  "border-t",
                  "dark:text-gray-400",
                  "dark:bg-gray-900",
                  "py-16"
                )}
              >
                <div className="container flex justify-center">
                  <Link
                    href="/"
                    className="px-1 hover:text-gray-800 dark:hover:text-gray-200 hover:underline"
                  >
                    Zac Halbert
                  </Link>
                  <span className="mx-4 opacity-40">¯\_(ツ)_/¯</span>
                  &copy; {currentYear}
                </div>
              </footer>
            </div>
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
