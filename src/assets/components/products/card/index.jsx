import './style.css';

const Card = ({id,name,image,category,price,description,stock ,onAddCart}) => {
    return (
        <div key={id} className='card'>
          <h3>{name}</h3>
          <img src={image} alt="Imagen Producto" />
          <p>{category}</p>
          <p>{description}</p>
          <p>{stock}left</p>
          <p>${price}USD</p>
          <button onClick={() => onAddCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Card;