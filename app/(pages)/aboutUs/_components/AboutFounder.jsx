import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutFounder() {
  return (
    <section className="pt-10 py-10 bg-neutral-50">
      <div className="flex flex-col container mx-auto text-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 text-left">
        <h2 className="font-Lora text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
          About The Founder
        </h2>
        <div className="flex justify-center items-center">
          <Image
            src={"/satveer.avif"}
            width={300}
            height={300}
            className="border-2 border-gray-700 rounded-full"
            alt="Founder Image"
          />
        </div>
        <p className="flex mt-4 mx-auto items-center justify-center text-center font-Lora text-lg sm:text-xl space-y-2">
          Satveer Singh
          <br />
          <br />
          Since the beginning of my career, I've focused on channelling my
          talent and creativity into meaningful and powerful results. I take
          pride in the work I do, as well as the strong relationships I've built
          with clients and colleagues. I firmly believe in working hard, working
          together and having fun along the way. If you're interested in
          learning more about me or my work, simply reach out.
        </p>

        <div className="flex justify-center align-middle items-center mt-6 sm:mt-8">
          <Link
            href="/contactUs"
            className="inline-block rounded bg-navbar-bg px-8 sm:px-12 py-2 sm:py-3 text-sm sm:text-lg font-medium text-white transition hover:bg-slate-600 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}