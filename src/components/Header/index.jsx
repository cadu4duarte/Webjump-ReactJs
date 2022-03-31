import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return(
        <header>
          <Link className="logo" to="/">Webstore</Link>
          <input type="text" className="inputBuscar"></input>
          <button className="btnBuscar">BUSCAR</button>
        </header>
  );
}