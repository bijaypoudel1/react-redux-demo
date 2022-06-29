import { Roles } from "./action";

const initialData = {
  Roles: ["admin", "manager", "employe"],
  Role: "",
};
const rolesReducer = (state = initialData, action) => {
  if (action.type === Roles) {
    return {
      ...state,
      Role: action.payload,
    };
  }
  return state;
};

export default rolesReducer;
