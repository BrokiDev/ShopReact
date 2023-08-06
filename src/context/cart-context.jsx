import { createContext, useState } from "react";

const initialState = {
  cart: [],
  setCart: () => {},
  getItemQuantity: () => {},
  onAddToCart: () => {},
  onDecreaseFromCart: () => {},
  onRemoveFromCart: () => {},
  total: 0,
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const getItemQuantity = (id) => {
    return cart.find((product) => product.id === id)?.quantity || 0;
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
    <CartContext.Provider
      value={{
        cart,
        setCart,
        onAddToCart,
        onDecreaseFromCart,
        onRemoveFromCart,
        total,
        categories,
        setCategories,
        products,
        setProducts,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
