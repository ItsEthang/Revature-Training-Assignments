import axios from "axios";
import { useEffect, useState } from "react";

import { Post } from "../entity/post";
import DisplayPosts from "./DisplayPosts";

const AxiosGetDemo = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const fetchPosts = () => {
    axios
      //   .get("https://jsonplaceholder.typicode.com/posts")
      .get("http://localhost:3000/posts")
      .then((res) => setPosts(res.data));
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <h2>Axios DEMO</h2>
      {posts && <DisplayPosts posts={posts} />}
    </>
  );
};

export default AxiosGetDemo;
