import "./styles.css";
import Details from "../../components/products/details";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../../url";
import { useFetch } from "../../components/hooks/useFetch";
import Loader from "../../components/loader";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const urlProductDetail = `${URL.Product.URL}/${productId}`;
  const { onAddToCart } = useContext(CartContext);

  const history = window.history;

  const { data, loading, error } = useFetch(
    urlProductDetail,
    URL.Product.config
  );
  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      <div className="btn">
        {history.length > 2 ? (
          <button onClick={() => navigate(-1)} className="close-btn">
            X
          </button>
        ) : null}
      </div>
      <Details {...data} onAddToCart={onAddToCart} />
    </>
  );
}

export default ProductDetail;
