import { ArrowRight } from "@carbon/icons-react";
import Link from "next/link";
import cx from "classnames";

type ProjectNavProps = {
  url: string;
  title: string;
};

const ProjectNav: React.FC<ProjectNavProps> = ({ url, title }) => {
  return (
    <Link href={url} className="group">
      <section
        className={cx(
          "py-24",
          "group-hover:text-gray-900",
          "dark:group-hover:text-gray-100",
          "group-hover:bg-indigo-400/10",
          "group-active:bg-indigo-400/30",
          "dark:group-hover:bg-indigo-400/5",
          "dark:group-active:bg-indigo-400/20"
        )}
      >
        <div className="flex justify-center gap-8 items-center">
          <h2 className="m-0">
            <span className="mr-4 opacity-60 font-normal">Next Project:</span>
            {title}
          </h2>
          <ArrowRight
            size={32}
            className="group-hover:translate-x-3 duration-500"
          />
        </div>
      </section>
    </Link>
  );
};

export default ProjectNav;
