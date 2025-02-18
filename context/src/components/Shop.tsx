import { ReactNode } from "react";

interface ShopProps {
  children: ReactNode;
}

export default function Shop({ children }: ShopProps) {
  return (
    <section className="w-[80%] my-8 mx-auto">
      <h2 className="text-2xl text-[#a59b8b] uppercase">Elegant Clothing For Everyone</h2>

      <ul className="list-none m-0 p-0 grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-8">
        {children}
      </ul>
    </section>
  );
}
