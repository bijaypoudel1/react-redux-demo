import React from "react";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Purshase from "./components/Purchase";
import Total from "./components/Total";

const App = () => {
  return (
    <>
      <div className="flex justify-between">
        <Admin />
        <Purshase />
        <Cart />
        <Total />
      </div>
    </>
  );
};

export default App;
