import React from "react";
import {roupas} from '../../services/api';


export default function Sapatos() {
  return(
    <div className="container-Content">
    {roupas.filter(item => item.categoria === 'sapato').map((item)=> 
      <div className="produto" key={Math.random()}>
        <img src={item.photo} />
        <h2>{item.nome}</h2> <br/>
        <p>R$ {item.preco}</p>
        <button className="btnCompra">COMPRAR</button>
      
      </div>)}
     
    </div>
  );
}
