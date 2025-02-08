import React from "react";

export default function Summary() {
  return (
    <section className="pt-10 py-10 bg-neutral-50">
      <div className="container mx-auto text-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 text-left">
        <h2 className="font-Lora text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
          What is Designlōk?
        </h2>
        <p className="mt-4 font-Lora text-lg sm:text-xl space-y-2">
          Founded on the concept of seva, or selfless service, Designlōk
          (dĭ-zīn&apos; - lōk) (o as in &apos;oak&apos;) refers to a state of being in which
          all service-oriented thoughts, feeling, and action exist. It is the
          state of being in which there is a fluidity between the body and the
          mind, where dedication and empathy intersect.
          <br />
          <br />
          This is the highest form of service to oneself, and the only state
          where we serve society.
        </p>
      </div>
    </section>
  );
}