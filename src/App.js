var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
    const [images, setImages] = useState([]);
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const contactRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchImages = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const accessKey = import.meta.env.VITE_UNSPLASH_KEY;
            const fetched = [];
            for (const product of products) {
                const res = yield fetch(`https://api.unsplash.com/search/photos?query=${product.query}&client_id=${accessKey}&per_page=1`);
                const data = yield res.json();
                const photo = data.results[0];
                fetched.push((_a = photo === null || photo === void 0 ? void 0 : photo.urls) === null || _a === void 0 ? void 0 : _a.regular);
            }
            setImages(fetched);
        });
        fetchImages();
    }, []);
    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };
    const handleClearCart = () => {
        setCart([]);
    };
    const handleLogin = () => {
        const name = prompt("Enter your name:");
        if (name)
            setUser(name);
    };
    const handleScrollToContact = () => {
        const element = document.getElementById("contact");
        if (element)
            element.scrollIntoView({ behavior: "smooth" });
    };
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { cartCount: cart.length, user: user, onLogin: handleLogin, onContactClick: handleScrollToContact }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs("div", { style: {
                                padding: "2rem",
                                maxWidth: "1200px",
                                margin: "0 auto",
                                fontFamily: "system-ui, sans-serif",
                            }, children: [_jsx("h1", { style: {
                                        fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                                        fontWeight: "bold",
                                        marginBottom: "2rem",
                                    }, children: "Explore Our Coffee" }), _jsx("div", { style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                                        gap: "1.5rem",
                                    }, children: products.map((product, index) => (_jsx(ProductCard, { name: product.name, price: product.price, imageUrl: images[index] || "", onAddToCart: () => handleAddToCart(product), onClick: () => navigate(`/product/${product.name}`) }, index))) })] }) }), products.map((product, index) => (_jsx(Route, { path: `/product/${product.name}`, element: _jsx(ProductDetail, { name: product.name, price: product.price, imageUrl: images[index] || "", onAddToCart: () => handleAddToCart(product) }) }, product.name))), _jsx(Route, { path: "/cart", element: _jsx(CartPage, { items: cart, children: _jsx("div", { style: { marginTop: "1rem", textAlign: "center" }, children: _jsx("button", { onClick: handleClearCart, style: {
                                        padding: "0.5rem 1rem",
                                        background: "#000",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                    }, children: "Clear Cart" }) }) }) })] }), _jsx(Footer, {})] }));
}
export default App;
