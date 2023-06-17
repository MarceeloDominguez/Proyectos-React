"use client";
import { useState } from "react";

const tab = ["Product Description", "Additional Info"];

export default function TabsDescriptionProduct() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center gap-3 py-2">
        {tab.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`${
              selectedTab === index ? "bg-textPrimary" : "bg-[#d6dad9]"
            } h-12 rounded-md flex items-center justify-center px-5 md:min-w-[220px] min-w-[160px]`}
          >
            <p
              className={`${
                selectedTab === index ? "text-white" : "text-textPrimary"
              } text-sm font-semibold flex items-center gap-2`}
            >
              {item}
            </p>
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-10">
        <div className="lg:w-3/6 w-5/6 text-center">
          {selectedTab === 0 ? (
            <p className="md:text-lg text-[13px] text-[#525C60] font-normal">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </p>
          ) : (
            <p className="md:text-lg text-[13px] text-[#525C60] font-normal">
              Organic food refers to agricultural products grown and produced
              without the use of synthetic pesticides, genetically modified
              organisms (GMOs), or chemical fertilizers. Farmers who produce
              organic food follow strict regulations and utilize natural methods
              to maintain soil fertility, control pests, and promote
              biodiversity.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
