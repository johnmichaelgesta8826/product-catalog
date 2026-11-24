import { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // Lab 3: cart state
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Lab 4: search and filter state
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  function handleAddToCart(productTitle) {
    setCartCount(cartCount + 1);
    setLastAdded(productTitle);
  }

  function handleClearFilters() {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  }

  // Debounce effect: update debouncedSearch 300ms after the user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer); // cleanup
  }, [searchText]);

  // Derived list (calculated during render, not stored in state)
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
    )
    .filter((product) => category === "All" || product.category === category);

  // Sort a copy so the original products array is never modified
  const displayedProducts = [...filteredProducts];
  if (sortOrder === "low-high") {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  // Title effect: runs only when the number of results changes
  useEffect(() => {
    document.title = `CvSU Mini Store (${displayedProducts.length} results)`;
  }, [displayedProducts.length]);

  return (
    <div className="app">
      <header>
        <h1>CvSU Mini Store</h1>
        <p>Welcome to our Mini Product Catalog!</p>
      </header>

      <div className="cart-message">
        {cartCount === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>
            Items added to cart: {cartCount}{" "}
            (Last added: {lastAdded})
          </p>
        )}
      </div>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        onClear={handleClearFilters}
      />

      <p className="result-count">
        Showing {displayedProducts.length} of {products.length} products
      </p>

      {displayedProducts.length === 0 ? (
        <p className="empty-state">
          No products found. Try a different keyword or category.
        </p>
      ) : (
        <main className="product-grid">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >
              {product.id === 1 && <span className="badge">New</span>}
              {product.id === 5 && <span className="badge">Sale</span>}
            </ProductCard>
          ))}
        </main>
      )}
    </div>
  );
}

export default App;