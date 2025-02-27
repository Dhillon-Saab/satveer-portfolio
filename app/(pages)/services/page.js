import PostCard from "@/app/_components/PostCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <div className="">
      <PostCard />
      <div className="flex flex-col bg-navbar-bg text-black gap-6 justify-center md:flex-row md:gap-10">
        <div className="m-4 bg-gray-100 drop-shadow-md shadow-lg p-6 md:p-8 lg:p-32 md:w-full rounded-3xl">
          <Image 
            src={"/edit_.png"} 
            alt="" 
            height={500} 
            width={500} 
            className="w-auto mx-auto h-40 md:h-56" 
          />
          <h2 className="font-Josefin-Sans text-xl mt-4">Empowering</h2>
          <p className="mt-2 font-Lora">
            There is never failure, only optimization. We evaluate your goals
            and work around any constraints you might have.
          </p>
          <div className="mt-4 md:mt-8">
            <Link
              href="/works/34-blueprintforjustice"
              className="inline-block rounded font-Josefin-Sans bg-navbar-bg px-8 py-2 text-base font-medium text-white transition hover:bg-slate-600 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Case Study
            </Link>
          </div>
        </div>
        <div className="m-4 bg-gray-100 drop-shadow-md shadow-lg p-6 md:p-8 lg:p-32 md:w-full rounded-3xl">
          <Image 
            src={"/innovation-9648.svg"} 
            alt="" 
            height={100} 
            width={100} 
            className="w-auto mx-auto h-32 md:h-48" 
          />
          <h2 className="font-Josefin-Sans text-xl mt-4">Innovative</h2>
          <p className="mt-2 font-Lora">Branding builds lasting value - aligning you with stakeholders</p>
          <div className="mt-4 md:mt-8">
            <Link
              href="/works/36-incluCityCalgary"
              className="inline-block rounded font-Josefin-Sans bg-navbar-bg px-8 py-2 text-base font-medium text-white transition hover:bg-slate-600 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Case Study
            </Link>
          </div>
        </div>
        <div className="m-4 bg-gray-100 drop-shadow-md shadow-lg p-6 md:p-8 lg:p-32 md:w-full rounded-3xl">
          <Image 
            src={"/transforming.png"} 
            alt="" 
            height={100} 
            width={100} 
            className="w-auto mx-auto h-36 md:h-52" 
          />
          <h2 className="font-Josefin-Sans text-xl mt-4">Transforming</h2>
          <p className="mt-2 font-Lora">
            Average attention span: 8.2 seconds. Prioritize yourself, help
            others, and grow together. We can assist.
          </p>
          <div className="mt-4 md:mt-8">
            <Link
              href="/works/33-aggudo"
              className="inline-block rounded font-Josefin-Sans bg-navbar-bg px-8 py-2 text-base font-medium text-white transition hover:bg-slate-600 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}