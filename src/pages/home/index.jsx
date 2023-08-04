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

  const {
    data: products,
    loading,
    error,
  } = useFetch(URL.Product.URL, URL.Product.config);

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

  const isValidCounter = counter > 0;

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    if (isValidCounter) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const OnChange = (event) => {
    const value = event.target.value;
    setInput(value);
    filterBySearch(value);
  };

  const onFocus = () => {
    setActive(false);
  };

  const onBlur = () => {
    setActive(false);
  };

  return (
    <div>
      <Counter
        isValidCounter={isValidCounter}
        counter={counter}
        onDecrementCounter={decrementCounter}
        onIncrementCounter={incrementCounter}
      />
      <Input
        placeholder={"Find your Product"}
        type={"text"}
        onChange={OnChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={inputclass}
      />
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
      {input.length > 0 && productsFiltered.length === 0 && (
        <h3>Product No Available</h3>
      )}
      <div className="contenedor">
        {input.length > 0
          ? productsFiltered.map((element) => (
              <Card
                key={element.id}
                {...element}
                onShowDetails={onShowDetails}
              />
            ))
          : products.map((element) => (
              <Card
                key={element.id}
                {...element}
                onShowDetails={onShowDetails}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;
