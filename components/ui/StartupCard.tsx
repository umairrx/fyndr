import React from "react";
import { Eye, User } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";
import { StartupTypesCard } from "../sections/StartupSection";

interface StartupCardProps {
  startup: StartupTypesCard;
  index: number;
  handleCategorySelect?: (category: string) => void;
}

export function StartupCard({
  startup,
  index,
  handleCategorySelect,
}: StartupCardProps) {
  return (
    <FadeContent
      key={startup._id || index}
      className="bg-white/10 rounded-lg shadow p-6"
    >
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-custom-gray">
          <p>{new Date(startup._createdAt).toLocaleDateString()}</p>
          <p className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {startup.views || 0}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-500 font-semibold">
              {startup.author?.name || "Unknown"}
            </h3>
            <h1 className="text-xl font-bold">{startup.title || "Untitled"}</h1>
          </div>
          <Link
            className="text-custom-gray"
            href={`/user/${startup.author?._id || index}`}
          >
            <User className="w-6 h-6" />
          </Link>
        </div>
        <p className="text-custom-gray text-sm">
          {startup.description || "No description available"}
        </p>
        <div className="w-full h-48 relative">
          <Link href={`/startup/${startup._id}`}>
            <Image
              src={startup.image || "/placeholder.jpg"}
              alt="Startup Image"
              fill
              className="object-cover rounded-md"
            />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          {handleCategorySelect ? (
            <button
              onClick={() => handleCategorySelect(startup.category || "")}
              className="text-custom-gray font-medium hover:text-white transition-colors"
            >
              {startup.category || "Uncategorized"}
            </button>
          ) : (
            <span className="text-custom-gray font-medium">
              {startup.category || "Uncategorized"}
            </span>
          )}
          <Link href={`/startup/${startup._id}`}>
            <Button>Details</Button>
          </Link>
        </div>
      </div>
    </FadeContent>
  );
}
