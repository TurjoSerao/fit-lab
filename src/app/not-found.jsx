import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <h1 className="text-8xl font-black text-[#CCFF00]">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">Page Not Found</h2>

        <p className="mt-3 text-gray-400">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="btn mt-6 bg-[#CCFF00] text-black hover:bg-[#CCFF00]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
