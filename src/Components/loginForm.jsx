import { Button, Form } from "react-bootstrap";

import { useState } from "react";
import { loginUser } from "../axios/userAxios";
import { toast } from "react-toastify";
import CustomInput from "./customInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../redux/userActions";
const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const LoginForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { email, password } = formData;

  // Handle on Change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Navigating
  const navigate = useNavigate();

  // dispatch
  const dispatch = useDispatch();

  // Form Submit
  const handleOnSumbit = async (e) => {
    e.preventDefault();

    dispatch(loginUserAction(formData));
  };

  // logic for redirecting after login
  const { isAuthenticated } = useSelector((state) => state.user);

  if (isAuthenticated) {
    navigate("/transactions");
  }

  return (
    <Form onSubmit={handleOnSumbit}>
      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          placeholder: "Enter your Email",
          value: email,
          required: true,
        }}
      />
      <CustomInput
        label="Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "password",
          placeholder: "Enter your Password",
          value: password,
          required: true,
        }}
      />
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};
export default LoginForm;
