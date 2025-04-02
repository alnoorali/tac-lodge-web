"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const supplementaryPlans = [
  { title: "Rental Property", price: "$99 / Per Property", buttonText: "LODGE NOW" },
  { title: "Business Income/Loss", price: "$99 / Per Business", buttonText: "LODGE NOW" },
  { title: "Capital Gains Tax", price: "$199 / Per Business", subPrice: "$20 / Company Share", buttonText: "LODGE NOW" },
  { title: "Foreign Income", price: "$99", buttonText: "LODGE NOW" },
  { title: "Dividend Income", price: "$20 / Company Dividend", buttonText: "LODGE NOW" },
  { title: "Partnership/ Trusts Income", price: "$99", buttonText: "LODGE NOW" },
  { title: "Other Income", price: "$99 / Income Stream", buttonText: "LODGE NOW" },
  { title: "Tax & Business Advise", price: "$99 / 30 mins", buttonText: "LODGE NOW" },
];

const bgColors = [
  "bg-[#888888]", "bg-[#979797]", "bg-[#B3B3B3]", "bg-[#CECECE]",
  "bg-[#CECECE]", "bg-[#B3B3B3]", "bg-[#979797]", "bg-[#888888]"
];


const extractBoldPrice = (price: string): React.ReactNode => {
  const match = price.match(/(\$\d+)/); // Extracts "$99", "$199", etc.
  if (!match) return price;
  return (
    <>
      <span className="font-bold text-[48px]">{match[0]}</span>{" "}
      {price.replace(match[0], "").trim()}
    </>
  );
};



const PricingSupplementary = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-[32px] md:text-[44px] font-bold text-center mb-10 mt-10">Individual Supplementary</h2>

        {/* Top Banner */}
        <div className="flex justify-center items-center bg-[#FF8B66] px-6 py-6">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={113} />
          </Link>
          <h2 className="text-white text-[44px] pl-6">Tax Lodge Online</h2>
        </div>

        {/* Pricing Grid with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {supplementaryPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-6 shadow-lg flex flex-col items-center text-center rounded-xl ${bgColors[index % bgColors.length]}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
            >
              <h3 className="text-[20px] font-bold mb-2 text-black pt-3 ">{plan.title}</h3>
              <p className="text-sm text-black mt-3">{extractBoldPrice(plan.price)}</p>
              {plan.subPrice && <p className="text-sm pt-3 text-black">{extractBoldPrice(plan.subPrice)}</p>}
              <motion.button
                className="mt-10 bg-[#FF8B66] text-white py-2 px-8 rounded-[50px] hover:bg-orange-500 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSupplementary;
