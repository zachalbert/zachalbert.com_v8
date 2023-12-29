import "../globals.css";
import Link from "next/link";
import type { Metadata } from "next";
// import { getPages } from "@/sanity/sanity-utils";
import { Providers } from "./providers";
import cx from "classnames";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Product Design Portfolio | Zac Halbert",
  description: "The Product Design Portfolio of Zac Halbert",
};

// Remove caching for all fetch requests in this route
export const revalidate = 0;

// TODO: only works on server components, need to figure out how to move mobile nav to child component
// export const metadata: Metadata = {
//   title: "Zac Halbert | Product Design Portfolio",
//   description: "The Product Design Portfolio of Zac Halbert",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pages = await getPages();
  const currentYear = new Date().getFullYear().toString();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <div className="flex flex-row grow relative">
            {/* Main Content */}
            <div className="w-full flex flex-col">
              <Header />

              <main className="grow">{children}</main>
              <footer className="container flex justify-center text-gray-600 dark:text-gray-400 py-12">
                &copy; {currentYear}{" "}
                <Link
                  href="/"
                  className="px-1 hover:text-gray-800 dark:hover:text-gray-200 hover:underline"
                >
                  Zac Halbert
                </Link>
              </footer>
            </div>

            {/* Mobile Menu */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
