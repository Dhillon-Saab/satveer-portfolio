"use client";
import React, { useEffect, useState } from "react";
import MediaLayout from "./_components/MediaLayout";
import { getAllTheImages } from "@/actions/getMedia";

export default function Page() {
  const [imagesData, setImagesData] = useState();

  const fetchImages = async () => {
    const data = await getAllTheImages();
    setImagesData(data);
  };

  useEffect(() => {
    fetchImages();
  }, [imagesData]);

  return (
    <div className="flex">
      {typeof imagesData === "object" || imagesData !== undefined ? (
        imagesData.map((image, index) => (
          <MediaLayout key={index} url={image.publicUrl} name={image.image} />
        ))
      ) : (
        <>
          <div className="text-xl font-bold font-Lora text-black block h-auto w-auto items-center justify-center align-middle">
            No Media Files Found.
          </div>
        </>
      )}
    </div>
  );
}

