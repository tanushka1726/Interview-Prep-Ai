import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../../context/userContext";

import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from '../../utils/apiPaths';

const ProfileInfoCard = () => {
    
    const navigate = useNavigate();
    const {user, logoutUser } = useContext(UserContext);
    const handleLogout = async () => {
      try {
        await axiosInstance.post( API_PATHS.AUTH.LOGOUT, {}, { withCredentials: true });
        logoutUser(); // clear user context
        navigate("/"); // redirect to login
      } catch (err) {
        console.error("Logout failed", err);
      }
    };
  return (
   user && (

    <div className='flex items-center'>
      <img src={user.profileImageUrl} alt="" 
      className='w-11 h-11 bg-gray-300 rounded-full mr-3'
      />
      <div>
        <div className="text-[15px] text-black font-bold leading-3">
          {user.name || ""}
        </div>
        <button className='text-amber-600 text-sm font-semibold cursor-pointer hover:underline'
        onClick={handleLogout}
        
        >Log Out
        </button>
      </div>
    </div>
  ) 
 )
}

export default ProfileInfoCard
