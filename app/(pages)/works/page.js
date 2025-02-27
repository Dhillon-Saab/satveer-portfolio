"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./_components/ProjectCard";
import { getAllTheWorks } from "@/actions/getWorks";
import Loading from "@/app/loading";

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
          {workData.sort((a,b) => parseInt(a.id) - parseInt(b.id)).map((work, index) => (
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
        <Loading />
      )}
      {/* <ProjectCard more={"aggudo"} desc={"Taking a user-centred approach to staff and customer-well being"}  heading={"Aggüdo Coffee"} img={"/aggudo.webp"} align={"left"}/>
      <ProjectCard more={"blueprintforjustice"} desc={"Empowering those that have experienced police violence to heal and seek justice."}  heading={"Blueprint for Justice"} img={"/pic2.webp"} align={"right"}/> */}
      {/* <p className="text-4xl">This feature is under-development. Thanks for patience</p> */}
    </>
  );
}

export default Page;
