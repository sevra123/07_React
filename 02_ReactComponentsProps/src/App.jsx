import { useState } from "react";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import ChildrenCard from "./components/ChildrenCard";
import "./App.css";

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}

function Header() {
  return (
    <header>
      <h1>My Application</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2026</p>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Greeting name="Pol" />
      <Greeting name="Sara" />
      <Greeting name="Marko" />
      <hr />
      <UserCard />
      <UserCard name={"Marko"} age={37 + 21} />
      <UserCard name="Pol" age={37} />
      <UserCard name="Sara" age={35} />
      <hr />
      <Button />
      <Button label="Submit" />
      <Button label="Submit" variant="danger" />
      <Button label="Submit" variant="warning" />
      <ChildrenCard>
        <h2>Child 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugiat
          vel hic impedit temporibus sed, ut dicta cum tenetur possimus deserunt
          magnam fugit ad maiores at necessitatibus. Nobis, consequuntur
          reprehenderit.
        </p>
        <Button />
      </ChildrenCard>
      <ChildrenCard>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
      </ChildrenCard>
      <Footer />
    </>
  );
}

export default App;
