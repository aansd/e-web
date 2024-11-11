import React, { useState } from "react";

const AppNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [show, setShow] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  return (
    <div>
      <div className="min-h-[24px] bg-black">
        <p
          className="text-white lg:text-[16px] text-[11px] text-center py-4"
        >
          Free Delivery on orders over IDR 100,000. Don’t miss it!
        </p>
      </div>
      <div className="navbar fixed w-full transition-all py-4 absolute">
        <div className="container mx-auto px-4">
          <div className="navbar-box flex items-center justify-between">
            <div className="flex items-center gap-10">
              <div className="logo w-10">
                <img src="/images/nav-logo.png" alt="Logo"/>
              </div>
              <div className="border-2 border-black h-10 mx-3"></div>
              <ul className={`flex lg:gap-10 md:w-auto md:static md:h-full md:translate-y-0 md:transition-none md:p-0 md:m-0 md:flex-row
                 md:shadow-none gap-2 fixed ${menuActive} top-1/4 -translate-y-1/4 flex-col px-8 py-6 rounded shadow-xl shadow-slate-950 transition-all`}
                 >
                {["Categories", "Shop", "Pages", "Blog"].map((item, index) => (
                  <li key={item} className="relative flex items-center">
                    <a href="#" onClick={() => toggleDropdown(index)}>{item}</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-4 h-4 ml-1 transition-transform ${openDropdown === index ? "rotate-180" : ""}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 14.5l-5-5h10l-5 5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {openDropdown === index && (
                     <div className="absolute flex flex-col bg-white shadow-lg p-2 w-40 text-black right-0 top-full  lg:right-auto lg:left-0 left-[100px]">
                        <a href="#" className="py-1 px-4 hover:bg-gray-200">
                          {item} 1
                        </a>
                        <a href="#" className="py-1 px-4 hover:bg-gray-200">
                          {item} 2
                        </a>
                        <a href="#" className="py-1 px-4 hover:bg-gray-200">
                          {item} 3
                        </a>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <div className="social flex gap-3">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </a>
              </div>
              <input
  type="search"
  placeholder="Search..."
  className="border border-black p-2 lg:pe-16 pe-0 w-full sm:w-auto"
/>
              <div>
                <li className="list-none md:hidden block hover:bg-white cursor-pointer"
                    onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
