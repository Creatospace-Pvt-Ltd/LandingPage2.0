import cardImg1 from "../assets/CardImg1.png";
import cardImg2 from "../assets/CardImg2.png";
import cardImg3 from "../assets/CardImg3.png";
import { BsAndroid2, BsWindows } from "react-icons/bs";

import "../index.css";
interface CardProps {
  src: string;
  title: string;
  text: string;
}
const Card: React.FC<CardProps> = ({ src, title, text }) => {
  return (
    <div className="h-[400px] w-[300px] rounded-lg customColorBlue">
      <div className="h-[70%] w-full overflow-hidden relative shadowCustom">
        <img src={src} alt="" className="object-cover" />
        <div className="absolute bottom-0 h-[40px] w-full bg-gray-700 bg-opacity-70 flex justify-center items-center">
          {title}
        </div>
      </div>
      <div className="h-[30%] w-full customColorBlue flex justify-center items-center p-4 rounded-b-lg text-[14px]">
        {text}
      </div>
    </div>
  );
};
const WhyCreato = () => {
  return (
    <div className="h-max flex  flex-col items-center gap-10 pb-16">
      <div>
        <p className="font-monster text-4xl font-bold text-yellow-500 text-center">
          Why Creatospace?
        </p>
      </div>
      <div className="w-full flex justify-center gap-16 flex-wrap">
        <Card
          src={cardImg1}
          title="Creative Experience"
          text="Create New Experiences for your audience like Art Show in the Gallery Metaverse or Movies screenings in the Video Room "
        />
        <Card
          src={cardImg2}
          title="Super Gamification"
          text="Gamify the community experience and super charge your storytelling using custom 3D models, banners and posters."
        />
        <Card
          src={cardImg3}
          title="Higher Engagement"
          text="10x your average engagement metrics by making the experience fun and get your community some hustle bustle!"
        />
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
        href="https://link.creatospace.com/windownload"
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
};

export default WhyCreato;
