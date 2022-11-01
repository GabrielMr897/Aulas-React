
import './home.css'

import IconSupport from '../assets/iconS.png'

import IconM from '../assets/iconM.png'
function main() {
  return (
        <main >
            <div className="reputation container">
                <h2>Our Reputation</h2>

                <div className="boxes">
                <div className="box">
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
                    
                </div>
            </div>
        </main>

    );
}

export default main;
