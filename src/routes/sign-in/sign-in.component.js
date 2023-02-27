import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log("response", response);
  // }, []);

  const googleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("userDocRef", userDocRef);
  };

  const googleSignInWithRedirection = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log("user", user);
    const userDocRef = await createUserDocumentFromAuth(user);

    console.log("user", userDocRef);
  };

  return (
    <div>
      <h1>Sign in with google</h1>
      <button onClick={googleSignIn}>Google sign in</button>
      {/* <button onClick={signInWithGoogleRedirect}>Google sign in</button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
