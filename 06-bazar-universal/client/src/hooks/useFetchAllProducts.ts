import { useEffect, useState } from "react";
import { Product } from "@/interface/products";
import { baseUrl } from "@/api/api";

export const useFetchAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${baseUrl}/api/items/all`);
      const data = await resp.json();

      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return { products, loading };
};
