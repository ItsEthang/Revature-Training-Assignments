import React, { useState } from "react";

const InputRefDemo = () => {
  const [text, setText] = useState<string>("Hello world!!!");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setText(newValue);
  };
  console.log("rendered");
  return (
    <div>
      <p>{text}</p>
      <textarea
        value={text}
        onChange={handleChange}
        rows={4}
        cols={50}
      ></textarea>
    </div>
  );
};

export default InputRefDemo;
