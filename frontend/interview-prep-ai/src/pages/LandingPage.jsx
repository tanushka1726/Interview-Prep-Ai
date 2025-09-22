import {React , useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {APP_FEATURES} from "../utils/data";
import HERO_IMG from "../assets/ai.png"
import {LuSparkles} from "react-icons/lu";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';
import { UserContext } from '../context/userContext';

const LandingPage = () => {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModal,setOpenAuthModal] = useState(false);
  const [currentPage , setCurrentPage] = useState("login");
  const handleCTA = () =>{
    if(!user){
      setOpenAuthModal(true);
    }else{
      navigate("/dashboard");
    }
  }

  return (
   <>
   <div className="w-full min-h-full bg-[#FFFCEF]">
    <div className=" bg-amber-200/20 top-0 left-0 h-[2rems] w-[5rems] absolute">
     <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">

<header className="flex justify-between items-center mb-16">
            <div className="text-xl text-black font-bold">
              Interview Prep AI
            </div>
            {user ? (
              <ProfileInfoCard/>
            ) :(
              <button className="bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
             onClick={()=> setOpenAuthModal(true)}>
              Login/Signup</button>
            )}
            
          </header>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                  <div className="flex items-center gap-2 text[13px] text-amber-600 font-semibold bg-amber-100 px-5 border py-2.5 rounded-full hover:bg-black hover:text-white">
                   <LuSparkles/>AI powered
                  </div>
              </div>
              <h1 className="text-5xl text-black font-medium mb-6 leading-tight">Ace interview with <br />
               <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold"> 
                AI-powered
                </span> {""} 
                learning</h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">Get Role Specific questions,expand answers when you need them,dive deeper into the concepts ,and organize everything your way,Frm rearartion to mastery- your ultimate interview toolkit is here </p>
              <button className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer" onClick={handleCTA}>Get Started</button>
            </div>
          </div>
  
         <div className="w-full min-h-full relative z-10 mb-16">
      
    </div>

     </div>
    </div>
   </div>

<div>
        <section className="flex items-center justify-center mt-[28rem] sm:mt-[32rem]">
          <img src={HERO_IMG} alt="Hero image" className='w-[80vw] rounded-lg border ' />
        </section>
      </div>

       <div className="w-full min-h-full bg-[#FFFCEF]">
      <div className="container mx-auto px-4 pt-10 pb-20 ">
        <section className='mt-5'>
          <h2 className="text-4xl font-medium text-center mb-12">
            Features that make you shine
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="gird grid-cols-1 md:grid-cols-3 gap-8 w-full">{APP_FEATURES.slice(0,3).map((feature)=>(
            <div className="bg-[#FFFEF8] p-6 rounded-xl mb-5 shadow-xs hover:shadow-lg shadow-amber-100 transition boder border-amber-100 " key={feature.id}>
              <h3 className="text-base font-semibold mb-3 ">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
            ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {APP_FEATURES.slice(3).map((feature)=>(
                <div className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100" key={feature}>
                  <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>
    </div>

     <div className="text-secondary text-sm bg-gray-50 text-center p-5 mt-5">Made with heart... Happy coding</div>

  <Modal 
    isOpen = {openAuthModal}
    onClose = {()=>{
      setOpenAuthModal(false);
      setCurrentPage("login")
    }}
    hideHeader
    >
      <div className="">
        {currentPage === "login" && (
          <Login setCurrentPage = {setCurrentPage}/>
        )}
        {currentPage === "signup" && (
          <Signup setCurrentPage = {setCurrentPage} />
        )}


      </div>
    </Modal>
   </>
  )
}

export default LandingPage

