import React from "react";

const Project = ({ project }) => {
  const { name, photo, technologies, description, site } = project;
  return (
    <div className="lg:w-[70%] sm:w-[90%] mx-auto mt-5 p-4 border-2 rounded-tl-xl rounded-br-xl bg-slate-200 ">
      <h2 className="text-3xl font-bold">{name}</h2>
      <div className="mt-3 lg:flex lg:flex-row sm:flex sm:flex-col justify-center items-center">
        <div className="lg:w-3/5 sm:w-full">
          <img
            className="w-full h-full"
            src={photo}
            alt=""
          ></img>
        </div>
        <div className="lg:w-2/5 sm:w-full">
          <div className="text-justify my-4 p-4 bg-lime-500">
            <p>Technologies used on this projet :</p>
            <p>{technologies}</p>
          </div>
          <p className="text-justify p-4">{description}</p>
          <button className="w-[50%] border-4 border-blue-700 hover:font-bold bg-white rounded-xl p-2">
            <a
              href={site}
              target="_blank"
            >
              Show me
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
