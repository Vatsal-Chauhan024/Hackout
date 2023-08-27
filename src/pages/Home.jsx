import React, {useState, useEffect} from 'react'
import GridCard from '../components/GridCard'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer/Footer'
import api from "../api/api"
import useAuth from '../helper/useAuth'

const Home = () => {
  // useAuth();
  const [showAlert, setShowAlert] = useState(true);

 
  const handleDeny = () => {
    setShowAlert(false); 
  };
  const handleReset = () => {
    setShowAlert(false); 
    
    api.post('/register/resend_verification_link',{Email_Id:sessionStorage.getItem('Email_Id')})
      .then(response => {
        if (response.status !== 200) {
          setShowAlert(true); 
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    const popupTimer = setInterval(() => {
      setShowAlert(true); 
    }, 120000);

    return () => {
      clearInterval(popupTimer);
    };
  }, []);




  return (



    <>
     {showAlert && (
        <center>
          <div className='flex justify-center w-auto my-2 z-50'>
            <div className='alert w-auto flex justify-center backdrop-blur-xl bg-black'>
              <span className='text-white text-lg'>
                Please Verify with your Registered Email address.
              </span>
              <div className='flex gap-4'>
                <button
                  className='btn btn-sm btn-primary'
                  onClick={handleDeny}
                >
                  Deny
                </button>

                <button
                  className='btn btn-sm btn-primary bg-orange-600'
                  onClick={handleReset}
                >
                  Resend-Link
                </button>
              </div>
            </div>
          </div>
        </center>
      )}

      <Sidebar/>  
      <GridCard/>
      <Footer/>
    </>
  )
}

export default Home
