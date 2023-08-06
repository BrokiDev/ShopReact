import { memo } from "react";
import "../card/style.css";

const Card = ({
  id,
  name,
  image,
  category,
  price,
  description,
  stock,
  onAddToCart,
  onShowDetails,
}) => {
  return (
    <div key={id} className="card">
      <div onClick={() => onShowDetails(id)}>
        <h3>{name}</h3>
        <img src={image} alt="Imagen Producto" />
        <p>{category}</p>
        <p>{description}</p>
        <p>{stock}left</p>
        <span>$USD{price}</span>
      </div>
      <button onClick={() => onAddToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default memo(Card);
