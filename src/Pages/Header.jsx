import React from "react";
import { RiGeminiLine } from "react-icons/ri";
import { TbLayoutDashboard, TbBriefcase,TbMailOpened, TbSearch, TbMail, TbChartBar, TbMailPlus, TbMailCheck } from "react-icons/tb";
import {TbBolt} from "react-icons/tb" 
import Profile from  "../assets/proflie.jpg"

const icons = [
    { icon: TbLayoutDashboard, name: "Dashboard" },
    { icon: TbBriefcase, name: "Deals" },
    { icon: TbSearch, name: "Find Leads" },
    { icon: TbMail, name: "AI Generate" },
    { icon: TbMailOpened, name: "Advance Generate" },
    { icon: TbChartBar, name: "Analytics" },
    { icon: TbMailPlus, name: "Generate Emails" },
    { icon: TbMailCheck, name: "Save Emails" },
  ];
function Header() {
  return (
    <>
    <div className="bg-gray-500 h-16 w-full flex items-center">
      <div className="flex items-center px-4">
        <RiGeminiLine size={24} className="text-white" />
        <h3 className="ml-2 text-white font-semibold">Persana AI</h3>
      </div>
      <div className="flex flex-row gap-3 ml-4">
        {
  icons.map((item, index) => (
    <div key={index} className="flex flex-col text-white items-center">
      <item.icon className="self-center" size={24} />
      <p>{item.name}</p>
    </div>
  ))
}

      </div>
      <div className="bg-blue-500 h-10 w-32 flex items-center ml-4 justify-center rounded-md">
      <button className="text-white text-sm font-semibold px-4 py-2">
        Upgrade Now
      </button>
      </div>
      <div className="text-white ml-3">
  {/* First Line: Icon + Text */}
  <div className="flex items-center">
    <TbBolt className="text-gray-400 text-lg mr-1" />
    <p>Free Credit</p>
  </div>

  {/* Second Line: Credits Info */}
  <p className="text-sm ml-2 text-gray-300">
    1000/<span className="font-bold">3000</span>
  </p>
</div>

<div className="ml-2 flex items-center ">
  <img src={Profile} alt="profile" className="h-10 w-10 rounded-full" />
  <select className="p-1 border rounded-md bg-gray-800 text-white">
    <option>A</option>
    <option>B</option>
  </select>
</div>


      </div>
    </>
  );
}

export default Header;
