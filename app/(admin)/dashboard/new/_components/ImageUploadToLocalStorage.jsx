"use client"
import React, { useRef } from "react";
import { FaRegImage } from "react-icons/fa";

function ImageUploadToLocalStorage() {

  const imageRef = useRef()
  const handleFile  = (e)=>{
    
    const fr = new FileReader()

      fr.readAsDataURL(e.target.files[0])

      fr.addEventListener('load', ()=>{
        const url = fr.result
        localStorage.setItem('uploadedImage', url)
      })
    // document.getElementById('preview-image').src = URL.createObjectURL(e.target.files[0])
    
    const image = localStorage.getItem('uploadedImage')

    // imageRef.current.src = URL.createObjectURL(e.target.files[0])

    imageRef.current.src = image

    console.log(image)

  }

  return (
    <div>
      {" "}
      <img ref={imageRef} />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e)}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
      >
        <FaRegImage size={20} />
      </label>
    </div>
  );
}

export default ImageUploadToLocalStorage;
