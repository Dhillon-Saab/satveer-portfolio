"use client";
import { saveToSupabase } from "@/actions/supabaseImage";
import RichTextEditor from "@/app/(admin)/_components/RichTextEditor";
import {useState } from "react";
import PreviewCard from "./_components/PreviewCard";
import BannerImageTaker from "./_components/BannerImageTaker";
import AboutTheProject from "./_components/AboutTheProject";

const NewPostPage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");

  const [aboutTheProject, setAboutTheProject] = useState("");
  const [goalOfTheProject, setGoalOfTheProject] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save to Supabase
    const saveToSup = await saveToSupabase(title, content);
  };

  return (
    <>
      <h2 className="m-4 text-4xl text-black font-bold font-Josefin-Sans">
        Create a New Post for /works
      </h2>
      <div className="gap-3 flex flex-col">
        <PreviewCard
          title={title}
          setTitle={setTitle}
          shortDesc={shortDesc}
          setShortDesc={setShortDesc}
        />
        <BannerImageTaker />
        <AboutTheProject
          aboutTheProject={aboutTheProject}
          setAboutTheProject={setAboutTheProject}
          goalOfTheProject={goalOfTheProject}
          setGoalOfTheProject={setGoalOfTheProject}
        />
      </div>
      <div className="flex gap-10">
        <div>
          <label htmlFor="role" className="text-3xl">
            Your Role for the Project
          </label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            type="text"
            placeholder="Your Role for the Project"
            className="flex w-full align-middle justify-start items-start text-xl font-bold p-2 border-b-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="role" className="text-3xl">
            Duration
          </label>
          <input
            required
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration"
            className="flex w-full align-middle justify-start items-start text-xl font-bold p-2 border-b-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <RichTextEditor content={content} onChange={setContent} />

      <form onSubmit={handleSubmit} className="space-y-6">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Publish Post
        </button>
      </form>
    </>
  );
};

export default NewPostPage;
