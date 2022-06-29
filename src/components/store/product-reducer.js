import * as actions from "./action";

const initialData = {
  Products: [
    {
      pName: "apple",
      price: 200,
    },
    {
      pName: "orange",
      price: 400,
    },
    {
      pName: "banana",
      price: "100",
    },
    {
      pName: "mango",
      price: "500",
    },
    {
      pName: "pomigranate",
      price: "500",
    },
  ],

  Cart: [],
  Total: 0,
};
const ProductReducer = (state = initialData, action) => {
  if (action.type === actions.Pur) {
    return {
      ...state,
      Cart: [...state.Cart, action.payload],
      Total: [parseInt(state.Total) + parseInt(action.payload.price)],
    };
  }
  if (action.type === actions.Delete) {
    return {
      ...state,
      Cart: state.Cart.filter((val, index) => index !== action.payload.index),
      Total: state.Total - action.payload.price,
    };
  }

  return state;
};

export default ProductReducer;
