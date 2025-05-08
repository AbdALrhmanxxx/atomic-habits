import React from 'react'

export default function List({posts}) {
return (
  <ul className="space-x-2 space-y-2 grid grid-cols-3">
    {posts.map((post, i) => (
      <li
        key={i}
        className="bg-white  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 ">{post.body}</p>
      </li>
    ))}
  </ul>
);
}
