import { AiOutlineArrowRight } from "react-icons/ai";
import GridProductsHomePage from "./GridProductsHomePage";

export default function ProductsHomePage() {
  return (
    <div className="min-h-screen bg-[#F9F8F8]">
      <div className="lg:w-[1340px] container mx-auto">
        <div className="flex justify-center lg:pt-[100px] pt-[25px] pb-8">
          <div className="flex flex-col items-center">
            <h2 className="md:text-[36px] text-[28px] text-[#7EB693] font-yellowtail italic">
              Categories
            </h2>
            <p className="md:text-[50px] text-[42px] font-semibold text-[#274C5B]">
              Our Products
            </p>
          </div>
        </div>
        <GridProductsHomePage />
        <div className="flex items-center justify-center pb-10">
          <div className="mt-[46px] bg-[#274C5B] w-[220px] py-4 rounded-[8px] flex justify-center">
            <span className="text-sm font-semibold text-[#fff] flex items-center gap-2">
              Load More
              <div className="bg-[#335B6B] rounded-full w-5 h-5 flex justify-center items-center">
                <AiOutlineArrowRight size={12} color="#fff" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
