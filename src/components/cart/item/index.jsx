const CartItem = ({
  onAddToCart,
  onDecreaseFromCart,
  onRemoveFromCart,
  id,
  image,
  name,
  description,
  quantity,
  price,
  stock,
}) => {
  return (
    <div className="cart">
      <h3>{name}</h3>
      <img src={image} alt="Imagen Producto" />
      <p>{description}</p>
      <p>Qty {quantity}</p>
      <p> {price} USD</p>
      <p>{stock}left</p>
      <div className="cardActions">
        <button onClick={() => onAddToCart(id)} className="btnAdd">
          +
        </button>
        <button onClick={() => onDecreaseFromCart(id)} className="btnDecrease">
          -
        </button>

        <button onClick={() => onRemoveFromCart(id)} className="btnRemove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
