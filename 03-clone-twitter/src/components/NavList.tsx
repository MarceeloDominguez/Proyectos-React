import { navItems } from "../data/data";
import ItemsNav from "./ItemsNav";
import { GrTwitter } from "react-icons/gr";
import { BiDotsHorizontalRounded } from "react-icons/Bi";
import { FaFeatherAlt } from "react-icons/all";
import ItemsNavResponsive from "./ItemsNavResponsive";

export default function NavList() {
  return (
    <section className="xl:min-w-[260px] min-w-[80px] bg-primary">
      {/* nav full screen */}
      <div className="flex-col justify-between min-h-screen sticky top-0 pl-2 hidden xl:flex">
        <div>
          <GrTwitter className="text-slate-50 w-7 h-7 m-4 mb-3" />
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return <ItemsNav key={index} item={item} Icon={Icon} />;
          })}
          <button className="bg-button w-full h-14 rounded-full mt-6">
            <span className="text-slate-50 text-lg regular-text tracking-[0.4px]">
              Twittear
            </span>
          </button>
        </div>
        <div className="mb-5 flex items-center px-3 py-3 rounded-full hover:bg-[#252e38] cursor-pointer">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div className="flex-1 truncate mr-1">
            <h3 className="text-small tracking-[0.4px] text-slate-50 bold-text">
              Jon Doe
            </h3>
            <h3 className="text-xs tracking-[0.4px] text-slate-500 regular-text">
              @Jon_23
            </h3>
          </div>
          <BiDotsHorizontalRounded className="w-6 h-6 text-slate-500" />
        </div>
      </div>
      {/* nav responsive */}
      <div className="flex-col justify-between sticky top-0 min-h-screen xl:hidden flex">
        <div>
          <GrTwitter className="text-slate-50 w-full h-7 mb-3 mt-4" />
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return <ItemsNavResponsive key={index} Icon={Icon} />;
          })}
          <div className="flex justify-center mt-4">
            <button className="bg-button w-12 h-12 rounded-full flex items-center justify-center">
              <FaFeatherAlt className="text-xl text-slate-50" />
            </button>
          </div>
        </div>
        <div className="mb-5 flex justify-center">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
        </div>
      </div>
    </section>
  );
}
