import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
const ProductDetail = ({ imageUrl, name, price, onAddToCart }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { style: { padding: "2rem", maxWidth: "500px", margin: "auto", textAlign: "center" }, children: [_jsx("img", { src: imageUrl, alt: name, style: { width: "100%", borderRadius: "10px" } }), _jsx("h2", { style: { marginTop: "1rem", fontSize: "2rem" }, children: name }), _jsxs("p", { style: { fontSize: "1.2rem" }, children: ["$", price.toFixed(2)] }), _jsx("button", { onClick: onAddToCart, style: {
                    marginTop: "1rem",
                    padding: "0.5rem 1.5rem",
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }, children: "Add to Cart" }), _jsx("div", { children: _jsx("button", { onClick: () => navigate("/"), style: { marginTop: "1rem", color: "#555", background: "none", border: "none", cursor: "pointer" }, children: "\u2190 Back to Menu" }) })] }));
};
export default ProductDetail;
