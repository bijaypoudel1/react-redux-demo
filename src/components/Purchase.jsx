import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/action";

const Purshase = () => {
  const Product = useSelector((state) => state.pr.Products);
  const dispatch = useDispatch();

  const handleEvent = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let obj = { pName, price };

    dispatch({ type: actions.Pur, payload: obj });
  };
  return (
    <>
      <div className="w-96 border-2 m-10 p-10">
        <select
          className="border capitalize"
          onChange={(e) => handleEvent(e)}
          name=""
          id=""
        >
          {Product.map((value, index) => {
            return (
              <option value={value.price} key={index}>
                {value.pName}: {value.price}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Purshase;
