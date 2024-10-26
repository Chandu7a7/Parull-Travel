import React from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/navbar";
import Blogs from "../../components/blogs";
import BlogSidebar from "../../components/blog-sidebar";
import Footer from "../../components/footer";

import blogImg from "../../assets/images/blog/9.jpg";
import { blogData } from "../../data/data";

export default function BlogDetail() {
  let params = useParams();
  let id = params.id;
  let data = blogData.find((item) => item.id === parseInt(id));
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
          <div className="grid grid-cols-1 lg:pb-8 text-center lg:mt-10">
            <h3 className="lg:text-4xl text-2xl leading-normal tracking-wider font-semibold text-white">
              {data?.title
                ? data.title
                : "Traveller Visiting Ice Cave With Amazing Eye-catching Scenes"}
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
              Blog Detail
            </li>
          </ul>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:px-24 ">
            <div className="">
              <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                <img
                  src={data?.image ? data.image : blogImg}
                  alt=""
                  className="lg:h-[500px] w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-slate-400">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin. It contains a series of real
                    Latin words. This ancient dummy text is also
                    incomprehensible, but it imitates the rhythm of most
                    European languages in Latin script.
                  </p>
                  <p className="text-slate-400 italic border-x-4 border-red-500 rounded-ss-xl rounded-ee-xl mt-3 p-3">
                    " There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. "
                  </p>
                  <p className="text-slate-400 mt-3">
                    The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout.
                  </p>
                </div>
              </div>
            </div>

            {/* <BlogSidebar /> */}
          </div>
        </div>

        <Blogs />
      </section>
      <Footer />
    </>
  );
}
