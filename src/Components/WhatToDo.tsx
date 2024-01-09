import macImg from "../assets/macbook.png";
import { ReactNode } from "react";
import "../index.css";
import { BiSolidCube } from "react-icons/Bi";
import { FaCubes } from "react-icons/fa";
import {
  BsBookHalf,
  BsFillEmojiSmileFill,
  BsFillCalendarCheckFill,
  BsWindows,
  BsAndroid2,
} from "react-icons/bs";
import { IoMdChatbubbles } from "react-icons/io";
const WhatToDo = () => {
  return (
    <div className="h-full w-full flex items-center flex-col gap-10 pb-24">
      <div className="flex ">
        <p className="font-monster text-4xl font-bold text-yellow-500 text-center">
          What can I do in Creatospace
        </p>
      </div>
      <div className="w-full h-[70vh] flex justify-evenly items-center">
        <div className="h-full w-[300px] flex flex-col justify-evenly items-center">
          <ToDoContainer
            icon={<BiSolidCube />}
            text="Create spaces  for each type of members your community has "
          />
          <ToDoContainer
            icon={<FaCubes />}
            text="Rooms are 3D interactive virtual environments for your community to hang out"
          />
          <ToDoContainer
            icon={<BsBookHalf />}
            text="Add resources for your community using the Library"
          />
        </div>
        <div className="h-[400px] w-[400px] flex justify-center items-center rounded-full radialGradient max-sm:hidden">
          <img src={macImg} alt="" className="object-cover h-full" />
        </div>
        <div className="h-full w-[300px] flex flex-col justify-evenly items-center">
          <ToDoContainer
            icon={<BsFillEmojiSmileFill />}
            text="Make your own Chat-GPT based  AI character to automate customer in teraction"
          />
          <ToDoContainer
            icon={<IoMdChatbubbles />}
            text="Make forums for Introductions, Doubts, Discussions and a lot more"
          />
          <ToDoContainer
            icon={<BsFillCalendarCheckFill />}
            text="Schedule Events and make them happen in the Metaverse"
          />
        </div>
      </div>
      <a
        href="https://link.creatospace.com/windownload"
        className="w-[40%] max-sm:w-[90%]  h-[55px] flex justify-between items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  p-2 px-10 max-w-[500px] cursor-pointer"
      >
        {" "}
        <p className="w-[80%]">
          Download <span className="font-bold">Windows(x64)</span> Application
        </p>
        <p className="text-[24px]">
          <BsWindows />
        </p>
      </a>
      <a
        href="https://link.creatospace.com/playstore"
        className="w-[40%] max-sm:w-[90%]  h-[55px] flex justify-between items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  p-2 px-10 max-w-[500px] cursor-pointer"
      >
        {" "}
        <p className="w-[80%]">
          Download <span className="font-bold">Android</span> Application
        </p>
        <p className="text-[24px]">
          <BsAndroid2 />
        </p>
      </a>
    </div>
  );
  {
  }
};
interface ToDoContainerProps {
  text: string;
  icon: ReactNode;
}
const ToDoContainer: React.FC<ToDoContainerProps> = ({ icon, text }) => {
  return (
    <div className="w-[150px] flex flex-col items-center text-[35px] gap-4 text-white ">
      {icon}
      <p className="text-[14px] text-center">{text} </p>
    </div>
  );
};

export default WhatToDo;
