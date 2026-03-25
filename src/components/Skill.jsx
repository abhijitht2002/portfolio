import React from "react";
// import { SiJavascript, SiSpringboot } from "react-icons/si";

function Skill({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:border-gray-300 transition">
      {/* <img src="icon" className="w-4 h-4" /> */}
      {Icon && <Icon className="w-6 h-6" />}
      <h1 className="text-sm md:text-base font-medium">{title}</h1>
    </div>
  );
}

export default Skill;
