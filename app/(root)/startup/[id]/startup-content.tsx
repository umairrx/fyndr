import { fetchStartupById } from "@/lib/actions";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import markdownit from "markdown-it";

const md = markdownit();

interface StartupContentProps {
  id: string;
}

export default async function StartupContent({ id }: StartupContentProps) {
  const startup = await fetchStartupById(id);

  if (!startup) {
    notFound();
  }
  const parsedContent = md.render(startup?.pitch || "");

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <header className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 animate-slide-down">
          {startup.title}
        </h1>

        {startup.image && (
          <div className="mb-6 relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden transform transition-transform hover:scale-[1.01] duration-300">
            <Image
              src={startup.image}
              alt={startup.title || "Startup image"}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              className="object-cover rounded-lg animate-fade-in"
            />
          </div>
        )}
      </header>

      <div className="mb-8 space-y-4 animate-fade-in animate-delay-300">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="font-semibold text-lg">Category:</span>
          <span className="px-3 py-1 bg-indigo-900/60 rounded-full text-indigo-200 text-sm hover:bg-indigo-800/70 transition-colors duration-300">
            {startup.category}
          </span>
        </div>
        <p className="text-base md:text-lg mb-4 leading-relaxed text-gray-200">
          {startup.description}
        </p>
      </div>

      {startup.pitch && (
        <div className="mb-10 animate-fade-in animate-delay-500">
          <h2 className="text-xl md:text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
            Pitch
          </h2>
          <article
            className="prose max-w-4xl font-work-sans break-all"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        </div>
      )}

      {startup.author && (
        <div className="mt-12 border-t border-gray-700 pt-6 animate-fade-in animate-delay-700">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            About the Founder
          </h3>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-gray-800/40 p-4 rounded-lg hover:bg-gray-800/60 transition-colors duration-300">
            {startup.author.image && (
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-300">
                <Image
                  src={startup.author.image}
                  alt={startup.author.name || "Author"}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform hover:scale-110 duration-300"
                />
              </div>
            )}
            <div className="flex flex-col gap-3">
              <div className="font-semibold">
                <p className="text-lg text-indigo-200">{startup.author.name}</p>
                <p className="text-gray-400 font-medium">
                  @{startup.author.username}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
