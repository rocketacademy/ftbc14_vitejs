import { useState, useEffect } from "react";

export default function Clock(props) {
  // console.log(props);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      // run when updated
      // console.log("tick");
      setDate(new Date());
    };

    // run when mounted

    const timerId = setInterval(tick, 1000);

    // run when unmounted
    return () => {
      console.log("unmounted");
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      {date.toLocaleTimeString("en-GB", { timeZone: `${props.timeZone}` })}
    </div>
  );
}
