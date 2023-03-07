import React, { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInUserAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../utils/firebase.utils";
import FormInput from "../components/form-input/form-input.component.";
import "./sign-in-form.styles.scss";
import Button from "../components/button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formData, setFormData] = useState(defaultFormFields);
  const { email, password } = formData;

  const handleSubmit = async (event) => {
    console.log("event", event);
    event.preventDefault();

    try {
      const response = await signInUserAuthWithEmailAndPassword(
        email,
        password
      );
      console.log("response", response);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email is already in use");
          break;
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("Incorrect username");
          break;
        default:
          console.log(error);
      }
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use");
      } else {
        console.log("error.message", error.message);
      }
    }
  };
  const googleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your Email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign Up</Button>
          <Button type="button" buttonType="google" onClick={googleSignIn}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
