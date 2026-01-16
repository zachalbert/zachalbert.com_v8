import { getWritings } from "@/sanity/sanity-utils";
import cx from "classnames";
import { Pen } from "@carbon/icons-react";
import WritingTile from "../components/WritingTile";
import SectionHeader from "../components/SectionHeader";
import { siteConfig } from "../config";
import { notFound } from "next/navigation";

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
export const revalidate = 10;

export default async function Writings() {
  if (!siteConfig.showWriting) {
    notFound();
  }

  const writings = await getWritings();

  return (
    <article className="container">
      {writings.length > 0 && (
        <section className="mx-auto" id="writing">
          <div className="mt-12 grid gap-12 xl:gap-16">
            {writings.map((writing) => (
              <WritingTile key={writing._id} writing={writing} size="lg" />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
