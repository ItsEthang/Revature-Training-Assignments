import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Kangaroo from "./Components/Kangaroo";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import StateDemo from "./Components/StateDemo";
import ToDoList from "./Components/toDoList/ToDoList";

function App() {
  return (
    <>
      {/* <Kangaroo />
      <StateDemo />
      <Post />
      <ListAndKeys /> */}
      {/* <AxiosGetDemo /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="hello" element={<Kangaroo />} />
          <Route path="sdc" element={<StateDemo />} />
          <Route path="posts" element={<Post />} />
          <Route path="todos" element={<ToDoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
