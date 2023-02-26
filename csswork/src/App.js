import './App.css';
import Navbar from './Newcomp/Navbar';
//import Home from  './Newcomp/Home'

//import Form  from './Components/Form';

import Mulform from './Components/Mulform';

import W1 from './Components/W1'

import Register  from './Pages/Register';
import Login  from './Pages/Login'
import Home from './Pages/Home'
import Profile from './Pages/Profile';

import Form from './Pages/Form'

import Footer from './Pages/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forget from './Pages/Forget';
import Change from './Pages/Change';

function App() {


  return (


    <div className="App">


     
<BrowserRouter>

      <Routes>


           <Route path="/" element={<Register />}>  </Route>

           <Route path='/profile' element={<Profile />}> </Route>
    
    
           <Route path='/login' element={<Login />}> </Route>
    
           <Route path='/home' element={<Home />} > </Route>

           <Route path='/w1' element={<W1 />} > </Route>
    
           <Route path='/form' element={<Form/>} > </Route>


           <Route path='/forgot' element={<Forget/>} > </Route>

           
           <Route path='/changepass' element={<Change/>} > </Route>

    
    
         </Routes>


       <Footer/>

    </BrowserRouter>



















            {/* <W1/>
        */}

      {/* <Mulform/>
          */}
{/* 
          <Boxwork/> */}


    </div>
  );
}

export default App;
