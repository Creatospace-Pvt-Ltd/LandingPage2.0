import gif from "../assets/anim.gif";
import "../index.css";
import { BsWindows, BsAndroid2 } from "react-icons/bs";
const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-150px)] flex mx-40">
      <div className="w-[60%] flex justify-center items-start flex-col pl-10 gap-4">
        <div className=" w-[80%] flex flex-col gap-10 font-monster">
          <p className="text-[50px] tracking-tighter font-monster font-[700] text-balance leading-[60px]">
            Create the Most{" "}
            <span className="text-yellow-500">
              Immersive Community Experience
            </span>{" "}
            for your Audience with the Power of
            <span className="text-yellow-500"> Metaverse</span>
          </p>
          <p>
            Give your audience webinars & workshops, conduct meetups as well as
            stream your content in virtual spaces and make a wholesome and
            personalized experience for your members
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="https://link.creatospace.com/windownload"
            className="w-[300px] h-[55px] flex justify-between items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  p-2 cursor-pointer"
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
          {/* <div className="w-[300px] h-[55px] flex justify-between items-center rounded-md gradientBorder p-2 cursor-pointer">
            {" "}
            <p className="w-[80%]">
              Download <span className="font-bold">Android</span> Application
            </p>
            <p className="text-[24px]">
              <BsAndroid2 />
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <img src={gif} alt="" className="h-[85%]" />
      </div>
    </div>
  );
};

export default HeroSection;
