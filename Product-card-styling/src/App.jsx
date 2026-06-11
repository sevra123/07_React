import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Product Showcase</h1>
      <section className="product-grid">
        <ProductCard
          name="Wireless Headphones"
          category="Electronics"
          price={89.99}
          description="High-quality wireless headphones with noise cancellation."
          inStock={true}
          discount={20}
        />
        <ProductCard
          name="Mechanical Keyboard"
          category="Accessories"
          price={129.99}
          description="A compact mechanical keyboard with tactile switches."
          inStock={false}
          discount={20}
        />
      </section>
    </main>
  );
}

export default App;
