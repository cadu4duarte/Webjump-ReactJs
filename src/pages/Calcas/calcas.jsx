import React from 'react';
import {roupas} from '../../services/api'
import "./style.css";

export default function Calcas() {
  return(
    <div className="container-Calcas">
      {roupas.filter(item => item.categoria === 'calça').map((item)=> 
        <div className="produtoCalcas" key={Math.random()}>
          <img src={item.photo} />
          <h2>{item.nome}</h2> <br/>
          <p>R$ {item.preco}</p>
          <button className="btnCompraCalcas">COMPRAR</button>
        
        </div>)}
    
      </div>
  );
}