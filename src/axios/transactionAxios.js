import axios from "axios";
import transactionReducer from "../redux/Transaction/TransactionSlice";

// server url
const API_BASE_URL = "http://localhost:8000";
const transactionEndpoint = "/api/transaction";

const API_URL = API_BASE_URL + transactionEndpoint;

// Signup | user registration | create | post
export const createTransaction = (transactionObj) => {
  const response = axios
    .post(API_URL, transactionObj, {
      headers: {
        authorization: transactionObj.userID,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// get all transactions | GET
export const getTransactions = (userID) => {
  const response = axios
    .get(API_URL, {
      headers: {
        authorization: transactionObj.userID,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};
