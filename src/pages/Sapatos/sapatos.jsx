import React from "react";
import {roupas} from '../../services/api';
import './style.css'

export default function Sapatos() {
  return(
    <div className="container-Sapatos">
    {roupas.filter(item => item.categoria === 'sapato').map((item)=> 
      <div className="produtoSapatos" key={Math.random()}>
        <img src={item.photo} />
        <h2>{item.nome}</h2> <br/>
        <p>R$ {item.preco}</p>
        <button className="btnCompraSapatos">COMPRAR</button>
        </div>)}
     
    </div>
  );
}
