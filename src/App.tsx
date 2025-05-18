import { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface UnsplashPhoto {
  urls: { regular: string };
}

interface CartItem {
  name: string;
  price: number;
}

function App() {
  const [images, setImages] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<string | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      const accessKey = "4He4Ms1zjg2EhxY-3SSH7SCkD6ELaiWZ0DRMpXCmNh8";
      const fetched: string[] = [];

      for (const product of products) {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${product.query}&client_id=${accessKey}&per_page=1`
        );
        const data = await res.json();
        const photo: UnsplashPhoto = data.results[0];
        fetched.push(photo?.urls?.regular);
      }

      setImages(fetched);
    };

    fetchImages();
  }, []);

  const handleAddToCart = (product: CartItem) => {
    setCart((prev) => [...prev, product]);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleLogin = () => {
    const name = prompt("Enter your name:");
    if (name) setUser(name);
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        cartCount={cart.length}
        user={user}
        onLogin={handleLogin}
        onContactClick={handleScrollToContact}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                padding: "2rem",
                maxWidth: "1200px",
                margin: "0 auto",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                  fontWeight: "bold",
                  marginBottom: "2rem",
                }}
              >
                Explore Our Coffee
              </h1>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={product.price}
                    imageUrl={images[index] || ""}
                    onAddToCart={() => handleAddToCart(product)}
                    onClick={() =>
                      navigate(`/product/${product.name}`)
                    }
                  />
                ))}
              </div>
            </div>
          }
        />

        {products.map((product, index) => (
          <Route
            key={product.name}
            path={`/product/${product.name}`}
            element={
              <ProductDetail
                name={product.name}
                price={product.price}
                imageUrl={images[index] || ""}
                onAddToCart={() => handleAddToCart(product)}
              />
            }
          />
        ))}

        <Route
          path="/cart"
          element={
            <CartPage items={cart}>
              <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <button
                  onClick={handleClearCart}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Clear Cart
                </button>
              </div>
            </CartPage>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;