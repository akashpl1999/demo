import React, { useState } from 'react'
import './Navbar.css'



const Navbar = () => {


    const [isopen, setisopen] = useState(false)




    return (

        <nav className='navbar'>



            <div className='nav-logo'>

                <h1>logo</h1>

            </div>






            <div className='nav-menu'>

                <button onClick={() => setisopen(!isopen)}>

                    {isopen ? "close" : "open"}

                </button>

                <ul className={isopen ? "open" : ""}>


                     <li> <a>Home</a></li>
                    <li ><a>About</a></li>
                    <li ><a>Service</a></li>
                    <li ><a>contects</a></li>



                </ul>

            </div>

        </nav>







    )
}

export default Navbar