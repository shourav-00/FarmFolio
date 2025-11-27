// // src/app/api/auth/[...nextauth]/route.js
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";

// // Simple working configuration
// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || "dummy",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy",
//     }),
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         try {
//           console.log('Auth attempt for:', credentials?.email);

//           // Simple test authentication
//           if (credentials?.email && credentials?.password) {
//             return {
//               id: '1',
//               name: 'Test User',
//               email: credentials.email,
//             };
//           }
//           return null;
//         } catch (error) {
//           console.error('Auth error:', error);
//           return null;
//         }
//       }
//     })
//   ],
//   pages: {
//     signIn: '/login',
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET || "dummy-secret-for-development",
// };

// // Initialize NextAuth
// const authHandler = NextAuth(authOptions);

// // Export handlers
// export const GET = authHandler;
// export const POST = authHandler;

// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("🔐 Auth attempt for:", credentials.email);

          const response = await fetch(
            "https://farmfolio-server-api.vercel.app/api/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          console.log("📡 Response status:", response.status);

          if (response.ok) {
            const result = await response.json();
            console.log(
              " Full backend response:",
              JSON.stringify(result, null, 2)
            );
            console.log("User data:", result.user);

            console.log("User name:", result.user?.name);
            console.log("User photoURL:", result.user?.photoURL);
            console.log("User email:", result.user?.email);
            console.log(" User photoURL:", result.user?.photoURL);

            if (result && result.token) {
              const userData = {
                id: result.user.id,
                name: result.user.name,
                email: result.user.email,
                image: result.user.photoURL,
                token: result.token,
              };
              console.log("🚀 Returning to NextAuth:", userData);
              return userData;
            }
          } else {
            const error = await response.text();
            console.log("❌ Auth failed:", error);
          }

          return null;
        } catch (error) {
          console.error("💥 Auth error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signUp: "/register",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("🔄 JWT callback - user:", user);
      if (user) {
        token.user = user;
      }
      console.log("🔄 JWT callback - token:", token);
      return token;
    },
    async session({ session, token }) {
      console.log("🔄 Session callback - token:", token);
      session.user = token.user;
      console.log("🔄 Session callback - session:", session);
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
