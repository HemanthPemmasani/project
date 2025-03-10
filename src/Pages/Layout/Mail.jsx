// import React from "react";
// import { RiGeminiFill, RiFilter3Fill } from "react-icons/ri";
// import { FaSearch } from "react-icons/fa";

// const Mail = () => {
//   return (
//     <div className="mt-2 bg-white shadow p-4">
//       {/* Container with responsive flex wrap */}
//       <div className="flex flex-wrap items-center gap-4 justify-between md:justify-start">
//         {/* Generate AI Button */}
//         <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md text-sm md:text-base">
//           <RiGeminiFill className="text-lg" />
//           Generate With AI
//         </button>

//         {/* Search Bar */}
//         <div className="relative w-full sm:w-auto flex-1 md:flex-none max-w-sm">
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           <input
//             type="text"
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Search..."
//           />
//         </div>

//         {/* Filter Button */}
//         <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 text-sm md:text-base">
//           <RiFilter3Fill className="text-lg" />
//           <p>Filter</p>
//         </button>

//         {/* Export Button */}
//         <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-800 text-white text-sm md:text-base">
//           AI Export as CSV
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Mail;



import React from "react";
import { RiGeminiFill, RiFilter3Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";


const data = [
  { name: "Shahid Miah", linkedin: "linkedin.com/in/uxshahid/", email: "thuhang.nute@gmail.com", company: "Drawstack" },
  { name: "Shahid Miah", linkedin: "linkedin.com/in/uxshahid/", email: "thuhang.nute@gmail.com", company: "Drawstack" },
  { name: "Shahid Miah", linkedin: "linkedin.com/in/uxshahid/", email: "thuhang.nute@gmail.com", company: "Drawstack" },
];

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Top Header */}
      <div className="bg-white p-4 shadow-md rounded-md flex flex-wrap items-center gap-4">
        {/* AI Generate Button */}
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md">
          <RiGeminiFill className="text-lg" />
          Generate With AI
        </button>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Search..."
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
          <RiFilter3Fill className="text-lg" />
          Filter
        </button>

        {/* Export Button */}
        <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-800 text-white">
          <MdOutlineFileDownload className="text-lg" />
          All Export as CSV
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {/* Table Section */}
        <div className="col-span-2 bg-white shadow-md rounded-md p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left"><input type="checkbox" /></th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">LinkedIn URL</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Company</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-2"><input type="checkbox" /></td>
                  <td className="p-2 flex items-center gap-2">
                    <img src="https://via.placeholder.com/30" className="rounded-full" alt="user" />
                    {user.name}
                  </td>
                  <td className="p-2 text-blue-500">{user.linkedin}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Generated Email Section */}
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Generated Email</h2>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center gap-1">
              <MdOutlineFileDownload className="text-lg" />
              Export as CSV
            </button>
          </div>

          {/* Email Editor */}
          <div className="border rounded-md p-2">
            {/* <div className="flex gap-2 border-b pb-2">
              <button className="p-1"><BsBold /></button>
              <button className="p-1"><BsItalic /></button>
              <button className="p-1"><BsLink45Deg /></button>
            </div> */}
            <textarea
              className="w-full h-40 p-2 mt-2 border-none focus:ring-0 resize-none"
              defaultValue="Hey Shahid, 

I hope you are doing well! I am Saidur Rahman from CRM.co and I wanted to connect with you as I believe that our services can help Drawstack grow and reach its potential..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-3">
            <button className="flex-1 border px-3 py-2 rounded-md hover:bg-gray-100">Regenerate</button>
            <button className="flex-1 border px-3 py-2 rounded-md hover:bg-gray-100">Copy</button>
            <button className="flex-1 border px-3 py-2 rounded-md hover:bg-gray-100">Saved</button>
          </div>

          {/* Share Buttons */}
          <div className="flex gap-2 mt-3">
            <button className="flex-1 bg-red-500 text-white px-3 py-2 rounded-md">To Gmail</button>
            <button className="flex-1 bg-yellow-500 text-white px-3 py-2 rounded-md">To OutReach</button>
            <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-md">To LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

