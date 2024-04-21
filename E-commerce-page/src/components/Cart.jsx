import { React, useState} from "react";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";
// import { useCart } from "../CartContext";
import { useFigure } from '../FigureContext';


export default function Cart() {
//   const text = "Autumn Limited Edition Sneakers";
    // const { figure } = useCart();
    // const [figure, setFigure] = useState(0);
    const { figure, setFigure } = useFigure();

  return (
    <>
      <article
        className="bg-white rounded-2xl shadow-2xl p-4 absolute md:-right-16  top-16 -left-[273px] ml-5 w-[340px] md:w-72 md:left-auto md:top-12"
        style={{
          zIndex: 1000,
        }}
      >
        <h2 className="border-b border-slate-400 font-bold pb-5 mb-12 md:mb-5">Cart</h2>

        { figure <= 0 ? <div className="h-48 text-center p-10 md:h-32 md:w-60" >Your cart is empty</div> : <div className="h-48 md:h-32">
        <div className="flex items-center justify-between">
          <img src={thumbnail} alt="" className="rounded-md w-14 md:w-10" />
          <ul>
            {/* <li className="text-slate-600 text-sm">{`${text.substring(
              0,
              23
            )}...`}</li> */}
            <li className="text-slate-600 text-sm md:text-xs">Fall Limited Edition Sneakers</li>
            <li className="text-slate-600 text-sm">
              $125.00 x {figure}{" "}
              <span className="font-bold text-slate-900">${125.00 * figure}</span>
            </li>
          </ul>

          <button onClick={() => setFigure(0)}>
            <img src={iconDelete} alt=""/>
          </button>
        </div>

        <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-md shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
          Checkout
        </button>
        </div> }
      </article>
    </>
  );
}