import styles from "./ProductCard.module.css";

function ProductCard({
  name,
  category,
  price,
  discount,
  description,
  inStock,
}) {
  const statusStyle = {
    color: inStock ? "#176b3a" : "#c0392b",
    fontWeight: "bold",
  };

  const priceStyle = {
    color: discount > 0 ? "#c0392b" : "#101828",
  };

  return (
    <article className={styles.card}>
      {discount > 0 && <span className={styles.badge}>{discount}% OFF</span>}

      <h2 className={styles.title}>{name}</h2>
      <p className={styles.category}>{category}</p>
      <p className={styles.price} style={priceStyle}>
        €{price}
      </p>
      <p className={styles.description}>{description}</p>
      <p style={statusStyle}>{inStock ? "In stock" : "Out of stock"}</p>
      <button
        className={`${styles.button}$
        {inStock ? styles.disabledButton : ""}`}
        disabled={!inStock}
      >
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </article>
  );
}
export default ProductCard;
