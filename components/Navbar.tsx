import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Menu, X } from "lucide-react";

const Navbar = async () => {
    const session = await auth();
    return (
        <nav className="w-full dark:border-b dark:border-border bg-background-black text-primary-color">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left - Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-3xl font-extrabold">Fynd<span className="text-secondary-color">r</span></span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#search" className="text-custom-gray hover:text-white transition-colors">Search</Link>
                        <Link href="#why" className="text-custom-gray hover:text-white transition-colors">Why</Link>
                        <Link href="#faq" className="text-custom-gray hover:text-white transition-colors">Faq</Link>
                        <Link href="#contact" className="text-custom-gray hover:text-white transition-colors">Contact Us</Link>
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center gap-5">
                        {session && session?.user ? (
                            <div className="flex items-center gap-4">
                                <Link href="/startup/create">
                                    <Button variant="default">Create</Button>
                                </Link>
                                <form action={async () => {
                                    "use server";
                                    await signOut({ redirectTo: "/" });
                                }}>
                                    <Button variant="secondary">Logout</Button>
                                </form>
                                <Avatar>
                                    <AvatarImage src={session?.user?.image ?? undefined} alt={`${session?.user?.name ?? 'User'} Avatar`} />
                                    <AvatarFallback>{(session?.user?.name ?? 'AV').toUpperCase().substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <Link href={`/user/${session?.user?.id}`} className="flex items-center">
                                    <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                        {session?.user?.name}
                                    </span>
                                </Link>
                            </div>
                        ) : (
                            <form action={async () => {
                                "use server";
                                await signIn("github")
                            }}>
                                <Button variant="default" type="submit">Sign in</Button>
                            </form>
                        )}
                    </div>

                    {/* Mobile Menu Button and Dialog */}
                    <div className="md:hidden">
                        <Button variant="secondary" size="icon" className="peer !bg-white/5 !text-white" aria-label="Menu">
                            <Menu className="h-6 w-6" />
                        </Button>
                        <div className="fixed inset-0 z-50 hidden peer-focus:block hover:block">
                            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                            <div className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black p-6 shadow-lg">
                                <div className="flex items-center justify-between mb-8">
                                    <Link href="/" className="text-2xl font-bold">
                                        Fynd<span className="text-[#9d9d9d]">r</span>
                                    </Link>
                                    <Button variant="default" size="icon" className="focus:peer-hidden">
                                        <X className="h-6 w-6" />
                                    </Button>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        <Link href="/about" className="text-lg text-custom-gray hover:text-white transition-colors">About</Link>
                                        <Link href="/why" className="text-lg text-custom-gray hover:text-white transition-colors">Why</Link>
                                        <Link href="/faq" className="text-lg text-custom-gray hover:text-white transition-colors">Faq</Link>
                                        <Link href="/contact" className="text-lg text-custom-gray hover:text-white transition-colors">Contact Us</Link>
                                    </div>
                                    <div className="border-t pt-6 flex flex-col gap-4">
                                        {session && session?.user ? (
                                            <>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarImage src={session?.user?.image ?? undefined} alt={`${session?.user?.name ?? 'User'} Avatar`} />
                                                        <AvatarFallback>{(session?.user?.name ?? 'AV').toUpperCase().substring(0, 2)}</AvatarFallback>
                                                    </Avatar>
                                                    <Link href={`/user/${session?.user?.id}`}>
                                                        <span className="text-sm font-medium">
                                                            {session?.user?.name}
                                                        </span>
                                                    </Link>
                                                </div>
                                                <Link href="/startup/create" className="w-full">
                                                    <Button variant="default" className="w-full">Create</Button>
                                                </Link>
                                                <form action={async () => {
                                                    "use server";
                                                    await signOut({ redirectTo: "/" });
                                                }} className="w-full">
                                                    <Button variant="secondary" className="w-full">Logout</Button>
                                                </form>
                                            </>
                                        ) : (
                                            <form action={async () => {
                                                "use server";
                                                await signIn("github")
                                            }} className="w-full">
                                                <Button variant="default" type="submit" className="w-full">Sign in</Button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
