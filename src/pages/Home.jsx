import React, {useState, useEffect} from 'react'
import GridCard from '../components/GridCard'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer/Footer'
import api from "../api/api"
import useAuth from '../helper/useAuth'

const Home = () => {
  useAuth();
  const [showAlert, setShowAlert] = useState(true);

 
  const handleDeny = () => {
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
    }, 5000);

    return () => {
      clearInterval(popupTimer);
    };
  }, []);




  return (



    <>
     {showAlert && (
        <center>
          <div className='absolute w-full top-1 z-50'>
            <div className='alert w-96 flex justify-around bg-gray-800'>
              <span className='text-white text-xs'>
                Please Verify with your Register Email.
              </span>
              <div className='flex gap-4'>
                <button
                  className='btn btn-sm btn-primary'
                  onClick={handleDeny}
                >
                  Deny
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
