import { Product } from "@/interface/products";
import { useEffect, useState } from "react";

export const useFetchAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    const resp = await fetch("http://localhost:5000/api/items/all");
    const data = await resp.json();

    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return { products };
};
