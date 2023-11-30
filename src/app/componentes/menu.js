'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'w3-css/3/w3.css'
export default function Menu(){
    const [listaCategorias, setListaCategorias] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1337/api/categories")
            .then(function(response) { 
              setListaCategorias(response.data.data);
            })
    }, [listaCategorias])
    return(
        
    <div className="w3-top w3-margin-botton">
          <nav className="w3-bar w3-large w3-black">
            <a className="w3-bar-item w3-button w3-hide-large w3-hide-medium">&#9776;</a>
            <a href="#" className="w3-bar-item w3-button">
              <i className="fa fa-home w3-xlarge"></i>
            </a>
            {listaCategorias.map((cat) =>
                <a href="#" className="w3-bar-item w3-button w3-hide-small">{cat.attributes.Name}</a> 
            )}
            
            <a href="#" className="w3-bar-item w3-button w3-right">
              <i className="fa fa-search w3-xlarge"></i>
            </a>
          </nav>
        </div>
    )
}