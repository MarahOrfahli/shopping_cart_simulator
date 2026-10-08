import { createContext, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('shopping-cart', [])
const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, action) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === productId);
    if (!existingItem) return prevItems;
    if (action === 'decrease' && existingItem.quantity === 1) {
      removeFromCart(productId)
    }
    return prevItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1
        };
      }
      return item;
    });
  });
};

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };



  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}
