import React from 'react';
import {Link} from 'react-router-dom';
import GymLogo from '../../assets/media/4x.png';
import './style.css';

export default function Header() {
  return(
        <header>
          <img src={GymLogo} alt="logo academia"></img>
          <div className="headerContent">
          

            <div className="header-container">
              <Link className="logo" to="/">Webstore</Link>
              <input type="text" className="inputBuscar"></input>
              <button className="btnBuscar">BUSCAR</button>
             
            </div>
            <ul>
              <li>
                
              </li>
              <li>
                <Link to="/camisas">Camisas</Link>
              </li>
              <li>
                <Link to="/calcas">Calças</Link>
              </li>
              <li>
                <Link to="/sapatos">Sapatos</Link>
              </li>
              <li>
                <Link to="/todos">Todos os itens</Link>
              </li>
            </ul>
          </div>
        </header>
  );
}