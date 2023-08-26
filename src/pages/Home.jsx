

import GridCard from '../components/GridCard'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer/Footer'
import useAuth from "../helpers/useAuth";

const Home = () => {
  useAuth();

  return (
    <div>
      <Sidebar/>  
      <GridCard/>
      <Footer/>
    </div>
  )
}

export default Home
