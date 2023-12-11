'use client'
import CardProduto from "./CardProduto"
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListProdutos() {

    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1337/api/produtos/?populate=*")
            .then(function(response) { 
              setListaProdutos(response.data.data);
            })
    }, [])

    return (
        listaProdutos.map((prod) => 
            <CardProduto key={prod.id} produto={prod}></CardProduto>
        )
    )
}