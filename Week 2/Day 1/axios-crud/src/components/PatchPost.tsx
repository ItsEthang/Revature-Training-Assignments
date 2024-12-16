import { useRef } from "react";
import apiClient from "../services/api-client";
import { Post } from "../entity";

const PatchPost = ({ post }: { post: Post }) => {
  const titlePatchRef = useRef<HTMLInputElement>(null);
  const authorPatchRef = useRef<HTMLInputElement>(null);
  const handlePatch = async (postId: number) => {
    const data = {
      title: titlePatchRef.current?.value,
      author: authorPatchRef.current?.value,
    };
    await apiClient.patch("/posts/" + postId, data).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
      <h4>Patch Post: {post.id}</h4>
      <form onSubmit={() => handlePatch(post.id)}>
        <input
          type="text"
          ref={titlePatchRef}
          defaultValue={post.title}
          placeholder="new post title"
        />
        <input
          type="text"
          ref={authorPatchRef}
          defaultValue={post.author}
          placeholder="new post author"
        />
        <button type="submit">Update Post</button>
      </form>
    </>
  );
};

export default PatchPost;
