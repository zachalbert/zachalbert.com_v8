import {
  Bot,
  Chat,
  Code,
  Collaborate,
  ColorPalette,
  CropGrowth,
  Events,
  Explore,
  FingerprintRecognition,
  Idea,
  ManageProtection,
  Model,
  PaintBrush,
  Product,
  ResultDraft,
  Terminal,
  WarningAlt,
  WorkflowAutomation,
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

export const metadata: Metadata = {
  title: "Metromile Product Design Case Study | Zac Halbert",
  description: "The Product Design Portfolio of Zac Halbert",
};

const imgPath = "/portfolio/metromile";

export default function Metromile() {
  return (
    <article>
      <section className="container">
        <div className="max-w-prose mx-auto">
          <h1>Metromile</h1>
          <h2 className="text-lg opacity-60 mt-2">
            Head of Design, Enterprise (2018 &ndash; 2021)
          </h2>
          <p>
            I was the founding designer and Head of Design for a new
            organization within Metromile that aimed to harness Metromile&apos;s
            expertise in data science to offer solutions to multinational
            insurance organizations. My work directly led to 7 figures in
            revenue within the first two years, and saved our customers a
            similar&nbsp;amount.
          </p>
          <p>
            <em>Some details have been obfuscated for NDA reasons.</em>
          </p>
        </div>
      </section>

      <div className="container">
        <Image
          src={`${imgPath}/overview.jpeg`}
          alt="Metromile Enterprise"
          width={4032}
          height={3024}
          priority={true}
          className="mb-4"
        />
        <div className="text-base text-center italic">
          I Led a Design Sprint to craft a first notice of loss flow with a
          large group of executives in Tokyo
        </div>
        {/* <Gallery
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
        /> */}
      </div>

      <section className="container">
        <div className="max-w-prose mx-auto">
          <SectionHeader icon={FingerprintRecognition} headline="My Role" />

          <p>
            I joined Metromile to help get its internal insurtech off the
            ground. I hired a team of two designers, and worked closely with
            engineering and data science to offer three complete products:{" "}
            <strong>Report</strong>, a first notice of loss product,{" "}
            <strong>Detect</strong>, an AI-powered fraud detection solution, and{" "}
            <strong>Streamline</strong>, an insurance-specific workflow
            automation engine. I also led the branding and visual
            design&nbsp;efforts.
          </p>
          <p>
            This is a handful of the skills I regularly practice in
            this&nbsp;role:
          </p>

          <div className={cx("grid", "gap-4", "mt-8", "lg:grid-cols-2")}>
            <SkillCard icon={Events} title="Team Management">
              Hired and managed a scrappy design team of two, both who have gone
              on to lead design&nbsp;teams.
            </SkillCard>
            <SkillCard icon={Model} title="UX and UI">
              Designed all user flows, app UI, and design system in both Figma
              and&nbsp;code.
            </SkillCard>
            <SkillCard icon={CropGrowth} title="Product Vision &amp; Strategy">
              Collaborated with founders to set overall product vision and
              vetted vendor&nbsp;selection.
            </SkillCard>
            <SkillCard icon={Chat} title="User Research">
              Conducted user interviews and contextual inquiry to understand
              user needs, goals, and product&nbsp;usability.
            </SkillCard>
            <SkillCard icon={Collaborate} title="Collaborative Design">
              Led multiple design sprints onsite with international companies to
              increase speed and quality of&nbsp;feedback.
            </SkillCard>
            <SkillCard icon={Product} title="Rapid Prototyping">
              Rapid prototyping in Figma to quickly get feedback from users and
              technical&nbsp;experts.
            </SkillCard>
            <SkillCard icon={PaintBrush} title="Brand Design">
              Designed the brand, logo, voice and all print&nbsp;collateral.
            </SkillCard>
            <SkillCard icon={Code} title="Frontend Development">
              Regularly shipped code to production using CSS and&nbsp;React.
            </SkillCard>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-500/5 to-purple-500/20">
        <div className="container">
          <div className="max-w-prose mx-auto">
            <SectionHeader icon={WarningAlt} headline="The Challenge" />
            <p>
              Designing for multinational insurance companies proved to be a
              rewarding challenge. Many of these companies had eye-watering
              amounts of revenue, but were culturally very conservative. Some of
              the youngest insurance companies have been around for at least a
              generation, and are accustomed to upgrading their technology on a
              cycle measured in decades rather than years. Approaching these
              types of companies with cutting-edge AI powered solutions proved
              to be quite&nbsp;difficult.
            </p>

            <hr />

            <SectionHeader icon={Idea} headline="My Approach" className="" />
            <p>
              One major benefit we had was the ability to point to the success
              of Metromile&apos;s consumer product, which was powered by the
              underlying technologies that we were offering. I used a variety of
              collaborative design techniques like Google Ventures Design
              Sprints, and built on top of existing models (Business Process
              Modeling Notation, or BPMN) to increase the trust in
              our&nbsp;offerings.
            </p>
            <p>
              The design process was a typical human-centered, rapid prototyping
              based method. To get feedback, I often needed to travel to client
              locations such as Tokyo, Japan, to get in-depth feedback
              on&nbsp;solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-0">
        <div className="max-w-prose mx-auto">
          <h1>Products</h1>
          <p>
            What follows are a few of the major products I worked on. Many of
            the details cannot be shared for NDA-related reasons, but I can
            provide a high-level overview of each.
          </p>
          <div className="flex flex-col gap-2">
            <ThemeLink
              href="#streamline"
              icon={WorkflowAutomation}
              theme="Streamline (business process automation)"
            />
            <ThemeLink
              href="#detect"
              icon={Bot}
              theme="Detect (AI-powered fraud detection)"
            />
            <ThemeLink
              href="#fnol"
              icon={ResultDraft}
              theme="Report (first notice of loss)"
            />
            <ThemeLink href="#brand" icon={ColorPalette} theme="Branding" />
          </div>
        </div>
      </section>

      <section className="container" id="streamline">
        <div className="max-w-prose mx-auto">
          <SectionHeader
            icon={WorkflowAutomation}
            overline="Product"
            headline="Streamline"
          />
          <p>
            Streamline was a workflow automation product that allowed insurtech
            companies &mdash; which operate on razor-thin margins &mdash; to
            automate repetitive tasks for their claims adjusters and
            internal&nbsp;processes.
          </p>
          <p>
            This product enabled double digit efficiency gains and a large
            reduction in errors by automating repetitive, error-prone, and
            mundane tasks. We used the human-in-the-loop methodology to keep
            people a part of the process, allowing them to observe and direct
            the automations at&nbsp;will.
          </p>
        </div>
        <Image
          src={`${imgPath}/streamline.png`}
          alt="Metromile Enterprise Streamline UI"
          width="1160"
          height="1034"
        />
        {/* <div className="max-w-prose mx-auto">
          <h3>User Needs</h3>
          <p>
          </p>
          <h3>Solution</h3>
          <p>
          </p>
          <h3>Result</h3>
          <p>
          </p>
        </div> */}
      </section>

      <section className="container border-t" id="detect">
        <div className="max-w-prose mx-auto">
          <SectionHeader icon={Bot} overline="Product" headline="Detect" />
          <p>
            A double digit percentage of all claims are fraudulent, and
            insurance companies are compelled by law to investigate and report
            these crimes. This is an enormously difficult and costly process.
            Metromile Detect used SHAP analysis and proprietary machine-learning
            models to offer investigators insight into which claims might be
            fraudulent, with clear steps to push each case&nbsp;forward.
          </p>
        </div>
        <Image
          src={`${imgPath}/detect.png`}
          alt="Metromile Enterprise Detect UI"
          width="1440"
          height="1568"
        />
        {/* <div className="max-w-prose mx-auto">
          <h3>User Needs</h3>
          <p>
          </p>
          <h3>Solution</h3>
          <p>
          </p>
          <h3>Result</h3>
          <p>
          </p>
        </div> */}
      </section>

      <section className="container border-t" id="fnol">
        <div className="max-w-prose mx-auto">
          <SectionHeader
            icon={ResultDraft}
            overline="Product"
            headline="Report"
          />
          <p>
            When an insurance customer has an accident, the first step is to
            report it. This is typically called{" "}
            <strong>first notice of loss (FNOL)</strong>. Report was a dynamic
            FNOL product that allowed users to craft a dynamic flow based on the
            specific type of&nbsp;incident.
          </p>
          <p>
            This dynamic form-builder allowed one major customer to drastically
            decrease the time it took for their customers to report a loss,
            since customers were only asked questions that were relevant to
            their situation. This led to an increase in completions and better
            data for claims&nbsp;adjusters.
          </p>
        </div>
        <Image
          src={`${imgPath}/form-designer.png`}
          alt="Metromile Enterprise Report Designer UI"
          width="1444"
          height="994"
        />
        <Image
          src={`${imgPath}/fnol.png`}
          alt="Metromile Enterprise FNOL UI"
          width="1242"
          height="978"
        />
        {/* <div className="max-w-prose mx-auto">
          <h3>User Needs</h3>
          <p>
          </p>
          <h3>Solution</h3>
          <p>
          </p>
          <h3>Result</h3>
          <p>
          </p>
        </div> */}
      </section>

      <section className="container border-t" id="brand">
        <div className="max-w-prose mx-auto">
          <SectionHeader icon={ColorPalette} headline="Branding" />
          <p>
            As the founding designer, I was responsible for crafting the brand
            and logo for the enterprise organization. I worked
            cross-functionally with stakeholders to understand the vision for
            the organization as a part of this process. The goal was to make the
            brand feel like a subsidiary of Metromile Consumer, with a heavier
            emphasis placed on elements that would work better for
            enterprise&nbsp;customers.
          </p>
        </div>
        <Image
          src={`${imgPath}/biz-card.png`}
          alt="Metromile Enterprise Logo Design"
          width="1040"
          height="608"
        />
        <Image
          src={`${imgPath}/ebs-website.png`}
          alt="Metromile Enterprise Marketing Website"
          width="2175"
          height="7112"
        />
        {/* <div className="max-w-prose mx-auto">
          <h3>User Needs</h3>
          <p>
          </p>
          <h3>Solution</h3>
          <p>
          </p>
          <h3>Result</h3>
          <p>
          </p>
        </div> */}
      </section>

      <section className="bg-gradient-to-br from-gray-300/20 dark:from-gray-300/5 to-indigo-400/20 dark:to-indigo-400/10">
        <div className="container">
          <div className="max-w-prose mx-auto">
            <h2>Reflections</h2>
            <p>
              This role was challenging, but incredibly fun. Some of my most
              rewarding memories were running design sprints in Tokyo with 25
              executives and a couple translators, then going out to celebrate
              our partnership&nbsp;afterwards.
            </p>
            <p>
              I also ended up learning a great deal about business process
              automation, and became trained in BPMN. This is somewhat similar
              to designing user and task flows, but with much more precision and
              a richer set of interactions. BPMN has become a part of my usual
              product design process when I need to express a complex series of
              interactions for many actors. In many ways, BPMN is a slightly
              more complicated version of many of the deliverables found in the
              Service Design&nbsp;discipline.
            </p>
            <p>
              It was rewarding to work on so many flow-based products. The
              challenge was figuring out how to design a product that kept
              humans at the center while allowing them to automate the stuff
              they aren&apos;t interested in doing. In addition to learning a
              lot about AI and automation, I learned a lot about the enterprise
              sales process, especially when working internationally.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
