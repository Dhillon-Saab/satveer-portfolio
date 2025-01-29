import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFigma, FaGithub } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";

function AboutProjectDetails() {
  return (
    <div className="max-w-screen mx-auto p-6 overflow-hidden bg-navbar-bg sm:grid sm:grid-cols-2">
      <div className="text-slate-50 px-24 mx-32 my-4">
        <h4 className="font-Lora text-left text-3xl">About The Project</h4>
        <p className="text-lg text-left mt-3 mr-10 space-y-4 space-x-4 font-Josefin-Sans ">
          Aggüdo Coffee is a Black-Owned Coffee Shop that provides Ethiopian
          Coffee. Aggüdo comes from the Amharic word, መዐቆቢ, which translates to
          &apos;Haven&apos;, The owner&apos;s intent is to continue to provide a safe space for
          everybody from all walks of life to relax.
        </p>

        <button className="flex mt-5 text-left text-xl font-extralight bg-white text-navbar-bg rounded-full border px-6 py-2 items-start justify-start transition-all duration-300 ease-in hover:bg-navbar-bg hover:text-white">
          Deliverables
        </button>

        <h4 className="font-Lora text-left text-3xl mt-16">Goal</h4>
        <p className="text-xl text-left mt-3 mr-24 space-y-4 font-bold">
          Improve the employee experience (EX) and customer experience (CX).
        </p>
      </div>

      <div className="text-slate-50 px-24 mx-32 my-4">
        <h4 className="font-Lora text-left text-3xl">Role</h4>
        <p className="text-xl text-left mt-3 mr-10 space-y-4 space-x-4 font-Josefin-Sans ">
          Design, Research & Revenue Generation
        </p>

        <div id="Tools">
          <h4 className="font-Lora text-left text-3xl mt-6">Tools</h4>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 p-2">
            <div className="group m-2 rounded-lg flex justify-center items-center">
              <Image
                src={"/adobe-xd-icon.png"}
                height={400}
                width={400}
                alt="Xd"
                className="w-12 h-12 transition-all duration-300 ease-in-out group-hover:opacity-0"
              />

              <p className="w-16 h-16 font-Josefin-Sans text-2xl text-center align-middle absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Adobe Xd{" "}
              </p>
            </div>
            <div className="group m-2 rounded-lg flex justify-center items-center">
              <Image
                src={"/adobe-Ill-icon.png"}
                height={400}
                width={400}
                alt="Xd"
                className="w-12 h-12 transition-all duration-300 ease-in-out group-hover:opacity-0"
              />

              <p className="w-16 h-16 font-Josefin-Sans text-2xl text-center align-middle absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Adobe Illustrator{" "}
              </p>
            </div>
            <div className="group m-2 rounded-lg flex justify-center items-center">
              <Image
                src={"/logo-figma-icon.png"}
                height={400}
                width={400}
                alt="Xd"
                className="w-auto h-12 transition-all duration-300 ease-in-out group-hover:opacity-0"
              />

              <p className="w-16 h-16 font-Josefin-Sans text-2xl text-center align-middle absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Figma{" "}
              </p>
            </div>
            <div className="group m-2 rounded-lg flex justify-center items-center">
              <Image
                src={"/trello-icon.png"}
                height={400}
                width={400}
                alt="Xd"
                className="w-auto h-12 transition-all duration-300 ease-in-out group-hover:opacity-0"
              />

              <p className="w-16 h-16 font-Josefin-Sans text-2xl text-center align-middle absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Trello{" "}
              </p>
            </div>
            <div className="group m-2 rounded-lg flex justify-center items-center">
              <Image
                src={"/Adbob-acrobat.png"}
                height={400}
                width={400}
                alt="Xd"
                className="w-auto h-12 transition-all duration-300 ease-in-out group-hover:opacity-0"
              />

              <p className="w-16 h-16 font-Josefin-Sans text-2xl text-center align-middle absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Adobe Acrobat{" "}
              </p>
            </div>
            <div className="group m-2 rounded-lg flex justify-center items-center">
              <Image
                src={"/ms-word.png"}
                height={400}
                width={400}
                alt="Xd"
                className="w-auto h-12 transition-all duration-300 ease-in-out group-hover:opacity-0"
              />

              <p className="w-16 h-16 font-Josefin-Sans text-2xl text-center align-middle absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Microsoft Word{" "}
              </p>
            </div>
          </div>
        </div>

        <h4 className="font-Lora text-left text-3xl mt-4">Duration</h4>
        <p className="text-xl text-left mt-3 mr-24 space-y-4 font-Josefin-Sans">
          4 Months
        </p>
      </div>
    </div>
  );
}

export default AboutProjectDetails;
