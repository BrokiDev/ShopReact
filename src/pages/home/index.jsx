import { useEffect, useState, useContext } from "react";
import "./styles.css";

import Input from "../../components/input/index";
import Card from "../../components/products/card/index";

import { useFetch } from "../../components/hooks/useFetch";
import { URL } from "../../url/index";
import Loader from "../../components/loader/index";
import { useNavigate } from "react-router";
import Slider from "../../components/slider";
import { CartContext } from "../../context/cart-context";

function Home() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [categoriesFiltered, setCategoriesFiltered] = useState(false);
  const {
    setProducts,
    products: productosContext,
    onAddToCart,
    cart,
    onDecreaseFromCart,
    onRemoveFromCart,
    sumTotal,
  } = useContext(CartContext);

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

  useEffect(() => {
    if (products?.length > 0) {
      setProducts(products);
    }
  }, [products, setProducts]);

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

  const onFilter = (categories) => {
    setCategoriesFiltered(true);
    let filteredProducts = [...products];
    const productsByCategory = filteredProducts.filter(
      (item) => item.category === categories
    );
    setProductsFiltered(productsByCategory);
  };

  return (
    <div>
      <div className="category">
        {loadingCategories ? <Loader /> : null}
        {errorCategories ? <h3>{errorCategories}</h3> : null}
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
      /> */}
      {loadingProducts ? <Loader /> : null}
      {errorProducts ? <h3>{errorProducts}</h3> : null}
      {input.length > 0 && productsFiltered.length === 0 && (
        <h3>Products No Available</h3>
      )}
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
        {categoriesFiltered && productsFiltered.length === 0 ? (
          <h3>Products No Available</h3>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
