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
    console.log("🔍 API: Received create-pitch request");
    try {
        const formData = await request.formData();
        console.log("📝 API: Form data received", {
            title: formData.get('title'),
            description: formData.get('description')?.toString().substring(0, 30) + '...',
            categoryExists: !!formData.get('category'),
            linkExists: !!formData.get('link'),
            pitchExists: !!formData.get('pitch'),
            pitchLength: formData.get('pitch')?.toString().length,
        });

        const session = await auth();
        console.log("👤 API: Auth session:", session ? "Found" : "Not found");

        if (!session) {
            console.log("❌ API: No session found, aborting");
            return NextResponse.json(
                parseServerActionResponse({ error: "Not signed in", status: "ERROR" })
            );
        }

        const userId = session.user?.id;
        console.log("🆔 API: User ID from session:", userId);

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
                console.log("❌ API: User not found and couldn't create fallback", err);
                return NextResponse.json(
                    parseServerActionResponse({ error: "User not found and couldn't create fallback", status: "ERROR" })
                );
            }
        }

        const authorId = `author-${userId}`;
        return createStartupWithAuthor(formData, authorId);

    } catch (error) {
        const err = error as SanityError;
        console.error("❌ API: Unexpected error:", err);
        console.error("💬 API: Error message:", err.message);
        if (err.details) console.error("📋 API: Error details:", err.details);
        return NextResponse.json(
            parseServerActionResponse({
                error: `Unexpected error: ${err.message}`,
                status: "ERROR"
            })
        );
    }

    async function createStartupWithAuthor(formData: FormData, authorId: string) {
        console.log("👨‍💼 API: Creating startup with author ID:", authorId);

        const titleField = formData.get("title");
        if (!titleField || typeof titleField !== "string") {
            console.log("❌ API: Title is required");
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

        console.log("📄 API: Startup document to create:", JSON.stringify(startup, null, 2));

        try {
            console.log("💾 API: Calling writeClient.create");
            const result = await writeClient.create(startup);
            console.log("✅ API: Sanity create result:", result);

            return NextResponse.json(
                parseServerActionResponse({ ...result, error: "", status: "SUCCESS" })
            );
        } catch (error) {
            const err = error as SanityError;
            console.error("❌ API: Error during Sanity create:", err);
            console.error("💬 API: Error message:", err.message);
            if (err.details) console.error("📋 API: Error details:", err.details);

            return NextResponse.json(
                parseServerActionResponse({
                    error: `Error saving to Sanity: ${err.message}`,
                    status: "ERROR"
                })
            );
        }
    }
}
