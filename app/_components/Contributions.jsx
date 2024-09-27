import Image from "next/image";
import React from "react";

function Contributions() {
  return (
    <section className="overflow-hidden rounded-lg mt-5 shadow-2xl md:grid md:grid-cols-2">
      <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
        <p className="text-4xl font-semibold uppercase tracking-widest">
          Companies that trusted Us.
        </p>

        <div className="flex gap-4 mt-10">
          <span className="text-lg justify-center items-center mx-auto  font-black sm:text-sm lg:text-sm">
            <Image src={"/banner.png"} alt="" height={1000} width={1000} className="w-full"/>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contributions;
