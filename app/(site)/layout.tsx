import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import { Providers } from "./providers";
import ThemeToggle from "./components/ThemeToggle";
import Logo from "./components/Logo";
import cx from "classnames";
import { LogoLinkedin } from "@carbon/icons-react";

// Remove caching for all fetch requests in this route
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Zac Halbert | Product Design Portfolio",
  description: "The Product Design Portfolio of Zac Halbert",
};

const navClasses = [
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
      <body className="min-h-screen flex flex-col">
        <Providers>
          <div className="flex flex-col grow">
            <header className="container flex items-center justify-between py-12">
              <Logo />

              <div className="flex items-center gap-2">
                {/* {pages.map((page) => (
                  <Link
                    key={page._id}
                    href={`/${page.slug}`}
                    className={cx(navClasses, "px-4", "py-2")}
                  >
                    {page.title}
                  </Link>
                ))} */}
                <Link href="/about" className={cx(navClasses, "px-4", "py-2")}>
                  About
                </Link>
                <Link href="/resume" className={cx(navClasses, "px-4", "py-2")}>
                  Resume
                </Link>
                <Link
                  href="https://www.linkedin.com/in/zachalbert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx(navClasses, "p-3")}
                >
                  <LogoLinkedin />
                </Link>
                <ThemeToggle className={cx(navClasses, "p-3")} />
              </div>
            </header>
            <main className="grow">{children}</main>
            <footer className="container flex justify-center text-gray-500 py-12">
              &copy; {currentYear}{" "}
              <Link
                href="/"
                className="px-1 hover:text-gray-800 dark:hover:text-gray-200 hover:underline"
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
