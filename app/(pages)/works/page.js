import ProjectCard from "./_components/ProjectCard";

function page() {
  return (
    <div className="px-10 text-center justify-center items-center">
      <ProjectCard more={"aggudo"} desc={"Taking a user-centred approach to staff and customer-well being"}  heading={"Aggüdo Coffee"} img={"/aggudo.webp"} align={"left"}/>
      <ProjectCard more={"blueprintforjustice"} desc={"Empowering those that have experienced police violence to heal and seek justice."}  heading={"Blueprint for Justice"} img={"/pic2.webp"} align={"right"}/>
      {/* <p className="text-4xl">This feature is under-development. Thanks for patience</p> */}
    </div>
  );
}

export default page;
