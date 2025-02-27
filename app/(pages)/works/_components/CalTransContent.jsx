import Image from "next/image";
import { ImageOverlay } from "./ImageOverlay";
import ZoomableImage from "./ZoomImage";

const CalTransContent = () => (
  <div>
    <section className="pt-10 py-10 bg-neutral-bg">
      <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Questions</h2>
        <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
          How can this website be improved for employees to access information
          more efficiently?
        </p>
      </div>
    </section>
    <section className="py-10 bg-navbar-bg">
      <div className="container mx-auto text-white px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Solution</h2>
        <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
          Conducting user research about the employees that use the Caltrans
          website and identifying pain-points that employees had. The project
          lead provided this insight based on their own experiences, as well as
          the experiences of others from the biology department, after which, a
          persona was created.
        </p>
      </div>
    </section>
    <section className="py-10 bg-bg-neutral-bg">
      <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">
          Testing Environment
        </h2>
        <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
          Over the course of two hours, the website was explored remotely, with
          the project lead providing thoughts and insights of previous and
          current employees, as well as the webmaster.
        </p>
      </div>
    </section>
    <section className="py-10 bg-navbar-bg">
      <div className="container mx-auto text-white px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text text-4xl md:text-8xl mb-10">
          Current Design
        </h2>
        <div className="justify-center items-center align-middle mx-auto flex gap-2">
          <ImageOverlay
            imageUrl={"/CalTrans/Web 1920 – 1.avif"}
            altText={"NotePage1"}
          />
        </div>
      </div>
    </section>
    <section className="py-10 bg-bg-neutral-bg">
      <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">User Persona</h2>
        <div className="mb-10">
          <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
            After interviewing the project lead and their presentation of the
            employees' thoughts on the website in its current state, this user
            persona was generated.
          </p>
          <div className="my-6 h-auto w-full md:w-3/4 mx-auto">
            <ImageOverlay
              imageUrl={"/CalTrans/CalTrans_Userpersona.webp"}
              altText={"CustomerMap"}
            />
          </div>
          <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
            Meet Sam - who wants an employee portal that requires less
            guesswork. As it is, the website leads to a lot of redownloading of
            the same files and repetition since instructions are not clear for
            onboarding.
          </p>
        </div>
      </div>
    </section>
    <section className="py-10 bg-navbar-bg">
      <div className="container mx-auto text-white px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Other Findings</h2>
        <div className="mb-10">
          <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
            Given the scope of this work, we recommended to the project lead
            that user testing among their colleagues to provide more, in-depth
            feedback from the perspective of Cal-Trans employees.
          </p>
          <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
            The project lead identified that the content (outbound PDF links)
            were to change, there remains further opportunity to create an
            optimal, welcoming experience for all employees.
          </p>
        </div>
      </div>
    </section>
    <section className="py-10 bg-bg-neutral-bg">
      <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">
          Recommendations
        </h2>
        <div className="mb-10">
          <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
            <span className="font-bold">
              1. Maintenance of a strong, visual language
            </span>
            - As the Caltrans public website has been designed with the user in
            mind, it is our strong recommendation that the internal webpages be
            updated to reflect the public CalTrans website (which is WCAG
            compliant).
          </p>
          <ul className="mt-4 pl-10 list-disc text-lg md:text-xl font-Lora space-y-2 font-extralight">
            <li>
              The use of the play icon in blue has no functionality and does not
              serve any intended purpose
            </li>
            <li>
              The use of colloquialisms, such as 'cradle-to-grave' should be
              eliminated
            </li>
          </ul>
          <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
            <span className="font-bold">
              2. Concise Language & Accessibility
            </span>
            - The website contains many words which do not apply to the context
            of this page. For instance, the word &apos;currently&apos; does not apply as
            it is not a dynamic website. Consider removing lengthy descriptions
            for outbound links, and spacing in text that allows for ease of
            reading.
          </p>
          <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
            <span className="font-bold">
              3. Call to Action (CTA) for New Users
            </span>
            - As the second paragraph with the outbound links containing
            resources Mitigation Training are intended to provide insights to
            new users, it is our recommendation that this content be emphasized.
          </p>
          <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
            <span className="font-bold">
              4. Use of Tiles/Alternative Visual Representation
            </span>
            - In place of the accordion menu, tiles may be used instead to
            represent each of the categories. Vector graphics used on the
            Caltrans website would be a great addition and would allow for
            greater brand cohesion.
          </p>
        </div>
      </div>
    </section>
    <section className="py-10 bg-navbar-bg" id="Deliverables">
      <div className="container mx-auto text-white px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Conclusion</h2>

        <p className="mt-4 font-Lora text-lg md:text-xl space-y-2 font-extralight">
          After presenting my initial findings to the client, we also followed
          up with a user persona (above), who presented their work to the Head
          of the Biology Department. The client was satisfied with the work and
          maintained that the recommendations could be implemented as soon as
          Summer 2023.
        </p>
      </div>
    </section>
  </div>
);

export default CalTransContent;
