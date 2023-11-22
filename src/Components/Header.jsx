export default function Header(props) {
  console.log(props);
  // props come from the parent
  // you cannot alter props values - they are immutable
  // prop data flows down
  return (
    <div>
      <h4>Hello World {props.name} </h4>
      <ul>
        {props.food && props.food.length > 0
          ? props.food.map((food, index) => <li key={index}>{food}</li>)
          : null}
      </ul>
    </div>
  );
}
