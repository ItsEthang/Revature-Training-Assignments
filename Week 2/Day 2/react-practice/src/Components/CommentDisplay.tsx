import { Comment } from "../entity/comment";

interface Props {
  comments: Comment[];
  onDelete: (id: number) => void;
}

const CommentDisplay = ({ comments, onDelete }: Props) => {
  return (
    <>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.name}</p>
            <p> {comment.email}</p>
            <button onClick={() => onDelete(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentDisplay;
