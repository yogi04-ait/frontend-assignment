import React, { useState } from "react";
import { useRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Login = ({ setSign }) => {
  const [visibility, setVisibility] = useState(true);
  const email = useRef();
  const password = useRef();
  return (
    <div className="  p-4 border border-gray-500 min-w-44 w-[70vw] max-w-80 absolute bg-opacity-80 text-black mt-10 mx-auto flex flex-col gap-1  bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl leading-10 font-semibold ">
        Login to your account
      </h1>
      <p className="text-gray-600 mb-3 text-sm font-normal">
        Please sign in to your account
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
        <div className="flex flex-col text-sm">
          <label className="text-sm font-normal leading-5">Password</label>
          <input
            placeholder="Password"
            className="text-sm font-normal leading-5 text-black mt-1 relative  outline-none border border-gray-400 rounded-md p-2"
            ref={password}
            type={visibility ? "text" : "password"}
          />
          <div
            className="absolute  right-6 flex top-[236px] items-center cursor-pointer"
            onClick={() => setVisibility(!visibility)}
          >
            {visibility ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>
        <div className="self-end">
          <p className="text-customOrange  text-sm cursor-pointer">
            Forgot password?
          </p>
        </div>

        <div>
          <button className="bg-customOrange w-full rounded-3xl p-2 mt-3 text-white">
            Sign In
          </button>
        </div>
        <div className="flex align-middle mt-3">
          <div className="w-[13vh] font-thin bg-gray-400 h-[0.1px] self-center mr-[8px]"></div>
          <span className="text-gray-600 text-sm">Or sign in with</span>
          <div className="w-[13vh] font-thin bg-gray-400 h-[0.1px] self-center ml-[8px]"></div>
        </div>
        <div className="flex justify-center align-middle m-2">
          <img
            width="60px"
            height="90px"
            className="rounded-full overflow-hidden "
            src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <p className="font-medium text-sm ">
            Don't have an account?{" "}
            <span className="text-customOrange cursor-pointer" onClick={setSign} >Register</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
