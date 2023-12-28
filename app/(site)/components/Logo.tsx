import Link from "next/link";
import cx from "classnames";

export default function Logo() {
  return (
    <Link
      href="/"
      className={cx(
        "logo",
        "p-2",
        "flex",
        "gap-4",
        "w-24",
        "fill-emerald-500",
        "opacity-40",
        "hover:opacity-60",
        "active:opacity-80",
        "transition-all",
        "duration-500",
        "hover:scale-105"
      )}
      title="Zac Halbert | Product Design Portfolio"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 78 28"
        className="logo group"
      >
        <path
          className="fill-emerald-500"
          d="M0 5.09662C0 2.28183 2.21947 0 4.95732 0H13.0368C16.6636 0 19.0628 3.87294 17.529 7.25191L9.44956 25.0515C7.20654 29.9931 0 28.3494 0 22.8962V5.09662Z"
        />
        <path
          className="fill-cyan-500"
          d="M40 22.9034C40 25.7182 37.7805 28 35.0427 28H26.9632C23.3364 28 20.9372 24.1271 22.471 20.7481L30.5504 2.94849C32.7935 -1.99305 40 -0.349372 40 5.10376V22.9034Z"
        />
        <path
          className="fill-blue-500"
          d="M50 23C50 20.2386 52.2386 18 55 18H73C75.7614 18 78 20.2386 78 23C78 25.7614 75.7614 28 73 28H55C52.2386 28 50 25.7614 50 23Z"
        />
        <path
          className="fill-violet-500"
          d="M50 5C50 2.23858 52.2386 0 55 0H73C75.7614 0 78 2.23858 78 5C78 7.76142 75.7614 10 73 10H55C52.2386 10 50 7.76142 50 5Z"
        />
      </svg>
    </Link>
  );
}
