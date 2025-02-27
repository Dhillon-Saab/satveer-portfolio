import Image from "next/image";
import { ImageOverlay } from "./ImageOverlay";
import ZoomableImage from "./ZoomImage";

const IncluCityContent = () => (
  <div>
    <section className="pt-10 py-10 bg-neutral-bg">
      <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Questions</h2>
        <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
          In order to define the scope of the project, we had to ask ourselves:
        </p>
        <ol className="mt-4 pl-10 list-decimal text-lg md:text-xl space-y-2 font-Lora font-extralight">
          <li>How do you create an identity around usability testing?</li>
          <li>
            How do you create a system for succession be so that volunteers at
            any skill level can feel like they can get involved?
          </li>
        </ol>
      </div>
    </section>
    <section className="py-10 bg-navbar-bg">
      <div className="container mx-auto text-white px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Challenges</h2>
        <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
          How do we roll out an identity for a group while representing the
          tenets of accessible design? With no name, how do a group of directors
          come to a consensus on a name that represents the people of Calgary,
          without including words that have connotations, such as 'civic' or
          'user'.
        </p>
      </div>
    </section>
    <section className="py-10 bg-bg-neutral-bg">
      <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Solution</h2>
        <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
          Create an identity around the most up-to-date information on
          accessible design so anyone at any level could understand it.
        </p>
      </div>
    </section>
    <section className="py-10 bg-navbar-bg">
      <div className="container mx-auto text-white px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Design Process</h2>
        <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
          We started by brainstorming ideas for a potential name while
          consisting polling our team for a name that would work. For some time,
          the working name was 'Evolve', and so I created some sketches based on
          what that would look like.
        </p>
        <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
          After receiving feedback from the Board of Directors, we further
          improved them. The name shifted from Evolve to IncluCity - being
          distinct enough to stand on its own and represent the aim of inclusive
          usability testing without the need for an acronym.
        </p>
        <ol className="my-6 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
          <li className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <ImageOverlay
              imageUrl={"/BrainstormingIncluCity.webp"}
              altText={"BrainstormingIncluCity"}
            />
            <ImageOverlay
              imageUrl={"/DraftsofLogosIncluCity.webp"}
              altText={"DraftsofLogosIncluCity"}
            />
            <ImageOverlay
              imageUrl={"/EvolveWorkingNameIncluCity.webp"}
              altText={"EvolveWorkingNameIncluCity"}
            />
          </li>
        </ol>
      </div>
    </section>
    <section className="py-10 bg-bg-neutral-bg">
      <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">
          Creative Strategy
        </h2>
        <div className="mb-10">
          <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
            Accessibility First
          </h3>
          <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
            After months of planning, the final name, IncluCity Calgary was
            selected. Colours and typefaces were selected with Web Content
            Accessibility Guidelines (WCAG) and designed with colourblindness in
            mind.
          </p>
          <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
            IncluCity Calgary represents an inclusive focused approach for
            usability testing in the city of Calgary, with a play on the word
            'inclusivity'. This appears as our wordmark. Elements that would
            carry over were the idea of 'dialogue' with a circular, unending
            motif.
          </p>
          <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
            The icon mark of the logo is the 'C' for 'City' which is in the form
            of a speech bubble. The icon pointing to Calgary emphasizes the
            importance of hearing from Calgarians to improve the experiences
            people have with technology.
          </p>
          <div className="my-6 h-auto w-full md:w-3/4 mx-auto">
            <ImageOverlay
              imageUrl={"/Inclucity_Diagram.webp"}
              altText={"Inclucity_Diagram"}
            />
            <p className="font-thin font-Lora text-sm md:text-base text-center">
              A diagram explaining the components of the final design.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-10 bg-navbar-bg" id="Deliverables">
      <div className="container mx-auto text-white px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">Final Product</h2>
        <div className="mb-10">
          <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
            The Making of a Brand
          </h3>
          <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
            Select pages from the visual identity system developed, including
            font hierarchy, design rationale, colour application and multiple
            use cases. The final publication can be seen below.
          </p>
          <div className="grid grid-cols-3 gap-6 my-6">
            <ImageOverlay
              imageUrl={
                "/IncluCityBrand/IncluCity Brand Guidelines_2022_Page_05.webp"
              }
              altText={"IncluCity Brand Guidelines_2022_Page_05"}
            />
            <ImageOverlay
              imageUrl={
                "/IncluCityBrand/IncluCity Brand Guidelines_2022_Page_09.webp"
              }
              altText={"ClearSpace"}
            />
            <ImageOverlay
              imageUrl={
                "/IncluCityBrand/IncluCity Brand Guidelines_2022_Page_11.webp"
              }
              altText={"Logo Standards"}
            />
            <ImageOverlay
              imageUrl={
                "/IncluCityBrand/IncluCity Brand Guidelines_2022_Page_14.webp"
              }
              altText={"Manual_V5_Page_06"}
            />
            <ImageOverlay
              imageUrl={
                "/IncluCityBrand/IncluCity Brand Guidelines_2022_Page_13.webp"
              }
              altText={"Manual_V5_Page_06"}
            />
            <ImageOverlay
              imageUrl={
                "/IncluCityBrand/IncluCity Brand Guidelines_2022_Page_08.webp"
              }
              altText={"Manual_V5_Page_06"}
            />
            <ImageOverlay
              imageUrl={
                "/IncluCityBrand/IncluCity Brand Guidelines_2022_Page_06.webp"
              }
              altText={"Manual_V5_Page_06"}
            />
            <ImageOverlay
              imageUrl={
                "/IncluCityBrand/IncluCity Brand Guidelines_2022_Page_15.webp"
              }
              altText={"Manual_V5_Page_06"}
            />
            <ImageOverlay
              imageUrl={
                "/IncluCityBrand/IncluCity Brand Guidelines_2022_Page_17.webp"
              }
              altText={"Manual_V5_Page_06"}
            />
          </div>
          <div className="mt-4 md:mt-8 items-center mx-auto flex justify-center">
            <a
              href="https://docs.google.com/presentation/d/1Osv3UV_IfTV21uOxFEux5Nkt06qZ3hj3/edit?rtpof=true&sd=true"
              className="inline-block rounded bg-white px-12 py-3 text-lg font-Josefin-Sans font-medium text-navbar-bg transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
              View the Manual Here
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="py-10 bg-bg-neutral-bg">
      <div className="container mx-auto text-navbar-bg px-4 md:px-64 text-left">
        <h2 className="font-Josefin-Sans text-4xl md:text-8xl mb-10">End Result</h2>
        <div className="mb-10">
          <h3 className="font-Josefin-Sans text-2xl md:text-3xl mb-6">
            The Birth of a Social Enterprise
          </h3>
          <p className="mt-4 list-none text-lg md:text-xl space-y-2 font-Lora font-extralight">
            As a result of having a cohesive brand that all members could
            continuously develop content for,
            <span className="font-bold">
              IncluCity Calgary has grown and has a valuation of over $100,000
            </span>
            , continues to be featured in the press, with support from
            institutions such as The United Way.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default IncluCityContent;
