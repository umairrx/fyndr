'use client';
import React, { useState, useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { Filter, Search, X } from "lucide-react";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import { StartupSection } from "./StartupSection";

const SearchSection = () => {
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const startupSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (searchInput) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setSearch(searchInput);
                setIsLoading(false);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setSearch("");
        }
    }, [searchInput]);

    const clearSearch = () => {
        setSearch("");
        setSearchInput("");
    };

    const handleFilterClick = () => {
        if (startupSectionRef.current) {
            startupSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className="px-6 py-3 md:py-6 flex flex-col bg-background-black text-primary-color">
            <div className="pb-6">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    GET YOUR STARTUP IDEA
                </FadeContent>
            </div>
            <div className="flex items-center">
                <FadeContent className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-color" />
                    <Input
                        placeholder="Search your startup niche here"
                        className="pl-10 w-full text-primary-color border border-custom-gray-dark md:text-2xl placeholder:text-lg md:placeholder:text-2xl py-4 md:py-5"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    {searchInput && (
                        <button
                            onClick={clearSearch}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-color hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </FadeContent>
                <button
                    type="button"
                    className="ml-4 p-2 border border-custom-gray rounded-md hover:bg-custom-gray hover:text-background-black group transition-all duration-300 ease-in-out"
                    onClick={handleFilterClick}
                >
                    <Filter className="text-custom-gray group-hover:text-background-black transition-colors duration-300 ease-in-out" />
                </button>
            </div>

            <div ref={startupSectionRef}>
                <StartupSection search={search} isLoading={isLoading} clearSearch={clearSearch} />
            </div>
        </div>
    );
};

export default SearchSection;
