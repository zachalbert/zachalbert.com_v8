"use client";
import { useState } from "react";
import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
// import { getPages } from "@/sanity/sanity-utils";
import { Providers } from "./providers";
import ThemeToggle from "./components/ThemeToggle";
import Logo from "./components/Logo";
import cx from "classnames";
import { Close, Document, LogoLinkedin, Menu, User } from "@carbon/icons-react";

// Remove caching for all fetch requests in this route
export const revalidate = 0;

const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const pages = await getPages();
  const currentYear = new Date().getFullYear().toString();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <div className="flex flex-row grow relative">
            {/* Main Content */}
            <div className="w-full flex flex-col">
              <header className="container flex items-center justify-between py-12">
                <Logo />

                {/* Desktop Nav */}
                <div className="hidden sm:flex items-center gap-2">
                  {/* {pages.map((page) => (
                  <Link
                    key={page._id}
                    href={`/${page.slug}`}
                    className={cx(navClasses, "px-4", "py-2")}
                  >
                    {page.title}
                  </Link>
                ))} */}
                  <Link
                    href="/about"
                    className={cx(navClasses, "px-4", "py-2")}
                  >
                    About
                  </Link>
                  <Link
                    href="/resume"
                    className={cx(navClasses, "px-4", "py-2")}
                  >
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

                {/* Mobile Nav */}
                <div className="flex sm:hidden items-center gap-2">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cx(navClasses, "p-3")}
                  >
                    <Menu />
                  </button>
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

            {/* Mobile Menu */}
            <div
              className={cx(
                "fixed",
                "flex",
                "w-full",
                "bg-black/75",
                "h-full",
                "transition-opacity",
                "duration-1000",
                isOpen ? "opacity-100 left-0" : "opacity-0 left-[100%]"
              )}
            >
              <div
                className={cx(
                  "w-1/4",
                  "h-full",
                  "group",
                  "py-14",
                  "px-4",
                  "flex",
                  "justify-end",
                  "cursor-pointer",
                  isOpen ? "pointer-events-auto" : "pointer-events-none"
                )}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Close
                  size={24}
                  className={cx(
                    "!fill-white/40",
                    "group-hover:!fill-white/80",
                    "group-active:!fill-white",
                    "transition-all",
                    "duration-700",
                    isOpen ? "translate-x-0" : "translate-x-[100%]"
                  )}
                />
              </div>
              <div
                className={cx(
                  "bg-white",
                  "dark:bg-gray-800",
                  "w-3/4",
                  "h-full",
                  "transition-all",
                  "duration-500",
                  "py-12",
                  "px-6",
                  "relative",
                  isOpen ? "left-[0%]" : "left-[75%]"
                )}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="my-1 text-2xl font-extrabold">
                      Zac Halbert
                    </h3>
                    <h4 className="font-bold opacity-60">
                      Product Design Portfolio
                    </h4>
                  </div>
                  <ThemeToggle className={cx(navClasses, "p-3")} />
                </div>
                <div className="my-6 flex flex-col">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/about"
                    className={cx(navClasses, "p-4", "flex gap-2 items-center")}
                  >
                    <User /> About
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/resume"
                    className={cx(navClasses, "p-4", "flex gap-2 items-center")}
                  >
                    <Document />
                    Resume
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/zachalbert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx(navClasses, "p-4", "flex gap-2 items-center")}
                  >
                    <LogoLinkedin /> LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
