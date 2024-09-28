import Image from "next/image";
import React from "react";

export default function PostCard() {
  return (
    <article className="relative drop-shadow-xl shadow-lg overflow-hidden shadow transition hover:shadow-lg">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute h-full w-full object-cover"
        height={1000}
        width={1000}
      />

      <div className="relative bg-gradient-to-t from-gray-900/80 to-gray-900/65 pt-32 sm:pt-48 lg:pt-6 lg:pb-24">
        <div className="p-4 sm:p-10">
          <div>
            <h3 className="mt-20 text-center text-6xl font-Josefin-Sans text-white">
              Our Services
            </h3>
          </div>

          <p className="m-2 font-Josefin-Sans text-center line-clamp-3 text-3xl text-white/60">
            People-Focused.
          </p>
          <p className="m-2 font-Josefin-Sans text-center line-clamp-3 text-3xl text-white/60">
            Action-Oriented.
          </p>
        </div>
      </div>
    </article>
  );
}
