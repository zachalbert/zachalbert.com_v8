import cx from "classnames";

export default function MomentApp({}: {}) {
  return (
    <article
      className={cx(
        "prose",
        "prose-slate",
        "max-w-none",
        "prose-p:max-w-prose",
        "prose-h2:border-t",
        "prose-h2:pt-6",
        "prose-h2:w-full"
      )}
    >
      <section>
        <h1>Moment</h1>
        <div className="not-prose">
          <video
            autoPlay
            loop
            muted
            poster="/portfolio/moment-dot-dev-marketing-poster.png"
            src="/portfolio/moment-dot-dev-marketing.webm"
          >
            <source
              src="/portfolio/moment-dot-dev-marketing.webm"
              type="video/webm"
            />
          </video>
        </div>
      </section>

      <section>
        <h2>My Role</h2>
        <p>
          I was the founding designer and first hire at Moment.dev, a company
          founded by Microsoft and Lyft alums. We aimed to make user-friendly
          software for infrastructure engineers.
        </p>
        <p>
          I was intimately involved in every aspect of the development of the
          product. My primary focus was designing the flows, UI, design system,
          and branding using both Figma and code (using css, typescript, and
          React). Additionally, I collaborated closely with the founders and
          engineering team on the overall UX, product vision, strategy, and
          frontend development.
        </p>
      </section>

      <section>A BUNCH OF SCREENS</section>

      <section>
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
          empathize with and understand the needs and gooals of our users, I had
          to partner with other engineers when doing user research to be able to
          ask the right follow up questions.
        </p>
        <h3>0 to 1</h3>
        <p>
          This product was designed from scratch, and involved crafting a unique
          rich text editing experience that combined text with a live coding
          environment. This was an enormously challenging product to create,
          which involved coming up with many new and innovative solutions to
          usability and interaction problems.
        </p>
        <h3>A Paradigm Shift</h3>
        <p>
          Our users are engineers who are most comfortable with the command
          line. We were presenting a new type of interaction paradigm for them,
          which required time and education before they were able to understand
          the power of the tool. Once they understood it, they were able to
          multiply the speed and power at which they could create by many
          multiples.
        </p>
      </section>

      <section>
        <h2>My Approach</h2>
        <div>SOME KIND OF PROCESS GRAPHIC</div>
        <p>
          Given the domain&apos;s complexity, my approach involved in-depth
          collaboration with my colleagues in engineering. Domain knowledge was
          often required to guide user research conversations to the richest
          areas or to understand the scope of possible solutions to problems our
          users faced. This partnership was crucial in creating designs that
          worked best for our users.
        </p>
        <p>
          Recognizing the engineering challenges, I took on front-end
          development tasks to alleviate the engineering team&apos;s workload.
          This not only improved UI quality but also allowed engineers to focus
          on impactful feature development. I was closely involved in the coding
          side of the design system.
        </p>
      </section>

      <section>
        <h2>Key Product Details</h2>
        <p>
          I&apos;m highlighting select portions of the overall product design
          that are the most interesting.
        </p>

        <h3>Exploration</h3>
        <p>IMAGE OF RICH TEXT + COMPONENTS</p>
        <h4>User Need</h4>
        <p>
          Users needed a way to take existing todo lists, and begin to automate
          away many of the mundane portions. However, traditional linear
          automation doesn&apos;t work in many cases because the possible
          solution paths are too complex. Users often resorted to having
          documentation in one system, scripts in another, and dashboards in yet
          another. This resulted in these things falling out of sync and a very
          complex ecosystem.
        </p>
        <h4>Solution</h4>
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
        <h4>Result</h4>
        <p>
          This interface gave users the ability to create solutions to hard
          problems in hours or days which would normally have taken months.
        </p>

        <h3>Hackability</h3>
        <p>Image of code pane</p>
        <h4>User Need</h4>
        <p>
          Software for infrastructure engineers is typically too
          one-size-fits-all. No two companies have identical tools or solutions
          to common problems.
        </p>
        <h4>Solution</h4>
        <p>
          Our answer was to bake <em>hackability</em> into every aspect of the
          product where customization is important, and obfuscate parts where
          customization is not necessary. We provided a robust library of
          premade components, and also allowed the users to see and edit every
          line of code used to create those components. This level of control
          was very important for our users, who are accustomed to having full
          control over the technical systems they use every day.
        </p>
        <h4>Result</h4>
        <p>
          The net result was that users felt significantly more confidence in
          the product, knowing that they could truly customize it to their needs
          without having to take on the burden of building yet another system
          from scratch.
        </p>

        <h3>Security</h3>
        <p>Image of Atlas setup</p>
        <h4>User Need</h4>
        <p>
          A major problem we ran into was that users felt uncomfortable
          providing a vendor access to their most critical infrastructure, which
          could create the opportunity for security vulnerabilities.
        </p>
        <h4>Solution</h4>
        <p>
          We solved this with a technical solution: an authenticating proxy that
          runs in the customer&apos;s infrastructure, that provides Moment
          secure access to internal data and tools. While this was an
          engineering solution, it created a huge number of UX challenges such
          as teaching users how to set up the system and how to convert their
          Moment Canvases to point at the secure data.
        </p>
        <h4>Result</h4>
        <p>
          In the end, this solution alleviated the concerns for our users while
          allowing us to deliver on the vision of a tool that allows users to
          centralize their documentation, data, and expertise in one place.
        </p>
      </section>

      <section>
        <h2>Reflections</h2>
        <p>
          This was a rewarding product to work on, because the target user was
          so very technical, but very underserved by traditional software.
        </p>
        <p>
          One major area for growth was that I needed to tune my product
          intuition in this role. There are a variety of UX and UI best
          practices with typical B2B software that didn&apos;t apply in the same
          way with this target customer. For example, developers value
          information density and UI contrast significantly more than typical
          consumer software.
        </p>
        <p>
          Another interesting aspect of this project was that infrastructure
          engineers are generally invisible at most companies, until something
          goes wrong. When that happens, they are often expected to work through
          the night to solve problems that have the ability to cost the company
          vast sums of money. This level of pressure created a worldview that is
          much different than an average technically-minded user of B2B
          software.
        </p>
      </section>
    </article>
  );
}
