import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/querries";

export async function fetchStartups() {
  try {
    const posts = await client.fetch(STARTUPS_QUERY);
    return posts;
  } catch (error) {
    console.error("Error fetching startups:", error);
    return [];
  }
}
