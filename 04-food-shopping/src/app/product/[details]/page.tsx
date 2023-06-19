import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import RandomProduct from "@/components/RandomProduct";
import TabsDescriptionProduct from "@/components/TabsDescriptionProduct";
import { products } from "@/data/products";
import Image from "next/image";
import { AiOutlineArrowRight, AiTwotoneStar } from "react-icons/ai";

type Prop = {
  params: { details: string };
};

export default function DetailsProduct({ params }: Prop) {
  const { details } = params;
  const productDetails = products.find((item) => item.id === details);

  return (
    <div className="lg:pt-[144px] pt-[70px] overflow-hidden bg-[#F9F8F8]">
      <div className="lg:min-h-[calc(100vh-theme('height.navbar'))] min-h-[calc(100vh-theme('height.responsiveNavbar'))">
        <div className="lg:h-[calc(100vh-theme('height.navbar'))] h-[calc(110vh-theme('height.responsiveNavbar'))]">
          {/* banner */}
          <div className="flex relative">
            <img
              alt="banner-shop-single"
              src={"/banner/banner-single.png"}
              className="lg:h-[250px] w-2/4"
            />
            <img
              alt="banner-shop-single"
              src={"/banner/banner-single2.png"}
              className="lg:h-[250px] w-2/4"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
              <p className="lg:text-[70px] md:text-[40px] text-[22px] font-bold text-textPrimary">
                Shop Single
              </p>
            </div>
          </div>
          {/* grid single product */}
          <div className="w-4/6 mx-auto grid lg:grid-cols-2 grid-cols-1 lg:mt-16 mt-8">
            {/* lado izquierdo */}
            <div className="p-2 flex lg:justify-center items-center">
              <div className="relative">
                <Image
                  src={productDetails?.image!}
                  alt="imagen-del-producto"
                  width={325}
                  height={325}
                  className="rounded-lg shadow-sm md:h-[300px] lg:h-[340px] md:w-[300px] lg:w-[325px] h-[275px] w-[275px]"
                />
                <span className="bg-textPrimary absolute top-5 left-6 px-3 py-1 rounded-md">
                  <p className="text-white text-[12px] capitalize tracking-[0.5px]">
                    {productDetails?.category}
                  </p>
                </span>
              </div>
            </div>
            {/* lado derecho */}
            <div className="p-2 flex flex-col gap-3 justify-center">
              <p className="text-textPrimary md:text-[40px] text-[20px] font-semibold">
                {productDetails?.name}
              </p>
              <div className="flex gap-[2px]">
                {[...Array(5)].map((item, index) => (
                  <AiTwotoneStar
                    key={index}
                    className="text-[#FFA858]"
                    size={16}
                  />
                ))}
              </div>
              <div>
                <span className="text-lg text-[#B8B8B8] leading-[20px] font-semibold mr-2 line-through">
                  $20.00
                </span>
                <span className="md:text-[25px] text-[20px] text-textPrimary font-bold md:leading-[30px] leading-[25px]">
                  ${productDetails?.price}
                </span>
              </div>
              <div className="py-4">
                <p className="md:text-lg text-[13px] text-[#525C60] font-normal">
                  Organic food is a nutritious and sustainable choice, grown
                  without the use of synthetic pesticides, fertilizers, or
                  genetically modified organisms (GMOs).
                </p>
              </div>
              <button className="w-[220px] bg-[#274C5B] py-4 rounded-[8px] flex justify-center">
                <span className="text-sm font-semibold flex items-center gap-2 text-white">
                  Add To Cart
                  <div className="rounded-full w-5 h-5 bg-[#335B6B] flex justify-center items-center">
                    <AiOutlineArrowRight size={12} color="#fff" />
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <TabsDescriptionProduct />
      <RandomProduct />
      <Newsletter />
      <Footer />
    </div>
  );
}
