'use client';

import React, { useState, useEffect } from "react";
import { X, Filter, ChevronDown, Search } from "lucide-react";
import { Input } from "../ui/input";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import { StartupTypesCard } from "../sections/StartupSection";
import { StartupCard } from "../ui/StartupCard";

interface SearchFilterProps {
    startups: StartupTypesCard[];
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ startups }) => {
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

    const clearAllFilters = () => {
        clearSearch();
        setSelectedCategory(null);
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(prevCategory => prevCategory === category ? null : category);
        setShowCategoryDropdown(false);
    };

    return (
        <>
            <div className="flex items-center mb-6">
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

            {isLoading ? (
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-color"></div>
                </div>
            ) : filteredStartups.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                    {filteredStartups.map((startup, index) => (
                        <StartupCard
                            key={startup._id || index}
                            startup={startup}
                            index={index}
                            handleCategorySelect={handleCategorySelect}
                        />
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
        </>
    );
};
