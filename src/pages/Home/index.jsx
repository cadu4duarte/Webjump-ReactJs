import React, {useEffect, useState} from 'react';
import {roupas} from '../../services/api'
import './style.css';

 export default function Home() {


  return(
    <div className="container-Content">
      {roupas.map((item)=>  
          <div key={Math.random()}>
            <h2>{item.nome}</h2> <br/>
            <p>R$ {item.preco}</p>
            <img src={item.photo} />
          </div>
      
      )}
    </div>
   );

   
 }