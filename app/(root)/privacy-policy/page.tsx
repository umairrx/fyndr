import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/blocks/TextAnimations/BlurText/BlurText";
import { ArrowLeft, Shield } from "lucide-react";

const PrivacyPolicy = () => {
    const lastUpdated = "November 15, 2023";

    const sections = [
        {
            title: "1. Information We Collect",
            content: `We collect information you provide directly to us when you create an account, update your profile, or interact with our platform. This may include your name, email address, company information, professional background, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our platform, including log data, device information, and cookies.`
        },
        {
            title: "2. How We Use Your Information",
            content: `We use the information we collect to provide, maintain, and improve our services; to process transactions; to send you technical notices and support messages; to communicate with you about products, services, and events; and to respond to your comments and questions. We may also use your information to monitor and analyze trends, usage, and activities in connection with our services; to detect, investigate, and prevent security incidents; and to carry out our obligations and enforce our rights.`
        },
        {
            title: "3. Sharing of Information",
            content: `We may share your information with service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and customer service. We may also share information if required by law or in response to legal process; to protect the rights, property, and safety of Fyndr, our users, and the public; in connection with a business transaction such as a merger or acquisition; and with your consent or at your direction.`
        },
        {
            title: "4. Data Security",
            content: `We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.`
        },
        {
            title: "5. Your Choices",
            content: `You may update, correct, or delete your account information at any time by logging into your account or contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those communications. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.`
        },
        {
            title: "6. Cookies",
            content: `We use cookies and similar tracking technologies to track the activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.`
        },
        {
            title: "7. Children's Privacy",
            content: `Our services are not intended for children under the age of 18, and we do not knowingly collect personal information from children under the age of 18. If we learn that we have collected personal information from a child under the age of 18, we will promptly take steps to delete such information.`
        },
        {
            title: "8. International Transfers",
            content: `Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.`
        },
        {
            title: "9. Changes to Our Privacy Policy",
            content: `We may update our Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our platform prior to the change becoming effective.`
        }
    ];

    return (
        <>
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Button size="icon" className="rounded-full !bg-background-black !text-primary-color">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <div className="flex items-center gap-2">
                            <Shield className="h-6 w-6 text-primary-color/80" />
                            <BlurText text="PRIVACY"
                                className="text-sm tracking-wider text-primary-color/60" />
                        </div>
                    </div>
                </div>

                <div >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Privacy Policy</h1>
                    <p className="text-primary-color/70">Last updated: {lastUpdated}</p>
                </div>

                <div className="space-y-2 text-primary-color/70">
                    <p>
                        At Fyndr, we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclose your
                        personal information when you use our website and services.
                    </p>
                    <p>
                        By using our platform, you agree to the collection and use of information in accordance with this policy.
                        If you have any questions or concerns, please contact us at{" "}
                        <a href="mailto:umairniazidev@gmail.com" className="text-primary-color hover:underline">
                            umairniazidev@gmail.com
                        </a>.
                    </p>
                </div>

                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div key={index} className="space-y-2">
                            <h2 className="text-xl md:text-2xl font-semibold">{section.title}</h2>
                            <div className="text-primary-color/70">
                                <p>{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-primary-color/10 space-y-4">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <p className="text-primary-color/70">
                        If you have any questions about this Privacy Policy, please contact us at{" "}
                        <a href="mailto:umairniazidev@gmail.com" className="text-primary-color hover:underline">
                            umairniazidev@gmail.com
                        </a>
                        .
                    </p>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
