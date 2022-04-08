import React, {useEffect, useState} from 'react';
import {roupas} from '../../services/api'
import './style.css';

 export default function Home() {

//   const [roupasRender, setRoupasRender] = useState(roupas)
//   const [buscar, setBuscar] = useState('Camisa preta')

//   const filtrar = () => {
//      const imprimir =  roupasRender.filter(item => item.nome === 'Calça social');
//      setRoupasRender(imprimir)

//   }

//   const filtrarState = () => {
//     const imprimir =  roupasRender.filter(item => item.nome ===  buscar);
//     setRoupasRender(imprimir)

//  }

  return(

   

    <div className="main-container">
      <img src="https://www.claridges.co.uk/siteassets/health-club--spa/temporary-2021/gym-hero.jpg"/>
      <h1>Seja bem-vindo!</h1>
      
      {/* <div className="container-Content">
        {roupasRender.map((item)=>  
            <div key={Math.random()}>
              <h2>{item.nome}</h2> <br/>
              <p>R$ {item.preco}</p>
              <img src={item.photo} />
            </div>
        )}
      </div> */}
      {/* <button onClick={filtrar}>calça</button>
      <button onClick={filtrarState}>camisa</button> */}
    </div>
   );

   
 }