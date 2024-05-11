import CountUp from "react-countup";

const Count = () => {
  return (
    <div className="md:py-36 py-12">
      <div data-aos="zoom-in-up"
          data-aos-easing="liner"
          data-aos-duration="700" className="grid grid-cols-3">
        <div className="text-center">
          <h6 className="md:text-6xl text-3xl font-bold text-theme-100">
            <CountUp start={0} end={20} duration={2} />+
          </h6>
          <p className="md:font-semibold text-[10px] md:text-xl text-white">Completed Projects</p>
        </div>
        <div className="text-center">
          <h6 className="md:text-6xl text-3xl font-bold text-theme-100">
            <CountUp start={0} end={50} duration={2} />+
          </h6>
          <p className="md:font-semibold text-[10px] md:text-xl text-white">Happy Clients</p>
        </div>
        <div className="text-center">
          <h6 className="md:text-6xl text-3xl font-bold text-theme-100">
            <CountUp start={0} end={2} duration={2} />
          </h6>
          <p className="md:font-semibold text-[10px] md:text-xl text-white">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
