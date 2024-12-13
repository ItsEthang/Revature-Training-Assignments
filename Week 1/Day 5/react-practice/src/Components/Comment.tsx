interface Props {
  content: string;
}

const Comment = ({ content }: Props) => {
  return <div>Comment: {content}</div>;
};

export default Comment;
