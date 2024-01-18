import Link from "next/link";
import cx from "classnames";
import { ArrowLeft, ArrowRight } from "@carbon/icons-react";

type ArrowLinkProps = {
  text: string;
  url: string;
  arrowDirection?: "left" | "right";
  className?: string;
};

const ArrowLink: React.FC<ArrowLinkProps> = ({
  text,
  url,
  arrowDirection = "right",
  className,
}) => {
  return (
    <Link
      href={url}
      className={cx(
        "border-0",
        "group",
        "flex",
        "items-center",
        "gap-2",
        className
      )}
    >
      {arrowDirection === "left" && (
        <ArrowLeft
          className={cx(
            "group-hover:fill-gray-700",
            "dark:group-hover:fill-gray-400",
            "group-hover:-translate-x-1",
            "transition-transform",
            "duration-500"
          )}
        />
      )}
      <span
        className={cx(
          "border-transparent",
          "border-b-2",
          "group-hover:border-black/60",
          "dark:group-hover:border-white/60",
          "duration-500",
          "text-gray-700",
          "dark:text-gray-400"
        )}
      >
        {text}
      </span>
      {arrowDirection === "right" && (
        <ArrowRight
          className={cx(
            "group-hover:fill-gray-700",
            "dark:group-hover:fill-gray-400",
            "group-hover:translate-x-1",
            "transition-transform",
            "duration-500"
          )}
        />
      )}
    </Link>
  );
};

export default ArrowLink;
