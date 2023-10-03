import ImageHome from "@/components/ImageHome";
import SearchProducts from "@/components/SearchProducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="min-h-screen container mx-auto flex justify-center items-center">
        <div className="flex-auto">
          <ImageHome />
          <h1 className="font-bold text-3xl text-center my-6 text-slate-900">
            Tienda Online
          </h1>
          <SearchProducts />
        </div>
      </div>
    </main>
  );
}
