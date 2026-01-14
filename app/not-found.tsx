import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-4">
      <h1 className="text-6xl font-black font-work-sans">404</h1>
      <h2 className="text-2xl font-bold font-work-sans">Lost in Space?</h2>
      <p className="text-gray-600 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-button-primary text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
      >
        Back to Earth
      </Link>
    </div>
  );
}
