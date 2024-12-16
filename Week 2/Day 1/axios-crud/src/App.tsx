import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import GetPostList from "./components/GetPostList";
import { Post } from "./entity";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const fetchPosts = () => {
    axios
      //   .get("https://jsonplaceholder.typicode.com/posts")
      .get<Post[]>("http://localhost:3000/posts")
      .then((res) => setPosts(res.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <h1>Axios CRUD Operations Demo</h1>

      {/* {posts && <DisplayPost posts={posts} />} */}
      {posts && <GetPostList posts={posts} />}
    </>
  );
}

export default App;
