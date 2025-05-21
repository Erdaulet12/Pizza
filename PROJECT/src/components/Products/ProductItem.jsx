function ProductItem() {
  return (
    <div class="product-item">
      <img src="./images/placeholder.svg" alt="" class="product-item__img" />
      <h3 class="product-item__title">Name</h3>
      <p class="product-item__description">Description</p>
      <p class="product-item__description">category</p>
      <div class="product-item__action">
        <strong class="product-item__title">price &#8376;</strong>
        <button class="add-button">В корзину</button>
      </div>
    </div>
  );
}

export default ProductItem;
