"use client";

import { motion } from "framer-motion";

export default function TaxReturnSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/calcbg.png')" }}
    >
      <motion.div
        className="bg-black bg-opacity-50 p-8 rounded-xl text-center flex justify-center items-center flex-col w-full mx-auto py-16 px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-[14px] md:text-[35px] font-semibold"
          whileHover={{ scale: 1.05, color: "#FFAB91" }}
        >
          Lodge your personal tax return conveniently by clicking
          <span className="text-orange-500 font-bold"> &quot;Get Started&quot;</span>
        </motion.h2>

        <motion.button
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-[14px] md:text-[18px] text-white font-bold py-2 px-6 md:py-4 md:px-10 rounded-full shadow-md transition"
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px #FFAB91" }}
          whileTap={{ scale: 0.9 }}
        >
          GET STARTED
        </motion.button>

        <motion.p
          className="mt-4 text-[12px] md:text-[25px] md:w-[1110px] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our platform is easy-to-use and tax returns will be reviewed and lodged by our qualified tax professionals. We guarantee maximum tax refund.
        </motion.p>
      </motion.div>
    </section>
  );
}
