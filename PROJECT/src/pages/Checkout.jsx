function Checkout() {
  return (
    <section class="block">
      <div class="container">
        <button class="back-btn">Назад</button>
        <h1 class="title">Оформление заказа</h1>
        <form class="form">
          <div class="form-control">
            <label htmlFor="name" class="label">
              Ваше имя
            </label>
            <input type="text" name="name" placeholder="Введите имя" required />
          </div>
          <div class="form-control">
            <label htmlFor="phone" class="label">
              Номер телефона
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Введите номер телефона: +7 XXX XXX XX XX"
              required
            />
          </div>
          <div class="form-control">
            <label htmlFor="phone" class="label">
              Напишите адрес
            </label>
            <textarea
              placeholder="Введите адрес, дом, квартиру, домофон"
              required
            ></textarea>
          </div>
          <div class="form-control">
            <label htmlFor="phone" class="label">
              Укажите город
            </label>
            <select name="" id="">
              <option value="1">Алматы</option>
              <option value="1">Астана</option>
            </select>
          </div>
          <button class="send-btn">Оформить заказ</button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
