import Footer from "@/components/Footer";
import BackPage from "@/components/cart/BackPage";
import ListProducts from "@/components/cart/ListProducts";

export default function Cart() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100">
      <div className="lg:w-3/5 md:w-3/4 container mx-auto md:px-6 px-3 pt-8">
        <BackPage />
        <p className="text-slate-900 font-bold text-center md:text-left text-xl py-4">
          Mi carrito de compras
        </p>
        <ListProducts />
      </div>
      <Footer />
    </div>
  );
}
