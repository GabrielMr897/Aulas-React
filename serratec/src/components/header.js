import './header.css'

import lua from '../assets/img/lua-crescente.png';

import sol from '../assets/img/simbolo-de-sol-preto-solido.png';

function header() {
  return (
    <div className="header">
      <img src="" alt="logo" />
    <nav>
        <ul>
          <li>Sobre nós</li>
          <li>Contato</li>
          <li>Início</li>
        </ul>
      </nav>

      <div className="switch">
      <img src={lua} alt="" />

      <img src={sol} alt="" />
      </div>
    </div>
    
      
    
  );
}

export default header;
