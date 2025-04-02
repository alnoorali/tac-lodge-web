"use client";

import React, { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../api/api";

interface TermsData {
  content?: string;
}

const TermsAndConditions = () => {
  const [termsData, setTermsData] = useState<TermsData>({});
                      
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.TEMRS.GET_TEMRS);
        const data = await response.json();
        setTermsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 2xl:p-16 mt-28 pb-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12 2xl:p-16 mt-20 md:mt-0 ">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl text-center md:text-left font-bold mb-4 text-gray-800 md:mt-6 ">Terms and Conditions</h1>
        {/* <p className="text-gray-700 text-sm md:text-base 2xl:text-lg leading-relaxed mt-6">
          For the purposes of this Terms and Conditions, the following terms are defined as follows:
          <br /><br />
          Agreement to terms and conditions confirms that You have read, understood, and accepted the use of Service.
          <br /><br />
          <strong>Service</strong> refers to the services provided by the Provider, which are described in detail within the Client Agreement. <strong>Provider</strong> refers to TaxLodgeOnline.com.au.
          <br /><br />
          By choosing to utilize our Service, you will be consenting to comply with all of the provisions outlined in this Agreement between yourself and the Provider.
          <br /><br />
          The Service is an online service consisting of access to tax return preparation services, information, and other content owned or licensed by The Provider and its suppliers and other third parties. The right to use the Service is personal to you and is not transferable to any other person.
          <br /><br />
          The Provider is committed to maintaining the confidentiality and security of your information. By using our Service, you acknowledge and agree that the Provider may collect and use your data in accordance with our Privacy Policy.
          <br /><br />
          The Provider shall not be liable for any loss or damage arising from your reliance on the Service, and you agree to use the Service at your own risk.
          <br /><br />
          These terms and conditions may be updated from time to time, and continued use of the Service constitutes your acceptance of any changes.
          <br /><br />
          <strong>Principal Accountant</strong>
          <br />
          Murtaza Ali Haider – ABN 65 439 718 855
        </p> */}
        {termsData.content && (
          <div 
            className="text-gray-700 text-sm md:text-base 2xl:text-lg leading-relaxed mt-6"
            dangerouslySetInnerHTML={{ __html: termsData.content }}
          />
        )}
      </div>
    </div>
  );
};

export default TermsAndConditions