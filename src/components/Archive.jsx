import {useState} from 'react'
import { usePosts } from '../context/PostContext';
import {createRandomPost} from "../utils/index.js";

export default function Archive() {
      const { onAddPost } = usePosts();

      const [posts] = useState(() =>
        Array.from({ length: 10 }, () => createRandomPost())
      );

      const [showArchive, setShowArchive] = useState(false);
  return (
    <aside className="container mx-auto   p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Post Archive</h2>
      <button
        onClick={() => setShowArchive((s) => !s)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {showArchive ? "Hide Archive Posts" : "Show Archive Posts"}
      </button>

      {showArchive && (
        <ul className="mt-6 space-y-4">
          {posts.map((post, i) => (
            <li key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">
                <strong className="text-gray-900">{post.title}:</strong>{" "}
                {post.body}
              </p>
              <button
                onClick={() => onAddPost(post)}
                className="mt-2 bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Add as New Post
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
