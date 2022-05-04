import React, {useState, useEffect} from 'react';
import {roupas} from '../../services/api'
import "./style.css";


export default function Todos() {
  
    
  const [roupasRender, setRoupasRender] = useState(roupas);
  const [roupasRenderFilter, setRoupasRendeFilterr] = useState(roupas);
  const [roupasFiltradas, setRoupasFiltradas] = useState([]);
  const [checar, setChecar]  = useState(true)

  const filtrar = (item) => {
    setChecar(false)
    const imprimir = roupasRender.filter(e => e.tamanho === item);
    setRoupasFiltradas(imprimir)
  }

  useEffect(()=>{
    if(roupasFiltradas.lenght<=0){
      setChecar(true)
    }
  }, [roupasFiltradas])

const imprimirValor = [...new Set(roupas.map(e=> e.tamanho))]

//function filterData(category) {
            //   const data = [...newDataToReturn] //pegando os itens do array 
            //   const dataFiltered = newData.filter(item => item.category === category); //filtrando os itens pra retornar só os que tem caregoria igual q to clicando
            //   const conv = JSON.stringify(newDataToReturn)
            //   const checkData = conv.includes(category) //salvando o resultado de um includes num array
            //   if (checkData) { //Se o item já existir, retornar uma msg e cancelar o resto da funcao
            //     const newDataFiltered = newDataToReturn.filter(item => item.category != category);
            //     setNewDataToReturn([...newDataFiltered])
            //     return
            //   }
            //   setNewDataToReturn([...data, ...dataFiltered]);
         //   }
function filtrarItems(size){
  const data = [...roupasFiltradas]
  const dataFiltered = roupasRender.filter(item => item.tamanho === size)
  const convrData = JSON.stringify(roupasFiltradas)
  const checkData = convrData.includes(size)
  if(checkData) {
    const newDataFiltered = roupasFiltradas.filter(item => item.tamanho !=size);
    setRoupasFiltradas([...newDataFiltered])
    console.log(roupasFiltradas)
    return
  }
  setRoupasFiltradas([...data, dataFiltered])
  console.log(roupasFiltradas)

}

  return(
    <div className="main-div">
      <fieldset>
        <legend>Buscar por tamanho:</legend>
        
        {imprimirValor.map(item => ( 
        <div className="checkboxTamanho">
          <input type="checkbox"  name={item.tamanho} onClick={()=>filtrarItems(item)}/>
          <label htmlFor={item}>{item}</label>
        </div>
        ))}

      </fieldset> 

    <div className="container-Todos">

    
      {checar && roupasRender.map((item)=> 
        <div className="produtoTodos" key={Math.random()}>
          <img src={item.photo} />
          <h2>{item.nome}</h2> <br/>
          <p>R$ {item.preco}</p>
          <p>R$ {item.tamanho}</p>

          <button className="btnCompraTodos">COMPRAR</button>
        
        </div>)}
        {!checar && roupasFiltradas.map((item)=> 
        <div className="produtoTodos" key={Math.random()}>
          <img src={item.photo} />
          <h2>{item.nome}</h2> <br/>
          <p>R$ {item.preco}</p>
          <p>R$ {item.tamanho}</p>
          <button className="btnCompraTodos">COMPRAR</button>
        
        </div>)}
    </div>
    </div>
  );
}