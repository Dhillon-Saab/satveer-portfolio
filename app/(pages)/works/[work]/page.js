"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AboutProjectDetails from "../_components/AboutProjectDetails";
import QuestionsChallenges from "../_components/Questions";
import Solution from "../_components/Solution";
import { getWorkFromId } from "@/actions/getWorks";

function Page({ params }) {
  const [workData, setWorkData] = useState();
  const [id, setId] = useState(null);

  useEffect(() => {
    const getId = async () => {
      const { work } = await params;
      const extractedId = work.toString().split("-")[0];
      setId(extractedId);
    };

    getId();
  }, [params]);

  useEffect(() => {
    if (!id) return; // Prevent fetching if ID is not set

    const fetchData = async () => {
      try {
        const data = await getWorkFromId(id);
        setWorkData(data);
      } catch (error) {
        console.error("Error fetching work data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="text-center justify-center items-center h-3/4 text-4xl">
      {console.log(workData?.content?.bannerImage)}
      {typeof workData !== undefined &&
      workData?.content?.bannerImage !== undefined ? (
        <>
          <div
            id="Top-Banner"
            className="justify-center mx-auto w-full h-48 sm:h-56 md:h-64 lg:h-72 flex"
          >
            <Image
              alt="Banner Image"
              src={workData?.content?.bannerImage.toString()}
              height={260}
              width={1229}
              className="w-full h-full object-cover md:w-screen sm:w-screen"
            />
          </div>
          <AboutProjectDetails
            aboutWork={workData?.content?.About?.description?.toString()}
            goals={workData?.content?.About?.goal?.toString()}
            role={workData?.content?.About?.role?.toString()}
            duration={workData?.content?.About?.duration?.toString()}
            tools={workData?.content?.About?.tools}
          />
          <QuestionsChallenges />
          <Solution />
        </>
      ) : (
        <section className="bg-gray-800 relative place-items-center grid h-screen w-screen gap-4">
          <div className="bg-gray-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

          <div className="bg-gray-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

          <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-900 filter mix-blend-overlay h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </section>
      )}
    </div>
  );
}

export default Page;
