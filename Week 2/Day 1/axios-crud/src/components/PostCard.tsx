import { Post } from "../entity";
import apiClient from "../services/api-client";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const deletePosts = async (postId: number) => {
    await apiClient.delete("/posts/" + postId);
    window.location.reload();
  };
  return (
    <>
      <div>
        {post.title} <span>by: {post.author}</span>
      </div>
      <button onClick={() => deletePosts(post.id)}>Delete</button>
    </>
  );
};

export default PostCard;
