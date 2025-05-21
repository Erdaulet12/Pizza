function Cart() {
  return (
    <section class="block">
      <div class="container">
        <button class="back-btn">Назад</button>
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
            <tr>
              <td>Маргарита</td>
              <td>
                <img
                  src="https://media.dodostatic.net/image/r:584x584/11EE7D5F7DFCC07695BBB44734525217.avif"
                  class="cart-img"
                  alt=""
                />
              </td>
              <td>1234 &#8376;</td>
              <td>
                <div class="counter">
                  <button class="circle">-</button>
                  <span>1</span>
                  <button class="circle">+</button>
                </div>
              </td>
              <td>1234 &#8376;</td>
              <td>
                <button class="delete-btn">Удалить</button>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 class="total-price">Итого: 1234 &#8376;</h3>
        <div class="cart-action">
          <button class="cart-action__btn">Оформление заказа</button>
          <button class="cart-action__btn">Продолжить покупку</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
