import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Product Design Portfolio | Zac Halbert",
  description: "The Product Design Portfolio of Zac Halbert",
};

export default function About() {
  return (
    <article>
      <section className="container">
        <div className="max-w-prose mx-auto">
          <h1>👋</h1>
          <p>
            I&apos;m Zac, and thanks for visiting. Currently, I am the{" "}
            <strong>Head of Design</strong> at{" "}
            <Link
              href="https://www.moment.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moment.dev
            </Link>
            , where I&apos;m part of a team designing tools for infrastructure
            engineers.{" "}
            <Link
              href="https://www.linkedin.com/in/zachalbert/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>{" "}
            is the best way to contact me if you want to reach&nbsp;out.
          </p>
          <p>
            I&apos;ve been doing design in some form or another since I was a
            kid. I started building websites on GeoCities in the late 90s, and
            got completely hooked by the power and creativity of the early web.
            Ever since then, I&apos;ve spent countless hours learning design and
            coding to make useful and beautiful things that live on
            the&nbsp;Internet.
          </p>
          <p>
            In my career, I excel in the early exploration phases of a design
            project. I&apos;ve gravitated towards the chaotic energy of
            startups, even founding and selling a company of my own. My
            colleagues and teams usually describe me as friendly, easy to work
            with, and knowledgeable. I prefer to believe they&apos;re telling me
            the&nbsp;truth.
          </p>
          <p>
            I have over 6 years experience managing design teams, and have
            mentored over 500 designers throughout my career (currently,
            I&apos;m a{" "}
            <Link
              href="https://adplist.org/mentors/zac-halbert"
              target="_blank"
              rel="noopener noreferrer"
            >
              top 1% mentor on ADPList
            </Link>
            ). While I have worked on dozens of interesting projects, I am most
            proud of my work as a manager and mentor unlocking the talents of
            other&nbsp;designers.
          </p>
          <p>
            When I&apos;m not at work, I&apos;m usually hanging out with my son
            (currently we are doing a lot of Legos and playing through Tears of
            the Kingdom), watching shows with my amazing girlfriend and our two
            cats, or soaking up all the indoor and outdoor activities that
            Portland, Oregon has to&nbsp;offer.
          </p>
        </div>
      </section>
    </article>
  );
}
