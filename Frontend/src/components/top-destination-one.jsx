import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { topDestination } from "../data/data";

export default function TopDestinationOne() {
  return (
    <div className="container relative">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          Top Destinations
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Planning for a trip? We will organize your trip with the best places
          and within the best budget!
        </p>
      </div>

      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          navigation = {false}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            425: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
            1025: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="top-destination-slider"
        >
          {topDestination.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 m-2">
                <img
                  src={item.image}
                  className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                <div className="absolute p-4 bottom-0 start-0">
                  <Link
                    to="/blog-detail"
                    className="text-lg font-medium text-white hover:text-red-500 duration-500 ease-in-out"
                  >
                    {item.place}
                  </Link>
                  <p className="text-white/70 group-hover:text-white text-sm duration-500">
                    {item.hotels}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
