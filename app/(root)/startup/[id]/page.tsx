import { Suspense } from "react";
import StartupContent from "./startup-content";
import { StartupSkeleton } from "./skeleton";
import { Metadata } from "next";
import { fetchStartupById } from "@/lib/actions";

type SegmentParams = Record<string, string | string[] | undefined>;

interface StartupPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: StartupPageProps): Promise<Metadata> {
  const { id } = await params;
  const startup = await fetchStartupById(id);

  if (!startup) {
    return {
      title: "Startup Not Found",
    };
  }

  return {
    title: startup.title,
    description: startup.description,
    openGraph: {
      title: startup.title,
      description: startup.description,
      images: startup.image ? [{ url: startup.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: startup.title,
      description: startup.description,
      images: startup.image ? [startup.image] : [],
    },
  };
}

export default async function StartupPage({ params }: StartupPageProps) {
  const { id: startupId } = await params;

  return (
    <div className="container mx-auto py-6 md:py-10 px-4 text-white">
      <Suspense fallback={<StartupSkeleton />}>
        <StartupContent id={startupId} />
      </Suspense>
    </div>
  );
}

export interface PageProps {
  params: Promise<SegmentParams>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export interface LayoutProps {
  children?: React.ReactNode;
  params: Promise<SegmentParams>;
}
