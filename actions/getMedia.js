"use server";
import { supabase } from "@/lib/supabase";

const getAllTheImages = async () => {
  const publicUrls = [];

  const { data, error } = await supabase.storage.from("blog-images").list();

  if (error) {
    console.error("Media error", error);
  } else {
  }

  data.map(async (image, x) => {
    const { data } = supabase.storage
      .from("blog-images")
      .getPublicUrl(`/${image.name}`);

    publicUrls.push({ image, publicUrl: data.publicUrl });
  });
  if (publicUrls.length >=1) {
    return publicUrls;
  }
};

const deleteTheFile = async (file) => {
  const { data, error } = await supabase.storage
    .from("blog-images")
    .remove([`${file.name}`]);
  if (error) {
    console.error("Error", error);
  } else {
    console.log(data);
    return { data };
  }
};

export { getAllTheImages, deleteTheFile };
