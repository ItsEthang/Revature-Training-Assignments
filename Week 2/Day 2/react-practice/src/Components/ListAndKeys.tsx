import { useEffect, useState } from "react";
import { Comment } from "../entity/comment";
import CommentDisplay from "./CommentDisplay";

const ListAndKeys = () => {
  const [comments, setComments] = useState<Comment[]>();

  const fetchComment = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const comments: Comment[] = await response.json();
      setComments(comments);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };

  useEffect(() => {
    console.log("Comment deleted");
  }, [comments]);

  const handleDelete = (id: number) => {
    const newComment = comments?.filter((comment) => comment.id !== id);
    setComments(newComment);
  };

  return (
    <>
      <h3>List and Keys</h3>
      <button onClick={fetchComment}>Fetch Comment Now!</button>
      {comments && (
        <CommentDisplay comments={comments} onDelete={handleDelete} />
      )}
    </>
  );
};

export default ListAndKeys;
