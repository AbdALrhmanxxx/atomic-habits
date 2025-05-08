import React, { useCallback, useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import PostProvider from "./context/PostContext";
import Header from "./components/Header";
import { createRandomPost } from "./utils";
import Main from "./components/Main";

export default function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const handleAddPost = useCallback(function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }, []);

  function handleClearPosts() {
    setPosts([]);
  }

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
    },
    [isFakeDark]
  );

  const archiveOptions = useMemo(() => {
    return {
      show: false,
      title: `Post archive in addition to ${posts.length} main posts`,
    };
  }, [posts.length]);

  return (
    <div>
      <PostProvider>
        <Header
          posts={searchedPosts}
          onClearPosts={handleClearPosts}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isFakeDark={isFakeDark}
          setIsFakeDark={setIsFakeDark}
        />
        <Main posts={searchedPosts} onAddPost={handleAddPost} />
        <Archive
          archiveOptions={archiveOptions}
          onAddPost={handleAddPost}
          setIsFakeDark={setIsFakeDark}
        />
        <Footer />
      </PostProvider>
    </div>
  );
}
