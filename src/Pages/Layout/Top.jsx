import React from "react";
import { MdLibraryAdd, MdPersonAdd, MdMessage } from "react-icons/md";
import { SiHubspot } from "react-icons/si";
import { FiUpload } from "react-icons/fi";

const buttons = [
  { label: "New List", icon: MdLibraryAdd },
  { label: "Add Lead", icon: MdPersonAdd },
  { label: "Prompts", icon: MdMessage },
  { label: "Sync HubSpot", icon: SiHubspot, iconClass: "text-orange-500" },
];

const Top = () => {
  return (
    <div className="bg-white shadow-md rounded-lg">
    <div className="flex flex-row justify-between items-center p-4 ">
      <h3 className="text-lg font-semibold">AI Generate Email</h3>
      <div className="flex flex-row gap-3">
        {buttons.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md shadow-sm hover:bg-gray-200 transition"
            >
              <Icon size={20} className={item.iconClass || "text-gray-700"} />
              <p className="text-sm font-medium">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
    <div className="flex flex-row gap-3">
        <div className="flex flex-col bg-gray-200 ml-3 rounded-md p-2 mb-2">
          <p className="text-sm mb-1 text-gray-400">Current Lead</p>
          <select className="bg-gray-100">
            <option>B2B Business Fintech</option>
          </select>
        </div>
        <div className="flex flex-col bg-gray-200 ml-3 rounded-md p-2 mb-2">
          <p className="text-sm mb-1 text-gray-400">Current Prompt</p>
          <select className="bg-gray-100">
            <option>Write a google Ad Descrption</option>
          </select>
        </div>
        <div className="flex flex-col bg-gray-200 ml-3 rounded-md p-2 mb-2 w-96">
          <p className="text-sm mb-1 text-gray-400">Enter Linkedln url Past here </p>
          <div>
          <input type="text" className="bg-gray-100 w-69"/>
          <button className="bg-blue-500 rounded text-white text-sm self-center px-2 h-6 ">Quick add</button>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200 ml-3 rounded-md p-2 mb-2 w-70">
            <label htmlFor="file-upload" className="flex items-center justify-center h-12 w-full border-2 border-blue-400 border-dashed rounded-md cursor-pointer text-gray-600 gap-2">
                <FiUpload className="w-6 h-6" /> {/* Upload Icon */}
                <span>Upload File</span> {/* Upload Text */}
            </label>
            <input id="file-upload" type="file" className="hidden" />
        </div>

    </div>
    </div>
  );
};

export default Top;
