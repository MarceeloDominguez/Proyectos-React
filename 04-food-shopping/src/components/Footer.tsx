import Logo from "./Logo";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-[#F9F8F8] pt-12 pb-5">
      <div className="container mx-auto border-t border-[#DEDDDD]">
        <div className="grid md:grid-cols-3">
          {/* footer izquierda */}
          <div className="flex flex-col md:items-end items-start gap-4 py-5 px-8 border-r border-[#DEDDDD]">
            <div className="md:text-end">
              <h3 className="mb-4 text-[30px] text-textPrimary font-semibold">
                Contact Us
              </h3>
              <label className="text-lg text-textPrimary">Email</label>
              <p className="text-sm text-[#525C60]">organick@gmail.com</p>
            </div>
            <div className="md:text-end">
              <label className="text-lg text-textPrimary">Phone</label>
              <p className="text-sm text-[#525C60]">1198320014</p>
            </div>
            <div className="md:text-end">
              <label className="text-lg text-textPrimary">Address</label>
              <p className="text-sm text-[#525C60]">Buenos Aires. CABA</p>
            </div>
          </div>
          {/* footer centro */}
          <div className="py-5 px-4 text-center border-r border-[#DEDDDD]">
            <div className="flex justify-center mb-6">
              <Logo width={200} height={120} />
            </div>
            <p className="text-sm text-[#525C60] px-8">
              Embrace the goodness of nature with our organic delights. Taste
              the difference, sustain your health.
            </p>
            <div className="mt-4 flex justify-center items-center gap-8">
              <div className="bg-[#EFF6F1] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <AiOutlineTwitter size={24} className="text-textPrimary" />
              </div>
              <div className="bg-[#EFF6F1] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <GrFacebook size={24} className="text-textPrimary" />
              </div>
              <div className="bg-[#EFF6F1] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <BsInstagram size={24} className="text-textPrimary" />
              </div>
            </div>
          </div>
          {/* footer derecha */}
          <div className="py-5 px-8 hidden md:flex">
            <div className="flex flex-col gap-4">
              <p className="mb-4 text-[30px] text-textPrimary font-semibold">
                Utility Pages
              </p>
              <p className="text-sm text-[#525C60]">About</p>
              <p className="text-sm text-[#525C60]">Shop</p>
              <p className="text-sm text-[#525C60]">Detail Product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
