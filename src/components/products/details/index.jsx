import "../card/style.css";

const Details = ({
  id,
  name,
  image,
  category,
  price,
  description,
  stock,
  onAddCart,
}) => {
  return (
    <>
      <h2 className="text-centered">Product Detail</h2>
      <div className="card-detail">
        <h3>{name}</h3>
        <img src={image} alt="Imagen Producto" />
        <p>{category}</p>
        <p>{description}</p>
        <p>{stock}left</p>
        <span>$USD{price}</span>
        <button onClick={() => onAddCart(id)}>Add to Cart</button>
      </div>
    </>
  );
};

export default Details;
