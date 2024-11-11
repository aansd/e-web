import React from "react";

const PageTwo = () => {
  return (
    <div className="page-two lg:mt-80 mt-[1400px] lg:mb-24 mb-[100px]">
      <div className="h-[526px] bg-[#EFEFEF] flex flex-col lg:flex-row items-center justify-between px-10 lg:py-0 py-5">
        
        {/* Left Content (Text) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="lg:text-[36px] text-[24px] font-semibold">
            New Generation <br />
            Smartphone with AI
          </h1>
          <p className="mt-5 lg:text-lg text-[14px]">
            Samsung Galaxy S24 Ultra is a powerful smartphone which is equipped{" "}
            <br />
            with AI that makes things easier. Stay tuned for official announcements{" "}
            <br />
            and reviews for more details.
          </p>
          <button className="bg-black text-white lg:py-3 py-1 px-2 lg:px-4 mt-5 lg:text-[18px] text-[12px]">Book Now</button>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:mt-5 mt-0">
          <img
            src="/images/hp.png"
            alt="Smartphone"
            className=" lg:w-[433px] lg:h-[429px] h-[200px] w-[200px] "
          />
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
