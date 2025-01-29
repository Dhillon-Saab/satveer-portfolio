import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { getUserForAuth } from "./lib/authHelpers";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email;
        const password = credentials.password;
        let user = null;

        if (!email || !password) {
          throw new CredentialsSignin("Please Provide both email & password");
        }

        user = await getUserForAuth(email, password);
        if (!user) {
          throw new Error("Invalid User Name or Password");
        }
        console.log("SignIn Successful")
        return user;
      },
    }),
  ],
});
