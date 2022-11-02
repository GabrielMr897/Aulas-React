
import './home.css'

import IconSupport from '../assets/iconS.png'

import IconM from '../assets/iconM.png'

import Construction from '../assets/Construction.png'
import Architeture from '../assets/Architecture.png'
import Consultation from '../assets/Consultation.png'
import Eletric from '../assets/Eletric.png'
import Renovation from '../assets/Renovation.png'
import Repair from '../assets/Repair.png'

import { boxService } from './styles.js'

function main() {
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
                    <boxService isBlue="false">
                        <img src={Construction} alt="" />
                        <h4>Construction</h4>
                    </boxService>
                    <boxService isBlue="true">
                        <img src={Architeture} alt="" />
                        <h4>Architecture</h4>
                    </boxService>
                    <boxService isBlue="false">
                        <img src={Consultation} alt="" />
                        <h4>Consultation</h4>
                    </boxService>
                    <boxService isBlue="true">
                        <img src={Eletric} alt="" />
                        <h4>Eletric</h4>
                    </boxService>
                    <boxService isBlue="false">
                        <img src={Renovation} alt="" />
                        <h4>Renovation</h4>
                    </boxService>
                    <boxService isBlue="true">
                        <img src={Repair} alt="" />
                        <h4>Repair Services</h4>
                    </boxService>
                </div>
            </div>
        </main>

    );
}

export default main;
