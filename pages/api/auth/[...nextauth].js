// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
//import Providers from "next-auth/providers"
//import AppleProvider from "next-auth/providers/apple"
 import GoogleProvider from "next-auth/providers/google"
// import FacebookProvider from "next-auth/providers/facebook";
// import GitHubProvider from "next-auth/providers/github";
//import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  secret: process.env.SECRET,
  session:{
     jwt : true
    },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Providers.Facebook({
    //     clientId: process.env.FACEBOOK_CLIENT_ID,
    //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    //   }),
    // Providers.GitHub({
    //     clientId: process.env.GITHUB_CLIENT_ID,
    //     clientSecret: process.env.GITHUB_CLIENT_SECRET
    //   })

  ],
  database: process.env.DATABASE_URL,
})