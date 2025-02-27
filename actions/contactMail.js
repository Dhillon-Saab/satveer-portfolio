"use server"
import { Resend } from "resend"

export const sendMail = async (formData) =>{
    const resend = new Resend(process.env.RESEND_API)

    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message= formData.get('message')

    const {data, error} = await resend.emails.send({
        from: `${name} <admin@dhillonsaab.xyz>`,
        to: ['satveerxsingh@gmail.com'],
        // to: ['ad70138@gmail.com'],
        subject: `Message from ${email} `,
        html: `<strong>${email}</strong>
        <p>${message}</p>
        <p>Phone: ${phone}</p>
        `,
    });
    
    if(error){
        return console.log({message: error, status: true})
    }
    if(data){
        return {message: "Message Sent Successfully", status:true}
    }

}