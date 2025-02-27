"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AboutProjectDetails from "../_components/AboutProjectDetails";
import QuestionsChallenges from "../_components/Questions";
import { getWorkFromId } from "@/actions/getWorks";
import { ImageOverlay } from "../_components/ImageOverlay";
import Loading from "@/app/Loading";
import IncluCityContent from "../_components/IncluCityContent";
import CalTransContent from "../_components/CalTransContent";
import BluePrintForJustice from "../_components/BluePrintForJustice";

// export async function generateMetadata({ params }) {
//   const { work } = await params;
//   const extractedId = work.toString().split("-")[0];
//   const data = await getWorkFromId(extractedId);

//   return {
//     title: data?.title,
//     description: data?.content?.shortDesc,
//     openGraph: {
//       images: [
//         {
//           url: data?.content?.bannerImage.toString(),
//         },
//       ],
//     },
//   };
// }

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
          {id == "33" && <QuestionsChallenges />}
          {id == "36" && <IncluCityContent />}
          {id == "35" && <CalTransContent />}
          {id == "34" && <BluePrintForJustice />}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Page;
