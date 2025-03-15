import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

const TermsOfService = () => {
    const lastUpdated = "November 15, 2023";

    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: `By accessing or using Fyndr's platform, website, or any of its services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
        },
        {
            title: "2. Description of Services",
            content: `Fyndr provides a platform connecting startups with investors, research, and resources. Our services include but are not limited to startup profiling, investor matching, research sharing, and community networking. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`
        },
        {
            title: "3. User Accounts and Registration",
            content: `To access certain features of our platform, you may need to register for an account. You agree to provide accurate, current, and complete information and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for all activities that occur under your account.`
        },
        {
            title: "4. Content and Conduct",
            content: `Users may post, upload, or share content on our platform. You retain ownership of your content but grant Fyndr a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your content for the purpose of operating and improving our services. You are solely responsible for your content and interactions on our platform.`
        },
        {
            title: "5. Intellectual Property",
            content: `Fyndr and its content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content in any way without our express prior written permission.`
        },
        {
            title: "6. Privacy",
            content: `Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose information about you.`
        },
        {
            title: "7. Limitation of Liability",
            content: `To the maximum extent permitted by law, Fyndr shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of or in any way connected with your access to or use of our services.`
        },
        {
            title: "8. Termination",
            content: `We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use our services will immediately cease.`
        },
        {
            title: "9. Changes to Terms",
            content: `We reserve the right to modify these Terms at any time. If we make changes, we will provide notice such as posting the updated Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.`
        },
        {
            title: "10. Governing Law",
            content: `These Terms shall be governed by the laws of [Your Jurisdiction], without regard to its conflict of law principles.`
        }
    ];

    return (
        <div className="space-y-8">
            {/* Back Button & Header */}
            <div className="flex items-center gap-4">
                <Link href="/">
                    <Button size="icon" className="rounded-full !bg-background-black !text-primary-color">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary-color/80" />
                    <span className="text-sm tracking-wider text-primary-color/60">LEGAL</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Terms of Service</h1>
            <p className="text-primary-color/70">Last updated: {lastUpdated}</p>

            {/* Introduction */}
            <div className="space-y-2 text-primary-color/70">
                <p>
                    Welcome to Fyndr! These Terms of Service govern your use of our website, services, and platform.
                    By using Fyndr, you agree to these terms in their entirety.
                </p>
                <p>
                    Please read these terms carefully before accessing or using our platform. If you have any questions,
                    please contact us at{" "}
                    <a href="mailto:contact@fyndr.com" className="text-primary-color hover:underline">
                        contact@fyndr.com
                    </a>.
                </p>
            </div>

            {/* Sections */}
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

            {/* Contact Info */}
            <div className="pt-8 border-t border-primary-color/10 space-y-4">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <p className="text-primary-color/70">
                    If you have any questions about these Terms of Service, please contact us at{" "}
                    <a href="mailto:contact@fyndr.com" className="text-primary-color hover:underline">
                        contact@fyndr.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;
