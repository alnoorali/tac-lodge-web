"use client";

import { DollarSign } from "lucide-react";

const EarningsCard = () => {
  return (
    <div className="flex items-center gap-3 md:p-2  md:w-[140px] md:h-[70px] 2xl:w-[200px] 2xl:h-[80px] bg-white shadow-md rounded-xl border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg 2xl:p-4">
      {/* Icon */}
      <div className="md:w-8 md:h-8 2xl:w-14 2xl:h-14 bg-[#FE5722] rounded-full flex items-center justify-center">
        <DollarSign className="text-white md:w-4 md:h-4 2xl:w-7 2xl:h-7" />
      </div>

      {/* Content */}
      <div>
        <p className="text-gray-500 md:text-sm 2xl:text-lg font-medium">Earnings</p>
        <p className="text-black md:text-xl 2xl:text-2xl font-bold">$308.21</p>
      </div>
    </div>
  );
};

export default EarningsCard;
