import Image from "next/image";
import React from "react";

function AboutProjectDetails({ aboutWork, goals, role, tools, duration }) {
  return (
    <div className="max-w-screen mx-auto p-4 sm:p-6 md:p-8 bg-navbar-bg sm:grid sm:grid-cols-2">
      {/* Left Column */}
      <div className="text-slate-50 px-4 sm:px-8 md:px-16 lg:px-24 mx-0 sm:mx-8 md:mx-16 lg:mx-32 my-4">
        <h4 className="font-Lora text-left text-2xl sm:text-3xl md:text-4xl">About The Project</h4>
        <p className="text-base sm:text-lg md:text-xl text-left mt-3 mr-0 sm:mr-4 md:mr-8 lg:mr-10 space-y-4 font-Josefin-Sans">
          {aboutWork}
        </p>

        <button className="flex mt-5 text-left text-lg sm:text-xl md:text-xl font-extralight bg-white text-navbar-bg rounded-full border px-4 sm:px-6 md:px-8 py-2 items-start justify-start transition-all duration-300 ease-in hover:bg-navbar-bg hover:text-white">
          Deliverables
        </button>

        <h4 className="font-Lora text-left text-2xl sm:text-3xl md:text-4xl mt-8 sm:mt-12 md:mt-16">
          Goal
        </h4>
        <p className="text-lg sm:text-xl md:text-2xl text-left mt-3 mr-0 sm:mr-4 md:mr-8 lg:mr-24 space-y-4 font-bold">
          {goals}
        </p>
      </div>

      {/* Right Column */}
      <div className="text-slate-50 px-4 sm:px-8 md:px-16 lg:px-24 mx-0 sm:mx-8 md:mx-16 lg:mx-32 my-4">
        <h4 className="font-Lora text-left text-2xl sm:text-3xl md:text-4xl">Role</h4>
        <p className="text-lg sm:text-xl md:text-xl text-left mt-3 mr-0 sm:mr-4 md:mr-8 lg:mr-10 space-y-4 font-Josefin-Sans">
          {role}
        </p>

        {/* Tools Section */}
        <div id="Tools">
          <h4 className="font-Lora text-left text-2xl sm:text-3xl md:text-4xl mt-6 md:mt-8">
            Tools
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 p-2">
            {tools?.map((tool, index) => (
              <div
                key={index}
                className="group m-2 rounded-lg flex justify-center items-center"
              >
                <Image
                  src={tool.src}
                  height={400}
                  width={400}
                  alt={tool.name}
                  className="w-auto h-10 sm:h-12 md:h-14 transition-all duration-300 ease-in-out group-hover:opacity-0"
                />

                <p className="w-16 h-16 font-Josefin-Sans text-lg sm:text-xl md:text-2xl text-center align-middle absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h4 className="font-Lora text-left text-2xl sm:text-3xl md:text-4xl mt-4 md:mt-6">
          Duration
        </h4>
        <p className="text-lg sm:text-xl md:text-xl text-left mt-3 mr-0 sm:mr-4 md:mr-8 lg:mr-24 space-y-4 font-Josefin-Sans">
          {duration}
        </p>
      </div>
    </div>
  );
}

export default AboutProjectDetails;