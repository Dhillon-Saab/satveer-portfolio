import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className="p-10 object-center bg-cover mx-auto text-white text-center bg-navbar-bg md:bg-[url('/banner_bg.png')]">
    <div>
      <Image
        src={"/headPage.png"}
        alt=""
        height={350}
        width={350}
        className="mx-auto w-fit h-fit"
      />
      <p className="mt-4 bold text-xl font-Lora">Creating Digital Legacies, One Pixel At A Time</p>
    </div>
  </div>
  )
}

export default Banner