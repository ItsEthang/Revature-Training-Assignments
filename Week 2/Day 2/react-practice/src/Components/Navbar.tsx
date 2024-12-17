import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>React Demos</h2>
      <div className="links">
        <Link to="hello">Hello</Link>
        <Link to="sdc">State Demo</Link>
        <Link to="posts">Posts</Link>
        <Link to="todos">To-Dos</Link>
      </div>
    </div>
  );
};

export default Navbar;
