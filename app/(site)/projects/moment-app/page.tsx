import {
  Chat,
  Code,
  ColorPalette,
  CropGrowth,
  Model,
  PaintBrush,
  Product,
} from "@carbon/icons-react";
import cx from "classnames";
import SkillCard from "../../components/SkillCard";
import Image from "next/image";

const imgPath = "/portfolio/moment-app";

export default function MomentApp() {
  return (
    <article>
      <div className="container not-prose">
        <video autoPlay loop muted poster={`${imgPath}/overview-poster.png`}>
          <source src={`${imgPath}/overview.webm`} type="video/webm" />
        </video>
      </div>

      <section className="container">
        <div className="max-w-prose mx-auto">
          <h1>Moment</h1>
          <h2 className="text-lg opacity-60 mt-2">
            Founding Designer / Head of Design
          </h2>
          <h3 className="border-t mt-16 pt-6">My Role</h3>
          <p>
            I was the founding designer and first hire at Moment.dev, a company
            founded by Microsoft and Lyft alums. We aim to make user-friendly
            software for infrastructure engineers.
          </p>
          <p>
            I was intimately involved in every aspect of the development of the
            product. My primary focus was designing the flows, UI, design
            system, and branding using both Figma and code (with CSS,
            Typescript, and React). Additionally, I collaborated closely with
            the founders and engineering team on the overall UX, product vision,
            strategy, and frontend development.
          </p>
          <p>
            This is a handful of the skills I regularly practiced in this role:
          </p>
        </div>
        <div
          className={cx(
            "grid",
            "gap-4",
            "mt-8",
            "sm:grid-cols-2",
            "md:grid-cols-3",
            "xl:grid-cols-4"
          )}
        >
          <SkillCard icon={Model} title="UX and UI">
            I designed all the primary flows and associated UI in the app,
            collaborating with engineering to deliver a performant frontend.
          </SkillCard>
          <SkillCard icon={CropGrowth} title="Product Vision &amp; Strategy">
            I worked closely with the CEO and Head of Product to define our
            ideal customer profile and map product solutions to their problem
            space.
          </SkillCard>
          <SkillCard icon={Chat} title="User Research">
            I conducted many user interviews in collaboration with my colleagues
            to identify user needs and goals, and evaluated our product for
            usability.
          </SkillCard>
          <SkillCard icon={Product} title="Rapid Prototyping (Figma)">
            I used rapid prototyping in Figma to quickly design solutions to get
            feedback.
          </SkillCard>
          <SkillCard icon={PaintBrush} title="Brand Design">
            Based on the founders&apos; vision, I guided and implemented the
            brand and logo design.
          </SkillCard>
          <SkillCard icon={ColorPalette} title="Design System Definition">
            I crafted a design system based on tailwind primitives to increase
            design speed in Figma.
          </SkillCard>
          <SkillCard
            icon={Code}
            title="Frontend Development (React, Typescript, CSS, and Tailwind)"
          >
            I am a regular contributor to our frontend codebase and created the
            systems that frontend developers use to style components.
          </SkillCard>
        </div>
      </section>

      <section className="container border-t">
        <div className="max-w-prose mx-auto">
          <h2>Select Screens</h2>
        </div>
        <div className="flex flex-col lg:gap-12">
          <Image
            src={`${imgPath}/empty.png`}
            alt="Starting a new Moment canvas"
            width="1440"
            height="902"
          />
          <Image
            src={`${imgPath}/canvas-list-light.png`}
            alt="List of Moment canvases"
            width="1440"
            height="902"
          />
          <Image
            src={`${imgPath}/component-lib.png`}
            alt="Drag and droppable component library"
            width="1440"
            height="902"
          />
          <Image
            src={`${imgPath}/design-system.png`}
            alt="Moment's design system"
            width="1440"
            height="902"
          />
        </div>
      </section>

      <section className="container">
        <div className="max-w-prose mx-auto">
          <h2>The Challenge</h2>
          <p>
            This role presented a variety of unique challenges and growth
            opportunities.
          </p>
          <h3>Balancing Long-Term and Short-Term</h3>
          <p>
            As the founding designer, I had to balance advancing the quality of
            the product with the need to ship quickly, all while setting my own
            benchmarks.
          </p>
          <h3>Insight Through Collaboration</h3>
          <p>
            I was designing for infrastructure engineers who are responsible for
            keeping the internet running smoothly. While I worked hard to
            empathize with and understand the needs and gooals of our users, I
            had to partner with other engineers when doing user research to be
            able to ask the right follow up questions.
          </p>
          <h3>0 to 1</h3>
          <p>
            This product was designed from scratch, and involved crafting a
            unique rich text editing experience that combined text with a live
            coding environment. This was an enormously challenging product to
            create, which involved coming up with many new and innovative
            solutions to usability and interaction problems.
          </p>
          <h3>A Paradigm Shift</h3>
          <p>
            Our users are engineers who are most comfortable with the command
            line. We were presenting a new type of interaction paradigm for
            them, which required time and education before they were able to
            understand the power of the tool. Once they understood it, they were
            able to multiply the speed and power at which they could create by
            many multiples.
          </p>
        </div>
      </section>

      <section className="bg-sky-500/10">
        <div className="container">
          <div className="max-w-prose mx-auto">
            <h2>My Approach</h2>
            <p>
              I roughly followed a typical human-centered design process with
              frequent sanity checks with members of the engineering team.
            </p>
            <p>
              Given the domain&apos;s complexity, my approach required a
              significantly more in-depth collaboration with my colleagues in
              engineering. I was able to conduct frequent expert interviews with
              them, our users, and people in the industry to understand exactly
              how they were currently solving their problems.
            </p>
            <p>
              I trained my engineering colleagues to conduct research with me
              since deep domain knowledge was often required to guide interviews
              to the richest areas of exploration.
            </p>
            <p>
              As a designer with frontend skills, I was able to use sketching,
              Figma, and code to quickly test ideas. My goal was always to
              tighten feedback loops to increase the rate of learning.
            </p>
            <p>
              Once the bulk of a feature was developed, I frequently jumped into
              the front-end development tasks to alleviate the engineering
              team&apos;s workload and increase the design polish of. This not
              only improved UI quality but also allowed engineers to focus on
              more impactful feature development.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="max-w-prose mx-auto">
          <h2>Enable exploration</h2>
          <p>
            Infrastructure engineering is a complex and ever-evolving field, so
            we knew our product had to provide tools for users to explore hard
            problems with interesting and creative tooling.
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
            automate away many of the mundane portions. However, traditional
            linear automation doesn&apos;t work in many cases because the
            possible solution paths are too complex. Users often resorted to
            having documentation in one system, scripts in another, and
            dashboards in yet another. This resulted in these things falling out
            of sync and a very complex ecosystem.
          </p>
          <h3>Solution</h3>
          <p>
            We solved this by building a notebook style interface that allowed
            users to write rich text and drop in pre-made components so they can
            place documentation, data from their systems, and rich interactive
            experiences all in one place.
          </p>
          <p>
            This created a sandbox environment that enabled users to explore
            problems and pull in the relevant data or actions from vendors and
            internal systems.
          </p>
          <h3>Result</h3>
          <p>
            This interface gave users the ability to create solutions to hard
            problems in hours or days which would normally have taken months.
          </p>
        </div>
      </section>

      <section className="container border-t">
        <div className="max-w-prose mx-auto">
          <h2>Everything is Hackable</h2>
          <p>
            Our customers are accustomed to having full control over everything
            they do, and each had incredibly unique requirements.{" "}
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
            solutions to common problems.
          </p>
          <h3>Solution</h3>
          <p>
            Our answer was to bake <em>hackability</em> into every aspect of the
            product where customization is important, and obfuscate parts where
            customization is not necessary. We provided a robust library of
            premade components, and also allowed the users to see and edit every
            line of code used to create those components. This level of control
            was very important for our users, who are accustomed to having full
            control over the technical systems they use every day.
          </p>
          <h3>Result</h3>
          <p>
            The net result was that users felt significantly more confidence in
            the product, knowing that they could truly customize it to their
            needs without having to take on the burden of building yet another
            system from scratch.
          </p>
        </div>
      </section>
      <section className="container border-t">
        <div className="max-w-prose mx-auto">
          <h2>Secure By Default</h2>
          <p>
            A major challenge when designing this product was the typical
            security posture of our customers (paranoid for good reasons).
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
            providing a vendor access to their most critical infrastructure,
            which could create the opportunity for security vulnerabilities.
          </p>
          <h3>Solution</h3>
          <p>
            We solved this with a technical solution: an authenticating proxy
            that runs in the customer&apos;s infrastructure, that provides
            Moment secure access to internal data and tools. While this was an
            engineering solution, it created a huge number of UX challenges such
            as teaching users how to set up the system and how to convert their
            Moment Canvases to point at the secure data.
          </p>
          <h3>Result</h3>
          <p>
            In the end, this solution alleviated the concerns for our users
            while allowing us to deliver on the vision of a tool that allows
            users to centralize their documentation, data, and expertise in one
            place.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-300/20 to-indigo-400/20">
        <div className="container">
          <div className="max-w-prose mx-auto">
            <h2>Reflections</h2>
            <p>
              This was a rewarding product to work on, because the target user
              was so very technical, but very underserved by traditional
              software.
            </p>
            <p>
              One major area for growth was that I needed to tune my product
              intuition in this role. There are a variety of UX and UI best
              practices with typical B2B software that didn&apos;t apply in the
              same way with this target customer. For example, developers value
              information density and UI contrast significantly more than
              typical consumer software.
            </p>
            <p>
              Another interesting aspect of this project was that infrastructure
              engineers are generally invisible at most companies, until
              something goes wrong. When that happens, they are often expected
              to work through the night to solve problems that have the ability
              to cost the company vast sums of money. This level of pressure
              created a worldview that is much different than an average
              technically-minded user of B2B software.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
