import Image from "next/image";
import React from "react";

function CTA() {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-4xl font-bold text-gray-900 md:text-4xl font-Josefin-Sans">
            Working together to create a better tomorrow.
          </h2>

          <p className="hidden text-gray-500 text-lg md:mt-4 md:block">
            Whether its navigating the complexities of the legal system or
            improving the coffee experience - we begin with listening and
            putting the user at the centre of our design to collaborate.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="/services"
              className="inline-block rounded bg-navbar-bg px-12 py-3 text-lg font-medium text-white transition hover:bg-slate-600 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              View our Services
            </a>
          </div>
        </div>
      </div>

      <Image
        width={900}
        height={900}
        alt=""
        src={
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
}

export default CTA;
