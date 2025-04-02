"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { API_ENDPOINTS } from "../api/api";

interface BusinessTaxData {
  heading_2?: string;
  content_2?: string;
}

export default function TaxRefundSection() {
  const [businessTaxData, setBusinessTaxData] = useState<BusinessTaxData>({});
              
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.BUSINESSTAX.GET_BUSINESSTAX);
        const data = await response.json();
        setBusinessTaxData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full mb-10 pt-6">
      {/* Background Section with Animation */}
      <motion.div
        className="relative h-[110px] md:h-[231px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <Image
          src="/taxpage.png" // Replace with your image path
          alt="Office Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center bg-[#1E1E1E91] bg-opacity-50 h-full text-center text-white px-6">
          <h2 className="text-[20px] md:text-[55px] font-bold text-white">
            {businessTaxData.heading_2}
          </h2>
        </div>
      </motion.div>

      {/* Description with Fade-in Animation */}
      <motion.div
        className="pb-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="mt-4 text-[#1E1E1E] px-2 md:px-10 text-[10px] md:text-[14px] 2xl:text-[18px]">
          {businessTaxData.content_2}
        </p>
      </motion.div>

      {/* Button with Hover Animation */}
      <div className="mt-4 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FE5722] text-white px-10 py-4 text-[18px] rounded-full font-semibold shadow-md hover:bg-orange-600 transition"
        >
          GET TAX RETURN
        </motion.button>
      </div>
    </div>
  );
}
