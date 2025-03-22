import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { writeClient } from "@/sanity/lib/write-client";
import { sanityFetch } from "@/sanity/lib/live";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.sub!;
        try {
          if (typeof window === 'undefined') {
            const authorId = `author-${token.sub}`;
            const existingAuthor = await sanityFetch({
              query: '*[_id == $id][0]',
              params: { id: authorId },
            });

            if (!existingAuthor) {
              const username = token.name
                ? token.name.toLowerCase().replace(/\s+/g, "-")
                : token.email
                  ? token.email.split("@")[0]
                  : `user-${token.sub?.substring(0, 8)}`;

              await writeClient.createIfNotExists({
                _id: authorId,
                _type: "author",
                name: token.name || "Unknown User",
                email: token.email,
                image: token.picture,
                username,
              });
            }
          }
        } catch (error) {
          console.error("Error creating author:", error);
        }
      }

      return session;
    },
  },
});
