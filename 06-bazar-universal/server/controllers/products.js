import {
  ProductByIdModel,
  ProductModel,
  AllProductsModel,
} from "../models/product-models.js";

export async function GetProducts(req, res) {
  const { q } = req.query;

  const products = await ProductModel({ q });

  res.json(products);
}

export async function GetAllProducts(req, res) {
  const product = await AllProductsModel();

  res.json(product);
}

export async function GetProductsById(req, res) {
  const { id } = req.params;
  const productId = parseInt(id);

  const products = await ProductByIdModel(productId);

  if (products) return res.json(products);

  res.status(400).json({ message: "Product not found" });
}
