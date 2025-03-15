import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import { HelpCircle, Users, Shield, Building, HandshakeIcon, MessageCircleQuestion, CircuitBoard } from "lucide-react";

const Faq = () => {
    const faqItems = [
        {
            question: "What is Fyndr?",
            answer: "Fyndr connects startups with breakthrough research and investors, offering a dynamic platform that bridges innovative ideas with funding opportunities and expert guidance.",
            icon: HelpCircle
        },
        {
            question: "How do I sign up?",
            answer: "Click the 'Get Started' button on our homepage to begin your journey. The signup process is quick and easy, requiring only a few steps to verify your details and create your profile.",
            icon: Users
        },
        {
            question: "How can I contact support?",
            answer: "Reach out via the Contact Us section on our website where our support team is ready to help. You can connect via email or live chat for prompt assistance with any inquiries or issues.",
            icon: MessageCircleQuestion
        },
        {
            question: "How does Fyndr verify research authenticity?",
            answer: "Our experts validate all research submissions through a rigorous verification process that includes peer review and data integrity checks, ensuring that every piece of research is reliable and trustworthy.",
            icon: Shield
        },
        {
            question: "What types of startups can join Fyndr?",
            answer: "We welcome startups in innovation, technology, and research commercialization. Our platform is designed to support a wide range of startups looking to innovate and scale their operations.",
            icon: Building
        },
        {
            question: "How does the matching process work?",
            answer: "We use AI-driven algorithms to match startups with relevant research and investors, ensuring optimal alignment in market strategy, technological needs, and investment goals for successful partnerships.",
            icon: CircuitBoard
        },
        {
            question: "What support does Fyndr provide after matching?",
            answer: "We offer extensive post-matching support including networking opportunities, mentorship programs, and access to resources. Our goal is to ensure continuous growth and collaboration through strategic follow-ups and community events.",
            icon: HandshakeIcon
        }
    ];

    return (
        <div className="text-primary-color bg-background-black px-4 sm:px-6 py-12" id="faq">
            <div className="mb-12">
                <FadeContent className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3" >
                    Frequently Asked Questions
                </FadeContent>
                <FadeContent className="text-sm sm:text-base md:text-lg text-gray-400">
                    Everything you need to know about Fyndr
                </FadeContent>
            </div>

            <div className="space-y-4 sm:space-y-6">
                {faqItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="group">
                            <input
                                type="checkbox"
                                id={`faq-${index}`}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={`faq-${index}`}
                                className="flex justify-between items-center w-full px-4 sm:px-6 py-4 sm:py-6 
                                         border border-primary-color/20 rounded-xl sm:rounded-2xl 
                                         hover:border-primary-color/40 transition-all duration-300
                                         hover:bg-white/[0.03] cursor-pointer
                                         peer-checked:border-primary-color/40 peer-checked:rounded-b-none"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-color/60 group-hover:text-primary-color transition-colors" />
                                    <h2 className="text-sm sm:text-lg font-semibold">
                                        {item.question}
                                    </h2>
                                </div>
                                <span className="text-lg sm:text-xl text-gray-500 transition-transform duration-300
                                               peer-checked:rotate-180 group-hover:text-primary-color">
                                    ↓
                                </span>
                            </label>

                            <div className="grid grid-rows-[0fr] transition-all duration-300 
                                          peer-checked:grid-rows-[1fr] border border-t-0 
                                          border-primary-color/20 rounded-b-xl sm:rounded-b-2xl">
                                <div className="overflow-hidden">
                                    <p className="px-4 sm:px-6 py-4 sm:py-6 text-xs sm:text-sm md:text-xl text-gray-300">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Faq;
