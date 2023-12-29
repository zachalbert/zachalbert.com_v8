import { Download } from "@carbon/icons-react";
import Link from "next/link";
import cx from "classnames";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Product Design Portfolio | Zac Halbert",
  description: "The Product Design Portfolio of Zac Halbert",
};

export default function Resume() {
  return (
    <article>
      <section className="container">
        <div className="max-w-prose mx-auto">
          <h1>Resume</h1>
          <p>
            The most up-to-date copy of my resume can be found on my{" "}
            <Link
              href="https://www.linkedin.com/in/zachalbert/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            . If you prefer, you can also just download a copy of
            my&nbsp;resume.
          </p>
          <p>
            <Link
              href="/resume-zac-halbert-aug2022.pdf"
              target="_blank"
              className={cx(
                "border-none",
                "flex",
                "items-center",
                "gap-4",
                "p-4",
                "rounded-xl",
                "hover:bg-black/5",
                "active:bg-black/10",
                "dark:hover:bg-white/5",
                "dark:active:bg-white/10"
              )}
            >
              <span className="p-2 rounded-full border">
                <Download />
              </span>
              <span>Zac Halbert - Resume (88KB PDF)</span>
            </Link>
          </p>
        </div>
      </section>
    </article>
  );
}
