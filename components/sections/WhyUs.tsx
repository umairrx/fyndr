import Image from "next/image";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import { Button } from "../ui/button";
import { CheckCircle, Lightbulb, Users, TrendingUp } from "lucide-react";
import TeamImage from "../../assets/team.jpg"
const WhyUs = () => {
    const CardsData = [
        {
            icon: CheckCircle,
            title: "Personalized Approach",
            description: "Tailored solutions to fit your unique business needs.",
            iconColor: "text-green-500",
        },
        {
            icon: Lightbulb,
            title: "Cutting-Edge Insights",
            description: "Stay ahead with the latest industry trends.",
            iconColor: "text-yellow-500",
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Guided by seasoned professionals with years of experience.",
            iconColor: "text-blue-500",
        },
        {
            icon: TrendingUp,
            title: "Measurable Results",
            description: "Achieve tangible growth and long-term success.",
            iconColor: "text-red-500",
        },
    ];

    return (
        <div className="text-primary-color py-3 md:py-12 bg-background-black min-h-screen">
            <div className="mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16" id="why">
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                        <FadeContent className="uppercase tracking-wide text-gray-500 text-base sm:text-lg md:text-xl" >
                            Uniting Startups and Their Research
                        </FadeContent>

                        <FadeContent duration={1200} delay={200}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
                            Why Choose Us?
                        </FadeContent>

                        <FadeContent duration={1300} delay={400}
                            className="text-sm sm:text-base md:text-lg lg:text-2xl">
                            Discover a world of innovative startups and breakthrough research—all in one place.
                            We bring you the most comprehensive insights, connecting you with promising startups
                            and investors, while offering you a platform to share your own ideas.
                        </FadeContent>

                        <FadeContent duration={1400} delay={600}
                            className="flex flex-wrap gap-4 pt-2">
                            <Button variant="default" className="w-full sm:w-auto">Learn More</Button>
                            <Button variant="secondary" className="w-full sm:w-auto">Contact Us</Button>
                        </FadeContent>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {CardsData.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <FadeContent
                                    key={index}
                                    duration={1300}
                                    delay={800 + index * 200}
                                    className="flex flex-col sm:flex-row items-start sm:items-center p-4 md:p-6 bg-white/5 rounded-xl shadow-lg hover:bg-white/10 transition-all"
                                >
                                    <Icon className={`${feature.iconColor} w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-0 sm:mr-4`} />
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-1">{feature.title}</h3>
                                        <p className="text-sm sm:text-base text-custom-gray">{feature.description}</p>
                                    </div>
                                </FadeContent>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 md:mt-16">
                    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                        <Image
                            src={TeamImage}
                            width={3870}
                            height={2500}
                            className="w-full h-full object-cover rounded-xl sm:rounded-2xl md:rounded-4xl contrast-[1.1] shadow-xl"
                            alt="Team collaboration and innovation at work"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent rounded-xl sm:rounded-2xl md:rounded-4xl">
                            <div className="absolute bottom-0 w-full p-4 sm:p-6 md:p-8 lg:p-12">
                                <FadeContent duration={1200} delay={200}>
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                                        Building Tomorrow&apos;s Success Stories
                                    </h1>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl">
                                        Join a community of visionary entrepreneurs and industry experts who are
                                        reshaping the future. Our platform provides the tools, connections, and
                                        resources needed to transform innovative ideas into successful ventures.
                                    </p>
                                </FadeContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhyUs;
