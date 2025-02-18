interface ProductType {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

interface ItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartType {
  items: ItemType[];
}
