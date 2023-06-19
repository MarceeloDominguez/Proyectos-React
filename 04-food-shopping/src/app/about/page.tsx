import CustomButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

const images = [
  { name: "spicy", image: "/about/uno.jpg" },
  { name: "nuts & feesd", image: "/about/dos.jpg" },
  { name: "fruits", image: "/about/tres.jpg" },
  { name: "vegetable", image: "/about/cuatro.jpg" },
];

export default function About() {
  return (
    <div className="bg-white lg:pt-[144px] pt-[70px] overflow-hidden">
      <div className="lg:min-h-[calc(100vh-theme('height.navbar'))] min-h-[calc(100vh-theme('height.responsiveNavbar'))">
        <div>
          {/* banner */}
          <div className="flex relative bg-[#f2ecee]">
            <img
              alt="banner-shop-1"
              src={"/banner/banner-about1.png"}
              className="h-[250px] w-2/4 object-cover"
            />
            <img
              alt="banner-shop-2"
              src={"/banner/banner-about2.png"}
              className="h-[250px] w-2/4 object-cover"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
              <p className="text-[70px] font-bold text-textPrimary">About Us</p>
            </div>
          </div>
          {/* contenido */}
          <section className="container mx-auto grid lg:grid-cols-2">
            <div className="flex justify-center py-10">
              <Image
                src={"/about-page.png"}
                alt="imagen en page about"
                width={630}
                height={200}
              />
            </div>
            <div className="flex items-center">
              <div className="md:mx-10 lg:mx-4 mx-4">
                <span className="text-textSecondary text-[24px] font-yellowtail italic">
                  About Us
                </span>
                <p className="text-textPrimary text-[40px] leading-[49px] font-bold lg:w-[55%] overflow-hidden">
                  We do Creative Things for Success
                </p>
                <p className="text-[#525C60] text-[16px] mt-3 leading-[24px] lg:pr-10">
                  Organic food has gained significant popularity in recent years
                  due to its numerous benefits. Organic agriculture focuses on
                  the use of natural fertilizers and pesticides, avoiding
                  synthetic chemicals that can harm the environment and human
                  health.
                </p>
                <p className="text-[#525C60] text-[16px] mt-3 leading-[24px] lg:pr-10">
                  One of the key advantages of organic food is the reduced
                  exposure to harmful substances. Conventional farming methods
                  involve the use of synthetic pesticides and herbicides, which
                  can leave residues on fruits, vegetables, and grains.
                </p>
                <div className="md:flex justify-between my-[30px] lg:pr-10">
                  <div className="flex items-center gap-2 mb-5 md:mb-0">
                    <div className="flex items-center">
                      <Image
                        src={"/Tractor.png"}
                        alt="icon1"
                        width={46}
                        height={46}
                      />
                    </div>
                    <h2 className="text-textPrimary font-bold text-lg lg:w-[180px]">
                      Modern Agriculture Equipment
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Image
                        src={"/Plant.png"}
                        alt="icon1"
                        width={46}
                        height={46}
                      />
                    </div>
                    <h2 className="text-textPrimary font-bold text-lg lg:w-[180px]">
                      No growth hormones are used
                    </h2>
                  </div>
                </div>
                <div className="pb-5 lg:pb-0">
                  <CustomButton
                    title="Explore More"
                    bgColor="#274C5B"
                    color="#fff"
                    bgColorContainerArrow="#335B6B"
                    route="/shop"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* contenido */}
          <section className="bg-textPrimary">
            <div className="text-center pt-32 pb-8">
              <span className="text-textSecondary text-[24px] font-yellowtail italic">
                About Us
              </span>
              <p className="text-white text-[40px] leading-[49px] font-bold">
                What We Offer for You
              </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:w-[1340px] container px-5 mx-auto py-2 pb-32">
              {images.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 rounded-[16px] pb-4 lg:pb-0"
                >
                  <Image
                    src={item.image}
                    alt="image-tipo"
                    width={300}
                    height={200}
                    className="h-[310px] rounded-[16px]"
                  />
                  <p className="text-white capitalize font-semibold">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
