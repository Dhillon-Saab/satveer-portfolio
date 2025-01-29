"use server"

import { signIn, signOut } from "@/auth";
import { saltAndHashPassword } from "@/lib/authHelpers";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const loginUser = async (formData) =>{
    const email = formData.get('email');
    const password = formData.get('password');
    try{
       await signIn('credentials',{
        redirect: false,
        // redirectTo: '/',
        // callbackUrl: '/',
        email: email,
        password: password,
       });
       console.log("User Logged In Successfully")
    }catch(error){
        console.log(error)
    }
    redirect("/dashboard");   
}

const registerUser = async (formData)=>{

    const name = formData.get('fname') + " " + formData.get('lname')
    const email = formData.get('email').toLowerCase()
    const password = formData.get('password')

    const hashedPassword = await saltAndHashPassword(password)

    if(!name || !password || !email){
        throw new Error("Please fill all the fields")
    }

    try {
        const newUser = await prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword,
            }
        })

        if(newUser){

            console.log("User Registered Successfully", newUser)
        }
        else{
            console.log("Error")
        }

    } catch (error) {
        throw new Error(error)
    }

    redirect('/login');

}

const logOutUser = async() => {
    await signOut({redirectTo: '/login'})
}

export {loginUser, registerUser , logOutUser }