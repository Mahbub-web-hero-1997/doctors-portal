import 'react-day-picker/dist/style.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Sheard/Navbar';
import Appointment from './Components/Appointment/Appointment';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="App container mx-auto">   
    <Navbar></Navbar>  
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='appointment' element={<Appointment></Appointment>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
