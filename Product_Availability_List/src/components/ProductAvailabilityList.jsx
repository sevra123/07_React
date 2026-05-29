function ProductsList({ products }) {
  if (!products && products.length === 0) {
    return <p>No products to show</p>;
  }

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>In Stock</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
      {products.map((product) => (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price}€</td>
          <td
            style={{
              opacity: product.inStock ? 1 : 0.5,
              color: product.inStock ? "green" : "red",
            }}
          >
            {product.inStock ? "In stock" : "Out of stock"}
          </td>
          <td>{product.category}</td>
          <td>
            <button type="button" onClick={() => console.log(product)}>
              Show product
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default ProductsList;
