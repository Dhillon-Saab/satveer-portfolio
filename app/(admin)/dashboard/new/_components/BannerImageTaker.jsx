"use client";
import Image from "next/image";
import React, { useRef } from "react";

export default function BannerImageTaker() {
  const bannerImageRef = useRef(null);

  const handleFile = (e) => {
    const fr = new FileReader();
    if (e.target.files.length >= 1) {
      fr.readAsDataURL(e.target.files[0]);
      fr.addEventListener("load", () => {
        const url = fr.result;
        localStorage.setItem("bannerImage", url);
      });
      const image = localStorage.getItem("bannerImage");
      bannerImageRef.current.src = URL.createObjectURL(e.target.files[0]);
    }
  };

  return (
    <div
      id="Top-Banner"
      className="justify-center mx-auto w-full h-48 sm:h-56 md:h-64 lg:h-72 flex"
    >
      <div className="flex flex-col text-2xl mt-2 font-bold font-Josefin-Sans">
      <h2> Upload Banner Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e)}
        className="hidden"
        id="banner-image-upload"
      />
      <label
        htmlFor="banner-image-upload"
        className="bg-darker rounded cursor-pointer hover:bg-darker"
      >
        <div className="w-auto h-full">
        <img
          ref={bannerImageRef}
          alt="Banner Image"
          src={"/bannerUpload.jpg"}
          width={1229}
          className="flex w-full h-[260px] items-center justify-center object-cover md:w-screen sm:w-screen opacity-100 transition-opacity ease-in backface-hidden hover:opacity-30"
        />
        </div>
      </label>
      </div>

    </div>
  );
}
