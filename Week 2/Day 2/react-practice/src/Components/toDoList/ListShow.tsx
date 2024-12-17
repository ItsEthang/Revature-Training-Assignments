const ListShow = ({ todos }: { todos: string[] }) => {
  return (
    <>
      <div>ToDoList</div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </>
  );
};

export default ListShow;
