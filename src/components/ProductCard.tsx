import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart: () => void;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageUrl,
  onAddToCart,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 6px 16px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <div style={{ padding: "0.75rem" }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>{name}</h3>
        <p style={{ color: "#666", marginBottom: "0.75rem" }}>
          ${price.toFixed(2)}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#333";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#000";
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;