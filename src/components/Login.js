import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);




  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage)
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage)
        });
    }
  };

  return (
    <div className=" bg-[#18181b] w-full aspect-video absolute">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto w-5/12 text-white rounded-lg flex flex-col bg-black my-24 py-14 right-0 left-0"
      >
        <h1 className="mx-auto  text-4xl font-bold my-4">
          {isSignInForm
            ? "Login In To SuboFy"
            : "Sign up for free to start listening."}
        </h1>

        <input
          className="p-4 m-4 w-1/2 mx-auto rounded-xl bg-gray-900"
          type="text"
          placeholder="Email Address or Username"
          ref={email}
        />
        <input
          className="p-4 m-4 w-1/2 mx-auto rounded-xl bg-gray-900"
          type="password"
          placeholder="Password"
          ref={password}
        />

        {!isSignInForm && (
          <input
            className="p-4 m-4 w-1/2 mx-auto rounded-xl bg-gray-900"
            type="text"
            placeholder="What Should We Call You"
            ref={name}
          />
        )}

        <p className="text-red-600 font-bold mx-auto">{errorMessage}</p>

        <button
          className="p-4 m-4 bg-green-500 w-1/2 mx-auto rounded-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <hr className="w-3/4 mx-auto m-3" />

        <p className="mx-auto cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Don't have an account? Sign up for SuboFy"
            : "Have an account? Log in."}
        </p>
      </form>
    </div>
  );
};

export default Login;
