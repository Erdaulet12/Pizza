function ProductItem({ product }) {
  return (
    <div class="product-item">
      <img src={product.image} alt={product.name} class="product-item__img" />
      <h3 class="product-item__title">{product.name}</h3>
      <p class="product-item__description">{product.description}</p>
      <p class="product-item__description">{product.category}</p>
      <div class="product-item__action">
        <strong class="product-item__title">{product.price} &#8376;</strong>
        <button class="add-button">В корзину</button>
      </div>
    </div>
  );
}

export default ProductItem;
