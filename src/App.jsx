import logo from "/rocket.png";
import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import Clock from "./Components/Clock";
import HighestCount from "./Components/HighestCount.jsx";

import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import API from "./Components/API";
import ComplexForm from "./Components/ComplexForm";

function App() {
  const FTBC14Foods = ["rice", "cream puffs", "duck", "fries", "bachormee"];

  const user = {
    name: "Sam",
    age: 31,
    pokemon: "snorlax",
  };

  const [name, setName] = useState("Sam");
  const [showCounter, setShowCounter] = useState(true);
  const [showClock, setShowClock] = useState(true);

  const [counters, setCounters] = useState([
    { id: 1, count: 0, name: "Sam" },
    { id: 2, count: 0, name: "Bob" },
    { id: 3, count: 0, name: "Cherry" },
    { id: 4, count: 1, name: "Jessica" },
    { id: 5, count: 0, name: "Keiran" },
    { id: 6, count: 0, name: "Kyra" },
  ]);

  const updateCount = (id, sign) => {
    const isId = (element) => element.id == id;
    let index = counters.findIndex(isId);

    console.log(index);
    console.log(sign);

    const newCounterArray = [...counters];

    if (sign === "+") {
      let newItem = {
        id: id,
        count: counters[index].count + 1,
        name: counters[index].name,
      };

      console.log(newItem);

      newCounterArray.splice(index, 1, newItem);
      setCounters(newCounterArray);
    } else {
      let newItem = {
        id: id,
        count: counters[index].count - 1,
        name: counters[index].name,
      };
      console.log(newItem);

      newCounterArray.splice(index, 1, newItem);
      setCounters(newCounterArray);
    }
  };
  counters.sort((a, b) => a.count - b.count);

  const highestCount = counters[counters.length - 1];
  return (
    <>
      {/* <Button onClick={() => setShowCounter(true)} variant="success">
        Show Counter
      </Button>
      <Button onClick={() => setShowCounter(false)} variant="outline-danger">
        Hide Counter
      </Button>

      {showCounter ? <Counter name={name} /> : null} */}

      {/* Counters real */}
      {counters && counters.length > 0
        ? counters.map((counter) => (
            <Counter
              key={counter.id}
              count={counter.count}
              id={counter.id}
              updateCount={updateCount}
              name={counter.name}
            />
          ))
        : null}

      <HighestCount counter={highestCount} />

      <Form />
      <Header name={name} food={FTBC14Foods} />
      <div>
        <img src={logo} className="logo react" alt="Rocket logo" />
      </div>
      <Footer />

      <Button onClick={() => setShowClock(!showClock)}>Toggle Clock</Button>
      {showClock ? <Clock timeZone="utc" /> : null}

      <API pokemon="geodude" user={user} />

      <Container>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
        </Row>
      </Container>

      <ComplexForm />
    </>
  );
}

export default App;
