export default function About() {
  return (
    <div className="bg-red-400 lg:pt-[144px] pt-[70px] overflow-hidden">
      <div className="lg:min-h-[calc(100vh-theme('height.navbar'))] min-h-[calc(100vh-theme('height.responsiveNavbar'))">
        <div className="lg:h-[calc(100vh-theme('height.navbar'))] h-[calc(100vh-theme('height.responsiveNavbar'))]">
          <div className="flex relative bg-[#f2ecee]">
            <img
              alt="banner-shop-1"
              src={"/banner/banner-about1.png"}
              className="h-[300px] w-2/4 object-cover"
            />
            <img
              alt="banner-shop-2"
              src={"/banner/banner-about2.png"}
              className="h-[300px] w-2/4 object-cover"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
              <p className="text-[70px] font-bold text-textPrimary">About Us</p>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-green-600">hola 2</p>
    </div>
  );
}
