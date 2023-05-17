import React, { useState, useContext } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase.utils";
import FormInput from "../components/form-input/form-input.component.";
import "./sign-up-form.styles.scss";
import Button from "../components/button/button.component";
import { UserContext } from "../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formData;

  const resetFormFields = () => {
    setFormData(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    console.log("event", event);
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    if (password === confirmPassword) {
      try {
        const { user } = await createUserAuthWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
        console.log("user", user);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Email is already in use");
        } else {
          console.log("error.message", error.message);
        }
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your Email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          value={displayName}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
        />

        <FormInput
          label="Email"
          value={email}
          type="email"
          required
          onChange={handleChange}
          name="email"
        />

        <FormInput
          label="Password"
          value={password}
          type="password"
          required
          onChange={handleChange}
          name="password"
        />
        <FormInput
          label="Confirm Password"
          value={confirmPassword}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
        />

        <Button buttonType="google" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
