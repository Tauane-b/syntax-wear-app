import { useEffect, useState } from "react";
import type { Product } from "../../interfaces/product";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

export interface ProductCard extends Product {
  quantity: number;
}

const localStorageKey ="@SyntaxWear:cart"

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {


  const [cart, setCart] = useState<ProductCard[]>(() => {

  const cartFromlocalStorage = localStorage.getItem(localStorageKey)

  const parsedCart = cartFromlocalStorage !== null? JSON.parse(cartFromlocalStorage) : [];

  return parsedCart;


});
   useEffect (() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cart));
   }, [cart]);

  
  function addToCard(product: Product): void {
    console.log("Produto recebido:", product);
    const productExistsInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id,
    );

    let newCart;

    if (productExistsInCart) {
      newCart = cart.map((itemInCart) =>
        itemInCart.id === product.id
          ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
          : itemInCart,
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    console.log("Novo carrinho:", newCart);

    setCart(newCart);
  }

  function  removeFromCard(productId: number): void {
    setCart(cart.filter((itemInCart) => itemInCart.id !== productId));
  }
  function incrementInCard(product: ProductCard): void {
    updateProductQuantity(product, product.quantity + 1);
  }

  function decrementFromCard(product: ProductCard): void {
    updateProductQuantity(product, product.quantity - 1);
  }

  function updateProductQuantity(
    product: ProductCard,
    newQuantity: number,
  ): void {
    if (newQuantity <= 0) return;
    const productExistsInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id,
    );
    if (!productExistsInCart) return;

    const newCart = cart.map((itemInCart) => 
       itemInCart.id === product.id
        ? { ...itemInCart, quantity: newQuantity }
        : itemInCart
    );
    setCart(newCart);
}


return (
  <CartContext.Provider
    value={{
      cart,
      addToCard,
      removeFromCard,
      incrementInCard, 
      decrementFromCard
    }}
  >
    {children}
  </CartContext.Provider>
)

};

export default CartProvider;