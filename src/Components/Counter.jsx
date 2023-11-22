import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function Counter(props) {
  console.log(props);
  // const [count, setCount] = useState(0);
  //    variable  updaterFunc  useState call + initial value

  // this will only run once when mounted
  // useEffect(() => {
  //   console.log("I have mounted the counter");
  // }, []);

  // this will run only when the component is updated
  // useEffect(() => {
  //   console.log("I run when updated");
  // });

  //only runs when count is updated
  // useEffect(() => {
  //   console.log("the new count is:" + count);
  // }, [count]);

  // useEffect(() => {
  //   return () => {
  //     console.log("I run unmounted ");
  //   };
  // });

  return (
    <div>
      <h5>
        {props.name} Counter: {props.count}
      </h5>

      <Button
        variant="success"
        onClick={() => props.updateCount(props.id, "+")}
      >
        Increment me!
      </Button>
      <Button variant="danger" onClick={() => props.updateCount(props.id, "-")}>
        Decrement me!
      </Button>
      {/* <Button variant="success" onClick={() => setCount(count + 1)}>
        Increment me!
      </Button>
      <Button variant="danger" onClick={() => setCount(count - 1)}>
        Decrement me!
      </Button> */}
    </div>
  );
}
