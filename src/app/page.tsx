import React from "react";
import Layout from "./layout";
import { FaEdit, FaFilter, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import TableComponent from "@/components/TableComponent";

const Home: React.FC = () => {
  return (
    <div className="w-full mx-auto h-[300px]">
      <div className=" shadow-lg p-8 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Assignment</h2>

          <button className="flex items-center bg-white text-[#692CD4] py-2 px-4 rounded">
            <FaPlus className="mr-2" />
            Add Modules
          </button>
        </div>
        <p className="text-sm flex items-center justify-start gap-2">
          <div className="text-[14px] font-semibold  flex">
            <div className="mx-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 5.25L9 0.875L1.5 5.25M16.5 5.25L9 9.625M16.5 5.25V12.75L9 17.125M1.5 5.25L9 9.625M1.5 5.25V12.75L9 17.125M9 9.625V17.125"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            Product Selection
          </div>
          <span className="border-r border-white h-6 mx-4"></span>
          <div className="flex mt-2 mb-2">
            <button className="bg-white text-[#692CD4] font-[500] text-[14px] py-1 px-2 rounded-xl mr-2">
              Academic Pathway Planning
            </button>
            <button className="bg-transparent border border-white py-1 px-2 rounded-xl mr-2 text-[#fff]">
              JIVA
            </button>

            <button className="border border-white bg-transparent  py-1 px-2 rounded-xl text-[#fff]">
              EXAm
            </button>
          </div>
        </p>
      </div>
    <TableComponent/>
    </div>
  );
};

export default Home;
