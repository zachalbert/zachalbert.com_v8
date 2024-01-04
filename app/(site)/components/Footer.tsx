import Link from "next/link";
import cx from "classnames";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear().toString();

  return (
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
      <div className="container flex justify-between items-center">
        <Logo monochrome />
        <span className="flex gap-1">
          <span className="opacity-50">&copy; {currentYear},</span>
          <Link
            href="/"
            className="px-1 hover:text-gray-800 dark:hover:text-gray-300 hover:underline"
          >
            Zac Halbert
          </Link>
        </span>
        {/* <span className="mx-4 opacity-40">¯\_(ツ)_/¯</span> */}
      </div>
    </footer>
  );
}
