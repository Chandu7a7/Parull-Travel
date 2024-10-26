import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Navbar from "../../components/navbar";
import Form from "../../components/form";
import TopDestinationOne from "../../components/top-destination-one";
import Blogs from "../../components/blogs";
import Footer from "../../components/footer";
import { packages } from "../../data/data";
import { FiMapPin } from "../../assets/icons/vander";

const heroSlides = [
  {
    id: 1,
    imgUrl: "../../assets/images/bg/6.jpg",
    title: "Let the journey begin...",
    description:
      "Planning for a trip? We will organize your trip with the best places and within best budget!",
  },
  {
    id: 2,
    imgUrl: "../../assets/images/bg/2.jpg",
    title: "Let the journey begin...",
    description:
      "Planning for a trip? We will organize your trip with the best places and within best budget!",
  },
  {
    id: 3,
    imgUrl: "../../assets/images/bg/1.jpg",
    title: "Let the journey begin...",
    description:
      "Planning for a trip? We will organize your trip with the best places and within best budget!",
  },
];

export default function Index() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Navbar
        navclass="defaultscroll is-sticky "
        navlight={true}
        manuclass="justify-end nav-light"
      />
      {/* HeroSlider */}
      <Swiper
        className="swiper-wrapper"
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000 }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section
              className={`relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('${slide.imgUrl}')]`}
              id="home"
            >
              <div className="absolute inset-0 bg-slate-900/40"></div>
              <div className="container relative">
                <div className="grid grid-cols-1 text-center mb-12">
                  <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                    {slide.title}
                  </h1>
                  <p className="text-white/70 text-xl max-w-xl mx-auto">
                    {slide.description}
                  </p>
                </div>
                <Form />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="relative md:py-24 py-16 overflow-hidden">
        <TopDestinationOne />

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Tours Packages
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Planning for a trip? We will organize your trip with the best
              places and within best budget!
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 4000 }}
            modules={[Autoplay]}
            className="tour-packages-slider"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {packages.slice(0, 6).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group rounded-md shadow dark:shadow-gray-700">
                  <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                    <img
                      src={item.image}
                      className="scale-125 group-hover:scale-100 duration-500"
                      alt=""
                    />
                    {item.tagText && (
                      <div className="absolute top-0 start-0 p-4">
                        <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                          {item.tagText}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="flex items-center text-slate-400 font-medium mb-2">
                      <FiMapPin className="text-red-500 size-4 me-1"></FiMapPin>{" "}
                      {item.place}
                    </p>
                    <Link
                      to={`/tour-detail-one/${item.id}`}
                      className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                    >
                      {item.title}
                    </Link>

                    <div className="flex items-center mt-2">
                      <span className="text-slate-400">Rating:</span>
                      <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline text-black dark:text-white text-sm">
                          5.0(30)
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                      <h5 className="text-lg font-medium text-red-500">
                        ₹ 499 / Day
                      </h5>

                      <Link
                        to={`/tour-detail-one/${item.id}`}
                        className="text-slate-400 hover:text-red-500"
                      >
                        Explore Now <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-6 text-center">
            <Link
              to="/grid-left-sidebar"
              className="text-slate-400 hover:text-red-500 inline-block"
            >
              See More Tours{" "}
              <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Hotels Packages
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Planning for a trip? We will organize your trip with the best
              places and within best budget!
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 4000 }}
            modules={[Autoplay]}
            className="tour-packages-slider"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {packages.slice(0, 6).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group rounded-md shadow dark:shadow-gray-700">
                  <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                    <img
                      src={item.image}
                      className="scale-125 group-hover:scale-100 duration-500"
                      alt=""
                    />
                    {item.tagText && (
                      <div className="absolute top-0 start-0 p-4">
                        <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                          {item.tagText}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="flex items-center text-slate-400 font-medium mb-2">
                      <FiMapPin className="text-red-500 size-4 me-1"></FiMapPin>{" "}
                      {item.place}
                    </p>
                    <Link
                      to={`/tour-detail-two/${item.id}`}
                      className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                    >
                      {item.title}
                    </Link>

                    <div className="flex items-center mt-2">
                      <span className="text-slate-400">Rating:</span>
                      <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star align-middle"></i>
                        </li>
                        <li className="inline text-black dark:text-white text-sm">
                          5.0(30)
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                      <h5 className="text-lg font-medium text-red-500">
                        ₹ 499 / Day
                      </h5>

                      <Link
                        to={`/tour-detail-two/${item.id}`}
                        className="text-slate-400 hover:text-red-500"
                      >
                        Explore Now <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-6 text-center">
            <Link
              to="/grid-left-sidebar"
              className="text-slate-400 hover:text-red-500 inline-block"
            >
              See More Tours{" "}
              <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div>
        </div>

        <Blogs />
      </section>
      <Footer />
    </>
  );
}
