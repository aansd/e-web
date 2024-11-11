import React from 'react'
import './PageOne.css'
const pageOne = () => {
  return (
    <div>
      <div className="lg:h-[512px] w-full h-[800] mx-auto">
      <h1 className="text-center text-[36px] font-medium">New Coming</h1>
      <p className="text-center mt-5">
        Explore our latest arrivals and discover the newest products <br />
        Stay ahead with fresh picks and trendy additions, find your next
        favorite here!
      </p>
      <div className="container mx-auto mt-10 h-[600px]">
        <div class="grid lg:grid-cols-4 gap-4 justify-center">
          <div className="w-[300px] h-[400px] justify-center lg:mb-0 mb-10">
            <div
              className="lg:w-[300px] h-[300px] flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(136deg, #F3F3F3 -7.84%, #C6C6C6 120.25%)",
              }}
            >
              <img src="/images/headset.png" />
            </div>
            <p className="text-[18px] mt-5">Sony Headphone</p>
            <p className="text-[14px] mt-3">IDR 499.000</p>
            <button className="bg-black text-white py-3 px-4 mt-3">
              Add to Cart
            </button>
          </div>
          <div className="lg:w-[300px] h-[400px] lg:mb-0 mb-10" >
            <div
              className="lg:w-[300px] h-[300px] flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(136deg, #F3F3F3 -7.84%, #C6C6C6 120.25%)",
              }}
            >
              <img src="/images/heatphone.png" />
            </div>
            <p className="text-[18px] mt-5">Sony Headphone</p>
            <p className="text-[14px] mt-3">IDR 499.000</p>
            <button className="bg-black text-white py-3 px-4 mt-3">
              Add to Cart
            </button>
          </div>
          <div className="w-[300px] h-[400px] lg:mb-0 mb-10">
            <div
              className="w-[300px] h-[300px] flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(136deg, #F3F3F3 -7.84%, #C6C6C6 120.25%)",
              }}
            >
              <img src="/images/watch.png" />
            </div>
            <p className="text-[18px] mt-5">Sony Headphone</p>
            <p className="text-[14px] mt-3">IDR 499.000</p>
            <button className="bg-black text-white py-3 px-4 mt-3">
              Add to Cart
            </button>
          </div>
          <div className="w-[300px] h-[400px] lg:mb-0 mb-10">
            <div
              className="w-[300px] h-[300px] flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(136deg, #F3F3F3 -7.84%, #C6C6C6 120.25%)",
              }}
            >
              <img src="images/vr.png" />
            </div>
            <p className="text-[18px] mt-5">Sony Headphone</p>
            <p className="text-[14px] mt-3">IDR 499.000</p>
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
    <img src="/images/arrow.png" alt="Arrow" className="arrow-animation"/>
  </div>
</div>
      </div>
    </div>
    </div>
  )
}

export default pageOne
