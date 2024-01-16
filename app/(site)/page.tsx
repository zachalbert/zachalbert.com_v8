import { getWritings } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import SectionHeader from "./components/SectionHeader";
import { Pen, TouchInteraction } from "@carbon/icons-react";
import ProjectTile from "./components/ProjectTile";
import { useEffect } from "react";
import WritingTile from "./components/WritingTile";

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

// Remove caching for all fetch requests in this route
export const revalidate = 0;

export default async function Home() {
  const writings = await getWritings();

  return (
    <article className="container">
      <section className="max-w-prose mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 md:-ml-24">
          <Image
            src="/zac-halbert-profile-pic.webp"
            alt="The profile photo of Zac Halbert"
            width="700"
            height="700"
            priority={true}
            className={cx("rounded-full", "h-20", "w-20", "m-0")}
          />
          <h1 className="text-center md:text-left text-4xl md:text-5xl">
            Hi, I&apos;m Zac&nbsp;Halbert.
          </h1>
        </div>

        <p>
          I am currently the <strong>Head of Design</strong> at{" "}
          <Link
            href="https://www.moment.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moment.dev
          </Link>
          . I&apos;m also a product design leader, mentor, frontend developer,
          and entrepreneur with nearly two decades of experience, 8 in design
          leadership and management. I also volunteer as a design mentor:{" "}
          <Link
            href="https://adplist.org/mentors/zac-halbert"
            target="_blank"
            rel="noopener noreferrer"
          >
            book time with me&nbsp;on&nbsp;ADPList
          </Link>
          .
        </p>
      </section>

      <section className="border-t max-w-prose mx-auto" id="portfolio">
        <SectionHeader
          icon={TouchInteraction}
          overline="Select Projects"
          headline="Product Design Portfolio"
        />

        <div className="mt-12 grid gap-12">
          <ProjectTile
            title="Moment.dev"
            description="Founding designer for a 0 to 1 product that allows engineers to centralize documentation, sensitive data, and critical actions."
            href="/projects/moment-app"
            imgPath="/portfolio/moment-app/overview-poster.webp"
            priority={true}
            width={1440}
            height={902}
          />
          <ProjectTile
            title="Moment.dev Branding"
            description="I designed and coded the branding and marketing website for Moment."
            href="/projects/moment-brand"
            imgPath="/portfolio/moment-brand/overview-poster.webp"
            width={2855}
            height={1910}
          />
          <ProjectTile
            title="Metromile"
            description="Founding designer for the Enterprise arm that made insurtech software for multinational insurance companies."
            href="/projects/metromile"
            imgPath="/portfolio/metromile/overview.webp"
            width={4032}
            height={3024}
          />
          <ProjectTile
            title="Samahope"
            description="Head of Design for a non-profit startup that crowdfunded for doctors working in rural and low-income areas providing life-saving care for women and children."
            href="/projects/samahope"
            imgPath="/portfolio/samahope/overview.webp"
            width={2312}
            height={2278}
          />
        </div>
      </section>

      {writings.length > 0 && (
        <section className="border-t max-w-prose mx-auto" id="writing">
          <SectionHeader icon={Pen} headline="Writing" />

          <div className="mt-12 grid gap-12">
            {writings.map((writing) => (
              <WritingTile key={writing._id} writing={writing} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
