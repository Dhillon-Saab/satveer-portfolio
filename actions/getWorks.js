"use server"
import { supabase } from "@/lib/supabase";

const getAllTheWorks = async ()=>{
    
    const {data, error} = await supabase.from('posts').select()

    if (error) {
        console.error("Media error", error);
      } else {
        return data
      }

}

const getWorkFromId = async (id) =>{
    const {data, error} = await supabase.from('posts').select().eq('id', id)
    if (error) {
        console.error("Media error", error);
      } else {
        return data[0]
      }
}

export {getAllTheWorks, getWorkFromId}