import Link from "next/link";

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
            . If you prefer, you can also just{" "}
            <Link href="/resume-zac-halbert-aug2022.pdf" target="_blank">
              download a copy of my resume&nbsp;(PDF)
            </Link>
            .
          </p>
        </div>
      </section>
    </article>
  );
}
