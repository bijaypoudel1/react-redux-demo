import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Roles } from "./store/action";

const Admin = () => {
  const Roles = useSelector((state) => state.lr.Roles);
  const dispatch = useDispatch();
  const handleAdmin = (e) => {
    let roles = e.target.value;
    console.log(roles);
    dispatch({ type: "admin", payload: roles });
  };
  return (
    <>
      <div className="w-96 border-2 m-10 p-10">
        <select
          className="border capitalize"
          onChange={(e) => handleAdmin(e)}
          name=""
          id=""
        >
          {Roles.map((roles, index) => {
            return <option key={index}>{roles}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default Admin;
