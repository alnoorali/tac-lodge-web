"use client"
import React from 'react';
import Image from 'next/image';
import ClientTestimonials from './Testimonial';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Affiliations = () => {
  return (
    <div className='mb-28 '>
    <h1 className='font-bold text-[28px] md:text-[44px] text-center mt-10 p-2'>
        Our Professional Affiliations
      </h1>
      <motion.div
        className='flex justify-center items-center gap-2 md:gap-16 mb-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Image src='/ipa.png' alt='ipa' width={100} height={100} />
        <Image src='/ntaa.png' alt='ntaa' width={99} height={66} />
        <Image src='/tpb.png' alt='tpb' width={100} height={100} />
      </motion.div>

      {/* First Row */}
      <div className='hidden md:block'>
        <motion.div
          className='flex flex-col justify-center items-center '
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className='flex justify-center items-center gap-9 mt-8'>
            <div className='flex'>
              <motion.div
                className='bg-[#FE5722] text-white p-4 w-[172px] h-[204px] flex justify-center items-center hover:bg-[#FF7043] transition duration-300 ease-in-out'
                variants={fadeIn}
              >
                <h2 className='text-[20px]'>Lodge Your Tax Return with Convenience</h2>
              </motion.div>
              <motion.div className='bg-white w-[257px] h-[204px] p-4 shadow flex flex-col hover:shadow-lg transition duration-300 ease-in-out' variants={fadeIn}>
                <p className='text-[16px]'>&ldquo;Our expert accountants ensure you get the maximum refund possible while staying fully compliant.&rdquo;</p>
                <div className='flex mt-2'>
                  <Image src='/image5.png' alt='girl' width={42} height={42} />
                  <div className='flex flex-col ml-2'>
                    <p className='font-semibold text-[#A19C9C]'>Meredith Fay</p>
                    <p className='text-sm text-[#A19C9C]'>Accounts Expert</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div className='bg-[#1E1E1E] text-white p-4 w-[172px] h-[204px] flex justify-center items-center flex-col text-center hover:bg-[#333333] transition duration-300 ease-in-out' variants={fadeIn}>
              <h2 className='font-bold text-[20px]'>Meet Our Experts.</h2>
              <button className='border p-2 mt-10 hover:bg-white hover:text-[#1E1E1E] transition duration-300 ease-in-out'>Meet the team</button>
            </motion.div>
            <motion.div
  className='w-[211px] h-[204px] relative'
  variants={fadeIn}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
  <Image src='/image6.png' alt='image' layout='fill' objectFit='cover' />
</motion.div>
          </div>

          {/* Second Row */}
          <motion.div className='flex justify-center items-center gap-4 mt-8' variants={fadeIn}>
            <div className='w-[213px] h-[234px] relative hover:scale-105 transition duration-300 ease-in-out'>
              <Image src='/image.png' alt='image' layout='fill' objectFit='cover' />
            </div>

            <div className='bg-[#FFAB91] w-[172px] h-[234px] p-4 flex flex-col justify-center items-center hover:bg-[#FF8A65] transition duration-300 ease-in-out'>
              <h2 className='text-[20px]'>Certifications And Associations</h2>
              <button className='border border-[#1E1E1E] p-2 mt-10 text-[14px] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition duration-300 ease-in-out'>
                See Our Certifications
              </button>
            </div>

            <div className='bg-white p-4 shadow w-[470px] h-[234px] flex flex-col justify-center items-center hover:shadow-lg transition duration-300 ease-in-out'>
              <h2 className='font-bold text-[26px] leading-tight mb-6'>Client Testimonial</h2>
              <p className='italic text-sm'>&ldquo;This team made my tax return process seamless! Highly recommend.&rdquo;</p>
              <button className='border border-[#1E1E1E] p-2 mt-2 hover:bg-[#1E1E1E] hover:text-white transition duration-300 ease-in-out'>See More</button>
            </div>
          </motion.div>

          {/* Third Row */}
          <motion.div className='flex justify-center items-center gap-10 mt-8' variants={fadeIn}>
            <div className='bg-[#A9A1A1] text-white p-4 w-[172px] h-[228px] flex justify-center items-center flex-col hover:bg-[#BDBDBD] transition duration-300 ease-in-out'>
              <h2 className='font-bold text-lg'>Start Your Tax Return Today</h2>
              <button className='border p-2 mt-20 pr-7 pl-7 hover:bg-white hover:text-[#1E1E1E] transition duration-300 ease-in-out'>Get Started</button>
            </div>
            <div className='flex'>
              <div className='bg-[#FF8B66] p-4 w-[172px] h-[228px] flex justify-center items-center hover:bg-[#FF7043] transition duration-300 ease-in-out'>
                <h2 className='text-[20px] text-white'>We Value Ownership</h2>
              </div>

              <div className='bg-white p-4 shadow w-[271px] h-[228px] hover:shadow-lg transition duration-300 ease-in-out'>
                <p className='text-[#1E1E1E] text-[16px]'>&ldquo;At Tax Lodge Online, our top priority is delivering exceptional service to those who trust us, always striving for excellence.&rdquo;</p>
                <div className='flex mt-12'>
                  <Image src='/image1.png' alt='man' width={44} height={42} />
                  <div className='flex flex-col ml-4 text-[#A19C9C]'>
                    <p className='font-semibold'>Murtaza Ali Haider</p>
                    <p className='text-sm'>Principal Accountant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#FFE0B2] w-[193px] h-[228px] p-6 flex justify-center items-center flex-col hover:bg-[#FFCC80] transition duration-300 ease-in-out'>
              <h2 className='text-[20px]'>Meet The Lodgers</h2>
              <button className='border border-[#1E1E1E] p-2 pr-8 pl-8 mt-20 hover:bg-[#1E1E1E] hover:text-white transition duration-300 ease-in-out'>See More</button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className='block md:hidden'>
        <div className='flex m-4 mb-6 md:mb-0 md:m-0 shadow-lg'>
          <div className='bg-[#FE5722] text-white p-4 w-[172px] h-[204px] flex justify-center items-center shadow-lg'>
            <h2 className='text-[20px]'>Lodge Your Tax Return with Convenience</h2>
          </div>
          <div className='bg-white w-[257px] h-[204px] p-4 flex flex-col'>
            <p className='text-[12px] mt-2'>
              &ldquo;At Tax Lodge Online, our top priority is delivering exceptional service to those who trust us, always striving for excellence.&rdquo;
            </p>
            <div className='flex mt-3'>
              <Image src='/image5.png' alt='girl' width={42} height={42} className='w-[42px] h-[42px] mt-4' />
              <div className='flex flex-col ml-1 mt-5'>
                <p className='font-semibold text-[#A19C9C] text-[12px]'>Meredith Fay</p>
                <p className='text-[12px] text-[#A19C9C]'>Accounts Expert</p>
              </div>
            </div>
          </div>
          </div>


          <div className='block md:hidden'>
        <div className='flex m-4 mb-6 md:mb-0 md:m-0 shadow-lg'>
          <div className='bg-[#FFE0B2] text-black p-4 w-[172px] h-[204px] flex justify-center items-center shadow-lg'>
            <h2 className='text-[20px]'>We Value Ownership</h2>
          </div>
          <div className='bg-white w-[257px] h-[204px] p-2 flex flex-col '>
            <p className='text-[12px] mt-4'>
              &ldquo;Our expert accountants ensure you get the maximum refund possible while staying fully compliant.&rdquo;
            </p>
            <div className='flex mt-6'>
              <Image src='/image1.png' alt='man' width={42} height={42} className='w-[42px] h-[42px] mt-4'  />
              <div className='flex flex-col ml-1 mt-4'>
                <p className='font-semibold text-[#A19C9C] text-[12px] '>Murtaza Ali Haider</p>
                <p className='text-[12px] text-[#A19C9C]'>Principal Accountant</p>
              </div>
            </div>
          </div>
          </div>
          </div>


        <div className='flex justify-center items-center'>
          <button className='rounded-[10px] bg-[#FE5722] text-white px-4 py-2 mt-16'>
            GET STARTED
          </button>
        </div>
      </div>

      <div className='block md:hidden'>
        <ClientTestimonials />
      </div>
    </div>
  );
};

export default Affiliations;
