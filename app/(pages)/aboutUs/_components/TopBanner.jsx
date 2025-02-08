import Image from "next/image";
import React from "react";

export default function TopBanner() {
  return (
    <article className="relative drop-shadow-xl shadow-lg overflow-hidden transition hover:shadow-lg">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1497240299146-17ff4089466a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute h-full w-full object-cover"
        height={900}
        width={900}
      />

      <div className="relative bg-gradient-to-tr from-gray-900/10 to-gray-900/25 pt-12 sm:pt-16 lg:pt-16 lg:pb-20">
        <div className="p-2 sm:p-10">
          <div>
            <h3 className="mt-10 text-center text-4xl sm:text-5xl lg:text-6xl font-Josefin-Sans text-white">
              About Us
            </h3>
          </div>

          <p className="m-2 font-Josefin-Sans text-center line-clamp-3 text-3xl sm:text-4xl lg:text-5xl text-white">
            <Image
              className="mx-auto"
              src={"/सेवा.png"}
              width={200}
              height={200}
              alt="Seva"
            />
          </p>
          <p className="m-2 font-Josefin-Sans text-center line-clamp-3 text-2xl sm:text-3xl lg:text-4xl text-white">
            Seva - Selfless Service
          </p>
        </div>
      </div>
    </article>
  );
}