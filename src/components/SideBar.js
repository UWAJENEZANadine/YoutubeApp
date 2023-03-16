import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiFillHome, AiOutlineLike } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../image/log.PNG";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import "./SideBar.css";

const SideBar = () => {
  const menus = [
    { name: "Home", link: "/", icon: AiFillHome },
    { name: "Shorts", link: "/", icon: AiOutlineUser },
    { name: "Subscriptions", link: "/", icon: MdSubscriptions },
    { name: "Library", link: "/", icon: MdOutlineVideoLibrary, margin: true },
    { name: "History", link: "/", icon: FiFolder },
    { name: "Your Videos", link: "/", icon: FiShoppingCart },
    { name: "Watch Later", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Liked Videos", link: "/", icon: AiOutlineLike },
    { name: "Settings", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);

  const videosList = [
    {
      titler: "https://www.youtube.com/embed/tG08pTcphZA",
      author: "Rutayisire",
    },
    { titler: "https://www.youtube.com/embed/jB9tLHqL3x0", author: "youssuth" },
    {
      titler: "https://www.youtube.com/embed/nQWFzMvCfLE",
      author: "Glory songs",
    },
    { titler: "https://www.youtube.com/embed/tG08pTcphZA", author: "worship" },
    {
      titler: "https://www.youtube.com/embed/qjH-OQtvIfA",
      author: "Rutayisire",
    },
    {
      titler: "https://www.youtube.com/embed/xztA0-pOpww",
      author: "Gospple",
    },
    {
      titler: "https://www.youtube.com/embed/xztA0-pOpww",
      author: "Gospple2",
    },
    {
      titler: "https://www.youtube.com/embed/xf8oPaTtJEY",
      author: "Gospple3",
    },
    {
      titler: "https://www.youtube.com/embed/ehxo_goADU8",
      author: "Gospple4",
    },
    {
      titler: "https://www.youtube.com/embed/wprVeT6OKMI",
      author: "Gospple5",
    },
    {
      titler: "https://www.youtube.com/embed/X7MhHPhTO9g",
      author: "Gospple6",
    },
    {
      titler: "https://www.youtube.com/embed/zDXAICBgu8o",
      author: "Gospple7",
    },
    {
      titler: "https://www.youtube.com/embed/xztA0-pOpww",
      author: "Gospple",
    },
    {
      titler: "https://www.youtube.com/embed/Q3zJRrIe89I",
      author: "Gospple",
    },
  ];
  return (
    <section className="section-container flex gap-6 px-5 pt-9">
      <div
        className={`bg-white min-h-screen  ${
          open ? "w-72" : "w-16"
        } duration-500 text-black px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-y-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-xl text-gray-900 font-semibold bg-gray-200 w-full">
        <div className="card-video-container">
        {videosList.map((list) => {
            return (
          <Card className="card-data flex w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray" >
                  <iframe
                    src={list.titler}
                    width="560"
                    height="315"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
            </CardHeader>
          </Card>
             );
        })}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
