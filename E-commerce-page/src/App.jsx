import { React, useState, useEffect  } from 'react';
import Nav from './components/Nav';
import {data} from "./data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import Lightbox from "./components/Lightbox";
import { useFigure } from './FigureContext';


const App = () => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const { figure, setFigure } = useFigure();

  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);

  const { mainImage } = products[value]; //understand more

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  const handleMinus = () => {
    amount <= 0 ? setAmount(0) : setAmount(amount - 1);
  };

  // const handleFigure = () => {
  //   setFigure(amount);
  //   if (amount !== 0) {
  //     alert(amount);
  //     setAmount(0);
  //   }
  // };

  const handleFigure = () => {
      setFigure(amount);
  };

  useEffect(() => {
    // Check if the component is mounting or updating
    if (amount !== 0) {
      setAmount(0);
    }
  }, [figure]);

  return (
      <div>
        <Nav />
        {showLightbox && (
          <Lightbox
            products={products}
            setSlideIndex={setSlideIndex}
            slideIndex={slideIndex}
            nextSlide={nextSlide}
            previousSlide={previousSlide}
            setShowLightbox={setShowLightbox}
          />
        )}

        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:place-items-center md:py-10">
          <article>
            <div className="md:hidden">
              {products.map((item, index) => (
                <div
                  key={index}
                  className={slideIndex === index + 1 ? "relative" : "hidden"}
                >
                  <img
                    src={item.mainImage}
                    alt=""
                    className="w-full h-auto md:rounded-2xl"
                  />

                  <ul className="md:hidden">
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

            <div className="hidden md:block">
              <img
                src={mainImage}
                alt=""
                className="w-96 md:rounded-2xl cursor-pointer"
                onClick={() => setShowLightbox(true)}
              />
            </div>

            <ul className="hidden md:flex items-center justify-center gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`border-2 rounded-2xl overflow-hidden cursor-pointer ${
                  index === value && !showLightbox && "border-orange-400 opacity-80"
                }`}
              >
                <img src={item.thumbnail} alt="" className="w-[70px]" />
              </li>
            ))}

            </ul>
          </article>

          <article className="px-8 pb-10">
            <h2 className="py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-3">
              Sneaker company
            </h2>
            <h1 className="text-slate-900 mb-5 font-bold text-3xl md:text-3xl">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-slate-600 mb-5 leading-relaxed">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand everything
              the weather can offer.
            </p>

            <div className="flex flex-wrap items-center justify-between md:flex-col md:items-start md:gap-2">
              <ul className="flex items-center gap-5">
                <li className="text-slate-900 font-bold text-2xl">$125.00</li>
                <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                  50%
                </li>
              </ul>

              <p className="text-slate-600 text-sm">
                <s>$250.00</s>
              </p>
            </div>

            <div className="mt-5 md:flex items-center justify-between gap-2">
              <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow md:flex-1">
                <li onClick={handleMinus} className="cursor-pointer">
                  <img src={minus} alt="" />
                </li>
                <li>{amount}</li>
                <li
                  onClick={() => setAmount(amount + 1)}
                  className="cursor-pointer"
                >
                  <img src={plus} alt="" />
                </li>
              </ul>

              <div className="md:flex-1">
                <button onClick={handleFigure} className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-md shadow mt-5 w-full md:mt-0 hover:bg-orange-600 transition-all duration-200">
                  <AiOutlineShoppingCart /> Add to cart
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>
  )
}

export default App