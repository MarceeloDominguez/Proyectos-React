import { useEffect, useState } from "react";
import { Product } from "../interface/products";
import { baseUrl } from "@/api/api";

export const useFetch = (textValue: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${baseUrl}/api/items?q=${textValue}`);
      const data = await resp.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { products, getData, setProducts, loading };
};
