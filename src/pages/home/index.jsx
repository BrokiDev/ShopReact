import { useEffect, useState } from "react";
import "./styles.css";
import Counter from "../../components/counter/counter";
import Input from "../../components/input/index";
import Card from "../../components/products/card/index";
import Details from "../../components/products/details/index";
import { useFetch } from "../../components/hooks/useFetch";
import { URL } from "../../url/index";
import Loader from "../../components/loader/index";
import ProductDetail from "../product-detail";
import { useNavigate } from "react-router";
import Slider from "../../components/slider";

function Home() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const inputclass = `container ${active ? "active" : ""}`;
  const [cart, setCart] = useState([]);
  const [details, setDetails] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState(null);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [categoriesFiltered, setCategoriesFiltered] = useState(false);

  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch(URL.Product.URL, URL.Product.config);

  const {
    data: categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useFetch(URL.CATEGORIES.URL, URL.CATEGORIES.config);

  const filterBySearch = (q) => {
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter((item) => {
      return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    setProductsFiltered(filteredProducts);
  };
  const onShowDetails = (id) => {
    navigate(`/products/${id}`);
  };

  // const isValidCounter = counter > 0;

  // const incrementCounter = () => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // };

  // const decrementCounter = () => {
  //   if (isValidCounter) {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }
  // };

  // const OnChange = (event) => {
  //   const value = event.target.value;
  //   setInput(value);
  //   filterBySearch(value);
  // };

  // const onFocus = () => {
  //   setActive(false);
  // };

  // const onBlur = () => {
  //   setActive(false);
  // };

  const onFilter = (categories) => {
    setCategoriesFiltered(true);
    let filteredProducts = [...products];
    const productsByCategory = filteredProducts.filter(
      (item) => item.category === categories
    );
    setProductsFiltered(productsByCategory);
  };

  const onAddToCart = (id) => {
    const item = products.find((product) => product.id === id);
    if (
      cart?.find((product) => product.id === id)?.quantity ===
      Number(item.stock)
    )
      return;
    if (cart?.length === 0) {
      setCart([{ ...item, quantity: 1 }]);
    }
    if (cart?.length > 0 && !cart?.find((product) => product.id === id)) {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    if (cart?.length > 0 && cart?.find((product) => product.id === id)) {
      setCart((currentCart) => {
        return currentCart.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      });
    }
  };

  const onDecreaseFromCart = (id) => {
    if (cart?.find((product) => product.id === id)?.quantity === 1) return;
    if (cart?.length > 0 && cart?.find((product) => product.id === id)) {
      setCart((currentCart) => {
        return currentCart.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      });
    }
  };

  const onRemoveFromCart = (id) => {
    setCart((currentCart) => {
      return currentCart.filter((product) => product.id !== id);
    });
  };

  return (
    <div>
      {/* <Counter
        isValidCounter={isValidCounter}
        counter={counter}
        onDecrementCounter={decrementCounter}
        onIncrementCounter={incrementCounter}
      /> */}
      <div className="cartContainer">
        <h2>Cart</h2>
        <div className="cardCartContainer">
          {cart.length === 0 && <h3>Cart is empty</h3>}
          {cart?.length > 0 &&
            cart.map((product) => (
              <div key={product.id} className="cart">
                <h3>{product.name}</h3>
                <img src={product.image} alt="Imagen Producto" />
                <p>Qty {product.quantity}</p>
                <p>USD{product.price}</p>
                <p>{product.stock}left</p>
                <div className="cardActions">
                  <button
                    onClick={() => onAddToCart(product.id)}
                    className="btnAdd"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onDecreaseFromCart(product.id)}
                    className="btnDecrease"
                  >
                    -
                  </button>

                  <button
                    onClick={() => onRemoveFromCart(product.id)}
                    className="btnRemove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
        </div>
        {cart?.length > 0 && (
          <p className="totalCart">
            Total: USD
            {cart.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            )}
          </p>
        )}
      </div>

      <div className="category">
        {loadingCategories && <Loader />}
        {errorCategories && <h3>{errorCategories}</h3>}
        <Slider>
          <button
            onClick={() => setCategoriesFiltered(false)}
            className="categorycontain"
          >
            <p>All</p>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onFilter(category.categories)}
              className="categorycontain"
            >
              <p className="categoryname">{category.categories}</p>
            </button>
          ))}
        </Slider>
      </div>
      {/* <Input
        placeholder={"Find your Product"}
        type={"text"}
        onChange={OnChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={inputclass}
      />
      {loadingProducts && <Loader />}
      {errorProducts && <h3>{errorProducts}</h3>}
      {input.length > 0 && productsFiltered.length === 0 && (
        <h3>Products No Available</h3>
      )} */}
      <div className="contenedor">
        {categoriesFiltered
          ? productsFiltered.map((element) => (
              <Card
                key={element.id}
                {...element}
                onShowDetails={onShowDetails}
                onAddToCart={onAddToCart}
              />
            ))
          : products.map((element) => (
              <Card
                key={element.id}
                {...element}
                onAddToCart={onAddToCart}
                onShowDetails={onShowDetails}
              />
            ))}
        {productsFiltered.length === 0 && <h3>Products No Available</h3>}
      </div>
    </div>
  );
}

export default Home;
