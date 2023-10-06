import { Product } from "@/interface/products";

type Props = {
  products: Product[];
};

export default function TagsCategories({ products }: Props) {
  const categories = Array.from(new Set(products.map((item) => item.category)));

  const countProductsByCategory = categories.map((category) => {
    const numProducts = products.filter(
      (product) => product.category === category
    ).length;
    return { category: category, numProducts: numProducts };
  });

  return (
    <div className="flex flex-wrap gap-2 py-3 px-1">
      {countProductsByCategory.map((item, index) => (
        <div
          key={index}
          className="bg-[#53B175] rounded-full px-3 h-8 flex items-center shadow-md"
        >
          <p className="text-sm text-slate-100 capitalize">
            {item.category} - {item.numProducts}
          </p>
        </div>
      ))}
    </div>
  );
}
