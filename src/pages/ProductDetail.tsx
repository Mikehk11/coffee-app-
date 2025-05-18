import { useParams, useNavigate } from "react-router-dom";

interface ProductDetailProps {
  imageUrl: string;
  name: string;
  price: number;
  onAddToCart: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ imageUrl, name, price, onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <img src={imageUrl} alt={name} style={{ width: "100%", borderRadius: "10px" }} />
      <h2 style={{ marginTop: "1rem", fontSize: "2rem" }}>{name}</h2>
      <p style={{ fontSize: "1.2rem" }}>${price.toFixed(2)}</p>
      <button
        onClick={onAddToCart}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1.5rem",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
      <div>
        <button onClick={() => navigate("/")} style={{ marginTop: "1rem", color: "#555", background: "none", border: "none", cursor: "pointer" }}>
          ← Back to Menu
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;