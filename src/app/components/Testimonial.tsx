"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Meredith Fay",
    image: "/image5.png",
    text: "This team made my tax return process seamless! Highly recommend.",
  },
  {
    id: 2,
    name: "John Doe",
    image: "/image1.png",
    text: "Excellent service and very knowledgeable staff.",
  },
];

const ClientTestimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="flex flex-col items-center py-4 md:py-8 md:mt-14">
      <h2 className="text-[28px] md:text-[44px] font-bold mb-6">Client Testimonials</h2>
      <div className="relative w-full max-w-lg shadow-lg">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation === "object") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          
          loop={true}
          className="p-6"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-xl p-6 text-center flex flex-col items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <p className="text-gray-600 mt-2 font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 italic mt-2">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Use refs for buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-300 transition text-lg z-10"
        >
          ❮
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-300 transition text-lg z-10"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default ClientTestimonials;
