import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Kangaroo from "./Components/Kangaroo";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import StateDemo from "./Components/StateDemo";
import ToDoList from "./Components/toDoList/ToDoList";
import TextComponent from "./Components/FancyText/TextComponent";
import UseRefDemo from "./Components/UseRefDemo/UseRefDemo";
import InputRefDemo from "./Components/UseRefDemo/InputRefDemo";
import MyContext from "./Components/Context/MyContext";
import Joey from "./Components/Joey";

function App() {
  const sharedValue = "This is a shared value";
  return (
    <>
      {/* <Kangaroo />
      <StateDemo />
      <Post />
      <ListAndKeys /> */}
      {/* <AxiosGetDemo /> */}
      <MyContext.Provider value={sharedValue}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="hello" element={<Joey secret="hi" />} />
            <Route path="sdc" element={<StateDemo />} />
            <Route path="posts" element={<Post />} />
            <Route path="todos" element={<ToDoList />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
