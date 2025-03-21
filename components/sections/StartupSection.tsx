import React from "react";
import { fetchStartups } from "@/lib/actions";
import { Author, Startup } from "@/sanity.types";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import { SearchFilter } from "../client/SearchFilter";

export type StartupTypesCard = Omit<Startup, 'author'> & { author?: Author };

export async function StartupSection() {
    const startups = await fetchStartups();

    return (
        <div className="pt-6 md:pt-12">
            <div className="pb-6">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    GET YOUR STARTUP IDEA
                </FadeContent>
            </div>

            <SearchFilter startups={startups as StartupTypesCard[]} />
        </div>
    );
}
