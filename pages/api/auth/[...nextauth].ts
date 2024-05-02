import { DB } from "@/lib/db";
import User from "@/lib/models/users";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
export default NextAuth({
  pages: {
    signIn: "/auth",
  },
  providers: [
    Credentials({
      credentials: {
        // email: {    label: "Email",   type: "text" ,  placeholder: "Email" }, // يظهر ف صفحة تسجيل النكست auth
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // console.log(credentials.callbackUrl);

        await DB.connect();
        let user = await User.findOne({ email: credentials?.email });
        console.log(user, "user");
        if (credentials?.callbackUrl! === "/dashboard" && user) {
          const match = await bcrypt.compare(
            credentials?.password!,
            user.password
          );
          if (!match) return null;
          else return user;
        }
        if (!user && credentials?.callbackUrl! != "/dashboard") {
          console.log(credentials);
          const hashPassword = await bcrypt.hash(credentials?.password!, 10);
          console.log(hashPassword);
          const newUser = new User({
            email: credentials?.email,
            password: hashPassword,
            provider: "userInfo",
          });
          console.log(newUser);
          await newUser.save();
          console.log(newUser, " new user save");
          return newUser;
        }
        return null;
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
});
