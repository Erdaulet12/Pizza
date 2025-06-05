import { CHECKOUT, HOME } from "../utils/consts";
import { Link, useNavigate } from "react-router-dom";
function Cart() {
  const {
    cartItems,
    totalPrice,
    removeFormCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  function handleCheckout() {
    if (cartItems.length === 0) {
      alert("Корзина пуста. Добавьте товары перед оформлением заказа");
      return;
    }
    Navigate(CHECKOUT);
  }
  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <section className="block">
            <div className="container">
              <Link to={HOME} class="back-btn">
                Ha3ag
              </Link>
              <h1 class="title">Моя корзина</h1>
              <p className="alert-danger">
                Ваша корзина пуста, добавьте товары чтобы получить бонусык/
              </p>
            </div>
          </section>
        </>
      ) : (
        <>
          <section class="block">
            <div class="container">
              <Link to={HOME} class="back-btn">
                Назад{" "}
              </Link>
              <h1 class="title">Моя корзина</h1>
              <table class="cart-table">
                <thead>
                  <tr>
                    <th>Наименование продукта</th>
                    <th>Фото</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Всего</th>
                    <th>Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>
                        <img src={item.name} class="cart-img" alt={item.name} />
                      </td>
                      <td>{item.price.toLocaleString()} &#8376;</td>
                      <td>
                        <div class="counter">
                          <button
                            class="circle"
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            class="circle"
                            onClick={() =>
                              increaseQuantity(item.decreaseQuantity)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>Итого: {totalPrice.toLocaleString()}&#8376;</td>
                      <td>
                        <button
                          button
                          onClick={() => removeFormCart(item.id)}
                          class="delete-btn"
                        >
                          Удалить
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 class="total-price">Итого: 1234 &#8376;</h3>
              <div class="cart-action">
                <button onClick={handleCheckout} class="cart-action__btn">
                  Оформление заказа
                </button>
                <Link to={HOME} class="cart-action__btn">
                  Продолжить покупку
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Cart;
