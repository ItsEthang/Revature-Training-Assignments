import Comment from "./Comment";

const Post = () => {
  const comments: string[] = [
    "I am passionate about React",
    "I love TypeScript",
    "I love SpringBoot",
    "I love Web dev",
    "I don't like to work on a time crunch.",
  ];
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment} content={comment} />
      ))}
    </div>
  );
};

export default Post;
