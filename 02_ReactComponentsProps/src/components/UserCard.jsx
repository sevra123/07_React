// Bez destrukturiranja

//function UserCard(props) {
// return <p>{props.name} is {props.age}</p>
//}

// Sa destrukturiranjem
function UserCard({ name = "John Doe", age = 0 }) {
  return (
    <p>
      {name} is {age} years old
    </p>
  );
}

export default UserCard;
