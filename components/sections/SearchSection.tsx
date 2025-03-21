'use client';
import React, { useRef } from "react";
import { Input } from "../ui/input";
import { Filter, Search, X } from "lucide-react";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";

interface SearchSectionProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    clearSearch: () => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({
    searchInput,
    setSearchInput,
    clearSearch
}) => {
    const startupSectionRef = useRef<HTMLDivElement>(null);

    const handleFilterClick = () => {
        if (startupSectionRef.current) {
            startupSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
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
            </div>
        </>
    );
};

export default SearchSection;
