import { Button } from "./ui/button";
import Image from "next/image";
import BannerImage from "../assets/banner.jpg";
import { MoveUpRight } from "lucide-react";
import { auth, signIn } from "@/auth";
import Link from "next/link";

export default async function HeroSection() {
    const session = await auth();

    return (
        <div className="py-12">
            <div className="px-6 flex flex-col justify-center h-full">
                <h1 className="text-7xl font-bold pb-5 uppercase">
                    Pitch. Connect. Grow.
                </h1>
                <div className="flex justify-between">
                    <p className="text-xl">Join a thriving startup ecosystem and unlock new opportunities.</p>
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
                <span className="pt-12 pb-12">
                    <Image
                        src={BannerImage}
                        width={3870}
                        height={2500}
                        className="w-full max-h-96 object-cover rounded-4xl grayscale contrast-125 drop-shadow-md shadow-md"
                        alt="Networking and startup pitch event"
                    />
                </span>
                <div className="grid grid-cols-3 gap-4">
                    {/* Global Startups */}
                    <div className="bg-[#e9e9e9] px-12 py-6 rounded-4xl shadow-md">
                        <div className="text-4xl font-bold pb-2">
                            <p>100M+</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Startups worldwide</p>
                            <div className="bg-black text-white p-2 rounded-full">
                                <MoveUpRight />
                            </div>
                        </div>
                    </div>
                    {/* Funding Raised */}
                    <div className="bg-[#e9e9e9] px-12 py-6 rounded-4xl shadow-md">
                        <div className="pb-2 flex justify-between">
                            <p className="text-4xl font-bold">$300B+</p>
                            <div className="text-black rounded-4xl border border-black flex justify-center items-center px-5 text-sm">
                                <p>Funding</p>
                            </div>
                        </div>
                        <div>
                            <p>Invested in startups yearly</p>
                        </div>
                    </div>
                    {/* Success Factors */}
                    <div className="bg-black px-12 py-6 rounded-4xl shadow-md">
                        <div className="pb-2">
                            <p className="text-4xl text-white font-bold pb-2">60%</p>
                            <p className="text-gray-100">of founders struggle to find the right co-founder.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
