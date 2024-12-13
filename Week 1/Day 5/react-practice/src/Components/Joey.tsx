interface Props {
  secret: string;
  anotherSecret?: string;
}

const Joey = ({ secret, anotherSecret }: Props) => {
  return (
    <>
      <div>Joey is telling a secret: {secret}</div>
      {anotherSecret && <div>I have another secret: {anotherSecret}</div>}
    </>
  );
};

export default Joey;
