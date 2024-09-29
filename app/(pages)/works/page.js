"use client"
import React, { useEffect, useState } from "react";
import ProjectCard from "./_components/ProjectCard";

function page() {

  const [load, onLoad] = useState(false);

  useEffect(() => {
    onLoad(true);
  }, []);

  return (
    <div className={`px-10 text-center justify-center items-center ${load? 'opacity-100' : 'opacity-0'} transition-all duration-500 delay-100`}>
      <ProjectCard more={"aggudo"} desc={"Taking a user-centred approach to staff and customer-well being"}  heading={"Aggüdo Coffee"} img={"/aggudo.webp"} align={"left"}/>
      <ProjectCard more={"blueprintforjustice"} desc={"Empowering those that have experienced police violence to heal and seek justice."}  heading={"Blueprint for Justice"} img={"/pic2.webp"} align={"right"}/>
      {/* <p className="text-4xl">This feature is under-development. Thanks for patience</p> */}
    </div>
  );
}

export default page;
