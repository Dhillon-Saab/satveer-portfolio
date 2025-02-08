import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ more ,heading, desc, img, align }) {
  return (
    <div className="justify-center mx-auto h-80 md:h-auto w-full bg-darker grid grid-cols-2">
      {align === "left" ? (
        <>
          <div className="">
            <Image
              className="object-cover w-full h-full"
              src={img}
              height={1000}
              width={1000}
              alt=""
            />
          </div>
          <div className="justify-center items-center my-auto">
            <h2 className="text-white font-Josefin-Sans text-2xl justify-center items-center lg:text-5xl md:text-4xl">
              {heading}
            </h2>
            <p className="text-white font-extralight text-xl text-left mx-auto max-w-2/4 w-2/4 justify-start items-start my-5 hidden md:block">
              {desc}
            </p>
            <Link
              className="inline-block rounded border border-gray-100 bg-gray-100 px-12 py-3 text-md font-medium text-navbar-bg hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white md:mt-0 mt-4"
              href={`/works/${more}`}
            >
              Read More
            </Link>
          </div>
        </>
      ) : (
        <>

          <div className="justify-center items-center my-auto">
            <h2 className="text-white font-Josefin-Sans text-2xl justify-center items-center lg:text-5xl md:text-4xl">
              {heading}
            </h2>
            <p className="text-white font-extralight text-xl text-left mx-auto max-w-2/4 w-2/4 justify-start items-start my-5 hidden md:block">
              {desc}
            </p>
            <Link
              className="inline-block rounded border border-gray-100 bg-gray-100 px-12 py-3 text-md font-medium text-navbar-bg hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white md:mt-0 mt-4"
              href={`/works/${more}`}
            >
              Read More
            </Link>
          </div>
          <div className="">
            <Image
              className="object-cover w-full h-full"
              src={img}
              height={1000}
              width={1000}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
}
