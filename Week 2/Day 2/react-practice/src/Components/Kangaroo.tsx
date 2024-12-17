import Joey from "./Joey";

const Kangaroo = () => {
  return (
    <div>
      <h1>I am a Kangaroo and </h1>
      <Joey
        secret="I like React + Vite more than React Create App"
        anotherSecret="And I think TS is better than JS"
      />
    </div>
  );
};

export default Kangaroo;
