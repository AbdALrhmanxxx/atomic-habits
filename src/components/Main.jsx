import React from "react";
import FormAddPost from "./FormAddPost";
import List from "./List";

export default function Main({ posts, onAddPost }) {
  return (
    <main className="container mx-auto p-4 sm:p-6">
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

function Posts({ posts }) {
  return (
    <section className="mt-8">
      <List posts={posts} />
    </section>
  );
}
