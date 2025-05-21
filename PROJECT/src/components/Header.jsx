import logo from "../assets/images/logo.svg";
function Header() {
  return (
    <header class="header">
      <div class="container header-flex">
        <div class="logo">
          <img src={logo} alt="Logo" />
          <span class="logo-text">Pizzafy.</span>
        </div>
        <button class="cart-button">Корзина : 0</button>
      </div>
    </header>
  );
}

export default Header;
