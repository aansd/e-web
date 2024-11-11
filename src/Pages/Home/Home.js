import React from "react";

const Home = () => {
  return (
    <div className="pb-10 mt-24 ">
      <div className="container mx-auto">
        <div className="pt-10">
          <div class="grid grid-rows-2 sm:grid-flow-col-1 lg:grid-flow-col gap-4">
            <div class="row-span-3 h-[512px] lg:w-[800px] lg:mx-0 md:mx-0 mx-3 flex flex-row border-black border-2 bg-slate-100">
            <div class="flex flex-col lg:mt-32 mt-36 ml-10 ">
                <h1 class="lg:text-[36px] font-medium">
                  Purchase Limitless <br /> Game Console
                </h1>
                <p class="lg:text-[18px] text-[14px] font-normal mt-3">
                  Explore your game experience to be more realistic <br />
                  with All Brand New PlayStation 5
                </p>
                <button class="border-black border-2 w-[100px] mt-3">
                  Shop Now
                </button>
              </div>
              <div class="flex justify-center items-center">
                <img src="/images/ps.png" class=" lg:w-[256px] lg:h-[341px] " />
              </div>
            </div>
            <div
              class="col-span-1 lg:w-[465px] h-[248px] lg:mx-0 md:mx-0 mx-3 border-black border-2 flex flex-col items-center justify-center"
              style={{
                background:
                  "linear-gradient(106deg, #555 -63.25%, #E3E3E3 108.48%)",
              }}
            >
              <img src="/images/stick-ps.png" class="lg:w-[145px] lg:h-[105px]" />
              <p class="lg:text-[18px] text-center lg:mt-3">
                Sony DualSense Wireless Controller
              </p>
              <button class="border-black border-2 w-[100px] lg:text-[18px]  mt-3 bg-black text-white">
                Buy Now
              </button>
            </div>

            <div class="col-span-1 lg:w-[465px] lg:mx-0 md:mx-0 mx-3 h-[248px] border-black border-2 flex flex-col items-center justify-center" style={{
                background:
                  "linear-gradient(106deg, #555 -63.25%, #E3E3E3 108.48%)",
              }}>
                <img src="/images/vr2.png" class="w-[145px] h-[105px]" />
              <p class="text-[18px] text-center mt-3">
                Sony DualSense Wireless Controller
              </p>
              <button class="border-black border-2 w-[100px] mt-3 bg-black text-white">
                Buy Now
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
