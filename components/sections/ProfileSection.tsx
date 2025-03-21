import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Startup {
  _id: string;
  title: string;
  slug: { current: string };
  _createdAt: string;
  description: string;
  image: string;
}

interface Author {
  _id: string;
  name: string;
  username: string;
  image: string | null;
  bio: string | null;
  startups: Startup[];
}

export function ProfileSection({ author }: { author: Author }) {
  if (!author) return null;

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-[#1e1e1e] rounded-xl shadow-xl p-6 sticky top-20">
            <div className="flex flex-col items-center">
              {author.image ? (
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-slate-600 mb-4">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-36 h-36 rounded-full bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-400 mb-4 border-4 border-red-600">
                  {author.name.charAt(0).toUpperCase()}
                </div>
              )}
              <h1 className="text-2xl font-bold text-white">{author.name}</h1>
              <p className="text-gray-400">@{author.username}</p>

              {author.bio && (
                <div className="mt-6 text-gray-300">{author.bio}</div>
              )}

              <div className="w-full mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-gray-400 font-semibold mb-2">Stats</h3>
                <div className="flex justify-between text-gray-300">
                  <span>Startups</span>
                  <span className="font-bold">
                    {author.startups?.length || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Startups by {author.name}
          </h2>

          {author.startups && author.startups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {author.startups.map((startup) => (
                <Link
                  href={`/startup/${startup._id}`}
                  key={startup._id}
                  className="bg-[#1e1e1e] rounded-xl overflow-hidden hover:bg-[#080808] transition-colors"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={startup.image}
                      alt={startup.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {startup.title}
                    </h3>
                    <p className="text-gray-400 mb-3 line-clamp-2">
                      {startup.description}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarIcon size={14} className="mr-1" />
                      <time>{formatDate(startup._createdAt)}</time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-gray-400">No startups found for this user.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
