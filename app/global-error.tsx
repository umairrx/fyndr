"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Application Error</h2>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-black text-white rounded-full"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
