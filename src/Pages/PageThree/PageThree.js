import React from "react";

const PageThree = () => {
  return (
    <div className="lg:mb-72 mb-[1400px] ">
      <div className="lg:h-[512px] w-full h-[800] mx-auto">
        <h1 className="text-center text-[36px] font-medium">Special Offer</h1>
        <p className="text-center mt-5">
          Unlock exclusive offers for you and discover amazing savings on a
          variety of products Don’t miss out on fantastic opportunities, start
          exploring now!
        </p>
        <div className="container mx-auto mt-10 h-[600px]">
          <div class="grid lg:grid-cols-4 gap-4 justify-center">
            <div className="w-[300px] h-[400px] justify-center lg:mb-0 mb-10">
              <div
                className="lg:w-[300px] h-[300px] flex justify-center items-center relative"
                style={{
                  background:
                    "linear-gradient(136deg, #F3F3F3 -7.84%, #C6C6C6 120.25%)",
                }}
              >
                <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-md">
                  30%
                </span>
                <img src="/images/laptop.png" alt="Laptop" />
              </div>

              <p className="text-[18px] mt-5">MacBook Air M1</p>
              <p className="text-[14px] mt-3">
                {" "}
                <del>IDR 9.699.000</del> IDR 9.899.000
              </p>
              <button className="bg-black text-white py-3 px-4 mt-3">
                Add to Cart
              </button>
            </div>
            <div className="lg:w-[300px] h-[400px] lg:mb-0 mb-10">
              <div
                className="lg:w-[300px] h-[300px] flex justify-center items-center relative"
                style={{
                  background:
                    "linear-gradient(136deg, #F3F3F3 -7.84%, #C6C6C6 120.25%)",
                }}
              >
                <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-md">
                  40%
                </span>
                <img src="/images/wr3.png" />
              </div>
              <p className="text-[18px] mt-5">Sony TWS Earphone</p>
              <p className="text-[14px] mt-3">
                {" "}
                <del>IDR 9.699.000</del> IDR 599.000
              </p>
              <button className="bg-black text-white py-3 px-4 mt-3">
                Add to Cart
              </button>
            </div>
            <div className="w-[300px] h-[400px] lg:mb-0 mb-10">
              <div
                className="w-[300px] h-[300px] flex justify-center items-center relative"
                style={{
                  background:
                    "linear-gradient(136deg, #F3F3F3 -7.84%, #C6C6C6 120.25%)",
                }}
              >
                 <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-md">
                  15%
                </span>
                <img src="/images/hp2.png" />
              </div>
              <p className="text-[18px] mt-5">Xiaomi POCO F3 Pro</p>
              <p className="text-[14px] mt-3">
                {" "}
                <del>IDR 9.699.000</del> IDR 6.399.000
              </p>
              <button className="bg-black text-white py-3 px-4 mt-3">
                Add to Cart
              </button>
            </div>
            <div className="w-[300px] h-[400px] lg:mb-0 mb-10">
              <div
                className="w-[300px] h-[300px] flex justify-center items-center relative"
                style={{
                  background:
                    "linear-gradient(136deg, #F3F3F3 -7.84%, #C6C6C6 120.25%)",
                }}
              >
                 <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-md">
                  10%
                </span>
                <img src="images/tablet.png" />
              </div>
              <p className="text-[18px] mt-5">Apple Tablet</p>
              <p className="text-[14px] mt-3">
                {" "}
                <del>IDR 9.699.000</del> IDR 8.799.000
              </p>
              <button className="bg-black text-white py-3 px-4 mt-3">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:mt-24 mt-10">
            <button className="border-2 solid border-black py-2 px-4">
              Expand
            </button>
            <div className="mt-3 mb-5">
              <img
                src="/images/arrow.png"
                alt="Arrow"
                className="arrow-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
