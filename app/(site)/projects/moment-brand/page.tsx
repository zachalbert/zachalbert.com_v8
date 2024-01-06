import {
  ColorPalette,
  Image as ImageIcon,
  Microscope,
  TextFont,
  Wikis,
} from "@carbon/icons-react";
import cx from "classnames";
import Image from "next/image";
import SectionHeader from "../../components/SectionHeader";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";
import { Metadata } from "next";
import ProjectNav from "../../components/ProjectNav";

export const metadata: Metadata = {
  title: "Moment.Dev Brand Design Case Study | Zac Halbert",
  description: "The Product Design Portfolio of Zac Halbert",
};

const imgPath = "/portfolio/moment-brand";

export default function MomentBrand() {
  return (
    <article>
      <section className="container">
        <div className="max-w-prose mx-auto">
          <h1>Moment.dev Branding</h1>
          <h2 className="text-lg opacity-60 mt-2">
            Founding Designer / Head of Design (2021 &ndash; present)
          </h2>
          <p>
            I designed and coded the brand, logo, and marketing website
            for&nbsp;
            <Link
              href="https://www.moment.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moment.dev
            </Link>
            , as well as all print and booth&nbsp;collateral.
          </p>
        </div>
      </section>

      <section className="container py-0">
        <video
          autoPlay
          loop
          controls
          muted
          poster={`${imgPath}/overview-poster.webp`}
        >
          <source src={`${imgPath}/overview.webm`} type="video/webm" />
          <source src={`${imgPath}/overview.mp4`} type="video/mp4" />
          <Image
            src={`${imgPath}/overview-poster.webp`}
            width={2855}
            height={1910}
            alt="The Moment.dev marketing site"
          />
        </video>
      </section>

      <section className="container">
        <div className="max-w-prose mx-auto">
          <SectionHeader icon={Wikis} headline="Website" />
          <p>
            The Moment website was a really fun project. I designed and coded it
            all &mdash; with the exception of some of the more complex
            positioning behavior for the animated section. I collaborated
            closely with the CEO and Head of Product on the&nbsp;copywriting.
          </p>
          <p>
            I hired a contract animator to create the animated illustrations
            using Lottie, which was fast and performant. The tech stack for the
            website was Next.js, Tailwind for styling, and deployed via Vercel
            (just like the very website you&apos;re reading now, in&nbsp;fact).
          </p>
          <p>
            <Image
              src={`${imgPath}/lottie.webp`}
              alt="Lottie animations illustrating the Moment product"
              width={1657}
              height={918}
            />
          </p>
          <p>
            The guided product tours were done with{" "}
            <Link href="https://www.arcade.software/" target="_blank">
              Arcade
            </Link>
            . A big shoutout to the team building that product. It&apos;s
            incredibly delightful, and provided a fantastic way to show our
            product without the complication of recording&nbsp;a&nbsp;video.
          </p>
          <p>
            We launched the website in late 2023 with a very
            positive&nbsp;reception.
          </p>
        </div>
      </section>

      <section className="container border-t">
        <div className="max-w-prose mx-auto">
          <SectionHeader icon={ImageIcon} headline="Logo" />

          <p>
            The name <strong>Moment</strong> is a reference to a physics term (
            <em>the 0th moment</em>) that refers to the amount of momentum
            needed to move something, such as a wheel on an axle. It is a
            metaphor for reducing the friction for a team to start working
            smoothly and quickly&nbsp;together.
          </p>
          <p>
            I eventually settled on imagery that evoked a spinning wheel or
            whirlpool, which added some visual movement to the&nbsp;logo. Any
            similarities to OpenAI (which has become a household name since we
            launched this brand in early 2021) were
            completely&nbsp;unintentional.
          </p>
          <p>
            <Image
              src={`${imgPath}/logo-on-white.svg`}
              alt="Moment Logo on white"
              width={3904}
              height={1184}
              className="bg-white dark:bg-white p-16"
            />
          </p>
          <p>
            <Image
              src={`${imgPath}/logo-on-brand.svg`}
              alt="Moment Logo on brand"
              width={3904}
              height={1184}
              className="bg-indigo-600 dark:bg-indigo-600 p-16"
            />
          </p>
          <p>
            <Image
              src={`${imgPath}/moment-logo-sketches.webp`}
              alt="Sketches of the Moment Logo"
              width={4032}
              height={3024}
            />
          </p>
        </div>
      </section>

      <section className="container border-t">
        <div className="max-w-prose mx-auto">
          <SectionHeader
            icon={TextFont}
            headline="Typography &amp; Iconography"
          />

          <p>
            There were a few major considerations when selecting typography and
            iconography for the Moment brand. This is a brief summary of a long
            process that involved many different font and icon tests, but these
            principles drove my&nbsp;decision-making.
          </p>
          <ol>
            <li>
              <strong>Readability</strong> for prose <em>and</em> monospaced
              code. Moment is a text-dominant app, so readability had to
              come&nbsp;first.
            </li>
            <li>
              <strong>Robust</strong> selection of icons, and special characters
              to enable&nbsp;internationalization.
            </li>
            <li>
              <strong>Cohesive</strong> typography and iconography that feel
              like they fit together without too much&nbsp;tweaking.
            </li>
          </ol>
          <p>
            <Link
              href="https://www.ibm.com/plex/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Plex</strong>
            </Link>
            , by IBM, was a natural choice to meet these requirements. It&apos;s
            a superfamily that contains many weights, serif, sans, and mono that
            are all designed to work together. On top of that, it&apos;s a part
            of the carbon design system which has a{" "}
            <Link
              href="https://carbondesignsystem.com/guidelines/icons/library/"
              target="_blank"
              rel="noopener noreferrer"
            >
              gigantic icon library
            </Link>{" "}
            that works really well with Plex. It&apos;s also open&nbsp;source!
          </p>
          <p>
            <Image
              src={`${imgPath}/moment-type-icons.webp`}
              alt="IBM Plex"
              width={1554}
              height={966}
            />
          </p>
          <p>
            Plex &amp; Carbon Icons were a natural choice that I don&apos;t
            regret even after three years of working with them. Kudos to the IBM
            team for providing such an amazing&nbsp;resource.
          </p>
        </div>
      </section>

      <section className="container border-t">
        <div className="max-w-prose mx-auto">
          <SectionHeader icon={ColorPalette} headline="Color Palette" />

          <p>
            The color palette was a difficult challenge. I needed to choose a
            workable color palette in the early days of the product before we
            had a clear vision for what the product would eventually become.
            Furthermore, it had to be clear enough for developers to work with,
            while not requiring me to be involved in every single decision.
            Robust documentation that wouldn&apos;t fall out of date was not a
            realistic possibility in the early stages of&nbsp;the&nbsp;company.
          </p>
          <p>
            I settled on creating an abstraction layer of stable design tokens
            that developers could learn easily, which mapped to a set of
            primitives I could change as the design system evolved with the
            product. This diagram illustrates the&nbsp;process.
          </p>
          <p>
            When the developer needs to add some UI text, they have a limited
            set of choices. They know it&apos;ll either be{" "}
            <code>text-primary</code>, <code>text-secondary</code>, or{" "}
            <code>text-tertiary</code>. A semantic:primitive mapping layer then
            points that semantic token to a CSS variable, which design has full
            control over. Those primitive CSS variables can be changed at will
            for each theme in the app, and the developer never has to learn
            anything new or refactor any&nbsp;code.
          </p>
          <p>
            <Image
              src={`${imgPath}/color-theme-structure.webp`}
              alt="Color token mapping"
              width={2013}
              height={558}
            />
          </p>
          <p>
            As the designer, it is much easier to control the cohesiveness of
            the colors while ensuring they are hitting accessible contrast
            ratios. Changing hex values in single file is a much simpler and
            less risky thing to ship than needing to change design tokens in
            many files. It&apos;s a system that I am very happy with, and has
            simplified developer &amp; designer&nbsp;collaboration.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-300/20 dark:from-gray-300/5 to-indigo-400/20 dark:to-indigo-400/10">
        <div className="container">
          <div className="max-w-prose mx-auto">
            <SectionHeader icon={Microscope} headline="Reflections" />
            <p>
              The thing I&apos;m most proud of through this work is designing a
              visual system that worked well in code. Developers were able to
              easily understand my intentions when translating mocks into code,
              while I retained full control to evolve the design language over
              time. This is incredibly powerful at an early stage company where
              things are moving rapidly and development speed is&nbsp;critical.
            </p>
          </div>
        </div>
      </section>

      <ProjectNav url="/projects/metromile" title="Metromile" />
    </article>
  );
}
