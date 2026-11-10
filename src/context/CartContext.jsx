import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("ninja-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Estado para a mensagem temporária (Toast)
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("ninja-cart", JSON.stringify(cart));
  }, [cart]);

  function showToast(message) {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 2500);
  }

  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Dispara a notificação visual
    showToast(`${product.name} adicionado ao carrinho!`);
  }

  function updateQuantity(id, delta) {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  // Quantidade total de unidades para a Badge
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        toastMessage
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}