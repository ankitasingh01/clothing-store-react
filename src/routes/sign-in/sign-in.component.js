import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const googleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("userDocRef", userDocRef);
  };

  return (
    <div>
      <h1>Sign in with google</h1>
      <button onClick={googleSignIn}>Google sign in</button>
    </div>
  );
};

export default SignIn;
