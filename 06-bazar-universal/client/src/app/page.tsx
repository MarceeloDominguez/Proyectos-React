import ImageHome from "@/components/ImageHome";
import SearchProducts from "@/components/SearchProducts";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative md:w-3/4 lg:w-2/5 container mx-auto">
        <ThemeSwitcher />
      </div>

      <div className="min-h-screen md:w-3/4 lg:w-2/5 container mx-auto flex justify-center items-center">
        <div className="flex-auto">
          <ImageHome />
          <h1 className="font-bold text-3xl text-center my-6 text-slate-900 dark:text-slate-100">
            Tienda Online
          </h1>
          <SearchProducts />
        </div>
      </div>
    </div>
  );
}
