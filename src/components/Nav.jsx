import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Nav.css";

const Nav = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2 className="logo">CoffeShopWorld</h2>
      <div className="nav-links">
        <span onClick={() => navigate("/")}>Productos</span>
        <button onClick={() => navigate("/finish-shop")}>Finalizar compra</button>
        <span className="cart-icon" onClick={() => navigate("/finish-shop")}>
          🛒 <sup>{totalItems}</sup>
        </span>
      </div>
    </nav>
  );
};

export default Nav;



