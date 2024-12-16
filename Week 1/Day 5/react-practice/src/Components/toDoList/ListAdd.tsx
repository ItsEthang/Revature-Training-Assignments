import { forwardRef } from "react";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ListAdd = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" ref={ref} />
      <button type="submit">Add</button>
    </form>
  );
});

export default ListAdd;
