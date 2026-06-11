import { Link } from "@tanstack/react-router";
import { MdAddShoppingCart } from "react-icons/md";
import type { Product } from "../../interfaces/product";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

interface ProductCardProps {
  product: Product;
}

export const CardProduct = ({ product }: ProductCardProps) => {
  const { addToCard } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-md">
      <Link
        to="/products/$productId"
        params={{ productId: String(product.id) }}
      >
        <img
          className="w-full max-h-[400px] object-cover rounded-md mb-2"
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className="text-black  rounded-2xl p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p>{product.color}</p>
        <div className="flex justify-between mt-2.5">
          <p className=" font-bold">R${product.price},00</p>
          <button className="cursor-pointer"
            onClick={() => {
              console.log("clicou");
              addToCard(product);
            }}
          >
            <MdAddShoppingCart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
