import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const data = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(res.data);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        </a>
        <span>Changed!!</span>
      </header>
    </div>
  );
}

export default App;
