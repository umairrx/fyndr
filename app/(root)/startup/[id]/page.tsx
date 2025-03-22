import { Suspense } from "react";
import StartupContent from "./startup-content";
import { StartupSkeleton } from "./skeleton";

type SegmentParams = Record<string, string | string[] | undefined>;

interface StartupPageProps {
  params: Promise<{ id: string }>;
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
