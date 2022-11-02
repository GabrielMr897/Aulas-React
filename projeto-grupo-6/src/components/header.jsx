
import LOGO from '../assets/logo.png'

import wpp from '../assets/Hero.png'

import './header.modules.css'



function header() {

    return (
        <header>
            <nav>
            <a href="http://localhost:5173/" className='logo'>
                <img src={LOGO} alt="logo The box" />
                <h3>
                    <i>The</i>Box
                </h3>
            </a>

            <ul>
                <li>
                    <a href="">
                     Home
                    </a>  
                </li>
                <li>
                    <a href="">
                    About us
                    </a>    
                </li>
                <li>
                    <a href="">
                    Projects
                    </a>    
                </li>
                <li>
                    <a href="">
                    Services
                    </a>
                </li>
                <li>
                    <a href="">
                    Contact us
                    </a>
                </li>
            </ul>
            </nav>

        <div className='mainHeader'>

        <img src={wpp} alt="" />
        </div>

        </header>
    );

}


export default header;