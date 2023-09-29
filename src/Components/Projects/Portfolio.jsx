import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
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

      <div className="grid md:grid-cols-3 gap-8  container mx-auto md:px-48">
        {projects.map((project) => (
          <div data-aos="zoom-in"
          data-aos-easing="liner"
          data-aos-duration="1000" key={project.id} className="card card-compact shadow-xl">
            <figure className="h-72">
              <div className="h-full bg-top-0">
              <img className="hover:bg-bottom-0" src={project.image} />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <div className="flex gap-1 flex-wrap">
                {
                  project.technology.map((tech) =>(
                    <div key={tech.id} className="badge md:text-sm text-[10px] bg-gray-800 border-none">{tech}</div>
                  ))
                }
              </div>
              <div className="card-actions justify-end">
                <Link target="_blank" to={project.preview} className="btn md:text-xl bg-gray-800 text-theme-100 shadow-lg border-none"><FaExternalLinkAlt></FaExternalLinkAlt></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
