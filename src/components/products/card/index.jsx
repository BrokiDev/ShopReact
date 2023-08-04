import "../card/style.css";

const Card = ({
  id,
  name,
  image,
  category,
  price,
  description,
  stock,
  onAddCart,
  onShowDetails,
}) => {
  return (
    <div key={id} className="card" onClick={() => onShowDetails(id)}>
      <h3>{name}</h3>
      <img src={image} alt="Imagen Producto" />
      <p>{category}</p>
      <p>{description}</p>
      <p>{stock}left</p>
      <span>$USD{price}</span>
      <button onClick={() => onAddCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Card;
