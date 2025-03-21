'use client';

import React, { useState, useEffect } from "react";
import { Eye, User, X, Filter, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import Link from "next/link";
import { StartupTypesCard } from "../sections/StartupSection";

interface StartupFilterProps {
    startups: StartupTypesCard[];
}

export const StartupFilter: React.FC<StartupFilterProps> = ({ startups }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");

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
            setIsLoading(false);
        }
    }, [searchInput]);

    const clearSearch = () => {
        setSearch("");
        setSearchInput("");
    };

    const categories = React.useMemo(() => {
        const uniqueCategories = new Set<string>();
        startups.forEach(startup => {
            if (startup.category) {
                uniqueCategories.add(startup.category);
            }
        });
        return Array.from(uniqueCategories).sort();
    }, [startups]);

    const filteredStartups = React.useMemo(() => {
        return startups.filter(startup => {
            const matchesSearch = !search ||
                startup.title?.toLowerCase().includes(search.toLowerCase()) ||
                startup.description?.toLowerCase().includes(search.toLowerCase()) ||
                startup.category?.toLowerCase().includes(search.toLowerCase()) ||
                startup.author?.name?.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = !selectedCategory || startup.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [startups, search, selectedCategory]);

    const showLoading = isLoading;

    const clearAllFilters = () => {
        clearSearch();
        setSelectedCategory(null);
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(prevCategory => prevCategory === category ? null : category);
        setShowCategoryDropdown(false);
    };

    return (
        <div className="pt-6 md:pt-12">
            <div className="pb-6">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    GET YOUR STARTUP IDEA
                </FadeContent>
            </div>
            <div className="flex items-center mb-6">
                <FadeContent className="relative flex-grow">
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
            </div>

            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">
                    {selectedCategory ? `${selectedCategory} Startups` : search ? `Search Results for "${search}"` : "All Startups"}
                </h1>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <button
                            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                            className="flex items-center gap-2 text-sm text-custom-gray hover:text-white transition-colors border border-custom-gray px-3 py-1 rounded-md"
                        >
                            <Filter className="w-4 h-4" />
                            {selectedCategory || "Filter by Category"}
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {showCategoryDropdown && (
                            <div className="absolute right-0 mt-2 w-60 bg-background-black border border-custom-gray-dark rounded-md shadow-lg z-10">
                                <div className="max-h-60 overflow-y-auto py-1">
                                    {categories.map(category => (
                                        <button
                                            key={category}
                                            onClick={() => handleCategorySelect(category)}
                                            className={`block w-full text-left px-4 py-2 text-sm ${selectedCategory === category
                                                ? 'bg-primary-color/20 text-white'
                                                : 'text-custom-gray hover:bg-custom-gray/10 hover:text-white'
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {(search || selectedCategory) && (
                        <button
                            onClick={clearAllFilters}
                            className="text-sm text-custom-gray hover:text-white flex items-center gap-1 transition-colors"
                        >
                            <X className="w-4 h-4" /> Clear filters
                        </button>
                    )}
                </div>
            </div>

            {showLoading ? (
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-color"></div>
                </div>
            ) : filteredStartups.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                    {filteredStartups.map((startup, index) => (
                        <FadeContent key={startup._id || index} className="bg-white/10 rounded-lg shadow p-6">
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm text-custom-gray">
                                    <p>{new Date(startup._createdAt).toLocaleDateString()}</p>
                                    <p className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" />
                                        {startup.views || 0}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <h3 className="text-lg font-semibold">{startup.author?.name || "Unknown"}</h3>
                                        <h1 className="text-xl font-bold">{startup.title || "Untitled"}</h1>
                                    </div>
                                    <Link className="text-custom-gray" href={`/user/${startup.author?._id || index}`}>
                                        <User className="w-6 h-6" />
                                    </Link>
                                </div>
                                <p className="text-custom-gray text-sm">{startup.description || "No description available"}</p>
                                <div className="w-full h-48 relative">
                                    <Link href={`/startup/${startup.slug?.current || startup._id}`}>
                                        <Image src={startup.image || "/placeholder.jpg"} alt="Startup Image" fill className="object-cover rounded-md" />
                                    </Link>
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => handleCategorySelect(startup.category || "")}
                                        className="text-custom-gray font-medium hover:text-white transition-colors"
                                    >
                                        {startup.category || "Uncategorized"}
                                    </button>
                                    <Link href={`/startup/${startup.slug?.current || startup._id}`}>
                                        <Button>Details</Button>
                                    </Link>
                                </div>
                            </div>
                        </FadeContent>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-custom-gray text-lg">
                        {selectedCategory
                            ? `No startups found in the "${selectedCategory}" category${search ? ` matching "${search}"` : ''}.`
                            : "No startups found matching your search criteria."}
                    </p>
                    <button onClick={clearAllFilters} className="mt-4 text-primary-color hover:underline">
                        Show all startups
                    </button>
                </div>
            )}
        </div>
    );
};

import { Input } from "../ui/input";
