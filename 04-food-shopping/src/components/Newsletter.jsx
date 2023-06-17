export default function Newsletter() {
  return (
    <div className="bg-[#F9F8F8]">
      <div className="lg:w-[1340px] container mx-auto py-10 px-5">
        <div className="relative">
          <img
            src={"/newsletter.jpg"}
            alt="newsletter"
            className="w-full lg:h-[300px] h-[200px] rounded-[16px]"
          />
          <div className="absolute flex flex-col lg:flex-row lg:justify-between justify-around items-center top-0 right-0 left-0 bottom-0 px-10">
            <div className="md:w-[380px] w-[215px]">
              <p className="text-white font-bold lg:text-[50px] md:text-[30px] text-[20px] overflow-hidden">
                Subscribe to our Newsletter
              </p>
            </div>
            <div className="md:flex md:gap-2">
              <input
                className="h-12 w-full md:w-[220px] rounded-md bg-white focus:outline-none pl-5 text-sm text-[#ABABAB] mb-2 md:mb-0"
                placeholder="Your Email Addres"
              />
              <button className="bg-textPrimary h-12 rounded-md flex items-center justify-center px-5 min-w-full md:md:min-w-[150px]">
                <p className="text-sm font-semibold text-white">Subscribe</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
