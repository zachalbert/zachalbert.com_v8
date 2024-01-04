"use client";
import { useState } from "react";
import cx from "classnames";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import {
  Close,
  Document,
  Home,
  LogoLinkedin,
  Pen,
  TouchInteraction,
  User,
} from "@carbon/icons-react";
import Link from "next/link";

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

const navLinkClasses = ["p-4", "flex", "gap-2", "items-center"];

const MobileMenuIcon = () => {
  const barClasses = cx(
    "w-full",
    "h-0.5",
    "bg-gray-950/40",
    "group-hover:bg-gray-950/60",
    "group-active:bg-gray-950/80",
    "dark:bg-gray-50/40",
    "dark:group-hover:bg-gray-50/60",
    "dark:group-active:bg-gray-50/80",
    "rounded-md",
    "transition-all",
    "duration-700"
  );

  return (
    <div
      className={cx(
        "flex",
        "flex-col",
        "p-px",
        "w-4",
        "h-4",
        "justify-between",
        "items-end"
      )}
    >
      <div className={cx(barClasses, "w-full", "group-hover:w-full")} />
      <div className={cx(barClasses, "w-2/3", "group-hover:w-full")} />
      <div className={cx(barClasses, "w-1/3", "group-hover:w-full")} />
    </div>
  );
};

type HeaderProps = {
  writings?: number;
};

const Header: React.FC<HeaderProps> = ({ writings = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container flex items-center justify-between py-12">
      <Logo animated={true} />

      {/* Desktop Nav */}
      <div className="hidden sm:flex items-center md:gap-2">
        {/* {pages.map((page) => (
                  <Link
                    key={page._id}
                    href={`/${page.slug}`}
                    className={cx(navClasses, "px-4", "py-2")}
                  >
                    {page.title}
                  </Link>
                ))} */}
        <Link href="/#portfolio" className={cx(navClasses, "px-4", "py-2")}>
          Portfolio
        </Link>
        {writings > 0 && (
          <Link href="/#writing" className={cx(navClasses, "px-4", "py-2")}>
            Writing
          </Link>
        )}
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
          aria-label="Visit my LinkedIn"
        >
          <LogoLinkedin />
        </Link>
        <ThemeToggle className={cx(navClasses, "p-3")} />
      </div>

      {/* Mobile Nav Trigger */}
      <div className="flex sm:hidden items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cx(
            navClasses,
            "p-3",
            "group",
            isOpen ? "opacity-0" : "opacity-100"
          )}
          aria-label="Open Mobile Navigation Menu"
        >
          <MobileMenuIcon />
        </button>
      </div>

      <div
        className={cx(
          "fixed",
          "z-50",
          "left-0",
          "top-0",
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
              <h3 className="my-1 text-2xl font-extrabold">Zac Halbert</h3>
              <h4 className="font-bold opacity-60">Product Design Portfolio</h4>
            </div>
            <ThemeToggle className={cx(navClasses, "p-3")} />
          </div>
          <div className="my-6 flex flex-col">
            <Link
              onClick={() => setIsOpen(false)}
              href="/"
              className={cx(navClasses, navLinkClasses)}
            >
              <Home /> Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/#portfolio"
              className={cx(navClasses, navLinkClasses)}
            >
              <TouchInteraction /> Portfolio
            </Link>
            {writings > 0 && (
              <Link
                onClick={() => setIsOpen(false)}
                href="/#writing"
                className={cx(navClasses, navLinkClasses)}
              >
                <Pen /> Writing
              </Link>
            )}
            <Link
              onClick={() => setIsOpen(false)}
              href="/about"
              className={cx(navClasses, navLinkClasses)}
            >
              <User /> About
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/resume"
              className={cx(navClasses, navLinkClasses)}
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
    </header>
  );
};

export default Header;
