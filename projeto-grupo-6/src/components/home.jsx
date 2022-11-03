
import { useState  } from 'react'

import './home.css'

import IconSupport from '../assets/iconS.png'

import IconM from '../assets/iconM.png'

import Construction from '../assets/Construction.png'
import Architeture from '../assets/Architecture.png'
import Consultation from '../assets/Consultation.png'
import Eletric from '../assets/Eletric.png'
import Renovation from '../assets/Renovation.png'
import Repair from '../assets/Repair.png'

import { BoxService } from './styles.js'

function Home() {

    const [boolean, setBoolean] = useState(true)


  return (
        <main >
            <div className="reputation container">
                <h2>Our Reputation</h2>

                <div className="boxes">
                <div >
                    <img src={IconSupport} alt="" />
                    <h3>Best Services</h3>
                    <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum. </p>
                </div>
                <div className="box">
                    <img src={IconSupport} alt="" />
                    <h3>Best Services</h3>
                    <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                </div>
                <div className="box">
                    <img src={IconM} alt="" />
                    <h3>Best Services</h3>
                    <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                </div>
                </div>

            </div>

            <div className="services container">
                <h2>Services</h2>

                <div className="boxes">
                    <BoxService isBlue={!boolean}>
                        <img src={Construction} alt="" />
                        <hr  isBlue={!boolean}/>
                        <h4>Construction</h4>
                    </BoxService>
                    <BoxService isBlue={boolean}>
                        <img  src={Architeture} alt="" />
                        <hr  isBlue={boolean} />
                        <h4>Architecture</h4>
                    </BoxService>
                    <BoxService isBlue={!boolean}>
                        <img  src={Consultation} alt="" />
                        <hr  isBlue={!boolean}/>
                        <h4>Consultation</h4>
                    </BoxService>
                    <BoxService isBlue={boolean}>
                        <img  src={Eletric} alt="" />
                        <hr   isBlue={boolean}/>
                        <h4>Eletric</h4>
                    </BoxService>
                    <BoxService isBlue={!boolean}>
                        <img  src={Renovation} alt="" />
                        <hr   isBlue={!boolean}/>
                        <h4>Renovation</h4>
                    </BoxService>
                    <BoxService isBlue={boolean}>
                        <img  src={Repair} alt="" />
                        <hr  isBlue={boolean} />
                        <h4>Repair Services</h4>
                    </BoxService>
                </div>
            </div>

            <div></div>
        </main>

    );
}

export default Home;
