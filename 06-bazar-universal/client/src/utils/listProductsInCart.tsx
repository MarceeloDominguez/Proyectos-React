import { Product } from "@/interface/products";

interface ProductInCart {
  quantity: number;
  id: number;
}

type Props = {
  productsInCart: ProductInCart[];
  products: Product[];
};

export const getListProductsInCart = ({ productsInCart, products }: Props) => {
  const listProductsInCart = productsInCart.map((cartItem) => {
    const newProduct = products.find((item) => item.id === cartItem.id);

    if (newProduct) {
      return {
        ...newProduct,
        quantity: cartItem.quantity,
      };
    }
    return null;
  });

  return listProductsInCart;
};
