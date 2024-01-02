import {
  ArrowRight,
  Chat,
  Code,
  CropGrowth,
  Explore,
  FingerprintRecognition,
  Idea,
  ManageProtection,
  Microscope,
  Model,
  PaintBrush,
  Product,
  Terminal,
  WarningAlt,
} from "@carbon/icons-react";
import cx from "classnames";
import SkillCard from "../../components/SkillCard";
import Image from "next/image";
import ThemeLink from "../../components/ThemeLink";
import SectionHeader from "../../components/SectionHeader";
import "yet-another-react-lightbox/styles.css";
import Gallery from "../../components/Gallery";
import Link from "next/link";
import { Metadata } from "next";
import ProjectNav from "../../components/ProjectNav";

export const metadata: Metadata = {
  title: "Moment.Dev Product Design Case Study | Zac Halbert",
  description: "The Product Design Portfolio of Zac Halbert",
};

const imgPath = "/portfolio/moment-app";

export default function MomentApp() {
  return (
    <article>
      <section className="container">
        <div className="max-w-prose mx-auto">
          <h1>Moment.dev</h1>
          <h2 className="text-lg opacity-60 mt-2">
            Founding Designer / Head of Design (2021 &ndash; present)
          </h2>
          <p>
            I am the founding designer and first hire at{" "}
            <Link
              href="https://www.moment.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moment.dev
            </Link>
            , a company founded by Microsoft and Lyft alums. We aim to make
            user-friendly software for infrastructure engineers that allows them
            to combine all their critical tasks and documentation in
            one&nbsp;place.
          </p>
        </div>
      </section>

      <div className="container">
        <video
          autoPlay
          loop
          controls
          muted
          poster={`${imgPath}/overview-poster.png`}
        >
          <source src={`${imgPath}/overview.webm`} type="video/webm" />
          <source src={`${imgPath}/overview.mp4`} type="video/mp4" />
          <Image
            src={`${imgPath}/overview-poster.png`}
            width={1440}
            height={902}
            alt="Moment.dev UI screenshot"
          />
        </video>
        <Gallery
          cols="3"
          images={[
            {
              imageUrl: "/portfolio/moment-app/component-lib.png",
              caption:
                "The component library enabled users to select and customize prebuilt&nbsp;components",
            },
            {
              imageUrl: "/portfolio/moment-app/canvas-list-light.png",
              caption:
                "The canvases list provided quick access to all pinned and recent&nbsp;canvases",
            },
            {
              imageUrl: "/portfolio/moment-app/design-system.png",
              caption:
                "We managed our design system components and documentation in&nbsp;storybook",
            },
          ]}
        />
      </div>

      <section className="container">
        <hr />
        <div className="max-w-prose mx-auto">
          <SectionHeader icon={FingerprintRecognition} headline="My Role" />

          <p>
            As the Head of Design for an early-stage company, I am intimately
            involved in every aspect of the development of the product. My
            primary focus is designing the flows, UI, design system, and
            branding using both Figma and code (with CSS, Typescript, and
            React). Additionally, I collaborate closely with the founders and
            engineering team on the overall UX, product vision, strategy, and
            frontend&nbsp;development.
          </p>
          <p>
            This is a handful of the skills I regularly practice in
            this&nbsp;role:
          </p>

          <div className={cx("grid", "gap-4", "mt-8", "lg:grid-cols-2")}>
            <SkillCard icon={Model} title="UX and UI">
              Designing all user flows, app UI, and design&nbsp;system.
            </SkillCard>
            <SkillCard icon={CropGrowth} title="Product Vision &amp; Strategy">
              Collaborating with founders to set overall product&nbsp;vision.
            </SkillCard>
            <SkillCard icon={Chat} title="User Research">
              Conducting user interviews to understand user needs, goals, and
              product&nbsp;usability.
            </SkillCard>
            <SkillCard icon={Product} title="Rapid Prototyping">
              Rapid prototyping in Figma to quickly get feedback from users and
              technical&nbsp;experts.
            </SkillCard>
            <SkillCard icon={PaintBrush} title="Brand Design">
              Led a rebrand and logo design, and helping craft the
              brand&nbsp;voice.
            </SkillCard>
            <SkillCard icon={Code} title="Frontend Development">
              Regularly shipping code to production using CSS, React,
              Typescript, and&nbsp;Tailwind.
            </SkillCard>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-500/5 to-purple-500/20">
        <div className="container">
          <div className="max-w-prose mx-auto">
            <SectionHeader icon={WarningAlt} headline="The Challenge" />
            <p>
              As the founding designer creating something from 0 to 1, I had to
              balance improving product quality with the need to ship quickly,
              all while setting my own benchmarks. The product is very complex
              technically, which means limited developer resources for
              interaction and visual design&nbsp;polish.
            </p>
            <p>
              Designing for infrastructure engineers was also a new challenge
              when I first began. These users are accustomed to having full
              control over their tools, and are most comfortable with command
              line interfaces. Because of the highly technical nature of their
              work, I trained engineering colleagues in user research to ride
              along with me. This added domain expertise helped us get rich data
              from our&nbsp;research.
            </p>

            <hr />

            <SectionHeader icon={Idea} headline="My Approach" className="" />
            <p>
              I follow a loose human-centered design process, maintaining and
              deepening my partnership with engineering throughout my work. This
              partnership is critical to our success in finding customer pain
              points, defining possible solutions, prototype and feature
              validation, and usability&nbsp;testing.
            </p>
            <p>
              Working on a small team means ruthless prioritization. I
              frequently jump into the frontend codebase to alleviate the
              engineering team&apos;s workload and increase design polish. This
              allows me to push the UI quality forward without slowing down our
              shipping&nbsp;velocity.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-0">
        <div className="max-w-prose mx-auto">
          <h1>Key Product Themes</h1>
          <p>
            It can be a challenge to condense years worth of work into a single
            case study. Since Moment is a pre-product market fit company, very
            few projects follow a predetermined path with clear start and end
            points. These are a few major product themes I infuse into the
            product throughout the many projects I work&nbsp;on.
          </p>
          <div className="flex flex-col gap-2">
            <ThemeLink
              href="#enable-exploration"
              icon={Explore}
              theme="Enable Exploration"
            />
            <ThemeLink
              href="#everything-is-hackable"
              icon={Terminal}
              theme="Everything is Hackable"
            />
            <ThemeLink
              href="#secure-by-default"
              icon={ManageProtection}
              theme="Secure By Default"
            />
          </div>
        </div>
      </section>

      <section className="container" id="enable-exploration">
        <div className="max-w-prose mx-auto">
          <SectionHeader
            icon={Explore}
            overline="Theme"
            headline="Enable Exploration"
          />
          <p>
            Infrastructure engineering is a complex and ever-evolving field, so
            we knew our product had to provide tools for users to explore hard
            problems with interesting and creative&nbsp;tooling.
          </p>
        </div>
        <Image
          src={`${imgPath}/rich-text-and-components.png`}
          alt="Mixing rich text with components"
          width="1440"
          height="902"
        />
        <div className="max-w-prose mx-auto">
          <h3>User Needs</h3>
          <p>
            Users needed a way to take existing todo lists, and begin to
            automate away many of the mundane parts. However, traditional linear
            automation doesn&apos;t work in many cases because the possible
            solution paths are too complex. Users often resort to having
            documentation in one system, scripts in another, and dashboards in
            yet another. This results in these things falling out of sync, lost
            documentation, and huge cross-functional
            collaboration&nbsp;challenges.
          </p>
          <h3>Solution</h3>
          <p>
            We solved this by building a notebook style interface that allows
            users to write rich text and drop in pre-made components so they can
            centralize documentation, data from internal systems, and rich
            interactive experiences all in one&nbsp;place.
          </p>
          <p>
            This sandbox environment enables users to explore problems and pull
            in the relevant data or actions from vendors and critical
            internal&nbsp;systems.
          </p>
          <h3>Result</h3>
          <p>
            This interface paradigm gives users the ability to create solutions
            to hard problems in hours or days which would normally have taken
            months. When working with customers, it is common to measure
            efficiency increases in <em>orders of&nbsp;magnitude.</em>
          </p>
        </div>
      </section>

      <section className="container border-t" id="everything-is-hackable">
        <div className="max-w-prose mx-auto">
          <SectionHeader
            icon={Terminal}
            overline="Theme"
            headline="Everything is Hackable"
          />
          <p>
            Our customers are accustomed to having full control over everything
            they do, and each company has incredibly unique&nbsp;requirements.
          </p>
        </div>
        <Image
          src={`${imgPath}/hackability.png`}
          alt="All components in a Moment canvas are hackable"
          width="1440"
          height="902"
        />
        <div className="max-w-prose mx-auto">
          <h3>User Needs</h3>
          <p>
            Software for infrastructure engineers is typically too
            one-size-fits-all. No two companies have identical tools or
            solutions to common&nbsp;problems.
          </p>
          <h3>Solution</h3>
          <p>
            Our answer was to bake <em>hackability</em> into every aspect of the
            product where customization is important, and obfuscate parts where
            customization is not necessary. We provide a robust library of
            premade components and allowed users to see and edit every line of
            code which was used to create those components. This level of
            control is very important for our users, who need to customize
            everything to work with their unique toolchains.
          </p>
          <h3>Result</h3>
          <p>
            The net result was that users felt significantly more confidence in
            the product knowing that they could truly customize it to their
            needs without having to take on the burden of building yet another
            system from&nbsp;scratch.
          </p>
        </div>
      </section>

      <section className="container border-t" id="secure-by-default">
        <div className="max-w-prose mx-auto">
          <SectionHeader
            icon={ManageProtection}
            overline="Theme"
            headline="Secure by Default"
          />
          <p>
            A major challenge when designing this product was the typical
            security posture of our customers, which is bested described as{" "}
            <em>paranoid</em> &mdash; but for good&nbsp;reasons.
          </p>
        </div>
        <Image
          src={`${imgPath}/atlas-setup.png`}
          alt="Atlas onboarding setup"
          width="1440"
          height="902"
        />
        <div className="max-w-prose mx-auto">
          <h3>User Needs</h3>
          <p>
            A major problem we ran into was that users felt uncomfortable
            providing a third-party vendor access to their most critical
            infrastructure, which could create the opportunity for
            security&nbsp;vulnerabilities.
          </p>
          <h3>Solution</h3>
          <p>
            We solved this with a technical solution: an authenticating proxy
            that runs in the customer&apos;s infrastructure which provides
            Moment secure access to internal data and tools. While this is an
            engineering solution, it created a huge number of UX challenges such
            as teaching users how to set up the system and guiding them to
            convert their Moment Canvases to point at secure data&nbsp;sources.
          </p>
          <h3>Result</h3>
          <p>
            In the end, this solution alleviated many of the security concerns
            for our users. It also allows us to deliver on our vision of
            offering a tool that allows users to centralize their documentation,
            data, and expertise in one&nbsp;place.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-300/20 dark:from-gray-300/5 to-indigo-400/20 dark:to-indigo-400/10">
        <div className="container">
          <div className="max-w-prose mx-auto">
            <SectionHeader icon={Microscope} headline="Reflections" />
            <p>
              This is a rewarding product to work on because the target user is
              so technical, while also being very underserved by
              traditional&nbsp;software.
            </p>
            <p>
              One major area for growth was that I needed to fine-tune my
              product intuition to better meet the needs of infrastructure
              engineers. There are a variety of UX and UI best practices that
              don&apos;t apply with this target customer. For example,
              developers value information density and UI contrast significantly
              more than typical users of consumer software. What might feel
              cramped to an average user would feel more comfortable for the
              typical&nbsp;developer.
            </p>
            <p>
              Another interesting learning I&apos;ve had is that infrastructure
              engineers are generally invisible at most companies until
              something goes wrong. When that happens, they are often expected
              to work through the night to solve problems that have the ability
              to cost the company vast sums of money if not prompty addressed.
              This level of pressure creates a worldview that is very
              security-minded and risk averse. It was important to internalize
              this worldview and allow it to guide the product development
              process so that our product could be taken seriously by
              our&nbsp;customers.
            </p>
          </div>
        </div>
      </section>

      <ProjectNav url="/projects/moment-brand" title="Moment.dev Branding" />
    </article>
  );
}
