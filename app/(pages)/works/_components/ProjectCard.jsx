import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ more, heading, desc, img, align }) {
  return (
    <div className="justify-center mx-auto h-auto md:h-auto w-full bg-darker grid grid-cols-1 md:grid-cols-2">
      {align === "left" ? (
        <>
          {/* Image on the left for larger screens */}
          <div className="order-1 md:order-1">
            <Image
              className="object-cover w-full h-64 md:h-full"
              src={img}
              height={1000}
              width={1000}
              alt=""
            />
          </div>
          {/* Content on the right for larger screens */}
          <div className="order-2 md:order-2 flex flex-col justify-center items-center p-6 md:p-10">
            <h2 className="text-white font-Josefin-Sans text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
              {heading}
            </h2>
            <p className="text-white font-extralight text-lg md:text-xl text-center md:text-left mx-auto mt-4 md:mt-5 md:max-w-2/4 hidden md:block">
              {desc}
            </p>
            <Link
              className="inline-block rounded border border-gray-100 bg-gray-100 px-8 py-2 md:px-12 md:py-3 text-sm md:text-md font-medium text-navbar-bg hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white mt-6 md:mt-8"
              href={`/works/${more}`}
            >
              Read More
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Content on the left for larger screens */}
          <div className="order-2 md:order-1 flex flex-col justify-center items-center p-6 md:p-10">
            <h2 className="text-white font-Josefin-Sans text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
              {heading}
            </h2>
            <p className="text-white font-extralight text-lg md:text-xl text-center md:text-left mx-auto mt-4 md:mt-5 md:max-w-2/4 hidden md:block">
              {desc}
            </p>
            <Link
              className="inline-block rounded border border-gray-100 bg-gray-100 px-8 py-2 md:px-12 md:py-3 text-sm md:text-md font-medium text-navbar-bg hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white mt-6 md:mt-8"
              href={`/works/${more}`}
            >
              Read More
            </Link>
          </div>
          {/* Image on the right for larger screens */}
          <div className="order-1 md:order-2">
            <Image
              className="object-cover w-full h-64 md:h-full"
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