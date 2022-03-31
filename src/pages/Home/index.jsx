import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {roupas} from '../../components/api'
import { Button } from '@material-ui/core';


 export default function Home() {

  useEffect(() => {
    console.log(roupas)
  }, [])

  return(
    <div>
      {/* <ul>
        <li>PÁGINA INICIAL</li>
        <li>
          CAMISETA
        </li>
        <li>CALÇAS</li>
        <li>SAPATOS</li>
        <li>CONTATO</li>
      </ul> */}


      {roupas.map((item)=> {
        return(
          <div>
            <h2>{item.nome}</h2> <br/>
            <p>R$ {item.preco}</p>
            <img src={item.photo} />
          </div>
        )
      })}

<Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>

    

   );

   
 }