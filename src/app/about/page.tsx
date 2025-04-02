"use client";

import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../api/api";

interface AboutUsData {
  main_heading?: string;
  content_1?: string;
  content_2?: string;
  content_3?: string;
  content_4?: string;
  contact_info?: string;
}

export default function AboutUs() {
  const [aboutUsData, setAboutUsData] = useState<AboutUsData>({});
                    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.ABOUTUS.GET_ABOUTUS);
        const data = await response.json();
        setAboutUsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 2xl:p-16 mt-28 pb-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12 2xl:p-16 mt-20 md:mt-0 ">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-gray-800 mb-4 text-center md:text-left">{aboutUsData.main_heading}</h1>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base lg:text-lg">
          {aboutUsData.content_1}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base lg:text-lg">
          {aboutUsData.content_2}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base lg:text-lg">
          {aboutUsData.content_3}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base lg:text-lg">
          {aboutUsData.content_4}
        </p>
        <div className="border-t pt-4">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-gray-800">Principal Accountant</h2>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg">{aboutUsData.contact_info}</p>
        </div>
      </div>
    </div>
  );
}
