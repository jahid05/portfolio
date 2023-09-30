import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/Images/portfolio.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="h-screen w-full bg-theme-300">
      <div className="absolute top-0 left-0">
        <div className="flex flex-col md:gap-y-4 gap-y-2 justify-center items-center w-screen h-screen">
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="top-center"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="flex flex-col items-center"
          >
            <figure className="md:w-64 md:h-64 w-40 h-40 border-4 rounded-full border-theme-100 p-1">
              <img
                className="w-full rounded-full animate-[pulse_2s_ease-in-out_infinite] h-full hover:scale-105 transition-all duration-700"
                src={profile}
                alt="Profile Picture"
              />
            </figure>
          </div>
          <h2 data-aos="fade-right"
          data-aos-easing="liner"
          data-aos-duration="1000" className="md:text-4xl text-2xl font-semibold text-theme-400">
            Hi, I’m Md Jahid Al Hassan
          </h2>
          <div className="flex text-xl md:text-3xl font-light gap-x-4 text-theme-400">
            <h1>I am a </h1>
            <h1 className="text-theme-100">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1500}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={[
                  "Front-end Developer",
                  "React Developer",
                  "JavaScript Developer",
                ]}
              />
            </h1>
          </div>
          <Link
              data-aos="fade-up"
              data-aos-easing="liner"
              data-aos-duration="1000"
              to="https://drive.google.com/file/d/12g7X4qCoPvUxqTaLK88LYhFPZI6SA21F/view"
              target="_blank"
              className="hover:text-theme-300 normal-case bg-transparent group rounded-full relative flex items-center btn md:text-lg text-md font-semibold px-8 py-2 border-2 border-theme-100 text-theme-100"
            >
              <span className="absolute left-0 w-full h-0 transition-all rounded-full bg-theme-100 opacity-100 group-hover:h-full duration-700 "></span>
              <span className="relative">Download CV</span>
            </Link>
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#00B207",
            },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Home;
