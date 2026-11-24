
function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children
}) {
  return (
    <div className={`product-card ${!inStock ? "out-of-stock" : ""}`}>

      <div className="badge-container">
        {children}
      </div>

      <h3>{title}</h3>

      <p className="category">{category}</p>

      <p className="price">
        ₱{price.toLocaleString("en-PH", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </p>

      {inStock ? (
        <span className="stock-status available">
          In Stock
        </span>
      ) : (
        <span className="stock-status unavailable">
          Out of Stock
        </span>
      )}

      <button
        onClick={() => onAddToCart(title)}
        disabled={!inStock}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
