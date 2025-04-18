import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import FadeContent from "./blocks/Animations/FadeContent/FadeContent";
import { Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Why Choose Us", href: "#" },
        { text: "Our Team", href: "#" },
        { text: "Careers", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Startup Matching", href: "#" },
        { text: "Investor Connect", href: "#" },
        { text: "Research Hub", href: "#" },
        { text: "Mentorship", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "#" },
        { text: "Case Studies", href: "#" },
        { text: "Startup Guide", href: "#" },
        { text: "FAQs", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/nizzypedia",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nizzypedia/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/umairrx", label: "GitHub" },
  ];

  return (
    <footer className="bg-background-black text-primary-color border-t border-white/10">
      <div className="mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <FadeContent
            duration={1000}
            delay={100}
            className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4"
          >
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold">Fyndr</h2>
            </Link>
            <p className="text-sm md:text-base text-gray-400">
              Connecting startups with their ideal resources, investors, and
              research to fuel innovation and growth.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </FadeContent>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <FadeContent
              key={section.title}
              duration={1000}
              delay={200 + sectionIndex * 100}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeContent>
          ))}
        </div>

        {/* Contact & Subscribe */}
        <FadeContent duration={1000} delay={500}>
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>44950 Neville Groves, Rippinside, NH 24561</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+92 3212345678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>umairniaziofficial@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sm text-gray-400">
                Get the latest updates on startups, investors, and research.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors text-sm"
                />
                <Button className="whitespace-nowrap">Subscribe</Button>
              </div>
            </div>
          </div>
        </FadeContent>

        {/* Copyright */}
        <FadeContent duration={1000} delay={600}>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Fyndr. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </FadeContent>
      </div>
    </footer>
  );
};

export default Footer;
