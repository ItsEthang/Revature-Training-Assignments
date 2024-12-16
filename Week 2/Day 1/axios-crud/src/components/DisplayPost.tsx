import { Post } from "../entity";
import PostCard from "./PostCard";
import PatchPost from "./PatchPost";
const DisplayPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {posts.map((post) => (
        // <li key={post.id}>{post.title}</li>
        <div key={post.id} className="box">
          <PostCard post={post} />
          <hr />
          <PatchPost post={post} />
        </div>
      ))}
    </ul>
  );
};

export default DisplayPosts;
