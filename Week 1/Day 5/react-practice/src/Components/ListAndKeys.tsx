import { useState } from "react";
import { Comment } from "../entity/comment";

const ListAndKeys = () => {
  const [comments, setComments] = useState<Comment[]>();

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => setComments(json));
  return (
    <>
      <h3>List and Keys</h3>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id}>
            <p>{comment.name}</p>
            <p> {comment.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListAndKeys;
