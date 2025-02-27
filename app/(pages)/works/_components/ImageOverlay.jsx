"use client";

import Image from "next/image";
import React, { useState } from "react";

export const ImageOverlay = ({ imageUrl, altText, size }) => {
  // State to handle whether the overlay is open or not
  const [isOpen, setIsOpen] = useState(false);


  // Function to open the overlay
  const openOverlay = () => {
    setIsOpen(true);
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      {/* Thumbnail image to click */}
      <div className="relative max-w-max overflow-hidden bg-cover bg-no-repeat">
        <img
          src={imageUrl}
          alt={altText}
          onClick={openOverlay}
          className="cursor-pointer object-cover z-999 transition-all duration-300"
        />
        <a onClick={openOverlay}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed opacity-0 cursor-pointer transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>

      {/* Modal (overlay) */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          // onClick={closeOverlay}
        >
          <div
            className="relative bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
          >
            <button
              onClick={closeOverlay}
              className="fixed top-0 right-0 font-extralight text-2xl text-white mx-8 my-6 overflow-clip rounded-full"
            >
              X
            </button>
            <Image
              src={imageUrl}
              quality={100}
              height={1000}
              width={1000}
              alt={altText}
              className="max-w-full max-h-full h-full w-full object-fill"
            />
          </div>
        </div>
      )}
    </div>
  );
};
