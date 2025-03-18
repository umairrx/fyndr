import React from 'react'
import Image from 'next/image'
import randomImage from "../../assets/banner.jpg"
import { Eye, User } from 'lucide-react'
import { Button } from '../ui/button'
import FadeContent from '../blocks/Animations/FadeContent/FadeContent'
import Link from 'next/link'

const startupData = [
    {
        id: 1,
        date: "October 18, 2025",
        views: 23,
        author: "Author Name",
        title: "Startup Title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus officiis sunt blanditiis magni excepturi quod hic quaerat consectetur a!",
        image: randomImage,
        category: "Tech"
    },
    {
        id: 2,
        date: "October 18, 2025",
        views: 23,
        author: "Author Name",
        title: "Startup Title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus officiis sunt blanditiis magni excepturi quod hic quaerat consectetur a!",
        image: randomImage,
        category: "Tech"
    },
    {
        id: 3,
        date: "October 18, 2025",
        views: 23,
        author: "Author Name",
        title: "Startup Title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus officiis sunt blanditiis magni excepturi quod hic quaerat consectetur a!",
        image: randomImage,
        category: "Tech"
    }
]
const StartupSection = ({ searchQuery }: { searchQuery: string }) => {
    return (
        <div className='pt-6 md:pt-12'>
            <h1>{searchQuery ? `Search Result for "${searchQuery}"` : "All Startups"}</h1>
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
                                <Link className="text-custom-gray" href={`/user/${index}`}>
                                    <User className="w-6 h-6" />
                                </Link>
                            </div>
                            {/* Description */}
                            <p className="text-custom-gray text-sm">
                                {startup.description}
                            </p>
                            {/* Image */}
                            <div className="w-full h-48 relative">
                                <Link href={`/startup/${startup.id}`}>
                                    <Image src={startup.image} alt="Startup Image" fill className="object-cover rounded-md" />
                                </Link>
                            </div>
                            {/* Footer - Tech and Details */}
                            <div className="flex justify-between items-center">
                                <Link href={`/query=${startup.category?.toLowerCase()}`} className="text-custom-gray font-medium">
                                    {startup.category}
                                </Link>
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