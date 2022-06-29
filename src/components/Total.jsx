import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => {
    return [state.pr.Total, state.lr.Role];
  });
  console.log(total[0]);

  return (
    <div className="m-10 sele w-96 p-10 border-2 ">
      <h1 className="font-bold text-lg">{total[1]}</h1>
      <h2>{total[0]}</h2>
    </div>
  );
};

export default Total;
