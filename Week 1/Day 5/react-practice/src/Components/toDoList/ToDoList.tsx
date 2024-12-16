import React, { useRef, useState } from "react";
import ListShow from "./ListShow";
import ListCount from "./ListCount";
import ListAdd from "./ListAdd";

const ToDoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setTodos((prevTodos) => [...prevTodos, inputRef.current?.value || ""]);
      inputRef.current.value = "";
    } else {
      console.log("Input field cannot be empty");
    }
  };

  return (
    <div className="content">
      <ListShow todos={todos} />
      <ListCount todos={todos} />
      <ListAdd handleSubmit={handleSubmit} ref={inputRef} />
    </div>
  );
};

export default ToDoList;
