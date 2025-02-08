"use server"
import { getSession } from "@/utils/getSession";


const getUser = async()=>{
    const session = await getSession();
    const user = session?.user;
    return user;
}

export {getUser};
