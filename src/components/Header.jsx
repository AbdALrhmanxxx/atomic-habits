import React from "react";

export default function Header({
  posts,
  onClearPosts,
  searchQuery,
  setSearchQuery,
  isFakeDark,
  setIsFakeDark,
}) {
  return (
    <header className="bg-gradient-to-r from-cyan-700 to-gray-800 py-6 px-4 sm:px-8 shadow-lg">
      <div className="container mx-auto p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center">
            The Atomic Blog
          </h1>
          <button
            onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
            className="mt-4 sm:mt-0 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          >
            {isFakeDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 sm:gap-6">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-white text-sm sm:text-base font-medium ">
            🚀 {posts.length} posts found
          </p>
          <button
            onClick={onClearPosts}
            className=" bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Clear Posts
          </button>
        </div>
      </div>
    </header>
  );
}
