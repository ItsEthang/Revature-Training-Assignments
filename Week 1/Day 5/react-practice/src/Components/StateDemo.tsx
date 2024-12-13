import { useState } from "react";

const StateDemo = () => {
  const [name, setName] = useState<string>("Ethan");

  const handleClick = (str: string) => {
    setName(str);
  };
  return (
    <>
      <div>{name}</div>
      <button onClick={() => handleClick("Eejett")}>
        Change the name here
      </button>
    </>
  );
};

export default StateDemo;
