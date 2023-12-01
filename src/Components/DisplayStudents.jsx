import students from "./students.json";

export default function DisplayStudents(props) {
  console.log(students);

  // access the data in local storage, parse
  let users = JSON.parse(localStorage.getItem("users"));
  console.log(users);

  console.log(users[0]);

  // let accessibleStudents = JSON.parse(students);
  // console.log(accessibleStudents);

  localStorage.setItem("students", JSON.stringify(students));

  return <></>;
}
