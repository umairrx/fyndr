import React from 'react'
import Image from 'next/image'
import randomImage from "../../assets/banner.jpg"
import { Eye, User } from 'lucide-react'
import { Button } from '../ui/button'
import FadeContent from '../blocks/Animations/FadeContent/FadeContent'

const startupData = [
    {
        date: "October 18, 2025",
        views: 23,
        author: "Author Name",
        title: "Startup Title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus officiis sunt blanditiis magni excepturi quod hic quaerat consectetur a!",
        image: randomImage,
        tech: "Tech"
    },
    {
        date: "October 18, 2025",
        views: 23,
        author: "Author Name",
        title: "Startup Title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus officiis sunt blanditiis magni excepturi quod hic quaerat consectetur a!",
        image: randomImage,
        tech: "Tech"
    },
    {
        date: "October 18, 2025",
        views: 23,
        author: "Author Name",
        title: "Startup Title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus officiis sunt blanditiis magni excepturi quod hic quaerat consectetur a!",
        image: randomImage,
        tech: "Tech"
    }
]

const StartupSection = () => {
    return (
        <div className='py-6'>
            <h1>All Startups</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
                {startupData.map((startup, index) => (
                    <FadeContent key={index} className="bg-white/10 rounded-lg shadow p-6 ">
                        {/* Startups list */}
                        <div className="space-y-4">
                            {/* Date and Views */}
                            <div className="flex justify-between text-sm text-custom-gray">
                                <p>{startup.date}</p>
                                <p className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    {startup.views}
                                </p>
                            </div>
                            {/* Author Name And Title */}
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold">{startup.author}</h3>
                                    <h1 className="text-xl font-bold">{startup.title}</h1>
                                </div>
                                <div className="text-custom-gray">
                                    <User className="w-6 h-6" />
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-custom-gray text-sm">
                                {startup.description}
                            </p>
                            {/* Image */}
                            <div className="w-full h-48 relative">
                                <Image src={startup.image} alt="Startup Image" fill className="object-cover rounded-md" />
                            </div>
                            {/* Footer - Tech and Details */}
                            <div className="flex justify-between items-center">
                                <div className="text-custom-gray font-medium">{startup.tech}</div>
                                <Button>
                                    Details
                                </Button>
                            </div>
                        </div>
                    </FadeContent>
                ))}
            </div>
        </div>
    )
}

export default StartupSection