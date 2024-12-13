import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Kangaroo from "./Components/Kangaroo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Kangaroo />
    </>
  );
}

export default App;
