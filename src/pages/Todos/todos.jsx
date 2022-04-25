import React, {useState, useEffect} from 'react';
import {roupas} from '../../services/api'
import "./style.css";


export default function Todos() {

  const [roupasRender, setRoupasRender] = useState(roupas);

  const filtrar = (item) => {
    const imprimir = roupasRender.filter(e => e.tamanho === item);
    console.log(imprimir)
    setRoupasRender(imprimir)
  }


const imprimirValor = [...new Set(roupas.map(e=> e.tamanho))]


  return(
    <div className="main-div">
      <fieldset>
        <legend>Buscar por tamanho:</legend>
        
        {imprimirValor.map(item => ( 
        <div className="checkboxTamanho">
          <input type="checkbox"  name={item.tamanho} onClick={()=>filtrar(item)}/>
          <label htmlFor={item}>{item}</label>
        </div>
        ))}

      </fieldset> 

    <div className="container-Todos">

    
      {roupasRender.map((item)=> 
        <div className="produtoTodos" key={Math.random()}>
          <img src={item.photo} />
          <h2>{item.nome}</h2> <br/>
          <p>R$ {item.preco}</p>
          <button className="btnCompraTodos">COMPRAR</button>
        
        </div>)}
    </div>
    </div>
  );
}