import BannerHomePage from "@/components/BannerHomePage";
import ProductsHomePage from "@/components/ProductsHomePage";
import CustomButton from "@/components/CustomButton";
import Footer from "@/components/Footer";

//calculo en largo de la pantalla y le resto el tamaño del navbar
//h-[calc(100vh-theme('height.navbar'))]

export default function Home() {
  return (
    <main className="lg:pt-[144px] pt-[70px] overflow-hidden">
      {/* la imagen del fondo del hero */}
      <div className="bg-image bg-[#F1EFF0] w-full lg:min-h-[calc(100vh-theme('height.navbar'))] min-h-[calc(100vh-theme('height.responsiveNavbar'))]">
        <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-theme('height.navbar'))] h-[calc(100vh-theme('height.responsiveNavbar'))] container mx-auto">
          <div className="flex flex-col items-center justify-center h-full px-3 lg:px-6">
            <div className="md:max-w-[530px]">
              <span className="text-textSecondary md:text-[36px] text-[30px] font-yellowtail italic">
                100% Natural Food
              </span>
              <h1 className="md:text-[60px] text-[50px] text-textPrimary font-bold">
                Choose the best healthier way of life
              </h1>
            </div>
            <div className="md:w-[530px] w-full">
              <CustomButton
                title="Explore Now"
                bgColor="#EFD372"
                bgColorContainerArrow="#274C5B"
                color="#274C5B"
                route="/about"
              />
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
      {/* footer */}
      <Footer />
    </main>
  );
}
