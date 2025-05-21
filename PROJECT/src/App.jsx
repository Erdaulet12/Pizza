import "./assets/css/style.css";
import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import { CART, CHECKOUT, HOME } from "./utils/consts.js";
import Checkout from "./pages/Checkout.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Header />;
      <main>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={CART} element={<Cart />} />
          <Route path={CHECKOUT} element={<Checkout />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
