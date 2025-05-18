import { useNavigate } from "react-router-dom";

interface NavbarProps {
  cartCount: number;
  user: string | null;
  onLogin: () => void;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, user, onLogin, onContactClick }) => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
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
      }}
    >
      <div
        style={{ fontWeight: "bold", fontSize: "1.2rem", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        ☕ CoffeeCo
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          style={{ cursor: "pointer", fontSize: "1rem" }}
          onClick={() => navigate("/cart")}
        >
          🛒 <strong>{cartCount}</strong>
        </div>
        <button
          onClick={onLogin}
          style={{
            background: "#000",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {user ? user : "Login"}
        </button>
        <button
          onClick={onContactClick}
          style={{
            background: "#000",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;