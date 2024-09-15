"use client"; // Ensure this is marked as a client component

import Link from "next/link";
import Image from "next/image"; // Import for handling static images

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="w-full max-w-md h-[40rem] p-6 bg-white rounded-3xl shadow-lg flex flex-col justify-between items-center">
        {/* Public SVG */}
        <div className="mt-4">
          <Image
            src="/logo.svg" // Path to your public SVG file
            alt="Logo"
            width={250} // Adjust the width as needed
            height={250} // Adjust the height as needed
          />
        </div>

        {/* Button at the bottom */}
        <Link href="/choice" passHref>
          <button className="w-full py-6 px-8 bg-purple-600 text-white rounded-lg text-lg hover:bg-blue-600 transition-colors">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
