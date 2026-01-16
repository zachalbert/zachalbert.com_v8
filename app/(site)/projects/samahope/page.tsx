import {
  Book,
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
  title: "Samahope Product Design Case Study | Zac Halbert",
  description: "The Product Design Portfolio of Zac Halbert",
};

const imgPath = "/portfolio/samahope";

export default function MomentApp() {
  return (
    <article>
      <section className="container">
        <div className="max-w-prose mx-auto">
          <h1>Samahope</h1>
          <h2 className="text-lg mt-2">Head of Design (2012 &ndash; 2015)</h2>
          <p>
            I was the Head of Design for a non-profit startup spun out of
            Samasource (now Sama), a non-profit that provided employment and
            workforce development for people in developing economies. Samahope
            has since been acquired by{" "}
            <Link
              href="https://www.jnjfoundation.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Johnson &amp; Johnson Foundation
            </Link>
            . During its operations, we were able to provide life-saving medical
            care for tens of thousands of&nbsp;patients.
          </p>
        </div>
      </section>

      <div className="container">
        <Image
          src={`${imgPath}/overview.webp`}
          alt="A crowdfunding site for doctors providing life-saving care to women and children"
          width={4032}
          height={3024}
          priority={true}
          className="mb-4"
        />
        <Gallery
          cols={2}
          images={[
            {
              imageUrl: `${imgPath}/how-it-works.webp`,
              caption: "Explanation of how the site works",
            },
            {
              imageUrl: `${imgPath}/treatment-buckets.webp`,
              caption: "The types of treatments funded by Samahope",
            },
          ]}
        />
      </div>

      <section className="container">
        <div className="max-w-prose mx-auto">
          <SectionHeader icon={FingerprintRecognition} headline="My Role" />

          <p>
            As the Head of Design, I worked closely with the founder of the
            organization to craft a brand and web presence that strove to strike
            a balance between respecting the dignity and privacy of the
            patients, while also maximizing donation dollars going to the
            doctors providing life-saving treatment. All of the doctors on our
            platform were vetted extensively as humanitarians working in
            massively underresourced areas. In some cases, they were the only
            qualified surgeons for a population in <em>the millions</em>,
            working tirelessly to save countless lives. It was an incredibly
            challenging role to tell the most unbelievable stories in a way that
            was believable to people in developed economies who have little
            personal experience in environments like&nbsp;these.
          </p>
          <p>
            As part of my role, I was able to do field research in Kenya,
            Tanzania, and Uganda to interview some of our doctors, patients, and
            catalog some of the outcomes that resulted from&nbsp;donations.
          </p>
          <p>
            This is a handful of the skills I regularly practiced in
            this&nbsp;role:
          </p>

          <div className={cx("grid", "gap-4", "mt-8", "lg:grid-cols-2")}>
            <SkillCard icon={Model} title="UX and UI">
              Designed all user flows, web UI, &amp; design&nbsp;system.
            </SkillCard>
            <SkillCard icon={CropGrowth} title="Product Vision &amp; Strategy">
              Collaborated with founders to set overall product&nbsp;vision.
            </SkillCard>
            <SkillCard icon={Chat} title="User Research">
              Conducted international field research to understand the needs of
              our&nbsp;doctors.
            </SkillCard>
            <SkillCard icon={Product} title="Rapid Prototyping">
              Rapid prototyping to quickly get feedback from donors, medical
              experts, and&nbsp;doctors.
            </SkillCard>
            <SkillCard icon={PaintBrush} title="Brand Design">
              Led a rebrand, designing the logo and brand voice to evolve the
              early brand&nbsp;prototype.
            </SkillCard>
            <SkillCard icon={Code} title="Frontend Development">
              All initial development for a full web-based donation platform,
              using PHP, React,&nbsp;and&nbsp;CSS.
            </SkillCard>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-500/5 to-purple-500/20">
        <div className="container">
          <div className="max-w-prose mx-auto">
            <SectionHeader icon={WarningAlt} headline="The Challenge" />
            <p>
              This was an incredibly difficult role for a lot of reasons. As a
              non-profit, we had very few resources and I accepted the job with
              a significant paycut. We had to make a very creative use of our
              budget, and were constantly hunting for more funding since we
              operated on the &quot;100%&quot; model, where 100% of a
              donor&apos;s dollars go directly to the doctors and patients. The
              burden fell on us to raise external funds to operate our
              organization. There was no work/life balance
              to&nbsp;speak&nbsp;of.
            </p>
            <p>
              The other massive challenge was designing for something{" "}
              <em>so. incredibly. depressing.</em> Many patients were in truly
              horrific or life-threatening circumstances, and I had to confront
              that every day at work. However, we were telling stories of hope;
              of individuals doing literally heroic work saving countless lives
              for no pay and very little appreciation. We felt strongly that we
              should protect the dignity and privacy of patients, which is why
              the site was structured around funding the doctors doing
              the&nbsp;work.
            </p>

            <hr />

            <SectionHeader icon={Idea} headline="My Approach" />
            <p>
              I had to be incredibly creative and scrappy. For the first year,
              we were a team of four and I was in charge of all design, product,
              and engineering. I used open-source web frameworks and libraries
              wherever I could to save time and money, and focused on telling
              the most compelling story of the doctors&nbsp;I&nbsp;could.
            </p>
            <p>
              I knew that I couldn&apos;t reasonably design for a situation that
              I had no personal experience with, so I traveled to Eastern Africa
              where there was a concentration of doctors we worked with. I
              toured refugee camps, rural clinics, and catholic missions where
              the medical care was taking place. I spoke with doctors and
              patients alike to understand the scope of the problem that was
              being&nbsp;addressed.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="max-w-prose mx-auto">
          <SectionHeader icon={Book} headline="The Doctor's Story" />

          <p>
            The meat of the donation experience was the doctor&apos;s story.
            These doctors were not using the funds for themselves, but for
            life-saving medical interventions for their patients. Donations
            funded even simple things that were not typically available, like
            hand sanitizer for&nbsp;surgery.
          </p>
          <p>
            It was incredibly challenging to tell such harrowing stories in a
            way that allowed people in more comfortable circumstances to connect
            to them. A further difficulty is that these doctors were often very
            hard to contact. They worked in very rural areas, often without cell
            service for days&nbsp;on&nbsp;end.
          </p>
          <p>
            One of the hardest things to wrap my head around was how costly it
            was for the doctors to take even a short break to jump on a call
            with us to tell their story or provide photos for their profile.
            They were often the only surgeon available for hundreds of miles,
            and when they take breaks, people die. These doctors worked grueling
            hours with no vacation. The most amazing thing is that many of them
            (such as Dr. Robert, pictured below), were trained at top medical
            schools in the US and could have chosen a very cushy life doing
            plastic surgery in beverly hills. Instead, they chose to go where
            they were needed&nbsp;most.
          </p>
          <p>
            <Image
              src={`${imgPath}/doctor-profile-full.webp`}
              alt="An example of a doctor's profile page"
              width={2312}
              height={5336}
            />
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-300/20 dark:from-gray-300/5 to-indigo-400/20 dark:to-indigo-400/10">
        <div className="container">
          <div className="max-w-prose mx-auto">
            <SectionHeader icon={Microscope} headline="Reflections" />
            <p>
              This was by far the most rewarding and inspiring work I have ever
              had the opportunity to do. It can be hard to feel connected to the
              work we do in tech, but that was not a problem in this role. I met
              some truly incredible people that have given me undying hope
              in&nbsp;humanity.
            </p>
            <p>
              I also learned a lot about non-profit business models. My big
              takeaway is that this business model is incredibly
              counterproductive and outdated, and actively wears down the people
              who want to do the most good. Institutional funders were hard to
              court, and often had unreasonable strings attached to the money
              they would provide. Even when everyone had virtuous intentions,
              the system was not set up to incentivize the most&nbsp;good.
            </p>
            <p>
              Despite my frustrations with the non-profit business model and the
              grueling work/life balance I had in this role, it remains one of
              my most fulfilling roles I have ever&nbsp;held.
            </p>
          </div>
        </div>
      </section>

      <ProjectNav url="/projects/moment-app" title="Moment.dev" />
    </article>
  );
}
