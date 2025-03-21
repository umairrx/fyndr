import { Suspense } from "react";
import StartupContent from "./startup-content";
import { StartupSkeleton } from "./skeleton";

interface StartupPageProps {
  params: {
    id: string;
  };
}

export default async function StartupPage({ params }: StartupPageProps) {
  const startupId = params?.id;

  return (
    <div className="container mx-auto py-6 md:py-10 px-4 text-white">
      <Suspense fallback={<StartupSkeleton />}>
        <StartupContent id={startupId} />
      </Suspense>
    </div>
  );
}
