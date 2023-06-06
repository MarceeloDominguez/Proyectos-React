import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  return (
    <main className="pt-[144px] overflow-hidden">
      {/* la imagen del fondo del hero */}
      <div className="bg-image bg-[#F1EFF0] w-full min-h-[calc(100vh-theme('height.navbar'))]">
        <div className="grid grid-cols-2 h-[calc(100vh-theme('height.navbar'))] lg:w-11/12 lg:mx-auto">
          <div className="flex items-center justify-center flex-col">
            <div className="max-w-[530px]">
              <span className="text-[#68A47F] text-[36px] leading-[50px] font-yellowtail italic">
                100% Natural Food
              </span>
              <h1 className="text-[60px] text-[#274C5B] font-bold leading-[82px]">
                Choose the best healthier way of life
              </h1>
            </div>
            <div className="w-[530px]">
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
          <div className="bg-hero-image w-full h-full -translate-x-[90px]" />
        </div>
      </div>
      {/* banner */}
      <div className="bg-[#F9F8F8] min-h-screen">
        <div className="flex container mx-auto justify-center gap-3 py-[80px]">
          <div className="relative">
            <Image
              src={"/banner-1.jpg"}
              alt="banner-1"
              width={668}
              height={367}
              className="rounded-[8px]"
            />
            <div className="absolute top-28 left-12">
              <span className="text-[20px] font-yellowtail italic text-[#fff] leading-[39px]">
                Natural!!!
              </span>
              <p className="text-[36px] max-w-[250px] text-[#fff] font-bold leading-[47px]">
                Get Garden Fresh Fruits
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/banner-2.jpg"}
              alt="banner-2"
              width={668}
              height={367}
              className="rounded-[8px]"
            />
            <div className="absolute top-28 left-12">
              <span className="text-[20px] font-yellowtail italic text-[#7EB693] leading-[39px]">
                Offer!!!
              </span>
              <p className="text-[36px] max-w-[255px] text-[#274C5B] font-bold leading-[47px]">
                Get 10% off on Vegetables
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src={"/Photo-2.png"}
                alt="photo-2"
                width={668}
                height={367}
              />
            </div>
            <div className="pt-[50px]">
              <div className="ml-4 max-w-[550px]">
                <span className="text-[#7EB693] text-[24px] font-yellowtail italic">
                  About Us
                </span>
                <p className="text-[#274C5B] text-[40px] leading-[49px] font-bold">
                  We Believe in Working Accredited Farmers
                </p>
                <p className="text-[#525C60] text-[16px] mt-3 leading-[24px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className="flex mt-6 gap-2">
                  <div className="flex items-center px-4">
                    <Image
                      src={"/VeganFood.png"}
                      alt="icon1"
                      width={46}
                      height={46}
                    />
                  </div>
                  <div>
                    <h2 className="text-[#274C5B] font-bold text-lg">
                      Organic Foods Only
                    </h2>
                    <p className="text-[#525C60] text-[16px] mt-1 max-w-[300px]">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
                <div className="flex mt-6 gap-2">
                  <div className="flex items-center px-4">
                    <Image
                      src={"/Mailbox.png"}
                      alt="icon1"
                      width={46}
                      height={46}
                    />
                  </div>
                  <div>
                    <h2 className="text-[#274C5B] font-bold text-lg">
                      Quality Standards
                    </h2>
                    <p className="text-[#525C60] text-[16px] mt-1 max-w-[300px]">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
                <div className="mt-[46px] bg-[#274C5B] w-[220px] py-4 rounded-[8px] flex justify-center">
                  <span className="text-sm font-semibold text-[#fff] flex items-center gap-2">
                    Shop Now
                    <div className="bg-[#335B6B] rounded-full w-5 h-5 flex justify-center items-center">
                      <AiOutlineArrowRight size={12} color="#fff" />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
