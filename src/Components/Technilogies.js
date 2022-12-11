import React from "react";

const Technilogies = () => {
  return (
    <div className=" bg-gray-500 p-5">
      <h2 className="text-3xl font-semibold">Technologies I can use</h2>
      <div className="w-[70%] mx-auto">
        <div class="w-full my-2 bg-gray-200 rounded-full">
          <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-[90%]">
            {" "}
            HTML (90%)
          </div>
        </div>
        <div class="w-full my-2 bg-gray-200 rounded-full">
          <div class="bg-orange-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-[80%]">
            {" "}
            CSS (80%)
          </div>
        </div>
        <div class="w-full my-2 bg-gray-200 rounded-full">
          <div class="bg-yellow-200 text-xs font-medium text-black text-center p-0.5 leading-none rounded-l-full w-[70%]">
            {" "}
            JavaScript (70%)
          </div>
        </div>
        <div class="w-full my-2 bg-gray-200 rounded-full">
          <div class="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-[75%]">
            {" "}
            ReactJS (75%)
          </div>
        </div>
        <div class="w-full my-2 bg-gray-200 rounded-full">
          <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-[50%]">
            {" "}
            NodeJS (50%)
          </div>
        </div>
        <div class="w-full my-2 bg-gray-200 rounded-full">
          <div class="bg-violet-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-[85%]">
            {" "}
            CSS frameworks (85%)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technilogies;
