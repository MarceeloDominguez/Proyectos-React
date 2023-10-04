import { useEffect, useState } from "react";
import { Product } from "../interface/products";

export const useFetchById = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const getDataById = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`http://localhost:5000/api/items/${id}`);
      const data = await resp.json();

      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataById();
  }, []);

  return { ...product, loading };
};
