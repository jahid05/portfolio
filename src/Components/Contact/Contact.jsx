import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillEnvelopeAtFill, BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ktctkqh",
        "template_7j4f6l5",
        form.current,
        "790yQ62MZ98N9ehRy"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-theme-300 min-h-screen px-8">
      <SectionTitle title="Contact"></SectionTitle>
      <div className="container mx-auto lg:px-52 py-4 lg:py-8 grid lg:grid-cols-2 gap-y-12 lg:gap-y-0">
        <div
          data-aos="zoom-in-right"
          data-aos-easing="liner"
          data-aos-duration="1000"
        >
          <p className="text-theme-100 font-bold text-2xl md:text-4xl text-center ">
            Get in touch
          </p>
          <form ref={form} onSubmit={sendEmail} className="relative">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                className="block py-3 px-0 w-full text-sm text-theme-400 bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-theme-100 peer"
                placeholder=""
                name="user_name"
                required
              />
              <label className="peer-focus:font-medium absolute md:text-lg text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-theme-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                className="block py-3 px-0 w-full text-sm text-theme-400 bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-theme-100 peer"
                placeholder=""
                name="user_email"
                required
              />
              <label className="peer-focus:font-medium absolute md:text-lg text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-theme-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                className="block py-3 px-0 w-full text-sm text-theme-400 bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-theme-100 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute md:text-lg text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-theme-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Subject
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                type="text"
                className="block md:h-52 h-36 py-3 px-0 w-full text-sm text-theme-400 bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-theme-100 peer"
                placeholder=""
                name="message"
                required
              />
              <label className="peer-focus:font-medium absolute md:text-lg text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-theme-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Message
              </label>
            </div>
            <div type="submit" className="absolute right-0 py-2">
              <button className="rounded-full bg-transparent hover:text-theme-300 group relative flex items-center btn md:text-lg text-md font-semibold px-8 py-2 border-2 border-theme-100 text-theme-100">
                <span className="rounded-full absolute left-0 w-full h-0 transition-all bg-theme-100 opacity-100 group-hover:h-full duration-700 "></span>
                <button className="relative">Send</button>
              </button>
            </div>
          </form>
        </div>
        <div className="md:gap-y-8 gap-y-4 md:mx-20 grid my-12">
          <div
            data-aos="zoom-in-down"
            data-aos-easing="liner"
            data-aos-duration="1000"
            className="border-2 border-theme-100 text-theme-300 p-1 h-32 rounded-2xl"
          >
            <div className="bg-theme-100 h-full p-4 rounded-2xl">
              <span className="text-2xl flex gap-x-4 ">
                <BiCurrentLocation></BiCurrentLocation>
                <span className="md:text-lg text-md font-bold">Address</span>
              </span>
              <p className="py-2 text-md">
                44/5 North Dhanmondi, Kalabagn, Dhaka-1205
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="liner"
            data-aos-duration="1000"
            className="border-2 border-theme-100 text-theme-300 p-1 h-32 rounded-2xl"
          >
            <div className="bg-theme-100 h-full p-4 rounded-2xl">
              <span className="text-2xl flex gap-x-4">
                <BsTelephoneFill></BsTelephoneFill>
                <span className="md:text-lg text-md font-bold">Phone</span>
              </span>
              <p className="py-2 md:text-lg text-sm">
                +880 1811-844838, +880 1799-014005
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="liner"
            data-aos-duration="1000"
            className="border-2 border-theme-100 text-theme-300 p-1 h-32 rounded-2xl"
          >
            <div className="bg-theme-100 h-full p-4 rounded-2xl">
              <span className="text-2xl flex gap-x-4">
                <BsFillEnvelopeAtFill></BsFillEnvelopeAtFill>
                <span className="md:text-lg text-md font-bold">Email</span>
              </span>
              <p className="py-2 md:text-lg text-sm">jahidcse05@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
