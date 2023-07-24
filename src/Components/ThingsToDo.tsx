import girlImg from "../assets/GirlImg.png";
import { ReactNode } from "react";
import { MdConnectWithoutContact, MdOutlineScreenShare } from "react-icons/md";
import { BiSolidTShirt, BiSolidImageAlt } from "react-icons/Bi";
import { BsFillMicFill, BsWindows } from "react-icons/bs";
interface CardProps {
  icon: ReactNode;
  text: string;
}
const Card: React.FC<CardProps> = ({ text, icon }) => {
  return (
    <div className="w-[150px] flex flex-col items-center text-[35px] gap-4 text-white ">
      {icon}
      <p className="text-[14px] text-center">{text} </p>
    </div>
  );
};
const ThingsToDo = () => {
  return (
    <div className=" h-max w-full flex items-center flex-col gap-10 pb-30">
      {/* <div>
        <p className="font-monster text-4xl font-bold text-yellow-500">
          What can I do in Creatospace
        </p>
      </div> */}
      <div className="w-full h-max min-h-[85vh]  thingsToDoSectionBg flex justify-center items-center gap-10 flex-wrap ">
        <div className="flex h-full p-4">
          <img src={girlImg} alt="" className="h-[90%]  object-cover" />
        </div>

        <div className="w-full h-full flex max-w-[600px] flex-col items-center justify-center">
          <div className="h-[80%] w-full flex gap-x-24 flex-wrap justify-center items-center ">
            <Card
              icon={<MdConnectWithoutContact />}
              text="Connect with other relevant people in the Metaverse"
            />
            <Card
              icon={<BiSolidTShirt />}
              text="Connect with other relevant people in the Metaverse"
            />
            <Card
              icon={<BsFillMicFill />}
              text="Connect with other relevant people in the Metaverse"
            />
            <Card
              icon={<BiSolidImageAlt />}
              text="Connect with other relevant people in the Metaverse"
            />
            <Card
              icon={<MdOutlineScreenShare />}
              text="Connect with other relevant people in the Metaverse"
            />
          </div>
          <a
            href="https://link.creatospace.com/windownload"
            className="w-[80%] h-[55px] flex justify-between items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  p-2 px-10 max-w-[500px] cursor-pointer my-2"
          >
            {" "}
            <p className="w-[80%]">
              Download <span className="font-bold">Windows(x64)</span>{" "}
              Application
            </p>
            <p className="text-[24px]">
              <BsWindows />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
