import Link from "next/link";
import Image from "next/image";

type ProjectTileProps = {
  href: string;
  title: string;
  description: string;
  imgPath: string;
  width: number;
  height: number;
  priority?: boolean;
};

const ProjectTile: React.FC<ProjectTileProps> = ({
  href,
  title,
  description,
  imgPath,
  width,
  height,
  priority,
}) => {
  return (
    <Link href={href} className="block-link">
      <Image
        src={imgPath}
        alt={description}
        width={width}
        height={height}
        className="m-0"
        priority={priority}
      />
      <div className="py-4 px-5">
        <h3 className="m-0">{title}</h3>
        <p className="m-0">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectTile;
