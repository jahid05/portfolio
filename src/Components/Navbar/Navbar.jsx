import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/Images/portfolio.jpg";
import { useState } from "react";
import {
  FaBarsStaggered,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaXmark,
} from "react-icons/fa6";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-72 bg-theme-300 md:fixed z-30">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between lg:hidden "
      >
        {open === true ? (
          <span className="text-3xl text-theme-400 absolute top-6 right-6 z-20">
            <FaXmark></FaXmark>
          </span>
        ) : (
          <span className="text-2xl text-theme-400 absolute top-6 left-6 z-20">
            <FaBarsStaggered></FaBarsStaggered>
          </span>
        )}
      </div>
      <nav
        className={`flex flex-col z-10 bg-theme-300 items-center justify-evenly w-full h-screen shadow-2xl text-theme-400 font-semibold absolute lg:static transition-all duration-500 ${
          open ? "left-0" : "-left-full"
        }`}
      >
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="flex flex-col items-center"
        >
          <figure className="rounded-full md:w-40 md:h-40 w-32 h-32 border-2 border-theme-100 p-1">
            <img
              className="rounded-full w-full h-full hover:scale-105 transition-all duration-700"
              src={profile}
              alt="Profile Picture"
            />
          </figure>
        </div>
        <ul
          data-aos="zoom-in-right"
          data-aos-easing="liner"
          data-aos-duration="700"
          onClick={() => setOpen(!open)}
          className="grid grid-cols-1 md:gap-y-6 gap-y-2 text-center"
        >
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "hover:border-theme-100 px-16 pb-1 border-b-2 border-theme-100 text-theme-100 md:text-xl duration-700"
                : "text-lg hover:border-theme-100 px-16 pb-1 border-b-2 border-transparent  hover:text-theme-100 duration-700 transition-all"
            }
          >
            <span className="text-theme-100">#</span>Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "hover:border-theme-100 px-16 pb-1 border-b-2 border-theme-100 text-theme-100 md:text-xl duration-700"
                : "text-lg hover:border-theme-100 px-16 pb-1 border-b-2 border-transparent  hover:text-theme-100 duration-700 transition-all"
            }
          >
                        <span className="text-theme-100">#</span>About Me
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "hover:border-theme-100 px-16 pb-1 border-b-2 border-theme-100 text-theme-100 md:text-xl duration-700"
                : "text-lg hover:border-theme-100 px-16 pb-1 border-b-2 border-transparent  hover:text-theme-100 duration-700 transition-all"
            }
          >
            <span className="text-theme-100">#</span>Resume
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "hover:border-theme-100 px-16 pb-1 border-b-2 border-theme-100 text-theme-100 md:text-xl duration-700"
                : "text-lg hover:border-theme-100 px-16 pb-1 border-b-2 border-transparent  hover:text-theme-100 duration-700 transition-all"
            }
          >
            <span className="text-theme-100">#</span>Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "hover:border-theme-100 px-16 pb-1 border-b-2 border-theme-100 text-theme-100 md:text-xl duration-700"
                : "text-lg hover:border-theme-100 px-16 pb-1 border-b-2 border-transparent  hover:text-theme-100 duration-700 transition-all"
            }
          >
            <span className="text-theme-100">#</span>Contact
          </NavLink>
        </ul>
        <div className="flex gap-x-4">
          <Link
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            to="https://www.facebook.com/jahid1705"
            target="_blank"
            className="rounded-full w-12 h-12 p-1 border-2 border-theme-100 flex justify-center items-center"
          >
            <p className="rounded-full hover:scale-125 p-2 text-xl text-theme-300 bg-theme-100 transition-all duration-700">
              <FaFacebook></FaFacebook>
            </p>
          </Link>
          <Link
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            to="https://github.com/jahid05"
            target="_blank"
            className="rounded-full w-12 h-12 p-1 border-2 border-theme-100 flex justify-center items-center"
          >
            <div className="rounded-full hover:scale-125 p-2 text-xl text-theme-300 bg-theme-100 transition-all duration-700">
              <FaGithub></FaGithub>
            </div>
          </Link>
          <Link
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            to="https://www.linkedin.com/in/jahid05/"
            target="_blank"
            className="rounded-full w-12 h-12 p-1 border-2 border-theme-100 flex justify-center items-center"
          >
            <div className="rounded-full hover:scale-125 p-2 text-xl text-theme-300 bg-theme-100 transition-all duration-700">
              <FaLinkedinIn></FaLinkedinIn>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
