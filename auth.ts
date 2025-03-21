/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { writeClient } from "@/sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token) {
        // Set the user ID to match what's expected by the API
        session.user.id = token.sub!;

        try {
          if (typeof window === 'undefined') {
            // Extract username from either name or email
            let username = '';
            if (token.name) {
              username = token.name.toLowerCase().replace(/\s+/g, '-');
            } else if (token.email) {
              username = token.email.split('@')[0];
            } else {
              username = `user-${token.sub?.substring(0, 8)}`;
            }

            // Create author with proper fields
            await writeClient.createIfNotExists({
              _id: token.sub!,  // No prefix here
              _type: 'author',
              name: token.name || 'Unknown User',
              email: token.email,
              image: token.picture,
              username: username,
              id: parseInt(token.sub!.substring(0, 8), 16) % 100000 // Generate numeric ID as fallback
            });
          }
        } catch (error) {
          console.error("Error creating author:", error);
        }
      }
      
      return session;
    }
  }
});
