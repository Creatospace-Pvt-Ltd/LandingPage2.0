const Footer = () => {
  return (
    <div className="h-max w-full bg-black p-10 flex justify-between">
      <div className="h-full w-[35%] ">
        {/* <p className="text-white/50">
          Created with <span className="text-red-700">❤</span> by:
        </p> */}
        <p className="font-semibold text-[30px] max-sm:text-sm">
          Creatospace Pvt Ltd.
        </p>
        <p className="text-white/50 mb-2 max-sm:text-xs">
          B-41, 4th Floor, Gate No.-3, Freedom Fighter Enclave, IGNOU Road,
          Saket, New Delhi-110068
        </p>
        <p className="font-semibold max-sm:text-sm">
          Email ID: saswat@creatospace.com Phone No.: +91-8328919266
        </p>
      </div>
      <div className="h-full w-[20%] flex flex-col items-start gap-3 text-md max-sm:text-sm">
        <a
          href="https://beta.creatospace.com/login"
          className="cursor-pointer hover:text-white/70"
        >
          Log In
        </a>
        <a
          href="https://beta.creatospace.com/register"
          className="cursor-pointer hover:text-white/70"
        >
          Register
        </a>
      </div>
      <div className="h-full w-[20%] flex flex-col items-start gap-3 text-md max-sm:text-sm">
        <p className="cursor-pointer hover:text-white/70">Privacy Policy</p>
        <p className="cursor-pointer hover:text-white/70">Terms & Conditions</p>
        <p className="cursor-pointer hover:text-white/70">
          Refund & Cancellation Policy
        </p>
        <p className="cursor-pointer hover:text-white/70">Support</p>
      </div>
    </div>
  );
};

export default Footer;
