"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { API_ENDPOINTS } from "../api/api";

interface BusinessTaxData {
  content_section_1?: string;
  content_section_2?: string;
  content_section_3?: string;
  content_section_4?: string;
}

export default function BusinessTaxSection() {
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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textHover = {
    hover: { color: "#FE5722", transition: { duration: 0.3 } },
  };

  return (
    <section className="container mx-auto px-4 py-12 space-y-16">
      {/* Section 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="md:w-1/2"
          whileHover="hover"
          variants={imageHover}
        >
          <Image src="/pic1.png" alt="Analysis" width={600} height={340} className="rounded-lg" />
        </motion.div>
        <div className="md:w-1/2">
          <motion.p
            className="text-[#1E1E1E] text-[16px] md:text-[18px] 2xl:text-[20px]"
            whileHover="hover"
            variants={textHover}
          >
           {businessTaxData.content_section_1}
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="md:w-1/2"
          whileHover="hover"
          variants={imageHover}
        >
          <Image src="/pic2.png" alt="Handshake" width={600} height={400} className="rounded-lg" />
        </motion.div>
        <div className="md:w-1/2">
          <motion.p
            className="text-[#1E1E1E] text-[16px] md:text-[18px] 2xl:text-[20px]"
            whileHover="hover"
            variants={textHover}
          >
           {businessTaxData.content_section_2}
          </motion.p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="md:w-1/2"
          whileHover="hover"
          variants={imageHover}
        >
          <Image src="/pic3.png" alt="Meeting" width={600} height={400} className="rounded-lg" />
        </motion.div>
        <div className="md:w-1/2">
          <motion.p
            className="text-[#1E1E1E] text-[16px] md:text-[18px] 2xl:text-[20px]"
            whileHover="hover"
            variants={textHover}
          >
           {businessTaxData.content_section_3}
          </motion.p>
        </div>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="md:w-1/2"
          whileHover="hover"
          variants={imageHover}
        >
          <Image src="/pic4.png" alt="Teamwork" width={600} height={400} className="rounded-lg" />
        </motion.div>
        <div className="md:w-1/2">
          <motion.p
            className="text-[#1E1E1E] text-[16px] md:text-[18px] 2xl:text-[20px]"
            whileHover="hover"
            variants={textHover}
          >
           {businessTaxData.content_section_4}
          </motion.p>
        </div>
      </motion.div>

      {/* Button */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <motion.button
          className="bg-[#FE5722] text-white px-8 py-3 text-[16px] md:px-10 md:py-4 md:text-[18px] 2xl:px-12 2xl:py-6 2xl:text-[20px] rounded-full font-semibold shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          GET TAX RETURN
        </motion.button>
      </motion.div>
    </section>
  );
}
