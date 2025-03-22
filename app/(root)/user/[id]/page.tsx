import { fetchAuthorById } from "@/lib/actions";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { notFound } from "next/navigation";
import { ReactElement } from "react";

interface PageProps {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
}

const Page = async ({ params }: PageProps) => {
  const id = params.id;
  const author = await fetchAuthorById(id);

  if (!author) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background-black">
      <ProfileSection author={author} />
    </div>
  );
};
// Workaround: cast to bypass the type check on production build.
export default Page as unknown as () => ReactElement;
