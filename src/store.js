import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import transactionReducer from "./redux/Transaction/TransactionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    transaction: transactionReducer,
  },
});

export default store;
