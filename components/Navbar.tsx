import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Navbar = async () => {
    const session = await auth();
    return (
        <nav className="w-full dark:border-b dark:border-border bg-background">
            <div className="px-6 py-4 flex items-center justify-between">
                {/* Left - Logo */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <span className="text-3xl font-extrabold">Fynd<span className="text-[#9d9d9d]">r</span></span>
                    </Link>
                </div>

                {/* Middle - Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                    <Link href="/why" className="text-muted-foreground hover:text-foreground transition-colors">Why</Link>
                    <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">Faq</Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
                </div>

                <div className="flex items-center gap-5">
                    {/* Right - Buttons */}
                    {session && session?.user ? (
                        <div className="flex items-center gap-4">
                            <Link href="/startup/create">
                                <Button variant="default">
                                    Create
                                </Button>
                            </Link>
                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" });
                            }}>
                                <Button variant="outline">
                                    Logout
                                </Button>
                            </form>
                            <Avatar>
                                <AvatarImage src={session?.user?.image ?? undefined} alt={`${session?.user?.name ?? 'User'} Avatar`} />
                                <AvatarFallback>{(session?.user?.name ?? 'AV').toUpperCase().substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <Link href={`/user/${session?.user?.id}`} className="flex items-center gap-2">
                                <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                    {session?.user?.name}
                                </span>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <form action={async () => {
                                "use server";
                                await signIn("github")
                            }}>
                                <Button variant="default" type="submit">Sign in</Button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
