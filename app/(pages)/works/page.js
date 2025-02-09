"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./_components/ProjectCard";
import { getAllTheWorks } from "@/actions/getWorks";

function Page() {
  const [workData, setWorkData] = useState([]);

  const fetchWorks = async () => {
    const data = await getAllTheWorks();
    setWorkData(data);
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <>
      {typeof workData === "object" && workData?.length >= 1 ? (
        <div className="md:px-10 text-center justify-center items-center">
          {workData.map((work, index) => (
            <ProjectCard
              key={work.id}
              more={`${work.id}-${work?.content?.url}`}
              desc={work.content?.shortDesc}
              heading={work?.title}
              img={work.content?.projectImage}
              align={index % 2 == 0 ? "left" : "right"}
            />
          ))}
        </div>
      ) : (
        <section className="bg-navbar-bg relative place-items-center grid h-screen w-screen gap-4">
          <div className="bg-gray-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

          <div className="bg-gray-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

          <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-900 filter mix-blend-overlay h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </section>
      )}
      {/* <ProjectCard more={"aggudo"} desc={"Taking a user-centred approach to staff and customer-well being"}  heading={"Aggüdo Coffee"} img={"/aggudo.webp"} align={"left"}/>
      <ProjectCard more={"blueprintforjustice"} desc={"Empowering those that have experienced police violence to heal and seek justice."}  heading={"Blueprint for Justice"} img={"/pic2.webp"} align={"right"}/> */}
      {/* <p className="text-4xl">This feature is under-development. Thanks for patience</p> */}
    </>
  );
}

export default Page;
