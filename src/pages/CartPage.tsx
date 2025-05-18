import { useNavigate } from "react-router-dom";
import React from "react";

interface CartItem {
  name: string;
  price: number;
}

interface CartPageProps {
  items: CartItem[];
  children?: React.ReactNode;
}

const CartPage: React.FC<CartPageProps> = ({ items, children }) => {
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🛒 Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.75rem",
                borderBottom: "1px solid #eee",
                paddingBottom: "0.5rem",
              }}
            >
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}

      <hr style={{ margin: "1rem 0" }} />
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        Total: ${total.toFixed(2)}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            border: "none",
            background: "#eee",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ← Back to Menu
        </button>
        <button
          style={{
            padding: "0.5rem 1.5rem",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </div>

      {children}
    </div>
  );
};

export default CartPage;