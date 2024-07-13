import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/signupPage";
import LoginPage from "./Pages/loginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TransactionPage from "./Pages/transactionPage";
import PrivateRoutes from "./Components/privateRoutes";

function App() {
  return (
    <>
      <Routes>
        {/* parameter for route | path and element to display pass component */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/transactions"
          element={
            <PrivateRoutes>
              <TransactionPage />
            </PrivateRoutes>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
