"use client";
import { saveToSupabase } from "@/actions/supabaseImage";
import RichTextEditor from "@/app/(admin)/_components/RichTextEditor";
import { useState } from "react";

const NewPostPage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
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
      <input
        required
        type="text"
        placeholder="Title for the Post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex w-3/4 align-middle justify-center p-2 items-center mx-auto text-3xl font-bold  border-b-2 focus:outline-none focus:border-blue-500"
      />
      <div className="grid grid-cols-2">
        <div className="col-span-1 my-8 ">
          <label htmlFor="aboutTheProject" className="text-3xl">
            About The Project
          </label>
          <textarea
            required
            name="aboutTheProject"
            id="aboutTheProject"
            value={aboutTheProject}
            onChange={(e) => setAboutTheProject(e.target.value)}
            className="focus:outline-none focus:border-blue-500 flex w-5/6 border-b-2 h-48 p-2 text-xl font-Lora "
          ></textarea>
        </div>
        <div className="col-span-1 my-8 ">
          <label htmlFor="GoalOfTheProject" className="text-3xl">
            Goal For The Project
          </label>
          <textarea
            required
            name="GoalOfTheProject"
            id="GoalOfTheProject"
            value={goalOfTheProject}
            onChange={(e) => setGoalOfTheProject(e.target.value)}
            className="focus:outline-none focus:border-blue-500 flex w-5/6 border-b-2  h-48 p-2 text-xl font-Lora "
          ></textarea>
        </div>
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
