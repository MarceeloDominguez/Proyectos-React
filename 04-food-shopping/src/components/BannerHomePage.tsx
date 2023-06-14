import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function BannerHomePage() {
  return (
    <div className="bg-[#F9F8F8] min-h-screen">
      <div className="flex flex-col lg:flex-row container mx-auto justify-center items-center gap-3 py-[80px]">
        <div className="relative px-4 lg:px-0">
          <Image
            src={"/banner-1.jpg"}
            alt="banner-1"
            width={668}
            height={367}
            className="rounded-[8px]"
          />
          <div className="absolute md:top-28 top-10 md:left-12 left-8">
            <span className="md:text-[20px] text-[13px] font-yellowtail italic text-[#fff] md:leading-[39px]">
              Natural!!!
            </span>
            <p className="md:text-[36px] text-[22px] max-w-[250px] text-[#fff] font-bold md:leading-[47px]">
              Get Garden Fresh Fruits
            </p>
          </div>
        </div>
        <div className="relative px-4 lg:px-0">
          <Image
            src={"/banner-2.jpg"}
            alt="banner-2"
            width={668}
            height={367}
            className="rounded-[8px]"
          />
          <div className="absolute md:top-28 top-10 md:left-12 left-8">
            <span className="md:text-[20px] text-[13px] font-yellowtail italic text-[#7EB693] md:leading-[39px]">
              Offer!!!
            </span>
            <p className="md:text-[36px] text-[22px] max-w-[255px] text-[#274C5B] font-bold md:leading-[47px]">
              Get 10% off on Vegetables
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="lg:flex lg:flex-row flex flex-col-reverse">
          <div className="flex items-center justify-center pt-2 lg:pt-0 flex-1">
            <Image
              src={"/Photo-2.png"}
              alt="photo-2"
              width={668}
              height={367}
            />
          </div>
          <div className="lg:pt-[50px] pt-[25px] flex-1">
            <div className="md:mx-10 lg:mx-4 mx-4 lg:max-w-[550px]">
              <span className="text-[#7EB693] text-[24px] font-yellowtail italic">
                About Us
              </span>
              <p className="text-[#274C5B] text-[40px] leading-[49px] font-bold">
                We Believe in Working Accredited Farmers
              </p>
              <p className="text-[#525C60] text-[16px] mt-3 leading-[24px]">
                Organic fruits are a delicious and healthy choice for anyone
                looking to embrace a natural and sustainable lifestyle. Grown
                without the use of synthetic pesticides or fertilizers, organic
                fruits offer a plethora of benefits. These fruits are nurtured
                in nutrient-rich soil, allowing them to develop robust flavors
                and vibrant colors.
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
                  <p className="text-[#525C60] text-[16px] mt-1 max-w-[320px]">
                    Embracing Organic Fruits: A Tasty and Eco-Friendly Choice
                    for Health-Conscious Individuals.
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
                  <p className="text-[#525C60] text-[16px] mt-1 max-w-[320px]">
                    The Benefits of Organic Fruits: Exploring Freshness, Flavor,
                    and Sustainability.
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
  );
}
