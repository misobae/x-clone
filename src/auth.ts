import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST }, // API route
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        })

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json();
        
        // 응답을 next-auth.js의 session에 맞게 구조화
        return {
          id: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) { // 세션 객체의 user.id에 JWT id 할당
      if (token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) { // JWT의 user.id에 사용자 정보 객체의 id 할당
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },

});