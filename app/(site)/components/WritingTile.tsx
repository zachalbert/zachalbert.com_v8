import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import { PortableText } from "@portabletext/react";
import ArrowLink from "./ArrowLink";

type WritingTileProps = {
  writing: any;
  size?: "sm" | "md" | "lg";
};

function replaceLastSpaceWithNbsp(text: string): string {
  const lastSpaceIndex = text.lastIndexOf(" ");
  if (lastSpaceIndex === -1) return text;
  return (
    text.substring(0, lastSpaceIndex) +
    "\u00A0" +
    text.substring(lastSpaceIndex + 1)
  );
}

const components = {
  block: ({ children }: any) => {
    const processedChildren = children.map((child: any, index: number) => {
      // If it's the last child and a string, replace the last space
      if (typeof child === "string" && index === children.length - 1) {
        return replaceLastSpaceWithNbsp(child);
      }
      return child;
    });

    console.log(processedChildren);
    return <>{processedChildren}</>;
  },
};

const WritingTile: React.FC<WritingTileProps> = ({ writing, size = "md" }) => {
  return (
    <Link
      href={`/writing/${writing.slug}`}
      className={cx(
        "flex",
        "block-link",
        size === "lg" ? "flex-col lg:flex-row" : "flex-col"
      )}
    >
      {writing.image && (
        <Image
          src={writing.image}
          alt={writing.imageAlt}
          width={750}
          height={300}
          className={cx("object-cover", "m-0", size === "lg" && "lg:w-1/2")}
        />
      )}
      <div
        className={cx(
          "flex",
          "flex-col",
          size === "sm" ? ["py-3", "px-5"] : ["p-5"],
          size === "lg" && ["lg:justify-center", "lg:pl-8"]
        )}
      >
        {size !== "sm" ? (
          <h3 className="mt-0 mb-2">
            <PortableText value={writing.title} components={components} />
          </h3>
        ) : (
          <h4 className="mt-0 mb-2">
            <PortableText value={writing.title} components={components} />
          </h4>
        )}
        {writing.excerpt && size !== "sm" && (
          <p
            className={cx(
              size !== "lg"
                ? "line-clamp-4"
                : ["line-clamp-4", "lg:line-clamp-none"],
              "mb-0"
            )}
          >
            {writing.excerpt}
          </p>
        )}
        {size === "lg" && (
          <ArrowLink
            className="my-2"
            text="Continue reading"
            url={`/writing/${writing.slug}`}
          />
        )}
      </div>
    </Link>
  );
};

export default WritingTile;
