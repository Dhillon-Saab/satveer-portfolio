import Image from "next/image";
import React from "react";

function CTA2() {
  return (
    <section className="overflow-hidden bg-navbar-bg m-auto sm:grid sm:grid-cols-3 sm:items-center">
      <Image
        height={1000}
        width={1000}
        alt=""
        src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-56 w-auto object-cover sm:h-full sm:w-10/12 col-span-2 "
      />
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 w-full">
        <div className="mx-auto text-start ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-4xl font-bold font-Josefin-Sans text-white md:text-4xl">
            Exceed All Limits.
          </h2>

          <p className="hidden text-xl text-white md:mt-4 md:block">
            "If it doesn't work for someone, <br />it doesn't work."
            <br />
            <br />
            When a client approaches us, this is <br />
            the maxim we use to examine all probable
            <br /> solutions - and we're confident that
            <br /> our dedication can make a difference.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="/works"
              className="inline-block rounded bg-white px-12 py-3 text-lg font-medium text-navbar-bg transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Explore our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA2;
