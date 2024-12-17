import { useContext } from "react";
import MyContext from "./Context/MyContext";

interface Props {
  secret: string;
  anotherSecret?: string;
}

const Joey = ({ secret, anotherSecret }: Props) => {
  const sharedValue = useContext(MyContext);
  return (
    <>
      <div>Joey is telling a secret: {secret}</div>
      <div>I know the context value is {sharedValue}</div>
      {anotherSecret && <div>I have another secret: {anotherSecret}</div>}
    </>
  );
};

export default Joey;
