"use client"
import PostCard from "@/app/_components/PostCard";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function services() {

  
  const [load, onLoad] = useState(false);

  useEffect(() => {
    onLoad(true);
  }, []);

  return (
    <div className={`${load? 'opacity-100' : 'opacity-0'} transition-all duration-500 delay-100`}>
      <PostCard />
      <div className="flex flex-col bg-navbar-bg text-black gap-10 justify-center md:flex-row">
        <div className="m-10 bg-gray-100 drop-shadow-md shadow-lg p-32 rounded-3xl">
          <Image src={"/edit_.png"} alt="" height={200} width={200} className="w-auto h-56" />
          <h2 className="font-Josefin-Sans text-xl">Empowering</h2>
          <p>
            There is never failure, only optimization. We evaluate your goals
            and work around any constraints you might have.
          </p>

          <Link
            className="mt-5 group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            href="#"
          >
            <span class="absolute inset-0 border border-navbar-bg group-active:border-navbar-bg"></span>
            <span class="block border border-navbar-bg bg-navbar-bg px-12 py-3 transition-transform active:border-navbar-bg active:bg-slate-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              Case Study
            </span>
          </Link>
        </div>
        <div className="m-10 bg-gray-100 drop-shadow-md shadow-lg p-32 rounded-3xl">
        <Image src={"/innovation-9648.svg"} alt="" height={100} width={100} className="w-auto h-48"  />
          <h2 className="font-Josefin-Sans text-xl">Innovative</h2>
          <p>Branding builds lasting value - aligning you with stakeholders</p>
          <Link
            className="mt-5 group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            href="#"
          >
            <span class="absolute inset-0 border border-navbar-bg group-active:border-navbar-bg"></span>
            <span class="block border border-navbar-bg bg-navbar-bg px-8 py-3 transition-transform active:border-navbar-bg active:bg-slate-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              Case Study
            </span>
          </Link>
        </div>
        <div className="m-10 bg-gray-100 drop-shadow-md shadow-lg  p-32 rounded-3xl">
        <Image src={"/transforming.png"} alt="" height={100} width={100} className="w-auto h-52 "  />

          <h2 className="font-Josefin-Sans text-xl">Transforming</h2>
          <p>
            Average attention span: 8.2 seconds. Prioritize yourself, help
            others, and grow together. We can assist.
          </p>
          <Link
            className="mt-5 group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            href="#"
          >
            <span class="absolute inset-0 border border-navbar-bg group-active:border-navbar-bg"></span>
            <span class="block border border-navbar-bg bg-navbar-bg px-12 py-3 transition-transform active:border-navbar-bg active:bg-slate-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              Case Study
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
