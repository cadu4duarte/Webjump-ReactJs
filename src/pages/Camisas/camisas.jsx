import React, {useState} from 'react';
import {roupas} from '../../services/api'
import "./style.css"

export default function Teste() {

  return(
    

    <div className="container-Camisas">
      {roupas.filter(item => item.categoria === 'camisa').map((item)=> 
        <div className="produtoCamisas" key={Math.random()}>
          <img src={item.photo} />
          <h2>{item.nome}</h2> <br/>
          <p>R$ {item.preco}</p>
          <button className="btnCompraCamisas">COMPRAR</button>
        
        </div>)}
       
      </div>
  );
}