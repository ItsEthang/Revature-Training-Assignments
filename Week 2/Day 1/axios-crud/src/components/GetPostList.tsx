import { useRef } from "react";
import { Post } from "../entity";
import apiClient from "../services/api-client";
import DisplayPosts from "./DisplayPost";

const GetPostList = ({ posts }: { posts: Post[] }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    const data = {
      title: titleRef.current?.value,
      author: authorRef.current?.value,
    };
    apiClient
      .post("/posts", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log("rendered");

  return (
    <>
      <h2>GetPostList</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={titleRef} placeholder="post title" />
        <input type="text" ref={authorRef} placeholder="post author" />
        <button type="submit">Add Post</button>
      </form>
      <DisplayPosts posts={posts} />
    </>
  );
};

export default GetPostList;
