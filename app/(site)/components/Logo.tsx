import Link from "next/link";
import cx from "classnames";

type LogoProps = {
  animated?: boolean;
  monochrome?: boolean;
};

export default function Logo({
  animated = false,
  monochrome = false,
}: LogoProps) {
  const svgElementClasses = [
    "logo",
    "opacity-40",
    "transition-all",
    "duration-500",
    "ease-in-out",
    "group-hover:opacity-60",
    "group-active:opacity-80",
    "pointer-events-none",
    "absolute",
  ];

  const logoColors = {
    mono: [
      "fill-gray-500 dark:fill-gray-400",
      "fill-gray-500 dark:fill-gray-400",
      "fill-gray-500 dark:fill-gray-400",
      "fill-gray-500 dark:fill-gray-400",
    ],
    chromatic: [
      "fill-emerald-500",
      "fill-cyan-500",
      "fill-blue-500",
      "fill-violet-500",
    ],
  };

  return (
    <Link
      href="/"
      className={cx(
        "p-2",
        "transition-opacity",
        "transition-colors",
        "duration-1000",
        "group",
        "leading-[1]",
        "active:scale-95",
        "relative",
        animated ? "w-40" : "w-24"
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
          className={monochrome ? logoColors.mono[0] : logoColors.chromatic[0]}
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
          animated && [
            "rotate-0",
            "group-hover:rotate-180",
            "group-hover:left-[8px]",
          ]
        )}
      >
        <path
          d="M18 22.9034C18 25.7182 15.7805 28 13.0427 28H4.96323C1.33636 28 -1.06275 24.1271 0.470997 20.7481L8.55044 2.94849C10.7935 -1.99305 18 -0.349372 18 5.10376L18 22.9034Z"
          className={monochrome ? logoColors.mono[1] : logoColors.chromatic[1]}
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
          animated && [
            "rotate-0",
            "group-hover:rotate-90",
            "group-hover:left-[-1px]",
            "group-hover:top-[17px]",
          ]
        )}
      >
        <path
          d="M0 5C0 2.23858 2.23858 0 5 0H23C25.7614 0 28 2.23858 28 5C28 7.76142 25.7614 10 23 10H5C2.23858 10 0 7.76142 0 5Z"
          className={monochrome ? logoColors.mono[2] : logoColors.chromatic[2]}
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
          animated && [
            "rotate-0",
            "group-hover:-rotate-90",
            "group-hover:left-[-1px]",
            "group-hover:top-[17px]",
          ]
        )}
      >
        <path
          d="M0 5C0 2.23858 2.23858 0 5 0H23C25.7614 0 28 2.23858 28 5C28 7.76142 25.7614 10 23 10H5C2.23858 10 0 7.76142 0 5Z"
          className={monochrome ? logoColors.mono[3] : logoColors.chromatic[3]}
        />
      </svg>
      <span
        className={cx(
          "font-bold",
          "text-gray-500",
          "dark:text-gray-400",
          "inline-block",
          "w-0",
          animated && [
            "group-hover:w-24",
            "group-hover:opacity-100",
            "dark:group-active:text-white",
            "group-active:text-black",
          ],
          "transition-all",
          "duration-200",
          "opacity-0",
          "ease-out",
          "delay-100",
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
