"use client";

import { useState, useEffect } from "react";
import BreadcrumbTaxReturn from "../components/BCTaxReturn";
import OnlineTax from "../components/OnlineTax";
import TaxLodgeProcess from "../components/taxlodge";
import TaxRefundSection from "../components/TaxPic";
import { API_ENDPOINTS } from "../api/api";

interface OnlineTaxData {
  heading_1?: string;
}

export default function OnlineTaxReturn() {
  const [onlineTaxData, setOnlineTaxData] = useState<OnlineTaxData>({});
            
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.ONLINETAX.GET_ONLINETAX);
        const data = await response.json();
        setOnlineTaxData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" mt-28 mx-auto overflow-x-hidden">
      
      <BreadcrumbTaxReturn/>
      <div className=" flex justify-center items-center text-center mt-10">
      <h1 className=" text-[32px] md:text-[44px] font-semibold  mb-6 w-[731px] ">{onlineTaxData.heading_1}</h1>
      </div>
      <OnlineTax/>
      <TaxLodgeProcess/>
      <TaxRefundSection/>
      
    </div>
  );
}
  