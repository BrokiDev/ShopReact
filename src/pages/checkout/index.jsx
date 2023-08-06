import "./styles.css";
import { useForm } from "../../components/hooks/useForm";

const initialState = {
  name: {
    value: "",
    error: "",
    hasError: true,
    touched: false,
    required: true,
    name: "name",
  },
  lastName: {
    value: "",
    error: "",
    hasError: true,
    touched: false,
    required: true,
    name: "lastName",
  },
  phone: {
    value: "",
    error: "",
    hasError: true,
    touched: false,
    required: true,
    name: "phone",
  },
  email: {
    value: "",
    error: "",
    hasError: true,
    touched: false,
    required: true,
    name: "email",
  },
  address: {
    value: "",
    error: "",
    hasError: true,
    touched: false,
    required: true,
    name: "address",
  },
  city: {
    value: "",
    error: "",
    hasError: true,
    touched: false,
    required: true,
    name: "city",
  },
  country: {
    value: "",
    error: "",
    hasError: true,
    touched: false,
    required: true,
    name: "country",
  },
  zip: {
    value: "",
    error: "",
    hasError: true,
    touched: false,
    required: true,
    name: "zip",
  },
  isFormValid: false,
};

function Checkout() {
  const [formState, inputHandler, clearInputs, inputBlur] =
    useForm(initialState);
  const onChange = (e) => {
    inputHandler(e.target.name, e.target.value);
  };

  const onBlur = ({ name, error }) => {
    inputBlur({ name, error });
  };

  console.log({ formState });

  return (
    <div className="form-container">
      <h1 className="checkout-title">Checkout</h1>

      <form action="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Jhon"
            required
            onChange={onChange}
            onBlur={() => onBlur({ name: "name", error: "Name is required" })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" placeholder="Doe" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" placeholder="(508-347-7089)" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="jhondoe@mail.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="503 Avenue Street" required />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" placeholder="Chicago" required />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" placeholder="United States" required />
        </div>

        <div className="form-group">
          <label htmlFor="zip">Zip</label>
          <input type="text" placeholder="63225" required />
        </div>

        <button className="btn-submit" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
