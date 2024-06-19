const Footer = () => {
  return (
    <div className="container max-w-screen-xl py-3 bg-black px-6 z-20">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-16 h-10" src="/public/images/logo1.png" alt="" />
          <div className="border h-9 border-white mx-3 ml-12"></div>
          <p className="text-white text-center">
            {" "}
            &copy; {new Date().getFullYear()} GOG. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 items-center ">
          <button className=" bg-white shadow hover:underline border-white border-[1px] px-6 py-2 rounded-xl text-black hover:bg-transparent hover:text-white transition-colors">
            Privacy Policy
          </button>
          <button className="text-black hover:underline bg-orange rounded-xl px-6 py-2 hover:bg-orange/80">
            Help & Support
          </button>
          <button className=" border hover:underline text-black bg-grayishBlue rounded-xl px-6 py-2 hover:bg-grayishBlue/80">
            Terms & Condition
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
