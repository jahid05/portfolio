import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="bg-theme-300 h-screen w-full flex justify-center items-center min-h-screen font-custom-100">
      <div className="space-y-12 text-center">
        <h1 className="md:text-[350px] text-8xl ">404</h1>
        <h3 className="md:text-2xl text-gray-200">404 - Page Not Found</h3>
        <button>
          <Link to="/" className="btn px-9 border-none rounded-full normal-case bg-theme-100 text-theme-300">Go To Home</Link>
        </button>
      </div>
    </div>
    );
};
 
export default Error;