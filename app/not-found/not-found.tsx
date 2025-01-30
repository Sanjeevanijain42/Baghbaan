"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-yellow-300 text-gray-900">
      {/* Octocat Image */}
      <Image src="/octocat-404.png" alt="Octocat 404" width={250} height={250} />

      {/* Large 404 Text */}
      <h1 className="text-6xl font-extrabold drop-shadow-md">404</h1>
      
      {/* Speech Bubble */}
      <div className="relative bg-white px-6 py-3 mt-4 rounded-lg shadow-lg">
        <p className="text-lg font-semibold">These are not the droids you’re looking for.</p>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
      </div>

      {/* Search Section */}
      <div className="mt-6 flex space-x-2">
        <input
          type="text"
          placeholder="Search GitHub..."
          className="px-4 py-2 border rounded-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          onClick={() => router.push(`https://github.com/search?q=${query}`)}
        >
          Search
        </button>
      </div>

      {/* Footer Links */}
      <div className="mt-8 text-sm">
        <Link href="https://support.github.com">
          <a className="text-blue-700 hover:underline">GitHub Support</a>
        </Link>
        &nbsp;•&nbsp;
        <Link href="https://www.githubstatus.com">
          <a className="text-blue-700 hover:underline">GitHub Status</a>
        </Link>
      </div>
    </div>
  );
}
 
