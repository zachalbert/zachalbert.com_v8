import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import { Providers } from "./providers";
import ThemeToggle from "./components/theme-toggle";
import Logo from "./components/Logo";
import cx from "classnames";

// Remove caching for all fetch requests in this route
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Zac Halbert | Product Design Portfolio",
  description: "The Product Design Portfolio of Zac Halbert",
};

const navClasses = [
  "p-2",
  "rounded-md",
  "text-gray-600",
  "dark:text-gray-400",
  "hover:bg-black/5",
  "hover:text-gray-800",
  "active:bg-black/10",
  "active:text-black",
  "dark:hover:bg-white/5",
  "dark:hover:text-gray-200",
  "dark:active:bg-white/10",
  "dark:active:text-white",
];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  const currentYear = new Date().getFullYear().toString();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="py-12">
        <Providers>
          <div className="container">
            <header className="flex items-center justify-between">
              <Logo />

              <div className="flex items-center gap-2">
                {pages.map((page) => (
                  <Link
                    key={page._id}
                    href={`/${page.slug}`}
                    className={cx(navClasses)}
                  >
                    {page.title}
                  </Link>
                ))}
                <ThemeToggle className={navClasses} />
              </div>
            </header>
          </div>
          <main className="py-20">{children}</main>
          <div className="container">
            <footer className="flex justify-center text-gray-500">
              &copy; {currentYear}{" "}
              <Link
                href="/"
                className="px-1 hover:text-gray-800 hover:underline"
              >
                Zac Halbert
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
