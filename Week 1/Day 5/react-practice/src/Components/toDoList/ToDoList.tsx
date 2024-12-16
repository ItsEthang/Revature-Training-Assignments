import React, { useState } from "react";

const ToDoList = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, value]);
    setValue("");
  };

  console.log("rendered");
  return (
    <>
      <div>ToDoList</div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
      <div>{todos.length}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ToDoList;
