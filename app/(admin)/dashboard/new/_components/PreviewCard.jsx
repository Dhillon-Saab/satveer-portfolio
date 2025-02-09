"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

function PreviewCard({ title, setTitle, shortDesc, setShortDesc }) {
  const previewImageRef = useRef(null);

  const handleFile = (e) => {
    const fr = new FileReader();
    if (e.target.files.length >= 1) {
      fr.readAsDataURL(e.target.files[0]);
      fr.addEventListener("load", () => {
        const url = fr.result;
        localStorage.setItem("previewImage", url);
      });
      const image = localStorage.getItem("previewImage");
      console.log(image);
      previewImageRef.current.src = URL.createObjectURL(e.target.files[0]);
    }
  };

  return (
    <div>
        <h2 className="text-2xl mt-2 font-bold font-Josefin-Sans">Upload Preview Details</h2>
      <div className="justify-center mx-auto h-auto md:h-auto w-full bg-darker grid grid-cols-1 md:grid-cols-2">
        <div className="order-1 md:order-1 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e)}
            className="hidden"
            id="preview-image-upload"
          />
          <label
            htmlFor="preview-image-upload"
            className="bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
          >
            <div className="w-auto h-[520px]">
              <img
                ref={previewImageRef}
                className="object-cover w-full h-64 md:h-full opacity-100 block transition-opacity ease-in backface-hidden hover:opacity-30"
                src={"/uploadImage.png"}
                alt=""
              />
            </div>
          </label>
          <div className="transition-opacity text-center opacity-0 ease-in relative bottom-1/2 mx-auto left-1/4 hover:opacity-100"></div>
        </div>
        {/* Content on the right for larger screens */}
        <div className="order-2 md:order-2 flex flex-col justify-center items-center p-6 md:p-10">
          <h2 className="text-white font-Josefin-Sans text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-navbar-bg text-center p-2 outline-1"
              placeholder="Title for the Project"
              required
            />
          </h2>
          <p className="text-white font-extralight  text-lg md:text-xl text-center md:text-left mx-auto mt-4 md:mt-5 md:max-w-2/4 hidden md:block">
            <textarea
              name="shortDesc"
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              id="shortDesc"
              cols="50"
              rows="3"
              className="resize-none bg-navbar-bg text-lg font-extralight text-center"
              placeholder="Short Description for the Project"
            />
          </p>
          <Link
            className="inline-block rounded border border-gray-100 bg-gray-100 px-8 py-2 md:px-12 md:py-3 text-sm md:text-md font-medium text-navbar-bg hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white mt-6 md:mt-8"
            href={`#`}
          >
            Draft
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
