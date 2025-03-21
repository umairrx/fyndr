import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

type SanityError = {
    message: string;
    details?: unknown;
    response?: unknown;
};

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const session = await auth();

        if (!session) {
            return NextResponse.json(
                parseServerActionResponse({ error: "Not signed in", status: "ERROR" })
            );
        }

        const userId = session.user?.id;

        if (!userId) {
            try {
                const fallbackUser = await writeClient.createIfNotExists({
                    _id: 'fallback-user',
                    _type: 'author',
                    name: 'Fallback User',
                    email: 'fallback@example.com'
                });

                return createStartupWithAuthor(formData, fallbackUser._id);
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const err = error as SanityError;
                return NextResponse.json(
                    parseServerActionResponse({ error: "User not found and couldn't create fallback", status: "ERROR" })
                );
            }
        }

        const authorId = `author-${userId}`;
        return createStartupWithAuthor(formData, authorId);

    } catch (error) {
        const err = error as SanityError;
        return NextResponse.json(
            parseServerActionResponse({
                error: `Unexpected error: ${err.message}`,
                status: "ERROR"
            })
        );
    }

    async function createStartupWithAuthor(formData: FormData, authorId: string) {
        const titleField = formData.get("title");
        if (!titleField || typeof titleField !== "string") {
            return NextResponse.json(
                parseServerActionResponse({ error: "Title is required", status: "ERROR" })
            );
        }

        const startup = {
            _type: "startup",
            title: titleField,
            description: formData.get("description"),
            category: formData.get("category"),
            image: formData.get("link"),
            slug: {
                _type: "slug",
                current: slugify(titleField, { lower: true, strict: true }),
            },
            author: {
                _type: "reference",
                _ref: authorId,
            },
            pitch: formData.get("pitch"),
        };

        try {
            const result = await writeClient.create(startup);
            return NextResponse.json(
                parseServerActionResponse({ ...result, error: "", status: "SUCCESS" })
            );
        } catch (error) {
            const err = error as SanityError;
            return NextResponse.json(
                parseServerActionResponse({
                    error: `Error saving to Sanity: ${err.message}`,
                    status: "ERROR"
                })
            );
        }
    }
}
