"use client";

import { Users } from "lucide-react";

const NewClientsCard = () => {
  return (
    <div className="flex items-center gap-3 p-4 md:w-[180px] md:h-[80px] 2xl:w-[240px] 2xl:h-[120px] bg-white shadow-md rounded-xl border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Icon */}
      <div className="md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-[#FE5722] rounded-full flex items-center justify-center">
        <Users className="text-white w-6 h-6" />
      </div>

      {/* Content */}
      <div>
        <p className="text-gray-500 md:text-sm 2xl:text-lg font-medium">New clients</p>
        <p className="text-black text-xl font-bold">421</p>
      </div>
    </div>
  );
};

export default NewClientsCard;
