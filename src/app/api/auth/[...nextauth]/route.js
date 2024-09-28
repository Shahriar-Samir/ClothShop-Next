import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from "../../../../lib/connectDB";



const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const db = await connectDB();
        const userCollection = db.collection("users");
        const { email, password } = credentials; // Changed `pass` to `password`

        if (!email || !password) {
          return null; // Return null if credentials are missing
        }

        const userExist = await userCollection.findOne({ email: email });
        if (!userExist) {
          return null; // Return null if user is not found
        }

        if (password === userExist.pass) {
          return { email, uid: userExist._id }; // Don't return the password!
        }
        return null; // Return null if password is incorrect
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.uid = user.uid; // Attach the user ID to the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.uid = token.uid; // Attach the user ID to the session
      return session;
    },
  },
  pages: {
    signIn: "/signin", // Your custom sign-in page
  },
};

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST, authOptions};