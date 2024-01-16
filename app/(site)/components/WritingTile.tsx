import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

type WritingTileProps = {
  writing: any;
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
          alt={writing.title}
          width={750}
          height={300}
          className={cx("object-cover", "m-0")}
        />
      )}
      <div className={cx("flex", "flex-col", "py-4", "px-6")}>
        <h3 className="my-2">{writing.title}</h3>
        {writing.excerpt && <p className="line-clamp-4">{writing.excerpt}</p>}
      </div>
    </Link>
  );
};

export default WritingTile;
