'use client';

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import { API_ENDPOINTS } from "../api/api";

interface WhyChooseUsData {
  why_choose_box_heading_1?: string;
  why_choose_box_content_1?: string;
  why_choose_box_heading_2?: string;
  why_choose_box_content_2?: string;
  why_choose_box_heading_3?: string;
  why_choose_box_content_3?: string;
  why_choose_box_heading_4?: string;
  why_choose_box_content_4?: string;
  why_choose_box_heading_5?: string;
  why_choose_box_content_5?: string;
  why_choose_box_heading_6?: string;
  why_choose_box_content_6?: string;
  why_choose_box_heading_7?: string;
  why_choose_box_content_7?: string;
  why_choose_box_heading_8?: string;
  why_choose_box_content_8?: string;
}

interface HexagonCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const HexagonCard: React.FC<HexagonCardProps> = ({ icon, title, description, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`md:relative md:w-[280px] md:h-[240px] flex justify-start items-start md:items-center md:justify-center ${className}`}
    >
      <Image
        src="/frame.png"
        alt="Hexagon Frame"
        width={280}
        height={240}
        className="absolute hidden md:block"
      />
      <div className="md:absolute flex md:flex-col items-center md:text-center md:px-12 m-2 md:m-0">
        <div className="w-12 h-12 min-w-12 min-h-12 mb-1 mr-3 border p-2 bg-[#FFAB91] rounded-full flex items-center justify-center">
          <Image src={icon} alt="Icon" width={29} height={29} />
        </div>
        <h3 className="text-[16px] font-bold text-[#1E1E1E] hidden md:block">{title}</h3>
        <p className="text-[12px] text-[#1E1E1E]">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const [whyChooseUsData, setWhyChooseUsData] = useState<WhyChooseUsData>({});
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.HOME.GET_HOME);
        const data = await response.json();
        setWhyChooseUsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const features: HexagonCardProps[] = [
    { icon: "/stamp.png", title: whyChooseUsData.why_choose_box_heading_1!, description: whyChooseUsData.why_choose_box_content_1! },
    { icon: "/refund.png", title: whyChooseUsData.why_choose_box_heading_2!, description: whyChooseUsData.why_choose_box_content_2! },
    { icon: "/tax.png", title: whyChooseUsData.why_choose_box_heading_3!, description: whyChooseUsData.why_choose_box_content_3! },
    { icon: "/expertise.png", title: whyChooseUsData.why_choose_box_heading_4!, description: whyChooseUsData.why_choose_box_content_4! },
    { icon: "/cloud.png", title: whyChooseUsData.why_choose_box_heading_5!, description: whyChooseUsData.why_choose_box_content_5! },
    { icon: "/advice.png", title: whyChooseUsData.why_choose_box_heading_6!, description: whyChooseUsData.why_choose_box_content_6! },
    { icon: "/briefcase.png", title: whyChooseUsData.why_choose_box_heading_7!, description: whyChooseUsData.why_choose_box_content_7! },
    { icon: "/community.png", title: whyChooseUsData.why_choose_box_heading_8!, description: whyChooseUsData.why_choose_box_content_8! },
  ];

  return (
    <section className="flex flex-col justify-center items-center md:py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[28px] md:text-[44px] font-bold w-[363px] md:w-[972px] text-center"
      >
        Lodge your Tax Return with Convenience and we will Assure Compliance
      </motion.h2>
      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="mt-4 bg-[#FFAB91] text-white px-6 py-2 rounded-full text-lg font-semibold md:font-bold"
      >
        WHY CHOOSE US?
      </motion.button>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-start items-start md:justify-center md:items-center mt-2 md:mt-10">
        <div className="md:flex md:flex-col md:-mx-[64px]">
          <HexagonCard {...features[0]} />
          <HexagonCard {...features[1]} className="md:-mt-[36px]" />
        </div>
        <div className="md:flex md:items-center">
          <HexagonCard {...features[2]} />
        </div>
        <div className="md:flex md:flex-col md:-mx-[64px]">
          <HexagonCard {...features[3]} />
          <HexagonCard {...features[4]} className="md:-mt-[36px]" />
        </div>
        <div className="md:flex md:items-center">
          <HexagonCard {...features[5]} />
        </div>
        <div className="md:flex md:flex-col md:-mx-[64px]">
          <HexagonCard {...features[6]} />
          <HexagonCard {...features[7]} className="md:-mt-[36px]" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
