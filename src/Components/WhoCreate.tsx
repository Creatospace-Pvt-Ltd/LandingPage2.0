import React, { ReactNode } from "react";
import { BiSolidBusiness } from "react-icons/Bi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { BsFillCameraReelsFill, BsWindows } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
interface CardProps {
  icon: ReactNode;
  text: string;
}
const Card: React.FC<CardProps> = ({ icon, text }) => {
  return (
    <div className="h-[300px] w-[200px] bg-gray-600 bg-opacity-50  rounded-md text-[60px] flex justify-center items-center flex-col gap-10">
      {icon}
      <p className="text-[20px] w-[100px] text-center font-semibold">{text}</p>
    </div>
  );
};
const WhoCreate = () => {
  return (
    <div className="h-full w-full flex items-center flex-col gap-10 pb-24 ">
      <div className="w-[50%] text-center">
        <p className="font-monster text-4xl font-bold text-yellow-500">
          Who should create communities in Creatospace?
        </p>
      </div>
      <div className="flex w-full justify-evenly">
        <Card icon={<BiSolidBusiness />} text="Business Owners" />
        <Card
          icon={<MdOutlineAdminPanelSettings />}
          text="Discord/Slack Admins"
        />
        <Card icon={<FaUserTie />} text="Community Managers" />
        <Card icon={<BsFillCameraReelsFill />} text="Content Creators" />
        <Card icon={<HiSpeakerphone />} text="Marketers" />
      </div>
      <a
        href="https://link.creatospace.com/windownload"
        className="w-[40%] h-[55px] flex justify-between items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  p-2 px-10 max-w-[500px] cursor-pointer mt-10"
      >
        {" "}
        <p className="w-[80%]">
          Download <span className="font-bold">Windows(x64)</span> Application
        </p>
        <p className="text-[24px]">
          <BsWindows />
        </p>
      </a>
    </div>
  );
};

export default WhoCreate;
