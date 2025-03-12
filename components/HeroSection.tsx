import { Button } from "./ui/button";
import Image from "next/image";
import BannerImage from "../assets/banner.jpg";
import { auth, signIn } from "@/auth";
import Link from "next/link";
import StatsCard from "./StatsCard";

export default async function HeroSection() {
    const session = await auth();

    const statsData = [
        {
            value: "100M+",
            description: "Startups worldwide"
        },
        {
            value: "$300B+",
            description: "Invested in startups yearly",
            tag: "Funding"
        },
        {
            value: "60%",
            description: "of founders struggle to find the right co-founder.",
            isDark: true
        }
    ];

    return (
        <div className="py-6 md:py-12">
            <div className="px-4 md:px-6 flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold pb-5 uppercase">
                    Pitch. Connect. Grow.
                </h1>
                <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
                    <p className="text-lg md:text-xl">Join a thriving startup ecosystem and unlock new opportunities.</p>
                    <div className="flex items-center gap-5">
                        {/* Right - Buttons */}
                        {session && session?.user ? (
                            <div className="flex items-center gap-4">
                                <Link href="/startup/create">
                                    <Button variant="default">
                                        Connect with Investors
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <form action={async () => {
                                    "use server";
                                    await signIn("github")
                                }}>
                                    <Button variant="default" type="submit">Get Started</Button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
                <span className="pt-8 md:pt-12 pb-8 md:pb-12 block">
                    <Image
                        src={BannerImage}
                        width={3870}
                        height={2500}
                        className="w-full max-h-[200px] md:max-h-96 object-cover rounded-2xl md:rounded-4xl grayscale contrast-125 shadow-md"
                        alt="Networking and startup pitch event"
                    />
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {statsData.map((stat, index) => (
                        <StatsCard
                            key={index}
                            value={stat.value}
                            description={stat.description}
                            tag={stat.tag}
                            isDark={stat.isDark}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
