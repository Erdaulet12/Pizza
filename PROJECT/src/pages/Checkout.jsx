import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { a } from "../services/axiosInstance";
import { CART, HOME } from "../utils/consts";
import { useCart} from "../context/CartContext";

function Checkout() {
  const { clearCart, totalPrice, cartItems } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "Алматы",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }
    if (cartItems.length === 0) {
      alert("Корзина пуста. Добавьте товары перед оформлением заказа.");
      navigate(HOME);
      return;
    }
    setIsSubmitting(true);

    const orderTimestamp = new Date().toISOString();
    const orderData = {
      customer: formData,
      items: cartItems,
      totalPrice: totalPrice,
      orderTimestamp: orderTimestamp,
    };

    try {
      const res = await a.post("/orders", orderData);
      alert(
        `Заказ успешно оформлен! Сумма: ${totalPrice.toLocaleString()} тенге, Номер заказа: ${res.data.id} `
      );
      clearCart();
      navigate(HOME);
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      alert("Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="block">
      <div className="container">
        <Link to={CART} className="back-btn">
          Назад
        </Link>
        <h1 className="title">Оформление заказа</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="label">
              Ваше имя
            </label>
            <input
              type="text"
              name="name"
              placeholder="Введите имя"
              required
              value={formData.name}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone" className="label">
              Номер телефона
            </label>
            <input
              type="text"
              name="phone"
              pattern="^\+7 \d{3} \d{3} \d{2} \d{2}$"
              placeholder="Введите номер телефона: +7 XXX XXX XX XX"
              required
              value={formData.phone}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form-control">
            <label htmlFor="address" className="label">
              Напишите адрес
            </label>
            <textarea
              name="address"
              placeholder="Введите адрес, дом, квартиру, домофон"
              required
              value={formData.address}
              onChange={handleInputChange}
              disabled={isSubmitting}
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="city" className="label">
              Укажите город
            </label>
            <select
              name="city"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            >
              <option value="Алматы">Алматы</option>
              <option value="Астана">Астана</option>
            </select>
          </div>
          <button className="send-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Оформить заказ"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
