import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import { Autoplay, Navigation } from "swiper/modules";

import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const swiper = useSwiper();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  return (
    <div className="bg-theme-300 min-h-screen px-8">
      <SectionTitle title="Projects"></SectionTitle>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={{
          nextEl: ".button_next",
          prevEl: ".button_prev",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <div className="h-96">
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                data-aos="zoom-in"
                data-aos-easing="liner"
                data-aos-duration="700"
                className="card card-compact shadow-xl bg-theme-300"
              >
                <figure className="h-56 md:h-72">
                  <div className="h-full top-0">
                    <img
                      className="hover:bottom-0 hover:scale-110 duration-700"
                      src={project.image}
                    />
                  </div>
                </figure>
                <div className="h-52 flex flex-col justify-around ">
                  <h2 className="card-title text-gray-200">{project.name}</h2>
                  <div className="flex gap-1 flex-wrap">
                    {project.technology.map((tech) => (
                      <div
                        key={tech.id}
                        className="badge md:text-sm text-gray-400 text-[10px] bg-gray-800 border-none"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="card-actions justify-end  mt-4">
                    <Link
                      target="_blank"
                      to={project.preview}
                      className="w-full normal-case bg-theme-100 btn md:text-xl text-theme-400 shadow-lg border-none rounded-none rounded-b-xl"
                    >
                      Live Site <FaExternalLinkAlt />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="swiper_btn relative z-10 flex justify-center gap-6 py-6">
        <button
          onClick={() => swiper.slidePrev()}
          className="button_prev absolute left-[35%] md:left-[41%] lg:left-[47%] bg-theme-100  p-2 rounded-full text-white text-xl md:text-3xl text-center"
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="button_next absolute right-[35%] md:right-[41%] lg:right-[47%] bg-theme-100  p-2 rounded-full text-white text-xl md:text-3xl text-center"
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
