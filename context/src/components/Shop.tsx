import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "./Product.jsx";

interface ShopProps {
  onAddItemToCart: (id: string) => void;
}

export default function Shop({ onAddItemToCart }: ShopProps) {
  return (
    <section className="w-[80%] my-8 mx-auto">
      <h2 className="text-2xl text-[#a59b8b] uppercase">Elegant Clothing For Everyone</h2>

      <ul className="list-none m-0 p-0 grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-8">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
