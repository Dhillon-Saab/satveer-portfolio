import React from "react";
import { ImageOverlay } from "./ImageOverlay";
import ZoomableImage from "./ZoomImage";
import Image from "next/image";

function BluePrintForJustice() {
  return (
    <div>
      <section className="pt-10 py-10 bg-neutral-bg">
        <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
          <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Questions</h2>
          <ol className="mt-4 pl-10 list-decimal text-lg md:text-xl space-y-2 font-Lora font-extralight">
            <li>
              How do we provide support and resources to victims during the
              aftermath of police brutality?
            </li>
            <li>
              How do we provide accurate information in this problem space?
            </li>
          </ol>
        </div>
      </section>
      <section className="py-10 bg-navbar-bg">
        <div className="container mx-auto text-white px-4 md:px-64 text-left">
          <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Goals</h2>
          <ol className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
            <li>
              User goals: Find resources (national and local organizations,
              communities of support, therapy and counseling, legal aid, etc,)
              they need to seek justice against police brutality and heal from
              their trauma.
            </li>
            <li>
              Product goals: Provide users with a starting point for healing and
              justice through resources tailor-made for victims of police
              brutality.
            </li>
          </ol>
        </div>
      </section>
      <section className="py-10 bg-bg-neutral-bg">
        <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
          <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Research</h2>
          <div className="mb-10">
            <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
              Understanding the Problem Space - A Wicked Problem
            </h3>
            <p className="mt-4  text-lg md:text-xl space-y-2 font-Lora font-extralight">
              A <span className="font-bold">wicked problem</span> is one that
              appears impossible to solve due to many interdependent factors.
              Because the factors are often incomplete, in flux, and difficult
              to define, solving wicked problems requires a deep understanding
              of the stakeholders involved. This is done through design
              thinking. A wicked problem is an issue that is complex, such as
              healthcare or education.
            </p>
            <div className=" flex flex-col gap-6 my-6 items-center justify-center h-auto w-full md:w-auto mx-auto">
              <ImageOverlay
                imageUrl={"/BluePrintForJustice/wickedproblem2.avif"}
                altText={"CustomerMap"}
              />
              <p className="font-extralight text-sm md:text-base font-Lora text-center">
                Tame Problems typically have a linear, iterative process.
              </p>
            </div>
            <p className="mt-4  text-lg md:text-xl space-y-2 font-Lora font-extralight">
              Given the interdependent nature of this project - and its
              limitations - we had to examined this from multiple lenses, and
              <span className="font-bold">
                {" "}
                through trauma-informed design.
              </span>
            </p>
          </div>
          <div>
            <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
              Project Requirements
            </h3>
            <p className="mt-4  text-lg md:text-xl space-y-2 font-Lora font-extralight">
              Due to the scope of this project, and a budget for maintenance, we
              had to outline the following.
            </p>
            <ul className="mt-4 pl-10 list-disc text-lg md:text-xl font-Lora space-y-2 font-extralight">
              <li className="mt-4  text-lg md:text-xl space-y-2  font-extralight">
                <span className="font-bold">Authentic</span>- The Blueprint for
                Justice, has to inform and convey the lived experiences of Wanda
                Johnson, Sybrina Fulton, and the Mothers of the Movement while
                containing information that is accurate
              </li>
              <li className="mt-4  text-lg md:text-xl space-y-2 font-extralight">
                <span className="font-bold">
                  Impactful - How can we make a difference in the end?
                </span>
              </li>
              <li className="mt-4  text-lg md:text-xl space-y-2 font-extralight">
                <span className="font-bold">Sustainable</span>- How can we best
                serve the client and carry this out for the long run? Is it
                scalable?
              </li>
              <li className="mt-4  text-lg md:text-xl space-y-2 font-extralight">
                <span className="font-bold">Operational</span>- Can we
                operationalize it on the ground?
                <span className="font-bold">Is it responsive?</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-10 bg-navbar-bg">
        <div className="container mx-auto text-white px-4 md:px-64 text-left">
          <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Roadblocks</h2>
          <p className="mt-4 text-lg md:text-xl space-y-2 font-Lora font-extralight">
            Over many decades, the Mothers of the Movement have established a
            blueprint for justice in the wake of the harms enacted against their
            communities. This resource codifies their learnings into a blueprint
            that can be applied to other abuses of power or harms against the
            community.
          </p>
          <p className="mt-4 text-lg md:text-xl space-y-2 font-Lora font-extralight">
            To respect the integrity of the website - our group initially began
            with a team of designers and developers, but problems began to arise
            as each state operates under its own jurisdiction within the United
            States.
          </p>
          <ol className="mt-4 pl-10 list-decimal text-lg font-Lora md:text-xl space-y-2 font-extralight">
            <li>
              How does the Blueprint for Justice provide legal assistance for
              all 50 States?
            </li>
            <li>
              Many grassroots movements have attempted something similar and
              become inactive.
            </li>
          </ol>
          <p className="mt-4 text-lg md:text-xl space-y-2 font-Lora font-extralight">
            What happens if a resource (an outbound hyperlink) goes offline?
          </p>
        </div>
      </section>
      <section className="py-10 bg-bg-neutral-bg">
        <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
          <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Solution</h2>
          <div className="mb-10">
            <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
              Guidelines for Trauma-Informed Design
            </h3>
            <p className="mt-4  text-lg md:text-xl space-y-2 font-Lora font-extralight">
              Trauma-informed design is an emerging concept that has not yet
              reached a unified definition. This can be defined as a process of
              designing a product or service based on
              <span className="font-bold">
                principles of trauma-informed care.
              </span>
              Any decisions about services provided are filtered through the
              overlapping lenses of environmental psychology, neuroscience,
              physiology, and cultural factors. The intention is to create and
              sustain uniquely designed products and services where all users
              feel a sense of safety (real and perceived), respect, connection
              and community, control, dignity and joy.
            </p>
            <ol className="mt-4 pl-10 list-decimal text-lg md:text-xl font-Lora space-y-2 font-extralight">
              <li>
                The research presented must be accredited (see Database
                Development for more)
              </li>
              <li>
                All language used must be concise, inclusive and screened
                thoroughly to prevent triggers.
              </li>
              <li>The research presented must not overwhelm the user.</li>
              <li>
                Design elements, including, but not limited to typography, icon
                design, and colour usage.
              </li>
              <li>
                All outbound links must work (see Use of Python for more).
              </li>
              <li>
                The Blueprint for Justice must provide a clear path to end the
                cycle of retaliation.
              </li>
            </ol>
          </div>
          <div className="mb-10">
            <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
              Visual Identity
            </h3>
            <p className="mt-4  text-lg md:text-xl space-y-2 font-Lora font-extralight">
              Before continuing work on UX Research, these preliminary visual
              guidelines were developed for the UX Design Team.
            </p>
            <div className="flex flex-col justify-center items-center my-6 h-auto w-full md:w-full mx-auto">
              <Image
                src={"/BluePrintForJustice/BFJ_Design copy.avif"}
                alt={"BFJ_Design copy"}
                width={1000}
                height={1000}
                className="w-1/2"
              />
              <p className="mt-6 font-extralight text-sm md:text-base font-Lora text-center">
                Preliminary design guidelines were provided to the rest of the
                UX Design Team to implement, including a distinct, calming
                colour scheme, and readable, sans serif fonts.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
              Database Development
            </h3>
            <p className="mt-4  text-lg md:text-xl space-y-2 font-Lora font-extralight">
              Our team was only initially formed with two divisions - Design &
              Development.
            </p>
            <p className="mt-4  text-lg md:text-xl space-y-2 font-Lora font-extralight">
              We advocated for a third -{" "}
              <span className="font-bold">UX Research & Content Writing</span> .
              After handing off a suggested colour scheme, Designlōk began work
              parsing data collected, ensuring that the information and insights
              provided were either{" "}
              <span className="font-bold">
                through the lived experiences of the Mothers
              </span>
              or academic resources, such as
              <span className="font-bold">
                {" "}
                Amnesty International. Databases were built with Google Sheets
                as a part of a back-end and followed SQL architecture
                methodology for web applications.
              </span>
            </p>
            <p className="mt-4  font-bold text-lg md:text-xl font-Lora space-y-2">
              A combination of State provided legal aid, along with reputable
              legal practices and law clinics were aggregated and are presented
              on the website.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
              Use of Python
            </h3>
            <p className="mt-4  text-lg md:text-xl space-y-2 font-Lora font-extralight">
              To avoid undue pressure on both the client and the user, Designlōk
              worked with the development team to create a custom solution in
              Python on the backend that would remove any outbound links and
              their descriptions.
            </p>
            <div className="flex flex-col justify-center items-center my-6 h-auto w-full md:w-full mx-auto">
              <ImageOverlay
                imageUrl={"/BluePrintForJustice/Python.webp"}
                altText={"Python.avif"}
              />
              <p className="mt-6 font-extralight text-sm md:text-base font-Lora text-center">
                Preliminary design guidelines were provided to the rest of the
                UX Design Team to implement, including a distinct, calming
                colour scheme, and readable, sans serif fonts.
              </p>
            </div>
            <p className="mt-4  text-lg md:text-xl space-y-2 font-Lora font-extralight">
              This now allows users to receive the assistance they need, and for
              the client to prioritize matters of greater significance. To learn
              more about the open-source code, please visit the lead developer&apos;s
              GitHub.
            </p>
            <div className="mt-4 md:mt-8 items-center mx-auto flex justify-center">
              <a
                href="https://github.com/anish-sinha1/blueprintforjustice-final"
                target="_blank"
                className="inline-block rounded font-Josefin-Sans bg-navbar-bg px-12 py-3 text-lg font-medium text-white transition hover:bg-slate-600 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-neutral-bg" id="Deliverables">
        <div className="container mx-auto text-darker px-4 md:px-64 text-left">
          <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">
            Usability Testing
          </h2>
          <div className="mb-10">
            <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">Research</h3>
            <p className="mt-4  text-lg md:text-xl font-Lora space-y-2 font-extralight">
              Users were struggling to find resources and were overwhelmed by
              the original web platform
            </p>
            <div className="flex flex-col justify-center items-center my-6 h-auto w-full md:w-full mx-auto">
              <Image
                src={
                  "/BluePrintForJustice/fd7f13_18cfd8cb70424ffabbcc976301dcef45~mv2.gif"
                }
                alt={"Inclucity_Diagram"}
                width={1000}
                height={1000}
                className="w-3/4"
              />
              <p className="mt-6 font-extralight text-sm md:text-base text-center">
                First iteration of designs.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
              Usability Insights
            </h3>
            <p className="mt-4  text-lg md:text-xl font-Lora space-y-2 font-extralight">
              As 70% of the team had departed from the project, Designlōk worked
              closely newly on-boarded members and conducted user interviews
              with 10+ participants and consulted with our client from the
              “Black Mothers Love & Resist” film team to determine user needs
              and pain points.
            </p>
            <p className="mt-4  text-lg md:text-xl font-Lora space-y-2 font-extralight">
              During testing, we developed a dark/light mode to increase
              accessibility for users and determine which version users
              responded better to.
            </p>
            <div className="flex flex-col justify-center items-center my-6 h-auto w-full md:w-full mx-auto">
              <Image
                src={
                  "/BluePrintForJustice/fd7f13_205248a3e07b4a53a198575bf5a43ab5~mv2.gif"
                }
                alt={"Inclucity_Diagram"}
                width={1000}
                height={1000}
                className="w-1/2"
              />
              <p className="mt-6 font-extralight text-sm md:text-base font-Lora text-center">
                With the assistance of Alyssa, the homepage was reworked to be
                more readable - allowing those using the site to find the
                information they need at a glance, with animations for
                interactivity.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center my-6 h-auto w-full md:w-full mx-auto">
              <Image
                src={
                  "/BluePrintForJustice/fd7f13_6d2518a8e2134d99b3511975fcfc3658~mv2.gif"
                }
                alt={"Inclucity_Diagram"}
                width={1000}
                height={1000}
                className="w-1/4"
              />
              <p className="mt-6 font-extralight text-sm md:text-base font-Lora text-center">
                Responsive Design - For the final site, content would be sorted
                into folders
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-neutral-bg">
        <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
          <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Results</h2>
          <p className="mt-4 text-lg md:text-xl space-y-2 font-Lora font-extralight">
            Principles of
            <span className="font-bold"> personalization, empathy </span> and
            <span className="font-bold">
              trauma-informed design will improve a user&apos;s experience.
            </span>
            If there were ever a time to advocate for the user, it would be
            during a project of this magnitude. Insisting on having a database,
            a separate team dedicated to research, and ensuring legal
            requirements are met are decisions we stand by - resulting in an end
            product we hope will continue to help those that need it.
          </p>
          <div className="flex flex-col justify-center items-center my-6 h-auto w-full md:w-full mx-auto">
            <Image
              src={
                "/BluePrintForJustice/fd7f13_ef0ca3b0f2cc4ab18093c9de6f16b5c4~mv2.gif"
              }
              alt={"Inclucity_Diagram"}
              width={1000}
              height={1000}
            />
            <div className="mt-4 md:mt-8">
              <a
                href="http://www.blueprintforjustice.com/"
                className="inline-block rounded font-Josefin-Sans bg-navbar-bg px-12 py-3 text-lg font-medium text-white transition hover:bg-slate-600 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Visit the website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BluePrintForJustice;
