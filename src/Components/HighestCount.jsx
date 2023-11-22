export default function HighestCount(props) {
  return (
    <div>
      <h1>Highest Count:</h1>
      <h3>
        Counter name: {props.counter.name} - Count : {props.counter.count}
      </h3>
    </div>
  );
}
