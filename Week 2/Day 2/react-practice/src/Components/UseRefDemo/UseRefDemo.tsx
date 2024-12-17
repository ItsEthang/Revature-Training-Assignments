import { useRef } from "react";

const UseRefDemo = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    alert("You clicked " + countRef.current + " times");
  };

  return (
    <>
      <div>{countRef.current} times</div>
      <button onClick={handleClick}>Increase Count</button>
    </>
  );
};

export default UseRefDemo;
