import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log("response", response);
  // }, []);

  const googleSignInWithRedirection = async () => {
    const { user } = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
