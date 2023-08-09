import { useLocation } from "react-router-dom";
import "./styles.css";

const SuccesOrder = () => {
  const location = useLocation();
  const { orderId } = location.state;
  return (
    <div className="success">
      <h1>Success Order</h1>
      <p>{orderId}</p>

      <div className="success">
        <p>please check your email for more information</p>
        <a href="/" className="btn-shopping">
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default SuccesOrder;
