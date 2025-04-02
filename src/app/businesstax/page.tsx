"use client";

import { useState, useEffect } from "react";
import BreadcrumbBusiness from '../components/BCBusinessTax';
import Business from '../components/Businesstax'
import BusinessTaxSection from '../components/Businesstaxsection';
import TaxLodgeProcess from '../components/taxlodge';
import TaxRefundSection from '../components/TaxPic';
import { API_ENDPOINTS } from "../api/api";

interface BusinessTaxData {
  heading_1?: string;
}

const BusinessTax = () => {
  const [businessTaxData, setBusinessTaxData] = useState<BusinessTaxData>({});
            
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.BUSINESSTAX.GET_BUSINESSTAX);
        const data = await response.json();
        console.log("data :", data);
        setBusinessTaxData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-28 mx-auto overflow-x-hidden w-full">
      <BreadcrumbBusiness/>
      <div className=" flex justify-center items-center text-center mt-10">
        <h1 className="text-[32px] md:text-[44px] font-semibold  mb-6 w-[731px] ">{businessTaxData.heading_1}</h1>
      </div>

      <Business/>
      <BusinessTaxSection/>
      <TaxLodgeProcess/>
      <TaxRefundSection/>
    </div>
  )
}

export default BusinessTax