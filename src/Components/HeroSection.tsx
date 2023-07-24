import gif from "../assets/anim.gif";
import "../index.css";
import { BsWindows } from "react-icons/bs";
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="h-max w-[95%] my-20 mx-auto flex pt-[90px]">
        <div className="w-[80%] flex justify-center items-start flex-col pl-10 gap-4">
          <div className=" w-[90%] flex flex-col gap-5 font-monster">
            <p className="text-[50px] max-md:text-base tracking-tighter font-monster font-[700] text-balance leading-[60px]">
              Create the Most{" "}
              <span className="text-yellow-500">
                Immersive Community Experience
              </span>{" "}
              for your Audience with the Power of
              <span className="text-yellow-500"> Metaverse</span>
            </p>
            <p className="max-md:text-xs">
              Give your audience webinars & workshops, conduct meetups as well
              as stream your content in virtual spaces and make a wholesome and
              personalized experience for your members
            </p>
          </div>
          <div className="flex flex-col gap-2 max-sm:hidden">
            <a
              href="https://link.creatospace.com/windownload"
              className="w-[300px] h-[55px] max-md:w-max flex justify-between items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  p-4 cursor-pointer"
            >
              <p className="w-[80%] text-md max-md:text-sm max-md:w-[90%]">
                Download <span className="font-bold">Windows(x64)</span>{" "}
              </p>
              <p className="max-md:text-md text-xl">
                <BsWindows />
              </p>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow">
          <img src={gif} alt="" className="h-[85%]" />
        </div>
      </div>
      <div className="hidden flex-col gap-2 max-sm:flex">
        <a
          href="https://link.creatospace.com/windownload"
          className="w-[300px] h-[55px] max-md:w-[250px ] flex justify-between items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  p-2 cursor-pointer"
        >
          <p className="w-[80%] max-md:text-sm max-md:w-[90%]">
            Download <span className="font-bold">Windows(x64)</span> Application
          </p>
          <p className="max-md:text-md">
            <BsWindows />
          </p>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

{
  /* <div className="w-[300px] h-[55px] flex justify-between items-center rounded-md gradientBorder p-2 cursor-pointer">
            {" "}
            <p className="w-[80%]">
              Download <span className="font-bold">Android</span> Application
            </p>
            <p className="text-[24px]">
              <BsAndroid2 />
            </p>
          </div> */
}
