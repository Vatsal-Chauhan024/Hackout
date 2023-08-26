

import GridCard from '../components/GridCard'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer/Footer'
import useAuth from "../helpers/useAuth";
import PopupExample from '../components/Popup'

const Home = () => {
  useAuth();

  return (
    <>
    <PopupExample/>
      
    {/* <div >
      <Sidebar/>  
      <GridCard/>
      <Footer/>
    </div> */}
    </>
  )
}

export default Home
