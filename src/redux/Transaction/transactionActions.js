import { toast } from "react-toastify";
import { createTransaction, getTransactions } from "../../axios/transactionAxios"
import { setTransaction } from "./TransactionSlice";

// create transaction
export const createTransactionAction = (transactionObj) => async(dispatch) {
    // call axios
    const result = await createTransaction(transactionObj)

    if (result.status === "error") {
        return toast.error(result.message);
      }

    //   call an axios to request api to fetch all transactions
    const transactionResult = await getTransactions(transactionObj.userID)
    
    if(transactionResult.status === 'error'){
      return toast.error(transactionResult.message)
    }

    toast.success("Transaction created")
    dispatch(setTransaction(transactionResult.data))
}