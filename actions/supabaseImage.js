"use server"
import { supabase } from "@/lib/supabase";

const addImageToSupabase = async (file)=>{
    const filename = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(filename, file);

    if (error) {
      console.error('Upload error:', error);
      return;
    }

    const { data: publicURL } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filename);

      return publicURL

}

const saveToSupabase = async (title, content)=>{


    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, content }]);

      
    if (error) {
      console.error('Error saving post:', error);
    } else {
      console.log('Post saved successfully!');
    }
}

export {addImageToSupabase, saveToSupabase}