import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';

import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password.");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post(
        API_PATHS.AUTH.LOGIN,
        { email, password },
        { withCredentials: true } // send cookie to backend
      );

      if (response.status === 200) {
        // Fetch user info after login to update context
        const userRes = await axiosInstance.get(API_PATHS.AUTH.CHECK_LOGIN, {
          withCredentials: true,
        });
        loginUser(userRes.data);
        navigate("/dashboard");   // redirect after context is set
      } else {
        setError(response.data?.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong! Please try again.");
      }
    }
  };


  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>


      <h3 className=" text-2xl font-bold text-black ">Welcome Back!!</h3>
      <p className="text-lg text-slate-700 mt-[5px] mb-6"> Please enter your details to Log In</p>
      <form action="" onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="@john@gmail.com"
          type="text"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />

        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

        <button type='submit' className='btn-primary'>LOGIN</button>
        <p className="text-[13px] text-slate-800 mt-3">Don't have an account ? {""}
          <button className="font-medium text-primary underline cursor-pointer" onClick={() => {
            setCurrentPage("signup")
          }}>
            Signup
          </button>
        </p>

      </form>

    </div>
  )
}

export default Login








