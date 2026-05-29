import type { Product } from "../../interfaces/product";
import {CardProduct} from "../ProductCard/index";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] mb-10">
      {products.map((product) => (
        <CardProduct
          product={product}
        />
      ))}
    </section>
  );
};