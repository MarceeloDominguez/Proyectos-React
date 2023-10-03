import { readJSON } from "../utils/readjson.js";

const { products } = readJSON("../products.json");

export async function ProductModel({ q: titleToSearch }) {
  if (titleToSearch) {
    return products.filter((product) =>
      product.title.toLowerCase().includes(titleToSearch.toLowerCase())
    );
  }
}

export async function ProductByIdModel(id) {
  const product = products.find((product) => product.id === id);

  return product;
}
