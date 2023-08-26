import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from './pages/Register'
import CurrentAppointment from './pages/CurrentAppointment';
import BookAppointment from './pages/BookAppointment';
import Records from './pages/Records';
import Contactus from './pages/Contactus';
import AddUsers from './components/HospitalComponent/AddUsers';
import AppNotifications from './pages/AppNotifications';
import HospitalHistory from './pages/HospitalHistory';
import OCR from './pages/OCR';


function App() {
  

  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element = {<Register/>}/>
              <Route path="/login" element = {<Login/>}/>
              <Route path = "/home" element = {<Home/>}/>
              <Route path='/currentappointment' element = {<CurrentAppointment/>}/>
              <Route path='/bookappointment' element = {<BookAppointment/>}/>
              <Route path='/records' element = {<Records/>}/>
              <Route path='/contactus' element = {<Contactus/>}/>
              <Route path='/addusers' element = {<AddUsers/>}/>
              <Route path='/notifications' element  =  {<AppNotifications/>}/>
              <Route path='hospitalhistory' element = {<HospitalHistory/>}/>
              <Route path='/ocr' element = {<OCR/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
}


export default App