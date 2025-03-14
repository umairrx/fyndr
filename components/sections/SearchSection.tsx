import React from 'react'
import { Input } from '../ui/input'
import { Eye, Filter, Search, User } from 'lucide-react'
import BlurText from '../blocks/TextAnimations/BlurText/BlurText'
import Image from 'next/image'
import randomImage from "../../assets/banner.jpg"

const SearchSection = () => {
    return (
        <div className="px-6 py-6 min-h-screen flex flex-col">
            <BlurText
                text="GET YOUR STARTUP IDEA"
                delay={10}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
            />
            <div className="flex items-center">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                    <Input
                        placeholder="Search your startup niche here"
                        className="pl-10 w-full text-black border border-black"
                    />
                </div>
                <button
                    type="button"
                    className="ml-4 p-2 border border-black rounded-md hover:bg-black hover:text-white"
                >
                    <Filter className="text-black" />
                </button>
            </div>
            <div className='py-6'>
                <h1>All Startups</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
                    <div className="bg-white rounded-lg shadow p-6 ">
                        {/* Startups list */}
                        <div className="space-y-4">
                            {/* Date and Views */}
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>October 18, 2025</p>
                                <p className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    23
                                </p>
                            </div>
                            {/* Author Name And Title */}
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold">Author Name</h3>
                                    <h1 className="text-xl font-bold">Startup Title</h1>
                                </div>
                                <div className="text-gray-500">
                                    <User className="w-6 h-6" />
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus officiis sunt blanditiis magni excepturi quod hic quaerat consectetur a!
                            </p>
                            {/* Image */}
                            <div className="w-full h-48 relative">
                                <Image src={randomImage} alt="Startup Image" fill className="object-cover rounded-md" />
                            </div>
                            {/* Footer - Tech and Details */}
                            <div className="flex justify-between items-center">
                                <div className="text-gray-700 font-medium">Tech</div>
                                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchSection