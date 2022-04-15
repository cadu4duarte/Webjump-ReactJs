import React, {useState} from 'react';
import {roupas} from '../../services/api'
import "./style.css"

export default function Teste() {

  return(
    

    <div className="container-Content">
      {roupas.filter(item => item.categoria === 'camisa').map((item)=> 
        <div className="produto" key={Math.random()}>
          <img src={item.photo} />
          <h2>{item.nome}</h2> <br/>
          <p>R$ {item.preco}</p>
          <button className="btnCompra">COMPRAR</button>
        
        </div>)}
       
      </div>
  );
}