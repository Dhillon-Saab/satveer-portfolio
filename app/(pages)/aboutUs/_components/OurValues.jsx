import Image from "next/image";
import React from "react";

export default function OurValues() {
  return (
    <section className="pt-10 py-10 bg-neutral-50">
      <div className="container mx-auto text-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 text-left">
        <h2 className="font-Lora text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
          Our Values
        </h2>

        <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              bg: "bg-red-500",
              image: "/strength.png",
              title: "Strength",
              description:
                "It takes courage to commit your vision; we earn your trust and ensure our journey is successful.",
            },
            {
              bg: "bg-amber-200",
              image: "/Compassion.png",
              title: "Compassion",
              description:
                "This involves listening and exploring the depth of questions that bring an idea to life.",
            },
            {
              bg: "bg-slate-400",
              image: "/Science.png",
              title: "Curiosity",
              description:
                "The pursuit of knowledge has always motivated us. We explore all possibilities - together.",
            },
            {
              bg: "bg-purple-400",
              image: "/Vivek.png",
              title: "Vivek",
              description:
                "Discernment. Where familiarity meets risk. Always accessible, always pushing boundaries.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group ${item.bg} m-2 rounded-lg flex justify-center items-center py-8 sm:py-12 transition-all ease-out hover:-translate-y-4`}
            >
              <Image
                src={item.image}
                height={200}
                width={200}
                alt={item.title}
                className="w-auto h-24 sm:h-32 transition-all duration-300 ease-in-out group-hover:opacity-0"
              />
              <p className="w-40 h-auto font-Josefin-Sans text-lg sm:text-xl text-center align-middle absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <span className="font-Lora text-xl sm:text-3xl">
                  {item.title}
                </span>
                <br />
                <span className="text-xs sm:text-base">{item.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}