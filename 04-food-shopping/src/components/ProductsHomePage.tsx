import GridProductsHomePage from "./GridProductsHomePage";
import CustomButton from "./CustomButton";

export default function ProductsHomePage() {
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
      <div className="lg:w-[1340px] container mx-auto">
        <div className="flex justify-center lg:pt-[100px] pt-[25px] pb-8">
          <div className="flex flex-col items-center">
            <h2 className="md:text-[36px] text-[28px] text-textSecondary font-yellowtail italic">
              Categories
            </h2>
            <p className="md:text-[50px] text-[42px] font-semibold text-textPrimary">
              Our Products
            </p>
          </div>
        </div>
        <GridProductsHomePage />
        <div className="flex items-center justify-center pb-10">
          <CustomButton
            title="Load More"
            bgColor="#274C5B"
            color="#fff"
            bgColorContainerArrow="#335B6B"
            route="/shop"
          />
        </div>
      </div>
    </div>
  );
}
