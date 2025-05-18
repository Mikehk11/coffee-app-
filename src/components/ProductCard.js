import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ProductCard = ({ name, price, imageUrl, onAddToCart, onClick, }) => {
    return (_jsxs("div", { onClick: onClick, style: {
            cursor: "pointer",
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }, onMouseEnter: (e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0,0,0,0.1)";
        }, onMouseLeave: (e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.05)";
        }, children: [_jsx("img", { src: imageUrl, alt: name, style: { width: "100%", height: "150px", objectFit: "cover" } }), _jsxs("div", { style: { padding: "0.75rem" }, children: [_jsx("h3", { style: { fontSize: "1.1rem", marginBottom: "0.25rem" }, children: name }), _jsxs("p", { style: { color: "#666", marginBottom: "0.75rem" }, children: ["$", price.toFixed(2)] }), _jsx("button", { onClick: (e) => {
                            e.stopPropagation();
                            onAddToCart();
                        }, style: {
                            padding: "0.5rem 1rem",
                            backgroundColor: "#000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            transition: "background-color 0.2s ease",
                        }, onMouseEnter: (e) => {
                            e.currentTarget.style.backgroundColor = "#333";
                        }, onMouseLeave: (e) => {
                            e.currentTarget.style.backgroundColor = "#000";
                        }, children: "Add to Cart" })] })] }));
};
export default ProductCard;
