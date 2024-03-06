import React, { useState } from "react";
import Gelato from "./Gelato";

import data from "../fakeData";



const Menu = () => {
    const[prodotti]=useState(data)
    const[selected,setSelected]=useState(0)
    const[filterProducts,setFilterProducts]=useState(prodotti)

    const categorie=Array.from(new Set(prodotti.map(el=> el.categoria)))
categorie.unshift('all')

const filtraProdotti=(categoria,index)=>{
    setSelected(index)
    if(categoria==='all'){
        setFilterProducts(data)
    }else{
        setFilterProducts(prodotti.filter(el=>el.categoria===categoria?el:''))
    }
}


  return <div className="container">
    <h4 style={{textAlign:"center",textTransform:'uppercase'}}>
        Le nostre scelte
    </h4>
    <div className="lista-categorie">
    {categorie.map((categoria,index)=>{
        return <button key={index}
        onClick={()=>filtraProdotti(categoria,index)}
        className={`btn btn-selector ${index===selected&&"active"}`}>
            {categoria}
        </button>

    })}
        </div>
    <div className="vetrina">
        {filterProducts.map((el)=>(
            <Gelato key={el.id}{...el}/>
        ))}
    </div>


  </div>;
};

export default Menu;