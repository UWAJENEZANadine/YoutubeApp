import React from "react";
import logo from "../image/log.PNG";
import { Input } from "@material-tailwind/react";
import SearchIcon from "@mui/icons-material/Search";
import { FaMicrophone } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi"; 
import { IoNotificationsOutline } from "react-icons/io5"
import profile from "../image/nadine.jpg"
const NavBar = () => {
  return (
    <section className="Header-container h-20 w-full p-3 px-5">
      <div className="grid grid-cols-4">
        <div>
          <img src={logo} />
        </div>
        <div className="w-96 text-gray-400">
          <Input label="search" icon={<SearchIcon />} />
        </div>
        <div className="pt-2 sm:ml-64 md:ml-4">
          <FaMicrophone className="text-black text-xl" />
        </div>

        <div className="flex justify-end content-center sm:opacity-0 md:opacity-100">
          <BiVideoPlus className="text-black text-2xl"/>
          <IoNotificationsOutline className="text-black text-2xl ml-6"/>
          <span className="bg-red-500 rounded-md h-6 text-white p-1">9+</span>
          <img src={profile} alt="profile" className="rounded-full ml-6 " style={{width:"8%", height:"4vh"}} />

        </div>
      </div>
    </section>
  );
};

export default NavBar;
