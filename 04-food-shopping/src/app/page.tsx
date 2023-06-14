"use client";
import { useEffect, useState } from "react";
import BannerHomePage from "@/components/BannerHomePage";
import ProductsHomePage from "@/components/ProductsHomePage";
import { AiOutlineArrowRight } from "react-icons/ai";

//calculo en largo de la pantalla y le resto el tamaño del navbar
//h-[calc(100vh-theme('height.navbar'))]

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <p className="md:text-[40px] text-[32px] font-semibold text-[#274C5B]">
            Loading ...
          </p>
        </div>
      ) : (
        <main className="lg:pt-[144px] pt-[70px] overflow-hidden">
          {/* la imagen del fondo del hero */}
          <div className="bg-image bg-[#F1EFF0] w-full lg:min-h-[calc(100vh-theme('height.navbar'))] min-h-[calc(100vh-theme('height.responsiveNavbar'))]">
            <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-theme('height.navbar'))] h-[calc(100vh-theme('height.responsiveNavbar'))] container mx-auto">
              <div className="flex flex-col items-center justify-center h-full px-3 lg:px-6">
                <div className="md:max-w-[530px]">
                  <span className="text-[#68A47F] md:text-[36px] text-[30px] font-yellowtail italic">
                    100% Natural Food
                  </span>
                  <h1 className="md:text-[60px] text-[50px] text-[#274C5B] font-bold">
                    Choose the best healthier way of life
                  </h1>
                </div>
                <div className="md:w-[530px] w-full">
                  <div className="bg-[#EFD372] py-4 w-[220px] mt-4 rounded-[8px] flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#274C5B] flex items-center gap-2">
                      Explore Now
                      <div className="bg-[#274C5B] rounded-full w-5 h-5 flex justify-center items-center">
                        <AiOutlineArrowRight size={12} color="#fff" />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {/* la otra imagen del hero */}
              <div className="lg:flex items-center justify-center flex-1 hidden">
                <div className="bg-hero-image w-full h-full lg:translate-x-20 translate-x-10" />
              </div>
            </div>
          </div>
          {/* banner */}
          <BannerHomePage />
          {/*grid de productos en home*/}
          <ProductsHomePage />
        </main>
      )}
    </>
  );
}
