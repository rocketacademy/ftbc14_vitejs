import { useState } from "react";
import logo from "/rocket.png";
import "./App.css";
import Footer, { additonalJSX, test } from "./Components/Footer.jsx";
import Button from "react-bootstrap/Button";

function App() {
  const [count, setCount] = useState(0);

  console.log("Good morning indra");
  const classSize = 9;
  const classFTBC14 = <h1>Hello world welcome {classSize} students</h1>;
  const classList = (
    <ol>
      <li>Indra</li>
      <li>Ben</li>
      <li>Jasper</li>
      <li>Iffah</li>
      <li>Ester</li>
      <li>Hongyu</li>
    </ol>
  );
  const styleVariables = {
    color: "#000",
    border: "1px solid #fff",
  };
  const page = (
    <div style={styleVariables}>
      {classFTBC14} {classList}
    </div>
  );

  return (
    <>
      {page}

      {2 + 2}
      <div>
        <img src={logo} className="logo react" alt="Rocket logo" />
      </div>
      <h1 style={{ backgroundColor: "#fff", color: "#000" }}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button variant="outline-danger">Click me</Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {additonalJSX}
      {test}

      <Footer />
    </>
  );
}

export default App;
