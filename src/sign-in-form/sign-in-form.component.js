import React, { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInUserAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../utils/firebase.utils";
import FormInput from "../components/form-input/form-input.component.";
import Button from "../components/button/button.component";
import { UserContext } from "../contexts/user.context";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState(defaultFormFields);
  const { email, password } = formData;

  const handleSubmit = async (event) => {
    console.log("event", event);
    event.preventDefault();

    try {
      const { user } = await signInUserAuthWithEmailAndPassword(
        email,
        password
      );
      console.log("response", user);
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
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={googleSignIn}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
