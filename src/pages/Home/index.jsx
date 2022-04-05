import React, {useEffect, useState} from 'react';
import {roupas} from '../../services/api'
import './style.css';

 export default function Home() {


  return(

    <div className="main-container">
      <img src="https://www.claridges.co.uk/siteassets/health-club--spa/temporary-2021/gym-hero.jpg"/>
      <h1>Seja bem-vindo!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <div className="container-Content">
        {/* {roupas.map((item)=>  
            <div key={Math.random()}>
              <h2>{item.nome}</h2> <br/>
              <p>R$ {item.preco}</p>
              <img src={item.photo} />
            </div>
        )} */}
      </div>
    </div>
   );

   
 }