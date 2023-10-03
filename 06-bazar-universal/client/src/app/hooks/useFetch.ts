import { useEffect, useState } from "react";
import { Product } from "../interface/products";

export const useFetch = (textValue: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(
        `http://localhost:5000/api/items?q=${textValue}`
      );
      const data = await resp.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { products, getData, setProducts, loading };
};
