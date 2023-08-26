import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from './pages/Register'
import CurrentAppointment from './pages/CurrentAppointment';
import BookAppointment from './pages/BookAppointment';
import Records from './pages/Records';
import Contactus from './pages/Contactus';


function App() {
  

  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path="/login" element = {<Login/>}/>
              <Route path='/register' element = {<Register/>}/>
              <Route path='/pages/CurrentAppointment' element = {<CurrentAppointment/>}/>
              <Route path='/pages/BookAppointment' element = {<BookAppointment/>}/>
              <Route path='/pages/Records' element = {<Records/>}/>
              <Route path='/pages/Contactus' element = {<Contactus/>}/>

            </Routes>
          </BrowserRouter>
    </div>
  );
}


export default App