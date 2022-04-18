import React from 'react';
import {roupas} from '../../services/api'
import "./style.css";


export default function Todos() {
  return(
    <div className="container-Todos">
      {roupas.map((item)=> 
        <div className="produtoTodos" key={Math.random()}>
          <img src={item.photo} />
          <h2>{item.nome}</h2> <br/>
          <p>R$ {item.preco}</p>
          <button className="btnCompraTodos">COMPRAR</button>
        
        </div>)}
    </div>
  );
}