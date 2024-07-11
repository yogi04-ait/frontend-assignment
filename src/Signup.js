import React, { useState } from "react";
import { useRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { checkValidData } from "./utils/validate";
import { auth } from "./utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { trimFirebaseErrorMessage } from "./utils/trimmessage";
import { useGoogleLogin } from '@react-oauth/google';



const Signup = ({ setSign }) => {
    const [visibility, setVisibility] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const email = useRef();
    const password = useRef();
    const username = useRef();
    const [errorMsg, setErrorMsg] = useState(null);

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    const handleButtonClick = () => {
        // Validate the data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMsg(message);

        if (message) return;

        //Sign Up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                const trimmedMessage = trimFirebaseErrorMessage(errorMessage);
                setErrorMsg(trimmedMessage);
                // ..
            });

    }

    const handleChange = () => {
        setIsChecked(!isChecked); // Update checkbox state on change
    };
    return (
        <div className="p-4 border border-gray-500 min-w-44 w-[70vw] max-w-80 absolute bg-opacity-80 text-black mt-8 mx-auto flex flex-col gap-1  bg-white rounded-lg shadow-sm">
            <h1 className="text-3xl leading-10 font-semibold ">
                Create your new account
            </h1>
            <p className="text-gray-600 mb-3 text-sm font-normal">
                Create an account to start looking for the food you like
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col ">
                <div className="flex font-semibold text-sm flex-col rounded-md">
                    <label className="text-sm font-normal leading-5">Email Address</label>
                    <input
                        placeholder="Enter Email"
                        ref={email}
                        className=" text-sm font-normal leading-5 outline-none mt-1  text-black border border-gray-400 rounded-md p-2"
                    />
                </div>
                <div className="flex font-semibold text-sm flex-col rounded-md">
                    <label className="text-sm font-normal leading-5">User Name</label>
                    <input
                        placeholder="Enter Username"
                        ref={username}
                        className=" text-sm font-normal leading-5 outline-none mt-1  text-black border border-gray-400 rounded-md p-2"
                    />
                </div>
                <div className="flex flex-col text-sm">
                    <label className="text-sm font-normal leading-5">Password</label>
                    <input
                        placeholder="Password"
                        className="text-sm font-normal leading-5 text-black mt-1 relative  outline-none border border-gray-400 rounded-md p-2"
                        ref={password}
                        type={visibility ? "text" : "password"}
                    />
                    <div
                        className="absolute  right-[25px] flex top-[318px] items-center cursor-pointer"
                        onClick={() => setVisibility(!visibility)}
                    >
                        {visibility ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                </div>
                <p className="text-red-500 font-bold text-xs">{errorMsg}</p>
                <div className="mt-2">
                    <div className="flex items-center ">
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            className="mr-2 self-start custom-checkbox accent-[#FE8C00] h-5 w-5 font-thin"
                            checked={isChecked}
                            onChange={handleChange}
                        />
                        <label htmlFor="agree" className="text-sm cursor-pointer">
                            I Agree with
                            <span className="text-customOrange"> Terms of Service </span>
                            and
                            <span className="text-customOrange"> Privacy Policy </span>
                        </label>
                    </div>
                </div>

                <div>
                    <button onClick={handleButtonClick}
                        className={`bg-customOrange w-full rounded-3xl p-2 mt-3 text-white  ${isChecked ? '' : 'cursor-not-allowed'
                            }`}
                        disabled={!isChecked}

                    >
                        Register
                    </button>

                </div>
                <div className="flex align-middle mt-3">
                    <div className="w-[13vh] font-thin bg-gray-400 h-[0.1px] self-center mr-[8px]"></div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">Or sign in with</span>
                    <div className="w-[13vh] font-thin bg-gray-400 h-[0.1px] self-center ml-[8px]"></div>
                </div>
                <div className="flex justify-center align-middle m-2">
                    <button onClick={login}><img width="30px" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" /></button>
                </div>

                <div className="mt-2 flex justify-center">
                    <p className="font-medium text-sm ">
                        Have an account?{" "}
                        <span className="text-customOrange cursor-pointer" onClick={setSign}>Sign In</span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
