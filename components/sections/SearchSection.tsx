'use client';
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Filter, Search } from "lucide-react";
import StartupSection from "./StartupSection";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";

const SearchSection = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="px-6 py-3 md:py-6  flex flex-col bg-background-black text-primary-color" id="search">
            <div className="pb-6">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    GET YOUR STARTUP IDEA
                </FadeContent>
            </div>
            <div className="flex items-center" >
                <FadeContent className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-color" />
                    <Input
                        placeholder="Search your startup niche here"
                        className="pl-10 w-full text-primary-color border border-custom-gray-dark md:text-2xl placeholder:text-lg md:placeholder:text-2xl py-4 md:py-5"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setSearch(e.currentTarget.value);
                            }
                        }}
                    />

                </FadeContent>
                <button
                    type="button"
                    className="ml-4 p-2 border border-custom-gray rounded-md hover:bg-custom-gray hover:text-background-black group transition-all duration-300 ease-in-out"
                >
                    <Filter className="text-custom-gray group-hover:text-background-black transition-colors duration-300 ease-in-out" />
                </button>
            </div>

            <StartupSection searchQuery={search} />
        </div>
    );
};

export default SearchSection;
