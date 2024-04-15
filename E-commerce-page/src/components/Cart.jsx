import React from "react";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";

export default function Cart() {
//   const text = "Autumn Limited Edition Sneakers";

  return (
    <>
      <article
        className="bg-white rounded-2xl shadow-2xl p-8 absolute lg:right-[20] top-32 left-8 w-96 lg:w-72 lg:left-auto lg:top-20"
        style={{
          zIndex: 1000,
        }}
      >
        <h2 className="border-b border-slate-400 font-bold pb-2 mb-8 lg:mb-5">Cart</h2>

        <div className="flex items-center justify-between">
          <img src={thumbnail} alt="" className="rounded-lg w-14 lg:w-10" />
          <ul>
            {/* <li className="text-slate-600 text-sm">{`${text.substring(
              0,
              23
            )}...`}</li> */}
            <li className="text-slate-600 text-sm lg:text-xs">Fall Limited Edition Sneakers</li>
            <li className="text-slate-600 text-sm">
              $125.00 x 3{" "}
              <span className="font-bold text-slate-900">$375.00</span>
            </li>
          </ul>

          <button>
            <img src={iconDelete} alt="" />
          </button>
        </div>

        <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
          Checkout
        </button>
      </article>
    </>
  );
}