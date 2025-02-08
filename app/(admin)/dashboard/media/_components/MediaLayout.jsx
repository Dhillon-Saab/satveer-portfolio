"use client";
import { deleteTheFile } from "@/actions/getMedia";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function MediaLayout({ url, name }) {
  const [copied, setCopied] = useState(false);

  const navigator = useRouter();
  return (
    <div className="flex flex-col m-5 justify-center items-center h-auto w-auto border-2">
      <Image src={url} height={300} width={300} alt="" />
      <div className="flex gap-2 justify-center align-middle items-center h-auto w-auto">
        <input
          type="text"
          disabled
          value={url.toString().slice(0, 20) + "....."}
          className=" my-4 border-2 text-sm "
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(url);
            setCopied(true);
            setInterval(() => {
              setCopied(false);
            }, 3000);
          }}
        >
          <FaRegClipboard size={18} />
        </button>
        <button
          className="text-red-600"
          onClick={async () => {
            const data = await deleteTheFile(name);
            navigator.refresh;
          }}
        >
          <FaRegTrashAlt size={18} />
        </button>
      </div>
      <div
        className={`${
          copied
            ? "transition-all opacity-100 ease-in text-sm text-green-700"
            : "ease-out opacity-0"
        } `}
      >
        Link copied to Clipboard
      </div>
    </div>
  );
}

export default MediaLayout;
