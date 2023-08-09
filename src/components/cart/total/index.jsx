import "./styles.css";

const Total = ({ total, goToCheckout }) => {
  return (
    <div className="cartView">
      <p className="totalCart">
        Total: &nbsp;$
        {total}&nbsp;USD
      </p>
      <button onClick={goToCheckout} className="btnCheckout">
        Checkout
      </button>
    </div>
  );
};

export default Total;
