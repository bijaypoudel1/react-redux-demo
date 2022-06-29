import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/action";

import React from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.pr.Cart);
  const dispatch = useDispatch();
  const deleteHaldler = (index, price) => {
    dispatch({ type: actions.Delete, payload: { index, price } });
  };
  // console.log(cartItems);
  return (
    <>
      <div className="w-96 border-2 p-10 m-10">
        <div className="">
          {cartItems.map((value, index) => {
            return (
              <div key={index} className="flex gap-2 items-center">
                <li>{value.pName} </li>
                <div>
                  <svg
                    onClick={() => deleteHaldler(index, value.price)}
                    className="h-5 w-5 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="red"
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                    />
                    <path
                      fill="red"
                      fillOpacity=".15"
                      d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2c0 4.5-3.6 8-8 8l-66-.3l-99.3-118.4l-99.3 118.5l-66.1.3c-4.4 0-8-3.6-8-8c0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 0 1-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3l99.3 118.4l99.4-118.5l66-.3c4.4 0 8 3.6 8 8c0 1.9-.6 3.8-1.8 5.2l-130.1 155l129.9 154.9z"
                    />
                    <path
                      fill="red"
                      d="M685.8 352c0-4.4-3.6-8-8-8l-66 .3l-99.4 118.5l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155l-130.1 154.9a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3l99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
