import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

import Blogs from "../components/blogs";
import Client from "../components/client";
import About from "../components/about";
import Footer from "../components/footer";

import { teamData, placeImage } from "../data/data";

import { FiFacebook, FiInstagram, FiLinkedin } from "../assets/icons/vander";

import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

export default function Aboutus() {
  let [isOpen, setisOpen] = useState(false);
  let [currentImageIndex, setCurrentImageIndex] = useState(0);

  let handleMovePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + placeImage.length - 1) % placeImage.length
    );
  };

  let handleMoveNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % placeImage.length);
  };
  let currentImage = placeImage[currentImageIndex];

  let handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setisOpen(true);
  };

  const settings = {
    container: ".tiny-twelve-item",
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: {
        items: 12,
      },

      992: {
        items: 8,
      },

      767: {
        items: 6,
      },

      575: {
        items: 5,
      },

      420: {
        items: 3,
      },

      320: {
        items: 2,
      },
    },
  };
  return (
    <>
      <Navbar
        navclass="defaultscroll is-sticky"
        navlight={true}
        manuclass="justify-end nav-light"
      />
      <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
              Purulia Travels Agency
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/">Purulia</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right"></i>
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              About Us
            </li>
          </ul>
        </div>
      </section>

      <section className="relative md:pb-24 pb-16">
        <About />

        <Blogs />
      </section>

      <Footer />
    </>
  );
}
