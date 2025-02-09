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
          <p className="mt-2">
            There is never failure, only optimization. We evaluate your goals
            and work around any constraints you might have.
          </p>
          <Link
            className="mt-5 group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            href="http://localhost:3000/works/34-blueprintforjustice"
          >
            <span className="absolute inset-0 border border-navbar-bg group-active:border-navbar-bg"></span>
            <span className="block border border-navbar-bg bg-navbar-bg px-8 py-3 transition-transform active:border-navbar-bg active:bg-slate-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              Case Study
            </span>
          </Link>
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
          <p className="mt-2">Branding builds lasting value - aligning you with stakeholders</p>
          <Link
            className="mt-5 group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            href="http://localhost:3000/works/36-incluCityCalgary"
          >
            <span className="absolute inset-0 border border-navbar-bg group-active:border-navbar-bg"></span>
            <span className="block border border-navbar-bg bg-navbar-bg px-8 py-3 transition-transform active:border-navbar-bg active:bg-slate-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              Case Study
            </span>
          </Link>
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
          <p className="mt-2">
            Average attention span: 8.2 seconds. Prioritize yourself, help
            others, and grow together. We can assist.
          </p>
          <Link
            className="mt-5 group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            href="http://localhost:3000/works/33-aggudo"
          >
            <span className="absolute inset-0 border border-navbar-bg group-active:border-navbar-bg"></span>
            <span className="block border border-navbar-bg bg-navbar-bg px-8 py-3 transition-transform active:border-navbar-bg active:bg-slate-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              Case Study
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}