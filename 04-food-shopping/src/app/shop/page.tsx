import Footer from "@/components/Footer";
import GridProductsShopPage from "@/components/GridProductsShopPage";
import Newsletter from "@/components/Newsletter";

export default function Shop() {
  return (
    <div className="lg:pt-[144px] pt-[70px] overflow-hidden bg-[#F9F8F8]">
      <div className="lg:min-h-[calc(100vh-theme('height.navbar'))] min-h-[calc(100vh-theme('height.responsiveNavbar'))">
        <div>
          {/* banner */}
          <div className="flex relative">
            <img
              alt="banner-shop-1"
              src={"/banner/banner-shop1.png"}
              className="h-[250px] w-2/4 object-cover"
            />
            <img
              alt="banner-shop-2"
              src={"/banner/banner-shop2.png"}
              className="h-[250px] w-2/4 object-cover"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
              <p className="text-[70px] font-bold text-textPrimary">Shop</p>
            </div>
          </div>
          {/* lista de productos en shop */}
          <div className="lg:w-[1340px] container mx-auto">
            <GridProductsShopPage />
          </div>
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
}
