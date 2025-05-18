import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
const CartPage = ({ items, children }) => {
    const navigate = useNavigate();
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return (_jsxs("div", { style: {
            padding: "2rem",
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "system-ui, sans-serif",
        }, children: [_jsx("h2", { style: { fontSize: "2rem", marginBottom: "1rem" }, children: "\uD83D\uDED2 Your Cart" }), items.length === 0 ? (_jsx("p", { children: "Your cart is empty." })) : (_jsx("ul", { style: { listStyle: "none", padding: 0 }, children: items.map((item, index) => (_jsxs("li", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.75rem",
                        borderBottom: "1px solid #eee",
                        paddingBottom: "0.5rem",
                    }, children: [_jsx("span", { children: item.name }), _jsxs("span", { children: ["$", item.price.toFixed(2)] })] }, index))) })), _jsx("hr", { style: { margin: "1rem 0" } }), _jsxs("div", { style: { fontWeight: "bold", fontSize: "1.2rem" }, children: ["Total: $", total.toFixed(2)] }), _jsxs("div", { style: { marginTop: "2rem" }, children: [_jsx("button", { onClick: () => navigate("/"), style: {
                            marginRight: "1rem",
                            padding: "0.5rem 1rem",
                            border: "none",
                            background: "#eee",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }, children: "\u2190 Back to Menu" }), _jsx("button", { style: {
                            padding: "0.5rem 1.5rem",
                            background: "#000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }, children: "Checkout" })] }), children] }));
};
export default CartPage;
