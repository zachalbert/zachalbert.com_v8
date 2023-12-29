import Link from "next/link";
import cx from "classnames";

export default function Logo() {
  const svgElementClasses = [
    "logo",
    "absolute",
    "opacity-40",
    "transition-all",
    "duration-500",
    "ease-in",
    "group-hover:opacity-60",
    "group-active:opacity-80",
    "pointer-events-none",
  ];
  return (
    <Link
      href="/"
      className={cx(
        "p-2",
        "relative",
        "transition-all",
        "duration-1000",
        "group",
        "leading-[1]",
        "w-40"
      )}
      aria-label="Logo for the Product Design Portfolio of Zac Halbert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="28"
        viewBox="0 0 18 28"
        className={cx(svgElementClasses, "top-[8px]", "left-[8px]")}
      >
        <path
          d="M0 5.09662C0 2.28183 2.21947 0 4.95732 0H13.0368C16.6636 0 19.0628 3.87294 17.529 7.25191L9.44956 25.0515C7.20654 29.9931 0 28.3494 0 22.8962V5.09662Z"
          className="fill-emerald-500"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="28"
        viewBox="0 0 18 28"
        className={cx(
          svgElementClasses,
          "top-[8px]",
          "left-[30px]",
          "rotate-0",
          "group-hover:rotate-180",
          "group-hover:left-[8px]"
        )}
      >
        <path
          d="M18 22.9034C18 25.7182 15.7805 28 13.0427 28H4.96323C1.33636 28 -1.06275 24.1271 0.470997 20.7481L8.55044 2.94849C10.7935 -1.99305 18 -0.349372 18 5.10376L18 22.9034Z"
          className="fill-cyan-500"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="10"
        viewBox="0 0 28 10"
        className={cx(
          svgElementClasses,
          "top-[8px]",
          "left-[58px]",
          "rotate-0",
          "group-hover:rotate-90",
          "group-hover:left-[-1px]",
          "group-hover:top-[17px]"
        )}
      >
        <path
          d="M0 5C0 2.23858 2.23858 0 5 0H23C25.7614 0 28 2.23858 28 5C28 7.76142 25.7614 10 23 10H5C2.23858 10 0 7.76142 0 5Z"
          className="fill-blue-500"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="10"
        viewBox="0 0 28 10"
        className={cx(
          svgElementClasses,
          "top-[26px]",
          "left-[58px]",
          "rotate-0",
          "group-hover:-rotate-90",
          "group-hover:left-[-1px]",
          "group-hover:top-[17px]"
        )}
      >
        <path
          d="M0 5C0 2.23858 2.23858 0 5 0H23C25.7614 0 28 2.23858 28 5C28 7.76142 25.7614 10 23 10H5C2.23858 10 0 7.76142 0 5Z"
          className="fill-violet-500"
        />
      </svg>
      <span
        className={cx(
          "font-bold",
          "text-gray-500",
          "inline-block",
          "w-0",
          "group-hover:w-24",
          "transition-all",
          "duration-700",
          "opacity-0",
          "group-hover:opacity-100",
          "ease-out",
          "delay-300",
          "ml-8",
          "whitespace-nowrap",
          "overflow-hidden",
          "leading-[28px]"
        )}
      >
        Zac Halbert
      </span>
    </Link>
  );
}
