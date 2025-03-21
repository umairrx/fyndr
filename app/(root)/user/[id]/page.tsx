import { fetchAuthorById } from "@/lib/actions";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = await params.id;
  const author = await fetchAuthorById(id);

  if (!author) {
    return <h1 className="text-5xl text-white">Author not found</h1>;
  }

  return (
    <>
      <h1 className="text-5xl text-white">Username: {author.username}</h1>
    </>
  );
};

export default Page;
