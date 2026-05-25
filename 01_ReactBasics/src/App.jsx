import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <h1>Hello from React</h1>
      <p>This page render completely client side</p>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>
      <Card title="Dobrodošli" />
      <Card title="Dobrodošli drugi put">
        <p>Moja poruka</p>
      </Card>
      <Card title="Treća primjena">
        <p>Još jedan primjer iste komponente</p>
      </Card>
      <Footer />
    </main>
  );
}

export default App;
