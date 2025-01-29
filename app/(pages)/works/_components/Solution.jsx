import React from "react";
import { ImageOverlay } from "./ImageOverlay";

function Solution() {
  return (
    <section id="solutions" className="pt-10 py-10 bg-neutral-50">
      <div className="container mx-auto text-gray-700 px-64 text-left">
        <h2 className="font-Lora flex text-7xl mb-10">Solution</h2>
        <p className="mt-4 text-xl space-y-2">
          The first method in approaching this at any company is to find a point
          of contact who understands the value of UX, and explain that we come
          in as a firm that takes a user-centred approach and employs a strategy
          based on empathy.
          <br />
          <br />
          This included speaking on our credibility and the inroads established
          in Calgary so far, but going beyond that meant we would have to be
          unconventional.
          <br />
          <br />
           1) Similar to Robert Cialdini, I took the approach of
          working as a barista for two weeks. During this time, I asked staff
          what their frustrations were with day-to-day duties. What did the
          opening and closing procedures look like? 
          <br />
          <br />
          2) In my stint as a
          barista, I had the oppertunity to talk to regulars and asked them what
          they enjoyed about the experience at Aggudo. It allowed me to identify
          that customers were frequently leaving cups at the same counter where
          food was served - unsanitary. Signage in store would have be
          emphasized as customers wanted to see more visuals. 
          <br />
          <br />
          3) Related to the previous point, the creation of a promotional campaign was
          essential to the growth of the business.
        </p>
        {/* <ImageOverlay imageUrl={"https://images.unsplash.com/photo-1734525946086-f2f8a8910c54?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} altText={"Image"} /> */}
        {/* <ol className="mt-4 pl-5 list-decimal text-lg space-y-2">
          <li>How can the customer experience be improved?</li>
          <li>How will Aggüdo continue its outreach?</li>
        </ol> */}
      </div>
    </section>
  );
}

export default Solution;
