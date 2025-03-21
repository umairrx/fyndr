import { AUTHOR_BY_ID_QUERY, STARTUP_BY_ID_QUERY, STARTUPS_QUERY } from "@/sanity/lib/querries";
import { auth } from "@/auth";
import { parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";
import { sanityFetch } from "@/sanity/lib/live";

export async function fetchStartups() {
  try {
    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });
    return posts;
  } catch (error) {
    console.error("Error fetching startups:", error);
    return [];
  }
}

export async function fetchStartupById(id: string) {
  try {
    const { data: post } = await sanityFetch({ query: STARTUP_BY_ID_QUERY, params: { id } });
    return post;
  } catch (error) {
    console.error("Error fetching startup by id:", error);
    return null;
  }
}


export async function createPitch(
  _prevState: unknown,
  formData: FormData,
  pitch: string
) {
  const session = await auth();
  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  const { title, description, category, link } = Object.fromEntries(
    Array.from(formData).filter(([key]) => key !== "pitch")
  );
  const slug = slugify(title as string, { lower: true, strict: true });
  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session.user?.id,
      },
      pitch,
    };

    const result = await writeClient.create({ _type: "startup", ...startup });
    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};

export async function fetchAuthorById(id: string) {
  try {
    const { data: author } = await sanityFetch({ query: AUTHOR_BY_ID_QUERY, params: { id } });
    return author;
  } catch (error) {
    console.error("Error fetching author by id:", error);
    return null;
  }
}

