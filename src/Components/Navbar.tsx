import logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="h-[100px] w-full bg-gradient-to-b from-black via-black/80 to-transparent flex items-start justify-between fixed top-0 px-10 max-md:px-4">
      <div className="h-[60px] max-sm:h-[55px]">
        <img src={logo} alt="" className="h-full cursor-pointer" />
      </div>
      <div className="w-max h-[60px] flex justify-end items-center pr-3 gap-2 max-sm:h-[55px]">
        <a
          href="https://beta.creatospace.com/login"
          className="w-[110px] max-md:w-max flex justify-center items-center h-full cursor-pointer flex-col relative group"
        >
          <p>Log In</p>
          <hr className="w-[0px]  absolute bottom-0 left-0 trasition-all duration-100 group-hover:w-full  group-hover:border border-blue-500" />
        </a>
        <a
          href="https://beta.creatospace.com/register"
          className="w-[110px] max-md:w-max max-md:p-2 flex justify-center items-center h-[30px] rounded-md bg-blue-500 cursor-pointer"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="w-[110px] flex justify-center items-center h-full cursor-pointer flex-col relative group">
          <p>Home</p>
          <hr className="w-[0px]  absolute bottom-0 left-0 trasition-all duration-100 group-hover:w-full  group-hover:border border-blue-500" />
        </div>
        <div className="w-[110px] flex justify-center items-center h-full cursor-pointer flex-col relative group">
          <p>Our Features</p>
          <hr className="w-[0px]  absolute bottom-0 left-0 trasition-all duration-100 group-hover:w-full  group-hover:border border-blue-500" />
        </div>
        <div className="w-[110px] flex justify-center items-center h-full cursor-pointer flex-col relative group">
          <p>About</p>
          <hr className="w-[0px]  absolute bottom-0 left-0 trasition-all duration-100 group-hover:w-full  group-hover:border border-blue-500" />
        </div>
        <div className="w-[110px] flex justify-center items-center h-full cursor-pointer flex-col relative group">
          <p>Pricing</p>
          <hr className="w-[0px]  absolute bottom-0 left-0 trasition-all duration-100 group-hover:w-full  group-hover:border border-blue-500" />
        </div> */
}
