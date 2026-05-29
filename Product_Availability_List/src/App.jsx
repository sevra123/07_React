import ProductsList from "./components/ProductAvailabilityList";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 29.99,
      inStock: true,
      category: "Accessories",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 89.99,
      inStock: true,
      category: "Accessories",
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 45.0,
      inStock: false,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Monitor Stand",
      price: 34.99,
      inStock: true,
      category: "Monitors",
    },
    {
      id: 5,
      name: "Webcam HD",
      price: 59.99,
      inStock: false,
      category: "Cameras",
    },
  ];
  return (
    <>
      <h1>Product Availability List</h1>
      <ProductsList products={products} />
      <p>Total number of products: {products.length}</p>
    </>
  );
}

export default App;
