import { useContext, useEffect } from "react";
import Input from "../../components/input";
import "./styles.css";
import { useForm } from "../../hooks/useForm";
import { CartContext } from "../../context/cart-context";
// import { firebaseServices } from "../../services/firebase/index";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
// import CartItem from "../../components/cart/item";
// import Total from "../../components/cart/total";

const initialState = {
  name: { value: "", error: "", hasError: true, active: false, name: "name" },
  surname: {
    value: "",
    error: "",
    hasError: true,
    active: false,
    name: "surname",
  },
  document: {
    value: "",
    error: "",
    hasError: true,
    active: false,
    name: "document",
  },
  email: { value: "", error: "", hasError: true, active: false, name: "email" },
  phone: { value: "", error: "", hasError: true, active: false, name: "phone" },
  address: {
    value: "",
    error: "",
    hasError: true,
    active: false,
    name: "address",
  },
  postalCode: {
    value: "",
    error: "",
    hasError: true,
    active: false,
    name: "postalCode",
  },
  isFormValid: false,
};

function Checkout() {
  const {
    cart,
    total,
    setCart,
    onAddToCart,
    onDecreaseItem,
    onRemoveItem,
    getTotalItemQuantity,
  } = useContext(CartContext);
  const [formState, inputHandler, inputFocus, inputBlur, clearInputs] =
    useForm(initialState);
  const { state } = useLocation();
  const navigate = useNavigate();
  let query = useQuery();

  useEffect(() => {
    const cartId = query.get("cartId");

    if (query.get("cartId")) {
      const getCart = async () => {
        const cart = await firebaseServices.getCartById(cartId);
        return cart;
      };
      getCart()
        .then((cart) => {
          setCart(cart.items);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [query]);

  const onChange = (event) => {
    const { name, value } = event.target;
    inputHandler({ name, value });
  };

  const onFocus = ({ name }) => {
    inputFocus({ name });
  };

  const onBlur = ({ name }) => {
    inputBlur({ name });
  };

  const onHandlerOrder = async () => {
    const newOrder = {
      buyer: {
        name: formState.name.value,
        surname: formState.surname.value,
        document: formState.document.value,
        email: formState.email.value,
        phone: formState.phone.value,
        address: formState.address.value,
        postalCode: formState.postalCode.value,
      },
      createdAt: new Date(),
      items: cart,
      payment: {
        currency: "USD",
        method: "CASH",
        type: "CASH",
      },
      seller: {
        id: 1,
        name: "jhon",
        phone: "123456789",
        email: "jhondoe@mail.com",
      },
      shipping: {
        deliverDate: new Date() + 7,
        trackingNumber: "1ZNL23456ff227a9",
        type: "DELIVERY",
      },
      total: total,
    };

    const orderId = await firebaseServices.createOrder(newOrder);
    await firebaseServices.updateCart(state.cartId);

    return {
      orderId,
    };
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { orderId } = await onHandlerOrder();
    clearInputs({ formState });
    navigate("/success-order", { state: { orderId: orderId.id } });
  };

  console.log({ formState });

  return (
    <div className="">
      <div className="">
        <div className="form-container">
          <h1 className="checkout-title">Checkout</h1>
          <form onSubmit={onSubmit} className="checkoutForm">
            <div className="checkoutFormContent">
              <div className="form-group">
                <Input
                  placeholder="Jhon"
                  id="name"
                  name="name"
                  required={true}
                  label="Name"
                  onChange={onChange}
                  onFocus={(e) => onFocus({ e, name: "name" })}
                  onBlur={(e) => onBlur({ e, name: "name" })}
                  active={formState.name.active}
                  error={formState.name.error}
                  hasError={formState.name.hasError}
                  maxLength={40}
                />
              </div>
              <div className="form-group">
                <Input
                  placeholder="Doe"
                  id="surname"
                  name="surname"
                  required={true}
                  label="Apellido"
                  onChange={onChange}
                  onFocus={() => onFocus({ name: "surname" })}
                  onBlur={() => onBlur({ name: "surname" })}
                  active={formState.surname.active}
                  error={formState.surname.error}
                  hasError={formState.surname.hasError}
                  maxLength={40}
                />
              </div>
              <div className="form-group">
                <Input
                  placeholder="123456789"
                  id="document"
                  name="document"
                  required={true}
                  label="Documento de identidad"
                  onChange={onChange}
                  onFocus={() => onFocus({ name: "document" })}
                  onBlur={() => onBlur({ name: "document" })}
                  active={formState.document.active}
                  error={formState.document.error}
                  hasError={formState.document.hasError}
                  maxLength={15}
                />
              </div>
              <div className="form-group">
                <Input
                  placeholder="jhondoe@mail.com"
                  id="email"
                  name="email"
                  required={true}
                  label="Email"
                  onChange={onChange}
                  onFocus={() => onFocus({ name: "email" })}
                  onBlur={() => onBlur({ name: "email" })}
                  active={formState.email.active}
                  error={formState.email.error}
                  hasError={formState.email.hasError}
                  maxLength={40}
                />
              </div>
              <div className="form-group">
                <Input
                  placeholder="(501-123-4567)"
                  id="phone"
                  name="phone"
                  required={true}
                  label="Telefono"
                  onChange={onChange}
                  onFocus={() => onFocus({ name: "phone" })}
                  onBlur={() => onBlur({ name: "phone" })}
                  active={formState.phone.active}
                  error={formState.phone.error}
                  hasError={formState.phone.hasError}
                  maxLength={15}
                />
              </div>
              <div className="form-group">
                <Input
                  placeholder="503 North Street, Chicago, IL, USA"
                  id="address"
                  name="address"
                  required={true}
                  label="Direccion"
                  onChange={onChange}
                  onFocus={() => onFocus({ name: "address" })}
                  onBlur={() => onBlur({ name: "address" })}
                  active={formState.address.active}
                  error={formState.address.error}
                  hasError={formState.address.hasError}
                  maxLength={80}
                />
              </div>
              <div className="form-group">
                <Input
                  placeholder="60126"
                  id="postalCode"
                  name="postalCode"
                  required={true}
                  label="Codigo postal"
                  onChange={onChange}
                  onFocus={() => onFocus({ name: "postalCode" })}
                  onBlur={() => onBlur({ name: "postalCode" })}
                  active={formState.postalCode.active}
                  error={formState.postalCode.error}
                  hasError={formState.postalCode.hasError}
                  maxLength={10}
                />
              </div>
            </div>
            <button
              disabled={!formState.isFormValid}
              type="submit"
              className="btn-submit"
            >
              Checkout
            </button>
          </form>
        </div>
        {cart?.length > 0 ? (
          <div className="checkoutCartContainer">
            <h2 className="checkoutTitle">Cart Details</h2>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                {...product}
                onAddToCart={onAddToCart}
                onDecreaseItem={onDecreaseItem}
                onRemoveItem={onRemoveItem}
              />
            ))}
            <Total total={total} totalItemQuantity={getTotalItemQuantity()} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Checkout;
