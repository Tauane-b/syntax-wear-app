import { createContext } from "react";
import type { ProductCard } from "./CartProvider";
import type { Product } from "../../interfaces/product";

interface CartContextType {
  cart: ProductCard[];
  addToCard: (product: Product) => void;
  removeFromCard: (productId: number) => void;
  incrementInCard: (product: ProductCard) => void;
  decrementFromCard: (product: ProductCard) => void;
}

export const CartContext = createContext({} as CartContextType);
