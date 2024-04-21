import { React, useState, useEffect  } from 'react';
import close from "../images/icon-close.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Lightbox({
  products,
  slideIndex,
  setSlideIndex,
  // nextSlide,
  // previousSlide,
  setShowLightbox,
}) {
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
      setValue((prevValue) => (prevValue === products.length - 1 ? 0 : prevValue + 1));
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
      setValue(0);
    }
  };
  
  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      setValue((prevValue) => (prevValue === 0 ? products.length - 1 : prevValue - 1));
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
      setValue(products.length - 1);
    }
  };
  

  return (
    <>
<div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"
style={{
  zIndex: 1000,
}}>
  <div className="relative">
    <button onClick={() => setShowLightbox(false)} className="absolute top-[-40px] right-2 text-orange-500 hover:text-orange-600  bg-transparent border-none cursor-pointer">
      <img src={close} alt="" />
    </button>
    {/* Include your code and do the logic */}
    
            <div className="hidden md:block">
              <img
                src={mainImage}
                alt=""
                className="w-96 md:rounded-2xl cursor-pointer"
              />
              <ul>
                    <li>
                      <button
                        onClick={previousSlide}
                        className="bg-white rounded-full p-4 shadow absolute -left-5 top-1/2 -translate-y-16 hover:text-orange-600"
                      >
                        <FaChevronLeft />
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={nextSlide}
                        className="bg-white rounded-full p-4 shadow absolute -right-5 top-1/2 -translate-y-16 hover:text-orange-600"
                      >
                        <FaChevronRight />
                      </button>
                    </li>
                  </ul>
            </div>

            <ul className="hidden md:flex items-center justify-center gap-5 flex-wrap mt-5">
              {products.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`${
                    index === value && "border-2 border-orange-400 bg-white bg-opacity-80 opacity-80"
                  } rounded-2xl overflow-hidden cursor-pointer`}
                >
                  <img src={item.thumbnail} alt="" className="w-[70px]" />
                </li>
              ))}
            </ul>
  </div>
</div>
    </>
  );
}







{/* className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50" */}
      {/* <article className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50">
        <button onClick={() => setShowLightbox(false)}>
          <img src={close} alt="" className="w-10 absolute top-10 right-10" />
        </button>

        <div className="flex items-center justify-center w-[30%] h-[40%] ">
          {products.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.mainImage}
                alt=""
                className="md:rounded-2xl"
              />

              <ul>
                <li>
                  <button
                    onClick={previousSlide}
                    className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronLeft />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nextSlide}
                    className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </article> */}