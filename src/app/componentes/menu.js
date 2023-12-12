'use client'

import axios from 'axios';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import 'w3-css/3/w3.css';

export default function Menu(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [listaCategorias, setListaCategorias] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1337/api/categories ")
            .then(function(response) { 
              let categorias= (response.data.data);
              setListaCategorias(categorias);
            })
            
    }, [])

    const setCategoryId = (id) => {
      const params = new URLSearchParams(searchParams);
        params.set('categoryId', id);

      router.push(`${pathname}?${params.toString()}`);
    }

    return(
        
    <div className="w3-top w3-margin-botton">
          <nav className="w3-bar w3-large w3-black">
            <a className="w3-bar-item w3-button w3-hide-large w3-hide-medium">&#9776;</a>
            <a href="#" className="w3-bar-item w3-button">
              <i className="fa fa-home w3-xlarge"></i>
            </a>
            <a className="w3-bar-item w3-button w3-hide-small" onClick={()=> router.push(pathname)}>Todas</a>
            {listaCategorias.map((cat) =>
                <a key={cat.id} className="w3-bar-item w3-button w3-hide-small" onClick={()=> setCategoryId(cat.id)}>{cat.attributes.Name}</a>
            )}
            
            <a className="w3-bar-item w3-button w3-right">
              <i className="fa fa-search w3-xlarge"></i>
            </a>
          </nav>
        </div>
    )
}
