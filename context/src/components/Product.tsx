interface ProductProps extends ProductType {
  onAddToCart: (id: string) => void;
}

export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAddToCart
}: ProductProps) {
  return (
    <article className="h-full bg-[#5f4e33] rounded-md flex flex-col shadow-md">
      <img className="w-full rounded-md" src={image} alt={title} />
      <div className="flex-1 pt-0 pb-2 px-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl text-[#fbd392] mb-[0.15rem]">{title}</h3>
          <p className="text-base text-[#d1b68b] m-0">${price}</p>
          <p>{description}</p>
        </div>
        <p className="text-right">
          <button
            className="bg-[#f4b115] border-none rounded-md py-2 px-4 text-[#201e1a] text-base cursor-pointer hover:bg-[#f5b744]"
            onClick={() => onAddToCart(id)}
          >
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}
