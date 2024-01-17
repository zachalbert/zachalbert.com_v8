import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import { PortableText } from "@portabletext/react";

type WritingTileProps = {
  writing: any;
};

const components = {
  block: ({ children }: any) => <>{children}</>,
};

const WritingTile: React.FC<WritingTileProps> = ({ writing }) => {
  return (
    <Link
      href={`/writing/${writing.slug}`}
      className={cx("flex", "flex-col", "block-link")}
    >
      {writing.image && (
        <Image
          src={writing.image}
          alt={writing.imageAlt}
          width={750}
          height={300}
          className={cx("object-cover", "m-0")}
        />
      )}
      <div className={cx("flex", "flex-col", "py-4", "px-6")}>
        <h3 className="my-2">
          <PortableText value={writing.title} components={components} />
        </h3>
        {writing.excerpt && <p className="line-clamp-4">{writing.excerpt}</p>}
      </div>
    </Link>
  );
};

export default WritingTile;
