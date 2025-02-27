"use server"
import { supabase } from "@/lib/supabase";

const insertDataToDB = async (data)=>{
    if(data){
        const {error} = await supabase.from('posts').insert({
            title: data.title,
            content: { 
                url: data?.title?.toString().replace(/\s+/g, ''),
                shortDesc: data?.shortDesc?  data?.shortDesc : "none",
                bannerImage: data?.bannerImage? data?.bannerImage  : "/bannerUpload.jpg",
                projectImage: data?.projectImage? data?.projectImage : "/uploadImage.png",
            }
        })
        
        if(error){
            console.error(error)
            return {message: error, code: 'red'}
        }else{
            console.log("Data inserted successfully")
            return {message: "Data inserted successfully", code: 'green'}
        }
    }
}

export {insertDataToDB}