import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

const emphasize = cx(
  "bg-gradient-to-br",
  "from-emerald-500",
  "via-cyan-500",
  "via-blue-500",
  "to-violet-500",
  "bg-clip-text",
  "text-transparent",
  "font-extrabold"
);

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
      <div className="p-6">
        <h3 className="mt-0 mb-2">{title}</h3>
        <p className="m-0">{description}</p>
      </div>
    </Link>
  );
};

export default async function Home() {
  const projects = await getProjects();

  return (
    <article className="container">
      <section className="max-w-prose mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 md:-ml-24">
          <Image
            src="/zac-halbert-profile-pic.jpg"
            alt="The profile photo of Zac Halbert"
            width="700"
            height="700"
            className={cx("rounded-full", "h-20", "w-20", "m-0")}
          />
          <h1 className="text-center md:text-left text-4xl md:text-5xl">
            Hi, I&apos;m Zac&nbsp;Halbert.
          </h1>
        </div>

        <p>
          I&apos;m a product design leader, mentor, frontend developer, and
          entrepreneur with nearly two decades of experience. Currently, I am
          the <strong>Head of Design</strong> at{" "}
          <Link
            href="https://www.moment.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moment.dev
          </Link>
          , where I&apos;m part of a team designing tools for
          infrastructure&nbsp;engineers.
        </p>
      </section>

      <section className="border-t max-w-prose mx-auto">
        <h2>My Work</h2>

        <div className="grid gap-12">
          <ProjectTile
            title="Moment.dev"
            description="Founding designer for a 0 to 1 product that allows engineers to centralize documentation, sensitive data, and critical actions."
            href="/projects/moment-app"
            imgPath="/portfolio/moment-app/overview-poster.png"
            priority={true}
            width={1440}
            height={902}
          />
          <ProjectTile
            title="Moment.dev Branding"
            description="I designed and coded the branding and marketing website for Moment."
            href="/projects/moment-brand"
            imgPath="/portfolio/moment-brand/overview-poster.png"
            priority={true}
            width={2881}
            height={1925}
          />
          <ProjectTile
            title="Metromile"
            description="Founding designer for the Enterprise arm that made insurtech software for multinational insurance companies."
            href="/projects/metromile"
            imgPath="/portfolio/metromile/overview.jpeg"
            width={4032}
            height={3024}
          />
        </div>
      </section>
    </article>
  );
}
{
  /* {projects.map((project) => (
  <Link
    href={`/projects/${project.slug}`}
    key={project._id}
    className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
  >
    {project.image && (
      <Image
        src={project.image}
        alt={project.title}
        width={750}
        height={300}
        className="object-cover rounded-lg border border-gray-500"
      />
    )}
    <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
      {project.title}
    </div>
  </Link>
))} */
}
