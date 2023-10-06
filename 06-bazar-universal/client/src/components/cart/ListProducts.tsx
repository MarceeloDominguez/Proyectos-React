"use client";
import { useCartStore } from "@/store/cartStore";
import ProductInCart from "./ProductInCart";
import { useFetchAllProducts } from "@/hooks/useFetchAllProducts";
import { getListProductsInCart } from "@/utils/listProductsInCart";
import PriceTotal from "./PriceTotal";
import NoData from "./NoData";
import Loading from "../Loading";

export default function ListProducts() {
  const { productsInCart } = useCartStore();
  const { products, loading } = useFetchAllProducts();

  //obtener los item con la propiedad quantity
  const listProductsInCart = getListProductsInCart({
    productsInCart,
    products,
  });

  return (
    <>
      {productsInCart.length !== 0 ? (
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              {listProductsInCart.map((item, index) => (
                <ProductInCart key={index} product={item!} />
              ))}
              {productsInCart.length !== 0 && <PriceTotal />}
            </>
          )}
        </>
      ) : (
        <NoData />
      )}
    </>
  );
}
