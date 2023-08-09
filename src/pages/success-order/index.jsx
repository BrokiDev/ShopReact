import { useLocation } from "react-router-dom";
import "./styles.css";

const SuccesOrder = () => {
  const location = useLocation();
  const { orderId } = location.state;
  return (
    <div>
      <h1>Success Order</h1>
      <p>{orderId}</p>
    </div>
  );
};

export default SuccesOrder;
