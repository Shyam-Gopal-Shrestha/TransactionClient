// file responsibel to call axios function and dispatch actions for updating states based on response
// use the action given by slice

import { toast } from "react-toastify";
import { loginUser } from "../axios/userAxios";
import { setIsAuthenticated, setUser } from "./userSlice";

// UI ----- [Action] ------ API ---- come back with Response ------ dispatch action

// Login action
export const loginUserAction = (userObject) => async (dispatch) => {
  // Call axios to make API request
  const result = await loginUser(userObject);

  // error
  if (result.status === "error") {
    return toast.error(result.message);
  }
  // Success
  dispatch(setIsAuthenticated(true));
  dispatch(setUser(result.data));
  toast.success(result.message);
};
