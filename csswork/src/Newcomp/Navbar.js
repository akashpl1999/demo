import React,{useState} from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
 

    const [isopen,setisopen]=useState(false)
 
      
    return (


      <div  className='nav-container'>

         <nav className='nav'>

             <div className='nav-heading'>

                <h1>Logo</h1>


             </div>



             <div className='nav-link'>

                 <button className='btn' onClick={()=>setisopen(!isopen)}>

                    {isopen ?  <MenuIcon /> :  <MenuIcon/> }

                 </button>

               <ul className={isopen ? 'open' : "" }>
                
                 <button className='btn' onClick={()=>setisopen(!isopen)}>
                   
                     <CloseIcon/>
                     
                   </button>

                  <li><a>Home</a></li>
                  <li><a>Service</a></li>
                  <li><a>Contacts</a></li>
                  <li><a>Login</a></li>
                  <li><a>Register</a></li>
               </ul>


             </div>

         </nav>

      </div>



  )
}

export default Navbar