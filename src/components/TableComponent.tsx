import {
  FaSearch,
  FaFilter,
  FaEdit,
  FaTrash,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import preview from "../../public/images/preview.png";
import Image, { StaticImageData } from "next/image";

interface TableRow {
  fullName: string;
  clientScore: number;
  description: string;
  assignmentFor: string;
  img: StaticImageData; // Change to StaticImageData type
}

const data: TableRow[] = [
  {
    fullName: "John Doe",
    clientScore: 85,
    description: "Lorem ipsum dolor sit amet",
    assignmentFor: "Assignment 1",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
  {
    fullName: "Jane Smith",
    clientScore: 90,
    description: "Consectetur adipiscing elit",
    assignmentFor: "Assignment 2",
    img: preview,
  },
];

const totalPages = 10;

const TableComponent: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl mx-4 shadow-lg p-6 mt-[-25px]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-black font-semibold mb-4">
          Assignment Details{" "}
          <span className="text-[#6941C6] text-[16px] bg-[#F9F5FF] mx-2 p-2">
            100 Details
          </span>
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <FaFilter className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex bg-gray-200 text-xs font-semibold text-[#692CD4] py-2 px-4 border-b border-gray-300">
          <div className="flex-1">Full Name</div>
          <div className="flex-1">Client Score</div>
          <div className="flex-1">Description</div>
          <div className="flex-1">Assignment For</div>
          <div className="flex-1">Preview</div>
          <div className="flex-1">Action</div>
        </div>

        {/* Map over data to generate table rows */}
        {data.map((row, index) => (
          <div key={index} className="flex py-2 px-4 border-b border-gray-300">
            <div className="flex-1 text-[Purple]">{row.fullName}</div>
            <div className="flex-1 text-black">{row.clientScore}</div>
            <div className="flex-1 text-black">{row.description}</div>
            <div className="flex-1 text-black">{row.assignmentFor}</div>
            <div className="flex-1">
              <Image src={row.img} alt="Preview" width={103} height={16} />
            </div>
            <div className="flex-1 flex gap-2">
              <FaEdit className="text-gray-600" />
              <FaTrash className="text-red-600" />
            </div>
          </div>
        ))}

        <div className="flex justify-around items-center mt-4">
          <button className="text-[#667085] flex items-center">
            <FaArrowLeft className="mr-1" /> Previous
          </button>
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className="text-white rounded-full bg-[#692CD4] p-4 flex items-center justify-center w-6 h-6"
              >
                {index + 1}
              </span>
            ))}
          </div>

          <button className="text-[#667085] ml-2 flex items-center">
            Next <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
