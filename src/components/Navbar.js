import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
const Navbar = ({ cartCount, user, onLogin, onContactClick }) => {
    const navigate = useNavigate();
    return (_jsxs("nav", { style: {
            position: "sticky",
            top: 0,
            zIndex: 1000,
            background: "#fff",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #eee",
            fontFamily: "system-ui, sans-serif",
        }, children: [_jsx("div", { style: { fontWeight: "bold", fontSize: "1.2rem", cursor: "pointer" }, onClick: () => navigate("/"), children: "\u2615 CoffeeCo" }), _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem" }, children: [_jsxs("div", { style: { cursor: "pointer", fontSize: "1rem" }, onClick: () => navigate("/cart"), children: ["\uD83D\uDED2 ", _jsx("strong", { children: cartCount })] }), _jsx("button", { onClick: onLogin, style: {
                            background: "#000",
                            color: "#fff",
                            padding: "0.5rem 1rem",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }, children: user ? user : "Login" }), _jsx("button", { onClick: onContactClick, style: {
                            background: "#000",
                            color: "#fff",
                            padding: "0.5rem 1rem",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }, children: "Contact Us" })] })] }));
};
export default Navbar;
