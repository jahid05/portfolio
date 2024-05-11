import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./ReactTab.css";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiAdobephotoshop,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNetlify,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const Resume = () => {
  return (
    <div className="bg-theme-300 min-h-screen px-8">
      <SectionTitle title="Resume"></SectionTitle>
      <div className="flex justify-center mx-auto pb-12">
        <Tabs>
          <TabList
            data-aos="fade-left"
            data-aos-easing="liner"
            data-aos-duration="700"
            className="flex justify-center pb-6"
          >
            <Tab>
              <h1 className="md:text-2xl text-lg font-bold text-theme-400 text-center mb-2">
                <span className="text-theme-100">Education</span> Timeline
              </h1>
            </Tab>
            <Tab>
              <h1 className="md:text-2xl text-lg font-bold text-theme-400 text-center mb-2">
                <span className="text-theme-100">Programming</span> Skills
              </h1>
            </Tab>
          </TabList>

          <TabPanel>
          <ol
                data-aos="zoom-in"
                data-aos-easing="liner"
                data-aos-duration="700"
                className="relative border-l border-white"
              >
                <li className="mt-8 ml-6 ">
                  <div className="absolute w-3 h-3 bg-theme-100  rounded-full mt-1.5 -left-1.5"></div>
                  <h3 className="md:text-xl font-semibold text-theme-400 ">
                    B.Sc. in Computer Science & Engineering (CSE)
                  </h3>
                  <p className="mt-4 font-normal text-gray-400 ">
                    Institute: Sonargaon University
                  </p>
                  <p className="mb-4 font-normal text-gray-400 ">
                    Passing Year: 2022
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <div className="absolute w-3 h-3 bg-theme-100 rounded-full mt-1.5 -left-1.5"></div>
                  <h3 className="md:text-xl font-semibold text-theme-400">
                    Higher Secondary School Certificate (HSC)
                  </h3>
                  <p className="mt-4 font-normal text-gray-400">
                    Institute: Ghoraghat K.C Pilot Model School & College
                  </p>
                  <p className="mb-4 font-normal text-gray-400">
                    Passing Year: 2017
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <div className="absolute w-3 h-3 bg-theme-100 rounded-full mt-1.5 -left-1.5"></div>
                  <h3 className="md:text-xl font-semibold text-theme-400">
                    Secondary School Certificate (SSC)
                  </h3>
                  <p className="mt-4 font-normal text-gray-400">
                    Institute: Nurjahanpur R.M.C High School
                  </p>
                  <p className="mb-4 font-normal text-gray-400">
                    Passing Year: 2015
                  </p>
                </li>
              </ol>
          </TabPanel>
          <TabPanel>
          <div className="mt-8">
                <h2
                  data-aos="fade-left"
                  data-aos-easing="liner"
                  data-aos-duration="700"
                  className="md:text-2xl text-theme-400 border-b border-theme-100 font-bold md:mb-4 md:mt-14 mb-2"
                >
                  Expertise
                </h2>
                <div
                  data-aos="fade-left"
                  data-aos-easing="liner"
                  data-aos-duration="700"
                  className="flex md:gap-x-14 gap-x-4 text-gray-500 text-2xl md:text-4xl"
                >
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <FaHtml5></FaHtml5>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <FaCss3></FaCss3>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <FaBootstrap></FaBootstrap>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <SiTailwindcss></SiTailwindcss>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <FaJs></FaJs>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <FaReact></FaReact>
                  </span>
                </div>
                <h2
                  data-aos="zoom-in"
                  data-aos-easing="liner"
                  data-aos-duration="700"
                  className="md:text-2xl text-theme-400 border-b border-theme-100 font-bold md:my-4 md:mt-14 mt-8 mb-2"
                >
                  Basic Knowledge
                </h2>
                <div
                  data-aos="zoom-in"
                  data-aos-easing="liner"
                  data-aos-duration="700"
                  className="flex md:gap-x-14 gap-x-4 text-gray-500 text-2xl md:text-4xl"
                >
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <FaNodeJs></FaNodeJs>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <SiExpress></SiExpress>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <SiMongodb></SiMongodb>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <SiFirebase></SiFirebase>
                  </span>
                </div>
                <h2
                  data-aos="fade-left"
                  data-aos-easing="liner"
                  data-aos-duration="700"
                  className="md:text-2xl text-theme-400 border-b border-theme-100 font-bold md:my-4 md:mt-14 mt-8 mb-2"
                >
                  Tools and technology
                </h2>
                <div
                  data-aos="fade-left"
                  data-aos-easing="liner"
                  data-aos-duration="700"
                  className="flex md:gap-x-14 gap-x-4 text-gray-500 text-2xl md:text-4xl"
                >
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <SiNetlify></SiNetlify>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <SiVercel></SiVercel>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <FaGithub></FaGithub>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <FaFigma></FaFigma>
                  </span>
                  <span className="hover:scale-110 rounded-full hover:text-theme-100 transition-all duration-500 shadow-lg p-2">
                    <SiAdobephotoshop></SiAdobephotoshop>
                  </span>
                </div>
              </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
