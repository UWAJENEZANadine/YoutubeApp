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
  CardFooter,
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
      detail:
        "Antoine RUTAYISIRE: Ibintu 5 bituma uhinduka UMUNYAMUGISHA | ibituma imivumo na karande bitagifata",
      icon: AiOutlineLike,
      author: "Rutayisire",
      views: "256 views",
      days: "2 days",
    },
    {
      titler: "https://www.youtube.com/embed/jB9tLHqL3x0",
      detail: "Yussouf Ntwali - BAG Innovation pitching his solution || Hanga Pitchfest",
      author: "youssuth",
      views: "156 views",
      days: "10 days",
    },
    {
      titler: "https://www.youtube.com/embed/nQWFzMvCfLE",
      detail: "What A Beautiful Name - Hillsong Worship",
      author: "Glory songs",
      views: "5k views",
      days: "2 days",
    },
    {
      titler: "https://www.youtube.com/embed/tG08pTcphZA",
      detail:
      "Antoine RUTAYISIRE: Ibintu 5 bituma uhinduka UMUNYAMUGISHA | ibituma imivumo na karande bitagifata",
      author: "worship",
      views: "5k views",
      days: "2 days",
    },
    {
      titler: "https://www.youtube.com/embed/qjH-OQtvIfA",
      detail: "Best Praise and Worship Songs 2023 - Best Christian Gospel Songs Of All Time - Praise & Worship",
      author: "Rutayisire",
      views: "956 views",
      days: "30 days",
    },
    {
      titler: "https://www.youtube.com/embed/xztA0-pOpww",
      detail: "Third Exodus Assembly - Worship The Lord",
      author: "Gospple",
      views: "956 views",
      days: "2 days",
    },
    {
      titler: "https://www.youtube.com/embed/xztA0-pOpww",
      detail: "Third Exodus Assembly - Worship The Lord",
      author: "Gospple2",
      views: "256 views",
      days: "2days",
    },
    {
      titler: "https://www.youtube.com/embed/xf8oPaTtJEY",
      detail: "MPA Amavuta - James&Daniella official video",
      author: "Gospple3",
      views: "956 views",
      days: "2 days",
    },
    {
      titler: "https://www.youtube.com/embed/ehxo_goADU8",
      detail: "Nkoresha - James&Daniella (Official Video 2019)",
      author: "Gospple4",
      views: "56 views",
      days: "2 days",
    },
    {
      titler: "https://www.youtube.com/embed/wprVeT6OKMI",
      detail: "HEMBURA - James & Daniella | Official Music Video + Live recorded at Kigali Arena",
      author: "Gospple5",
      views: "286 views",
      days: "4 days",
    },
    {
      titler: "https://www.youtube.com/embed/X7MhHPhTO9g",
      detail: "Israel Mbonyi - Nzaririmba",
      author: "Gospple6",
      views: "556 views",
      days: "2 days",
    },
    {
      titler: "https://www.youtube.com/embed/zDXAICBgu8o",
      detail: "GENTIL MIS - BIRATUNGANA (Official Music Video) Sinzuko ubigenza Live",
      author: "Gospple7",
      views: "456 views",
      days: "2 days",
    },
    {
      titler: "https://www.youtube.com/embed/xztA0-pOpww",
      detail: "Third Exodus Assembly - Worship The Lord",
      author: "Gospple",
      views: "556 views",
      days: "90 days",
    },
    {
      titler: "https://www.youtube.com/embed/Q3zJRrIe89I",
      detail: "NDI HANO BY JEAN- CHRISTIAN IRIMBERE OFFICIAL VIDEO 2019 Directed by Fleury Legend",
      author: "Gospple",
      views: "956 views",
      days: "1 year",
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
      <div className="card-video-container text-xl text-gray-900 font-semibold bg-gray-100 w-full p-3">
        <div className="card-data grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {videosList.map((list) => {
            return (
              <Card className="flex w-full max-w-[26rem] shadow-lg mb-4">
                <CardHeader floated={false} color="blue-gray data-to-shadow">
                  <iframe
                    src={list.titler}
                    width="560"
                    height="315"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h1 className="p-3">{list.detail}</h1>
                </CardHeader>
                <CardBody className="grid grid-cols-3 text-center">
                  <Typography>{list.author} </Typography>
                  <Typography className="flex">
                    {list.views} <AiOutlineLike className="ml-1" />
                  </Typography>

                  <Typography>{list.days}</Typography>
                </CardBody>
                {/* <CardFooter>
                  <Typography className="w-full">
                    It is a long established fact that a reader will be
                  </Typography>
                </CardFooter> */}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
