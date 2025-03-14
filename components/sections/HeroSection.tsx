import Image from "next/image";
import BannerImage from "../../assets/banner.jpg";
import BannerStartups from "../../assets/banner-startup.jpg"
import { auth, signIn } from "@/auth";
import Link from "next/link";
import { Button } from "../ui/button";
import StatsCard from "../StatsCard";
import TrueFocus from "../blocks/TrueFocus/TrueFocus";
import SplitText from "../blocks/SplitText/SplitText";
import PixelTransition from "../blocks/Animations/PixelTransition/PixelTransition";

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
        <div className="py-6 md:py-12 bg-background-black text-primary-color">
            <div className="px-4 md:px-6 flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold pb-5 uppercase text-primary-color">
                    <TrueFocus
                        sentence="Pitch. Connect. Grow."
                        manualMode={true}
                        blurAmount={5}
                        borderColor="white"
                        glowColor="red"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1}
                    />
                </h1>
                <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
                    <SplitText text="Join a thriving startup ecosystem and unlock new opportunities." delay={20} />
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
                <div className="pt-8 md:pt-12 pb-8 md:pb-12 block w-full">
                    <PixelTransition
                        firstContent={
                            <div className="relative">
                                <Image
                                    src={BannerImage}
                                    width={3870}
                                    height={2500}
                                    className="w-full max-h-[200px] md:max-h-96 object-cover rounded-2xl md:rounded-4xl contrast-125 shadow-md"
                                    alt="Networking and startup pitch event"
                                />
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                            </div>
                        }
                        secondContent={
                            <div className="relative">
                                <Image
                                    src={BannerStartups}
                                    width={3870}
                                    height={2500}
                                    className="w-full max-h-[200px] md:max-h-96 object-cover rounded-2xl md:rounded-4xl contrast-125 shadow-md"
                                    alt="Networking and startup pitch event"
                                />
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                            </div>
                        }
                        gridSize={12}
                        pixelColor='#101010'
                        animationStepDuration={0.4}
                        className="custom-pixel-card"
                    />
                </div>
                {/*  Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {statsData.map((stat, index) => (
                        <StatsCard
                            key={index}
                            {...stat}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
