import { Skeleton } from "@/components/ui/skeleton";

export function StartupSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Title skeleton */}
      <Skeleton className="h-10 w-3/4 mb-4" />

      {/* Image skeleton */}
      <Skeleton className="w-full h-[250px] md:h-[400px] rounded-lg mb-6" />

      {/* Category skeleton */}
      <div className="flex items-center gap-2 mb-3">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-32 rounded-full" />
      </div>

      {/* Description skeleton */}
      <Skeleton className="h-5 w-full mb-2" />
      <Skeleton className="h-5 w-5/6 mb-2" />
      <Skeleton className="h-5 w-4/5 mb-8" />

      {/* Pitch section skeleton */}
      <Skeleton className="h-8 w-32 mb-4" />
      <div className="space-y-2 mb-10">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-11/12" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
      </div>

      {/* Founder section skeleton */}
      <Skeleton className="h-px w-full mb-6" />
      <Skeleton className="h-7 w-48 mb-4" />
      <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/40">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-56" />
        </div>
      </div>
    </div>
  );
}
