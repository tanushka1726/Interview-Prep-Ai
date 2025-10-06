import React, { useContext, useEffect, useState } from 'react'
import toast from "react-hot-toast";
import { LuPlus } from "react-icons/lu";
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { CARD_BG } from '../../utils/data';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import SummaryCard from '../../components/Cards/SummaryCard';
import moment from "moment";
import CreateSessionForm from './CreateSessionForm';
import { UserContext } from '../../context/userContext';

const Dashboard = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate("/"); // redirect to login
    }
  }, [user, loading, navigate]);

  // Show loading while checking login
  if (loading) return <p>Loading...</p>;

  // Optional: show a message while redirecting
  if (!user) return <p>Redirecting to login...</p>;

  return (
    <DashboardLayout >
      <div className="container mx-auto pt-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0 ">
          <p className="text-black">Dashboard login</p>

          
        </div>


        <button className='h-12 md:h-12 flex items-center justify-center gap-3 bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white  transition-colors cursor-pointer hover:shadow-2xl hover:shadow-orange-300 fixed bottom-10 md:bottom-20 right-10 md:right-20'
          onClick={() => setOpenCreateModal(true)}>
          <LuPlus className='text-white text-2xl' />
          Add New
        </button>
      </div>

      {/* <Modal isOpen={openCreateModal}
     onClose={()=>{
      setOpenCreateModal(false)
     }}
     hideHeader
     >
      <div> 
        <CreateSessionForm/>
      </div>
     </Modal> */}

    </DashboardLayout>
  )
}

export default Dashboard;
