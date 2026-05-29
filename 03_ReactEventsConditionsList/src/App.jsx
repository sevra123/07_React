import FruitList from "./components/FruitList";
import UsersList from "./components/UsersList";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const tasks = [
    { id: 1, name: "Laundry" },
    { id: 2, name: "Shopping" },
    { id: 3, name: "Exercise" },
  ];

  function handleClick() {
    console.log("Button clicked");
  }

  function handleGreet(name) {
    console.log(`Hello, ˘${name}`);
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <button type="button" onClick={() => handleGreet("Alice")}>
        Greet Alice
      </button>
      <button type="button" onClick={() => handleGreet("Bob")}>
        Greet Bob
      </button>
      <button type="button" onClick={(e) => console.log(e)}>
        Capture Event Object
      </button>
      <hr />
      <h2>Fruit List</h2>
      <FruitList />
      <h2>Users List</h2>
      <UsersList />
      <h2>Task List</h2>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
