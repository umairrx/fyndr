import { fetchAuthorById } from "@/lib/actions";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = await params.id;
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

export default Page;
