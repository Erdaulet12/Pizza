import logo from "../assets/images/logo.svg";
import { CART, HOME } from "../utils/consts";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { totalQuantity } = useCart();

  return (
    <header class="header">
      <div class="container header-flex">
        <div class="logo">
          <Link to={HOME} class="home-button">
          <img src={logo} alt="Logo" />
          <span class="logo-text">Pizzafy.</span>
          </Link>
        </div>
        <Link to={CART} class="cart-button">
          Корзина : {totalQuantity}
        </Link>
      </div>
    </header>
  );
}

export default Header;
