/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Count from "./Count/Count";
import texture from "../../assets/Images/texture.svg";
import aboutProfile from "../../assets/Images/about_profile.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-theme-300 min-h-screen px-8">
      <SectionTitle title="About me"></SectionTitle>

      <div className="container mx-auto lg:px-48 grid lg:grid-cols-7 lg:gap-y-0 lg:gap-x-20">
        <div className="lg:col-start-1 lg:col-span-3 md:py-16">
          <div
            data-aos="fade-right"
            data-aos-easing="liner"
            data-aos-duration="700"
            className="flex justify-center relative"
          >
            <figure className="rounded-3xl border-[3px] mb-4 w-56 lg:w-72 border-theme-100 overflow-hidden">
              <img
                className="rounded-3xl w-full h-full hover:scale-105 p-2 transition-all duration-700"
                src={aboutProfile}
                alt="Profile Picture"
              />
            </figure>
            <img
              className="absolute animate-pulse -top-10 md:-top-20 -right-2  lg:-right-2 w-32 md:w-44"
              src={texture}
              alt=""
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="liner"
            data-aos-duration="700"
            className="text-center"
          >
            <h1 className="text-theme-400 md:text-3xl text-2xl font-semibold">
              I'm <span className="text-theme-100">Md Jahid Al Hassan</span>
            </h1>
            <h3 className="text-slate-400 font-semibold">
              Front-end Developer
            </h3>
          </div>
          <div className="flex justify-center py-6">
            <Link
              data-aos="fade-up"
              data-aos-easing="liner"
              data-aos-duration="700"
              to="https://drive.google.com/file/d/1BjD91AxgBZElggtQ7Lbuw0CKnXM_H7_a/view?usp=drive_link"
              target="_blank"
              className="hover:text-theme-300 normal-case bg-transparent group rounded-full relative flex items-center btn md:text-lg text-md font-semibold px-8 py-2 border-2 border-theme-100 text-theme-100"
            >
              <span className="absolute left-0 w-full h-0 transition-all rounded-full bg-theme-100 opacity-100 group-hover:h-full duration-700 "></span>
              <span className="relative">Download CV</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-start-4 lg:col-span-4">
          <div
            data-aos="fade-down-left"
            data-aos-easing="liner"
            data-aos-duration="700"
            className=""
          >
            <p className="md:text-lg text-sm text-slate-400 py-4">
            I have proficiency in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React JS, Responsive Design, and Problem Solving. I have basic knowledge of Firebase, MongoDB, NodeJS, and Express JS. I am currently operating tools Visual Studio Code, Git & GitHub, Vercel, Netlify, and Basic Figma & Adobe Photoshop. Seeking a challenging role where I can leverage my skills and contribute to cutting-edge projects in a collaborative and growth-oriented environment.
            </p>
          </div>
          <Count></Count>
        </div>
      </div>
    </div>
  );
};

export default About;
